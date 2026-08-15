import React from "react";
import individualImage from "../assets/individual-sam-lion.jpg";
import dyadicImage from "../assets/dyadic-ketut-subiyanto.jpg";
import tryadicImage from "../assets/tryadic-polina-takilevitch.jpg";
import consultImage from "../assets/consultimageVitaly-Gariev.jpeg";

const serviceItems = [
  {
    id: "individual",
    service: "Individual Therapy",
    cost: "$175 per 50 min session",
    description:
      "For any adult age 18 and over. This is a traditional one-on-one space where together, we can slow down and deeply explore whatever is showing up for you in your life. In individual therapy we can get to the root of your individual concerns, patterns, and work towards goals like exploration of identity or sexuality, reducing defensiveness in conflict, or processing past events or traumatic experiences. ",
    image: individualImage,
    imageWidth: "460px",
    imageCredit: "Image by Sam Lion",
  },
  {
    id: "dyadic",
    service: "Dyadic Therapy",
    cost: "$210 per 50 minute session",
    description:
      "For any configuration of up to two people who want to work together on an aspect of their relationship. The pair can be made up of romantic couples, an adult and a parent, friends, neighbors, etc. Therapy can be a great space to receive support to strengthen the relationships, talk through specific events, patterns of relating, and work towards goals like improving communication or reconnecting in a relationship that feels stuck.  ",
    image: dyadicImage,
    imageWidth: "300px",
    reverse: true,
    imageCredit: "Image by Ketut Subiyanto",
  },
  {
    id: "triadic",
    service: "Triadic (and beyond!) Therapy",
    cost: "$210 per 50 minute session",
    description:
      "For any configuration of three or more people including polycules, friend groups, roommates and families who want to work together towards a common goal. This space is welcoming of all relationship constellations. Together we can work to strengthen connections between all members of the relationship, discuss specific issues, patterns of relating, and work towards goals like improving group dynamics, increasing understanding between each other, or planning together for life changes and transitions. ",
    image: tryadicImage,
    imageWidth: "360px",
    imageCredit: "Image by Polina Takilevitch",
  },
  {
    id: "peer",
    service: "Peer and Organizational Consultation",
    cost: "$200 per hour of consultation",
    description:
      "For mental health staff, clinicians, or organizations who want consultation around mental health service navigation in Alameda County, any of the populations and areas of specialty listed on my website including LBGTQ+, Gender-Affirming Care, Culturally Informed Care for BIPOC, or working with monolingual Spanish Speakers or who want direction and support around how to open a private practice in California.  ",
    image: consultImage,
    imageWidth: "460px",
    reverse: true,
    imageCredit: "Image by Vitaly Gariev",
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
                <p className="service-cost">{item.cost}</p>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
