import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 1fr auto;
  font-family: "Open Sans", sans-serif;
  padding-top: 43px;
`;

const Navbar = styled.nav`
  background: #b14848;
  width: 100%;
  position: fixed;
  padding: 10px;
  display: grid;
  grid-template-columns: 2fr 1fr;
  align-items: center;
  font-size: 20px;
  .links {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  a,
  a:visited {
    text-decoration: none;
    color: rgb(28, 71, 125);
  }

  @media (max-width: 450px) {
    grid-template-columns: 1fr;
    .links {
      display: none;
    }
  }
`;

const BusinessName = styled.div`
font-family: "Faster One", cursive;
    font-size: 40px;
    margin: 0;
    color: rgb(28, 71, 125);

    @media (max-width: 450px) {
    font-size: 22px;
    }
  }
`;

const Footer = styled.footer`
  background: #b14848;
  display: grid;
  place-items: center;
  text-align: center;
  padding: 10px;

  span {
    background: rgb(28, 71, 125, 0.5);
    margin: 3px;
    padding: 3px;
    border-radius: 5px;

    a,
    a:visited {
      color: white;
    }
  }
`;

class Layout extends Component {
  render() {
    return (
      <div>
        <Navbar>
          <a href="#map">
            <BusinessName>Strabane Exhaust Centre</BusinessName>
          </a>

          <div className="links">
            <a href="#about">Services</a>
            <a href="#contact">Contact</a>
          </div>
        </Navbar>
        <Container>
          <div>{this.props.children}</div>
          <Footer>
            <BusinessName>Strabane Exhaust Centre</BusinessName>
            <span>
              Repairs &amp; Replacements Photo by{" "}
              <a href="https://unsplash.com/@garett3?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
                Garett Mizunaka
              </a>{" "}
              on{" "}
              <a href="/s/photos/engine?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
                Unsplash
              </a>
            </span>
            <span>
              Diagnostics Photo by{" "}
              <a href="https://unsplash.com/@christopher__burns?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
                Christopher Burns
              </a>{" "}
              on{" "}
              <a href="/?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
                Unsplash
              </a>
            </span>
            <span>
              Maintenance &amp; Servicing Photo by{" "}
              <a href="https://unsplash.com/@timmossholder?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
                Tim Mossholder
              </a>{" "}
              on{" "}
              <a href="/s/photos/mechanic?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
                Unsplash
              </a>
            </span>
          </Footer>
        </Container>
      </div>
    );
  }
}

export default Layout;
