import React, { useEffect, useRef, useState } from 'react';
import paper, { Point, Path, Layer } from 'paper';
import { TweenMax, Cubic } from 'gsap';

interface CarProps {
  path: paper.Path;
  acceleration?: number;
  friction?: number;
  speed?: number;
  slidingFriction?: number;
}

const Car: React.FC<CarProps> = ({ path, acceleration = 0.8, friction = 0.9, speed = 20, slidingFriction = 4.1 }) => {
  const ACCELERATION = acceleration;
  const FRICTION = friction;
  const SPEED = speed;
  const SLIDING_FRICTION = slidingFriction;
  const ROTATION_ON_EXIT = 60;

  const [velocity, setVelocity] = useState(new Point(0, 0));
  const [throttle, setThrottle] = useState(0);
  const [rotation, setRotation] = useState(0);
  const [elapsed, setElapsed] = useState(0);
  const [inTrack, setInTrack] = useState(true);
  const [position, setPosition] = useState<Point>(path.getPointAt(0));
  const [lastPoint, setLastPoint] = useState<Point>(position);

  const carRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const render = () => {
      calculateSpeed();
      const trackOffset = elapsed % path.length;
      const trackPoint = path.getPointAt(trackOffset);
      const trackTangent = path.getTangentAt(trackOffset);
      const trackAngle = trackTangent.angle;

      setLastPoint(trackPoint);
      velocity.angle = trackAngle;

      if (inTrack) {
        setElapsed(prev => prev + velocity.length);
        if (velocity.length > 0.1) {
          renderCar(trackPoint);
        }
      } else {
        // Handling car exit path here
        // Similar logic to renderCrash() function can be placed here
      }

      requestAnimationFrame(render);
    };

    requestAnimationFrame(render);
  }, [velocity, throttle, elapsed, inTrack, position, path]);

  const calculateSpeed = () => {
    if (throttle) {
      velocity.length += throttle;
      if (velocity.length > SPEED) {
        velocity.length = SPEED;
      }
    } else {
      velocity.length *= FRICTION;
    }
  };

  const renderCar = (point: paper.Point) => {
    const offset = path.getOffsetOf(point);
    const offsetPrev = path.getOffsetOf(position);
    const offsetMid = (offset + offsetPrev) / 2;

    const pointAngle = path.getTangentAt(offset).angle;
    const prevPointAngle = path.getTangentAt(offsetMid).angle;
    let direction = -1;

    if (parseFloat(prevPointAngle) > parseFloat(pointAngle)) {
      direction = 1;
    }

    const normalAtPosition = path.getNormalAt(offset).multiply(1000 * direction);
    const normalAtPoint = path.getNormalAt(offsetPrev).multiply(1000 * direction);

    const l1 = new Path.Line({
      from: point,
      to: point.add(normalAtPosition),
      strokeColor: 'black',
      strokeWidth: 1,
    });
    const l2 = new Path.Line({
      from: path.getPointAt(offsetPrev),
      to: path.getPointAt(offsetPrev).add(normalAtPoint),
      strokeColor: 'blue',
      strokeWidth: 1,
    });

    const maxVelocity = Infinity;
    const intersection = l1.getIntersections(l2);

    if (intersection.length > 0) {
      const midpoint = position.add(point).divide(2);
      const distance = intersection[0].point.getDistance(midpoint);
      const maxVelocity = Math.sqrt(distance * SLIDING_FRICTION);

      if (maxVelocity > 0 && velocity.length > maxVelocity) {
        // Handle car crash logic here
        setInTrack(false);
      }
    }

    l1.remove();
    l2.remove();

    const carRunningEvent = new CustomEvent('CarRunning', { detail: Math.round(5 * velocity.length) - 1 });
    window.dispatchEvent(carRunningEvent);

    setRotation(velocity.angle);
    setPosition(point);

    if (carRef.current) {
      carRef.current.style.transform = `translate3d(${point.x}px, ${point.y}px, 0px) rotate(${velocity.angle}deg)`;
    }
  };

  const accelerate = () => setThrottle(ACCELERATION);
  const brake = () => setThrottle(0);

  useEffect(() => {
    const handleMouseDown = (e: MouseEvent) => {
      accelerate();
      e.preventDefault();
    };
    const handleMouseUp = (e: MouseEvent) => {
      brake();
      e.preventDefault();
    };

    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.body.addEventListener('touchstart', handleMouseDown);
    document.body.addEventListener('touchend', handleMouseUp);

    return () => {
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.body.removeEventListener('touchstart', handleMouseDown);
      document.body.removeEventListener('touchend', handleMouseUp);
    };
  }, []);

  return <div ref={carRef} className="car"></div>;
};

export default Car;
