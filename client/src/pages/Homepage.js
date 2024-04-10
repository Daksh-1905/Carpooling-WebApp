import React, { useState } from "react";
import TravelInfo_1 from "./TravelInfo_1.js";
import TravelInfo_2 from "./TravelInfo_2.js";
import toast from "react-hot-toast";

const HomePage = (props) => {
  return (
    <>
      <div>
        <img
          className="image-height"
          src="	https://cdn.blablacar.com/kairos/assets/images/carpool_blablabus_large-e3d8eff32c13cdafc080.svg"
          alt="..."
        />
      </div>
      <TravelInfo_1 />
      <div
        className="container bg-slate-300"
        style={{ display: "flex",justifyContent:"space-evenly", marginTop: "7vw" }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <strong
            style={{
              fontSize: "1.2rem",
              color: "black",
              fontWeight: "bold"
            }}
          >
            Your pick of rides at low prices
          </strong>
          <p
            style={{
              color: "black",
              marginTop: "0.3vw",
              fontSize: "0.8rem",
              fontWeight: "bold"
            }}
          >
            No matter where you’re going, by bus or <br />
            carpool, find the perfect ride from our wide <br />
            range of destinations and routes at low <br />
            prices.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <strong
            style={{
              marginLeft: "4vw",
              fontSize: "1.2rem",
              color: "black",
              fontWeight: "bold"
            }}
          >
            Trust who you travel with
          </strong>
          <p
            style={{
              marginLeft: "4vw",
              color: "black",
              marginTop: "0.3vw",
              fontWeight: "bold",
              fontSize: "0.8rem"
            }}
          >
            We take the time to get to know each of our <br />
            members and bus partners. We check <br />
            reviews, profiles and IDs, so you know who <br />
            you’re travelling with and can book your <br />
            ride at ease on our secure platform.
          </p>
        </div>

        <div>
          <strong
            style={{
              marginLeft: "4vw",
              fontSize: "1.2rem",
              color: "black",
              fontWeight: "bold"
            }}
          >
            Scroll, click, tap and go!
          </strong>
          <p
            style={{
              marginLeft: "4vw",
              color: "black",
              marginTop: "0.3vw",
              fontWeight: "bold",
              fontSize: "0.8rem"
            }}
          >
            Booking a ride has never been easier! <br />
            Thanks to our simple app powered by great <br />
            technology, you can book a ride close to <br />
            you in just minutes.
          </p>
        </div>
      </div>
      <div
        className="middle-box"
        style={{ backgroundColor: "rgb(18, 94, 121)", marginTop: "6vw" }}
      >
        <img
          src="	https://cdn.blablacar.com/kairos/assets/images/scamDetective-653544b71d88f51797db.svg"
          style={{ marginLeft: "10vw" }}
        />
        <div>
          <h2 style={{ marginTop: "6vw",marginBottom:"1vh", color: "white",fontSize:"1.2rem" }}>
            Help us keep you safe from scams
          </h2>
          <p className="slate-100" style={{ color: "white" ,fontWeight:"bold"}}>
            "At Carpool, safety is our top priority. While we strive to ensure
            the security <br />
            of our platform, we recognize the importance of being prepared for
            potential <br />
            scams. That's why we provide you with tips on how to avoid and
            report fraudulent <br />
            activities. By following our guidelines, you can help us keep you
            safe while using<br/> our services."
          </p>
          <button
            type="button"
            className="btn btn-primary learn-more-1 mt-2"
            style={{
              marginLeft: "11vw",
            }}
          >
            Learn More
          </button>
        </div>
      </div>
      <div
        className="middle-box"
        style={{ backgroundColor: `${props.mode}`, marginTop: "2vw" }}
      >
        <div>
          <h2
            style={{
              marginTop: "6vw",
              color: `${props.mode === "light" ? "rgb(18, 94, 121)" : "white"}`,
              marginLeft: "14vw",
              fontWeight: "bold"
            }}
          >
            Receive €25 in Carpool Bonus!
          </h2>
          <p
            style={{
              color: "black",
              marginLeft: "14vw",
              fontWeight: "bold"
            }}
          >
            "Attention, drivers! Your good habits are paying off with the
            Carpool Bonus. <br />
            Enjoy rewards for carpooling and discover the eligibility conditions
            today."
          </p>
          <button
            type="button"
            className="btn btn-primary learn-more-2"
            style={{
              marginLeft: "25vw",
            }}
          >
            Learn More
          </button>
        </div>
        <img
          src="https://cdn.blablacar.com/kairos/assets/images/driver-c3bdd70e6a29c6af9ef1.svg"
          style={{ marginLeft: "6vw" }}
        />
      </div>
      <TravelInfo_2
        heading="Where do you want a ride to?"
        box1="London -> Manchester"
        box2="Manchester -> London"
        box3="Birmingham -> London"
      />
      <div style={{ display: "flex", marginTop: "2vw", marginBottom: "2vw" }}>
        <img
          className="image-height-2"
          src="https://cdn.blablacar.com/kairos/assets/images/bus_blablacar-3213ff1065dcd2fce2da.svg"
        />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h3
            style={{
              color: `${props.mode === "light" ? "rgb(18, 94, 121)" : "white"}`,
              marginLeft: "2vw",
              marginTop: "2vw",
            }}
          >
            Discover new cities at small prices <br />
            with Carpool buses.
          </h3>
          <p
            style={{
              marginLeft: "2vw",
              color: "black",
              fontWeight: "1.1rem",
              fontWeight: "bold"
            }}
          >
            "Whether it's a weekly reunion with a loved one or a monthly
            adventure <br />
            to a new European destination, Carpool buses offer convenient travel
            for <br />
            every occasion. With spacious accommodations for big families and
            ample <br />
            luggage space, our service ensures a hassle-free journey to iconic
            cities like Paris, <br />
            Amsterdam, and beyond."
          </p>
          <button
            type="button"
            className="btn btn-primary learn-more-2"
            style={{
              marginLeft: "8vw",
              marginRight: "6vw",
              fontWeight: "bold",
            }}
          >
            Discover the Carpool Bus experience
          </button>
        </div>
      </div>
      <TravelInfo_2
        heading="Our top bus destinations"
        box1="Bus Brussels -> Paris"
        box2="Bus Amsterdam -> Paris"
        box3="Bus Paris -> Barcelona"
      />
    </>
  );
};

export default HomePage;
