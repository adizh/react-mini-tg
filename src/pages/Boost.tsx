import Footer from "../components/Footer";
import YellowCar from "../assets/images/cars/yellow-car.png";
import MiniBlue from "../assets/images/cars/mini-blue.png";
import VanPink from "../assets/images/cars/van-pink.png";
import RetroGreen from "../assets/images/cars/retro-green.png";
import MonsterPink from "../assets/images/cars/monster-pink.png";
import Ambulance from "../assets/images/cars/ambulance.png";
import SportYellow from "../assets/images/cars/sport-yellow.png";
import SportBlue from "../assets/images/cars/sport-blue.png";
import Police from "../assets/images/cars/police.png";
import Racing from "../assets/images/cars/racing.png";
import Achieved from "../assets/images/achieved.png";
import Loader from "../components/Loader";
import "../styles/boost.scss";
import { Boost as BoostType } from "../types/Boost";
import { useState, useEffect } from "react";
import http from "../http";
function Boost() {
  const [allBoosts, setAllBoosts] = useState([]);
  const carImages = [
    Achieved,
    VanPink,
    YellowCar,
    RetroGreen,
    MonsterPink,
    Ambulance,
    SportYellow,
    SportBlue,
    Police,
    Racing,
  ];
  const [loading, setLoading] = useState(false);
  const fetchAllBoosts = async () => {
    setLoading(true);
    try {
      const response = await http("/api/v1/Boost/get-all-boosters");
      console.log("fetchAllBoosts response", response);
      if (response.status === 200) {
        const imgAddedBoosts = response.data.map(
          (item: BoostType, index: number) => {
            return { ...item, localImg: carImages[index] };
          },
        );
        setAllBoosts(imgAddedBoosts);

        console.log("imgAddedBoosts", imgAddedBoosts);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchAllBoosts();
  }, []);

  return (
    <div className="scroll-section section">
      {loading ? (
        <Loader />
      ) : (
        <div className="home-section">
          <div className="boost-cars ">
            <div className="main-content">
              {allBoosts?.map((item: BoostType, index: number) => (
                <div className="each-car" key={item?.id}>
                  <div className="car-info">
                    <h2>
                      {item?.levelName}
                      <img height={20} src={item?.localImg} alt="achieved" />
                    </h2>
                    <p className="grey-text">
                      {item?.price} MDC -{item?.boosterLevel}
                    </p>
                    {index === 0 ? (
                      <button className="inactive-btn">Current lvl</button>
                    ) : (
                      <button className="blue-btn1">Upgrade</button>
                    )}
                  </div>
                  <div className="car-img">
                    <img width={55} src={item?.localImg} alt="car" />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
}

export default Boost;
