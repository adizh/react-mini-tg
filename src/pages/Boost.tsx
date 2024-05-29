import Footer from "../components/Footer";
import YellowCar from '../assets/images/yellow-car.png';
import '../styles/boost.scss';

function Boost() {
  return <div>

    <div className="boost-cars">

        <div className="each-car">
            <div className="car-info">
                <h2>LVL3</h2>
                <p className="grey-text">
                15 MDC – 1.5x
                </p>
                <button className="blue-btn">Upgrade</button>
            </div>
            <div className="car-img">
                <img src={YellowCar} alt="car" />
            </div>
        </div>
        <div className="each-car">
            <div className="car-info">
                <h2>LVL3</h2>
                <p className="grey-text">
                15 MDC – 1.5x
                </p>
                <button className="blue-btn">Upgrade</button>
            </div>
            <div className="car-img">
                <img src={YellowCar} alt="car" />
            </div>
        </div>
        <div className="each-car">
            <div className="car-info">
                <h2>LVL3</h2>
                <p className="grey-text">
                15 MDC – 1.5x
                </p>
                <button className="blue-btn">Upgrade</button>
            </div>
            <div className="car-img">
                <img src={YellowCar} alt="car" />
            </div>
        </div>
    </div>


    <Footer/>
  </div>;
}

export default Boost;
