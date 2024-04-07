import React from "react";
import middleImage from "./scamDetective-653544b71d88f51797db.svg";

const MiddleFeatures = (props) => {
  return (
    <>
      <div
        className="container"
        style={{ display: "flex", marginLeft: "13vw", marginTop: "7vw" }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <strong style={{ fontSize: "1.1vw", color: `${props.mode==='light'?'grey':'white'}`}}>
            Your pick of rides at low prices
          </strong>
          <p style={{ color: `${props.mode==='light'?'grey':'white'}`, marginTop: "0.3vw" }}>
            No matter where you’re going, by bus or <br />
            carpool, find the perfect ride from our wide <br />
            range of destinations and routes at low <br />
            prices.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <strong style={{ marginLeft: "4vw", fontSize: "1.1vw" ,color: `${props.mode==='light'?'grey':'white'}`}}>
            Trust who you travel with
          </strong>
          <p style={{ marginLeft: "4vw", color: `${props.mode==='light'?'grey':'white'}`, marginTop: "0.3vw" }}>
            We take the time to get to know each of our <br />
            members and bus partners. We check <br />
            reviews, profiles and IDs, so you know who <br />
            you’re travelling with and can book your <br />
            ride at ease on our secure platform.
          </p>
        </div>

        <div>
          <strong style={{ marginLeft: "4vw", fontSize: "1.1vw", color: `${props.mode==='light'?'grey':'white'}`}}>
            Scroll, click, tap and go!
          </strong>
          <p style={{ marginLeft: "4vw", color: `${props.mode==='light'?'grey':'white'}`, marginTop: "0.3vw" }}>
            Booking a ride has never been easier! <br />
            Thanks to our simple app powered by great <br />
            technology, you can book a ride close to <br />
            you in just minutes.
          </p>
        </div>
      </div>
      <div className="middle-box" style={{ display: "flex" }}>
        <img src={middleImage} style={{ marginLeft: "10vw" }} />
        <div>
          <h2 style={{ marginTop: "6vw", color: "white" }}>
            Help us keep you safe from scams
          </h2>
          <p style={{color:'white'}}>
            At Carpool, we're working hard to make our platform as secure as it
            <br/>can be. But when scams do happen, we want you to know exactly how <br/>to
            avoid and report them. Follow our tips to help us keep you safe.
          </p>
        </div>
      </div>
    </>
  );
};

export default MiddleFeatures;
