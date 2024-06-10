let Racer = window.Racer || {};

let livesFromLocal = localStorage.getItem("lives");
let _life;
if (livesFromLocal && livesFromLocal != undefined) {
  _life = +livesFromLocal;
}

Racer.Utils = (function () {
  let _that = this;
  let _transform;
  function initialize() {
    let agent = navigator.userAgent.toLowerCase();
    if (agent.indexOf("firefox") !== -1) {
      _transform = "MozTransform";
    } else if (agent.indexOf("msie") !== -1) {
      _transform = "msTransform";
    } else {
      _transform = "WebkitTransform";
    }
  }

  return {
    init: function () {
      initialize();
    },

    getTransform: function () {
      return _transform;
    },

    drawLine: function (p1, p2, color, size) {
      let col = "#fff";
      let s = size || 0;
      return new Path({
        segments: [p1, p2],
        strokeColor: col,
        strokeWidth: s,
      });
    },

    drawPoint: function (p, color, size) {
      let col = "#fff";
      let s = size || 2;
      let point = new Shape.Circle(p, s);
      point.fillColor = col;
      return point;
    },
  };
})();

/**
 *
 * @type {{init: Window.Racer.Game.init, restart: Window.Racer.Game.restart}}
 */
Racer.Game = (function () {
  let _track, _car;
  let _points = 0;
  let _maxPoints = 0;
  let _scoreUI, _hearts, _restartUI;

  function initialize() {
    paper.install(window);
    paper.setup("track_canvas");

    Racer.Utils.init();

    _track = new Racer.Track();
    _car = new Racer.Car(_track.getPath());

    _scoreUI = document.getElementsByClassName("points")[0];
    _scoreUI.innerHTML = _points;

    // _bestScoreUI = document.getElementsByClassName('best-points')[0];

    _hearts = document.querySelectorAll("div.lifes li");

    for (let i = _hearts.length - 1; i >= _hearts.length - (5 - _life); i--) {
      _hearts[i].style.opacity = 0.2;
    }
    //   _restartUI = document.querySelector('a.start');
    //  _restartUI.addEventListener("click", restartGame);

    window.addEventListener("CarCrashed", onCarCrashed);
    window.addEventListener("CarRunning", onCarRunning);
    window.addEventListener("CarCrashEnded", onCarCrashEnded);

    addListener();

    TweenMax.to("div.lifes", 0.6, {
      ease: Cubic.easeInOut,
      left: -20,
      delay: 0.5,
    });
    TweenMax.to("div.score", 0.6, {
      ease: Cubic.easeInOut,
      left: -20,
      delay: 0.4,
    });

    _maxPoints =
      localStorage.getItem("bestScore") == null
        ? 0
        : localStorage.getItem("bestScore");

    if (_maxPoints > 0) {
      // _bestScoreUI.innerHTML = _maxPoints.toString();
      TweenMax.to("div.best-score", 0.6, {
        ease: Cubic.easeInOut,
        right: -20,
        delay: 0.8,
      });
    }
  }

  function onCarCrashEnded() {
    if (_life > 0) {
      addListener();
      _car.afterCrash(true);
    } else {
      TweenMax.to("a.start", 0.3, { ease: Cubic.easeInOut, autoAlpha: 1 });
      TweenMax.to("div.lifes", 0.4, { ease: Cubic.easeInOut, left: -200 });
      _car.afterCrash(false);
      if (_points > _maxPoints) {
        if (_maxPoints === 0) {
          TweenMax.to("div.best-score", 0.6, {
            ease: Cubic.easeInOut,
            right: -20,
          });
        }

        _maxPoints = _points;
        //_bestScoreUI.innerHTML = _maxPoints.toString();
        localStorage.setItem("bestScore", _maxPoints);
      }
    }
  }

  function restartGame() {
    _car.reset();
    //  _life = 5;
    _points = 0;
    _scoreUI.innerHTML = _points;
    updateHearts();
    addListener();
    TweenMax.to("a.start", 0.1, { ease: Cubic.easeInOut, autoAlpha: 0 });
    TweenMax.to("div.lifes", 0.6, { ease: Cubic.easeInOut, left: -20 });
  }

  function accelerate(e) {
    _car.accelerate();
    e.preventDefault();
  }

  function brake(e) {
    _car.brake();
    e.preventDefault();
  }

  function addListener() {
    window.addEventListener("mousedown", accelerate);
    window.addEventListener("mouseup", brake);

    document.body.addEventListener("touchstart", accelerate);
    document.body.addEventListener("touchend", brake);
  }

  function removeListener() {
    window.removeEventListener("mousedown", accelerate);
    window.removeEventListener("mouseup", brake);

    document.body.removeEventListener("touchstart", accelerate);
    document.body.removeEventListener("touchend", brake);
  }

  function onCarRunning(e) {
    _points += e.detail;
    _scoreUI.innerHTML = _points;
  }

  function onCarCrashed(e) {
    if (_life > 0) {
      _life--;
      updateHearts();
      removeListener();
    }

    localStorage.setItem("lives", _life.toString());
  }

  function updateHearts() {
    for (let i = 0; i < _hearts.length; i++) {
      if (i < _life) _hearts[i].style.opacity = 1;
      else _hearts[i].style.opacity = 0.2;
    }
    localStorage.setItem("lives", _life.toString());
  }

  return {
    init: function () {
      initialize();
    },

    restart: function () {},
  };
})();

//Track Class
Racer.Track = function () {
  let _that = this;
  let _canvas, _context, _path;

  function initialize() {
    _canvas = document.getElementById("track_canvas");
    _context = _canvas.getContext("2d");
    let svg = document.getElementById("track");
    let layer = new Layer();

    layer.importSVG(svg, function (path, svg) {
      path.strokeColor = "#7E848D";
      path.strokeWidth = 8;
      _path = path?.children["circuit"];
    });

    paper.view.draw();
  }

  this.getPath = function () {
    return _path;
  };

  initialize();
};

//Car Class
Racer.Car = function (path, acceleration, friction, speed, sliding_friction) {
  let ACCELERATION = acceleration || 0.8;
  let FRICTION = friction || 0.9;
  let SPEED = speed || 20;
  let SLIDING_FRICTION = sliding_friction || 4.1;
  let ROTATION_ON_EXIT = 60;
  let _that = this;
  let _path = path;
  let _rotation, _elapsed, _velocity, _throttle;
  let _rotationExit, _elapsedExit, _pathExit;
  let _car, _container;
  let _lastPoint;
  let _in = true;
  let _layer, _position;

  function initPosition() {
    _rotationExit = 0;
    _elapsedExit = 0;

    _rotation = 180;
    _elapsed = 0;
    _velocity = new Point(0, 0);
    _velocity.length = 0;
    _throttle = 0;

    _position = _path?.getPointAt(_elapsed);
    renderCar(_position);
  }

  function initialize() {
    _container = document.getElementById("track_container");
    _car = document.getElementsByClassName("image")[0];
    _layer = new Layer();
    _layer.activate();

    initPosition();
    requestAnimationFrame(render);
  }

  function accelerate() {
    _throttle = ACCELERATION;
  }

  function brake() {
    _throttle = 0;
  }

  function calculateSpeed() {
    if (_throttle) {
      _velocity.length += _throttle;
      if (_velocity.length > SPEED) {
        _velocity.length = SPEED;
      }
    } else {
      _velocity.length *= FRICTION;
    }
  }

  function render() {
    calculateSpeed();
    let trackOffset = _elapsed % _path.length;
    let trackPoint = _path?.getPointAt(trackOffset);
    let trackTangent = _path?.getTangentAt(trackOffset);
    let trackAngle = trackTangent.angle;
    _lastPoint = trackPoint;
    _velocity.angle = trackAngle;
    if (_in) {
      _elapsed += _velocity.length;
      if (_velocity.length > 0.1) {
        renderCar(trackPoint);
      }
    } else {
      let trackOffsetExit = _elapsedExit % _pathExit.length;
      let trackPointExit = _pathExit.getPointAt(trackOffsetExit);
      _rotationExit *= FRICTION;
      _elapsedExit += _velocity.length;
      if (_velocity.length > 0.1) {
        renderCrash(trackPointExit);
      } else {
        let carCrashEndedEvent = new CustomEvent("CarCrashEnded");
        window.dispatchEvent(carCrashEndedEvent);
      }
    }

    requestAnimationFrame(render);
  }

  function resetPosition() {
    initPosition();
  }

  function restartAfterCrash() {
    _rotation = _velocity.angle;
    _rotation = parseFloat(_rotation.toFixed(20));
    _rotation = _rotation.toFixed(10);
    _position = _lastPoint;
    _position.x = parseFloat(_position?.x.toFixed(20));
    _position.y = parseFloat(_position?.y.toFixed(20));

    updateCarPosition();
  }

  function updateCarPosition() {
    _rotation = (+_rotation + 180).toString();

    _car.style[Racer.Utils.getTransform()] =
      "translate3d(" +
      _position?.x +
      "px, " +
      _position.y +
      "px, 0px)rotate(" +
      _rotation +
      "deg)";
  }

  function renderCrash(point) {
    _rotation = parseFloat(_rotation);
    _rotation = _rotation + _rotationExit;
    _rotation = _rotation.toFixed(10);
    _position = point;
    _position.x = parseFloat(_position?.x.toFixed(20));
    _position.y = parseFloat(_position?.y.toFixed(20));

    updateCarPosition();
  }

  function renderCar(point) {
    _layer.removeChildren();

    let offset = _path?.getOffsetOf(point);
    let offset_prev = _path?.getOffsetOf(_position);
    let offset_mid = (offset + offset_prev) / 2;

    let point_angle = _path?.getTangentAt(offset).angle;
    let prev_point_angle = _path?.getTangentAt(offset_mid).angle;
    let direction = -1;

    if (parseFloat(prev_point_angle) > parseFloat(point_angle)) {
      direction = 1;
    }

    let normalAtPosition = _path
      ?.getNormalAt(offset)
      .multiply(1000 * direction);
    let normalAtPoint = _path
      ?.getNormalAt(offset_prev)
      .multiply(1000 * direction);

    let l1 = Racer.Utils.drawLine(
      point,
      point?.add(normalAtPosition),
      "#fff",
      1,
    );
    let l2 = Racer.Utils.drawLine(
      _path?.getPointAt(offset_prev),
      _path?.getPointAt(offset_prev).add(normalAtPoint),
      "#fff",
      1,
    );

    let maxVelocity = Infinity;
    let intersection = l1.getIntersections(l2);

    if (intersection.length > 0) {
      let midpoint = _position.add(point).divide(2);
      let distance = intersection[0].point.getDistance(midpoint);
      maxVelocity = Math.sqrt(distance * SLIDING_FRICTION);

      if (maxVelocity > 0 && _velocity.length > maxVelocity) {
        _pathExit = Racer.Utils.drawLine(
          point,
          point?.add(_velocity.multiply(50)),
          "#fff",
          0,
        );
        _elapsedExit = 0;
        _rotationExit = ROTATION_ON_EXIT;
        _throttle = 0;
        _in = false;

        let carCrashedEvent = new CustomEvent("CarCrashed");
        window.dispatchEvent(carCrashedEvent);
      }
    }

    l1.remove();
    l2.remove();

    paper.view.draw();

    let score = Math.round(5 * _velocity.length) - 1;
    let carRunningEvent = new CustomEvent("CarRunning", { detail: score });
    window.dispatchEvent(carRunningEvent);

    _rotation = _velocity.angle;
    _rotation = parseFloat(_rotation.toFixed(20));
    _rotation = _rotation.toFixed(10);
    _position = point;

    _rotation = (+_rotation + 270).toString();

    if (_position && _position.x && _position.y) {
      _position.x = _position?.x ? parseFloat(_position.x?.toFixed(20)) : 0;
      _position.y = _position?.y ? parseFloat(_position.y?.toFixed(20)) : 0;
    }

    updateCarPosition();
  }

  this.accelerate = function () {
    accelerate();
  };

  this.brake = function () {
    brake();
  };

  this.afterCrash = function (restart) {
    _in = true;
    if (restart === true) {
      restartAfterCrash();
    }
  };

  this.reset = function () {
    resetPosition();
  };

  initialize();
};
