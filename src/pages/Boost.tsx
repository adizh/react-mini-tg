import Footer from "../components/Footer";
import YellowCar from '../assets/images/cars/yellow-car.png';
import MiniBlue from '../assets/images/cars/mini-blue.png';
import VanPink from '../assets/images/cars/van-pink.png';
import RetroGreen from '../assets/images/cars/retro-green.png';
import MonsterPink from '../assets/images/cars/monster-pink.png';
import Ambulance from '../assets/images/cars/ambulance.png';
import SportYellow from '../assets/images/cars/sport-yellow.png';
import SportBlue from '../assets/images/cars/sport-blue.png';
import Police from '../assets/images/cars/police.png';
import Racing from '../assets/images/cars/racing.png';
import Achieved from '../assets/images/achieved.png';

import '../styles/boost.scss';

function Boost() {
    return <div>
        <div className="home-section">
            <div className="boost-cars ">
                <div className="main-content">
                    
                    {/* LVL 1 */}
                    <div className="each-car">
                        <div className="car-info">
                            <h2>LVL 1 <img height={20} src={Achieved} alt="achieved" /></h2>
                            <p className="grey-text">
                                Default - 1x
                            </p>
                            <button className="inactive-btn">Current lvl</button>
                        </div>
                        <div className="car-img">
                            <img width={55} src={MiniBlue} alt="car" />
                        </div>
                    </div>

                    {/* LVL 2 */}
                    <div className="each-car">
                        <div className="car-info">
                            <h2>LVL 2</h2>
                            <p className="grey-text">
                                10 MDC – 1.25x
                            </p>
                            <button className="blue-btn1">Upgrade</button>
                        </div>
                        <div className="car-img">
                            <img width={55} src={VanPink} alt="car" />
                        </div>
                    </div>

                    {/* LVL 3 */}
                    <div className="each-car">
                        <div className="car-info">
                            <h2>LVL 3</h2>
                            <p className="grey-text">
                                15 MDC – 1.5x
                            </p>
                            <button className="blue-btn1">Upgrade</button>
                        </div>
                        <div className="car-img">
                            <img width={55} src={YellowCar} alt="car" />
                        </div>
                    </div>

                    {/* LVL 4 */}
                    <div className="each-car">
                        <div className="car-info">
                            <h2>LVL 4</h2>
                            <p className="grey-text">
                                15 MDC – 1.62x
                            </p>
                            <button className="blue-btn1">Upgrade</button>
                        </div>
                        <div className="car-img">
                            <img width={55} src={RetroGreen} alt="car" />
                        </div>
                    </div>

                    {/* LVL 5 */}
                    <div className="each-car">
                        <div className="car-info">
                            <h2>LVL 5</h2>
                            <p className="grey-text">
                                15 MDC – 1.75x
                            </p>
                            <button className="blue-btn1">Upgrade</button>
                        </div>
                        <div className="car-img">
                            <img width={55} src={MonsterPink} alt="car" />
                        </div>
                    </div>

                    {/* LVL 6 */}
                    <div className="each-car">
                        <div className="car-info">
                            <h2>LVL 6</h2>
                            <p className="grey-text">
                                15 MDC – 1.8x
                            </p>
                            <button className="blue-btn1">Upgrade</button>
                        </div>
                        <div className="car-img">
                            <img width={55} src={Ambulance} alt="car" />
                        </div>
                    </div>

                    {/* LVL 7 */}
                    <div className="each-car">
                        <div className="car-info">
                            <h2>LVL 7</h2>
                            <p className="grey-text">
                                15 MDC – 1.9x
                            </p>
                            <button className="blue-btn1">Upgrade</button>
                        </div>
                        <div className="car-img">
                            <img width={55} src={SportYellow} alt="car" />
                        </div>
                    </div>

                    {/* LVL 8 */}
                    <div className="each-car">
                        <div className="car-info">
                            <h2>LVL 8</h2>
                            <p className="grey-text">
                                15 MDC – 2x
                            </p>
                            <button className="blue-btn1">Upgrade</button>
                        </div>
                        <div className="car-img">
                            <img width={55} src={SportBlue} alt="car" />
                        </div>
                    </div>

                    {/* LVL 9 */}
                    <div className="each-car">
                        <div className="car-info">
                            <h2>LVL 9</h2>
                            <p className="grey-text">
                                15 MDC – 2.1x
                            </p>
                            <button className="blue-btn1">Upgrade</button>
                        </div>
                        <div className="car-img">
                            <img width={55} src={Police} alt="car" />
                        </div>
                    </div>

                    {/* LVL 10 */}
                    <div className="each-car">
                        <div className="car-info">
                            <h2>LVL 10</h2>
                            <p className="grey-text">
                                15 MDC – 2.25x
                            </p>
                            <button className="blue-btn1">Upgrade</button>
                        </div>
                        <div className="car-img">
                            <img width={55} src={Racing} alt="car" />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    </div>;
}

export default Boost;
