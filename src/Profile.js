import "./styles.css";
import Email from "./Email.js";
import Name from "./Name.js";
import PersonalInfo from "./PersonalInfo.js";
import Address from "./Address.js";

export default function Profile(props) {
  return (
    <div className="App">
      <div className="container mt-4 mb-4 p-3 d-flex justify-content-center">
        <div className="card p-4">
          <div className="image d-flex flex-column justify-content-center align-items-center">
            <button className="btn btn-secondary up-down">
              <img
                src="https://th.bing.com/th/id/OIP.uF0qJ_YJu51rNAsvMii1lAHaHa?pid=ImgDet&rs=1"
                height="100"
                width="100"
              />
            </button>
            <Name fullname={props.fullname} />
            <Email login={props.login} />
            <PersonalInfo followers={3} />
            <div className="d-flex mt-2">
              <button className="btn1 btn-dark">Edit Profile</button>
            </div>
            <div className="text mt-3">
              <span>
                Full Stack developer
                <br />
                <br />
                Rustam Zak IT specialist in Grandmart and Bolmart retail chain.
              </span>
            </div>
            <Address />
            <div className="px-2 rounded mt-4 date">
              <span className="join">Joined Oktober,1990</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
