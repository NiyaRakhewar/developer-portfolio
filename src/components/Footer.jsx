import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <div
      fluid
      className="footer"
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        marginTop: "3%",
        marginBottom: "-4%",
        backgroundColor: "black",
        width: "100%",
        borderRadius: "30% 40%",
      }}
    >
      {/* <Row> */}
      <div md="4" className="footer-copywright">
        <h3>Made by Niharika Rakhewar</h3>
      </div>
      <div md="4" className="footer-copywright">
        <h3> </h3>
      </div>
      <div md="4" className="footer-body">
        <div
          className="footer-icons"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            gap: "3rem",
            alignItems: "center",
          }}
        >
          <div className="social-icons">
            <a
              href="https://github.com/NiyaRakhewar"
              style={{ color: "white" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillGithub style={{ fontSize: "25px" }} />
            </a>
          </div>
          <div className="social-icons">
            <a
              href="https://twitter.com/NRakhewar"
              style={{ color: "white" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineTwitter style={{ fontSize: "25px" }} />
            </a>
          </div>
          <div className="social-icons">
            <a
              href="https://www.linkedin.com/in/niharika-rakhewar-2a149b21b"
              style={{ color: "white" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn style={{ fontSize: "25px" }} />
            </a>
          </div>
        </div>
      </div>
      {/* </Row> */}
    </div>
  );
}

export default Footer;
