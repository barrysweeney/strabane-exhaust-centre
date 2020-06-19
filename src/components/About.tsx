import React from "react";
import styled from "styled-components";
import engine from "../images/engine.jpg";
import weld from "../images/weld.jpg";
import maintenance from "../images/maintenance.jpg";

const AboutItem = styled.div`
  display: grid;
  text-align: center;
  align-items: center;
  font-family: "Rye", cursive;
  font-size: 30px;
  width: 100%;
  color: white;
  height: 500px;
`;

type ServiceProps = {
  service: string;
  url: string;
};

function Service({ service, url }: ServiceProps) {
  return (
    <AboutItem>
      <div
        style={{
          backgroundImage: `url(${url})`,
          backgroundSize: `cover`,
          height: `100%`,
          display: `grid`,
          alignItems: `center`,
        }}
      >
        <h2
          style={{
            padding: `20px 0`,
            background: `rgb(28, 71, 125, 0.5) `,
          }}
        >
          {service}
        </h2>
      </div>
    </AboutItem>
  );
}

function About() {
  return (
    <div id="about">
      <Service service="Repairs &amp; Replacements" url={weld} />
      <Service service="Diagnostics" url={engine} />
      <Service service="Maintenance &amp; Servicing" url={maintenance} />
    </div>
  );
}

export default About;
