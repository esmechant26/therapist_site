import React from "react";
import individualImage from "../assets/individual-sam-lion.jpg";
import dyadicImage from "../assets/dyadic-ketut-subiyanto.jpg";
import tryadicImage from "../assets/tryadic-polina-takilevitch.jpg";

const serviceItems = [
  {
    id: "individual",
    service: "Individual Therapy",
    cost: "$175 per 50 min session",
    description: "For adults 18 and over. This is a 1:1 space to explore the themes you are curious  about working through in therapy.  ",
    image: individualImage,
    imageWidth: "360px",
    imageCredit: "Image by Sam Lion",
  },
  {
    id: "dyadic",
    service: "Dyadic Therapy",
    cost: "$210 per 50 minute session",
    description:
      "For couples, friends, family members who want to work together. This service is  for up two people per session to receive support to be curious about specific  events, patterns, or aspects of the relationship and reconnect. ",
    image: dyadicImage,
    imageWidth: "300px",
    reverse: true,
    imageCredit: "Image by Ketut Subiyanto",
  },
  {
    id: "triadic",
    service: "Triadic (and beyond!) Therapy",
    cost: "$210 per 50 minute session",
    description: "For polycules, friend groups, and families made up of three or more people who  want to work together. This space is welcoming of all relationship constellations.",
    image: tryadicImage,
    imageWidth: "310px",
    imageCredit: "Image by Polina Takilevitch",
  },
];

function Services() {
  return (
    <section className="section-margin">
      <div className="card card-padding-2">
        <h2 className="section-title">Services</h2>

        <div>
          {serviceItems.map((item) => (
            <div className={`service-block ${item.image ? "service-block--with-image" : ""} ${item.reverse ? "service-block--reverse" : ""}`} key={item.id}>
              {item.image && (
                <div className="service-block-image" style={{ width: item.imageWidth || "400px" }}>
                  <img src={item.image} alt={`Image for ${item.service}`} />
                  {item.imageCredit && <span className="image-credit">{item.imageCredit}</span>}
                </div>
              )}
              <div>
                <h3 className="service-title">{item.service}</h3>
                <p className="service-cost muted">{item.cost}</p>
                <p className="muted">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
