import Footer from "../components/Footer";
import "../styles/friends.scss";
import RemovePeson from "../assets/images/person-remove.png";

function Friends() {
  const tg = window.Telegram.WebApp;
  tg.expand();
  return (
    <div>
      <div className="friends-section">
        <h1>Friends</h1>
        <div className="friends-mid-block">
          <div className="balance-friends">
            <h1>0 MDC</h1>
          </div>
          <button className="white-btn-fixed">Claim</button>
          <div className="friends-grey">
            <p className="grey-text">
              Score 10% from buddies +2.5% from their referrals
            </p>
          </div>
        </div>
      </div>

      <div className="friends-box">
        <div className="friends-icon">
          <img height={24} src={RemovePeson} alt="no friends" />
          <p className="no-friends-title">
            You don't have any invited friends.
          </p>
          <p className="no-friends-body">
            For each invited friend you will receive 10 MDC
          </p>
          <p className="you-can-invite">You can invite 3 friends</p>
        </div>
      </div>

      <button className="blue-btn">Invite Friends</button>

      <Footer />
    </div>
  );
}

export default Friends;
