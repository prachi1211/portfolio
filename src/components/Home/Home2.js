import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row className="justify-content-center">
          <Col
            md={8}
            className="home-about-description"
            style={{ textAlign: "center" }}
          >
            <h1 style={{ fontSize: "2.6em", marginBottom: "20px" }}>
              LET ME <span className="purple">INTRODUCE</span> MYSELF
            </h1>
            <p className="home-about-body">
              I am student pursuing Master's degree in Computer Science at
              <b className="purple"> Indiana University Bloomington.</b>
              <br />
              <br />
              As an lead intern at{" "}<b className="purple">
              <a
                href="https://womenandtech.indiana.edu/programs/student-alliance-groups/women-who-code.html/"
                style={{
                  fontStyle: "italic",
                  textDecoration: "underline",
                  fontWeight: "bold",
                  color: "#6f42c1",
                }}
              >
                Women Who Code
              </a>{" "}
              </b>
              collaborate on generating innovative tech ideas and work on
              exciting new projects. I also lead workshops on a range of
              technologies, including{" "}
              <b className="purple">
                SQL, Python, Networking tips, Data Structures, and more{" "}
              </b>
              , empowering others to advance their technical and networking
              skills.
              <br />
              
              <br />
              <br></br>
              During my internship at Capgemini, I worked as a{" "}
              <b className="purple">Data Analyst and Scrum Master</b>.
              Additionally, I gained experience as a{" "}
              <b className="purple">Full Stack Developer</b> at Dream Leo and as
              a <b className="purple">Data Scientist</b> at Brainy Beam
              Technologies. I also played a key role in organizing a
              national-level hackathon called{" "}
              <a
                href="https://breakthebarrier.ldrp.ac.in/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <b
                  className="purple"
                  style={{ textDecoration: "underline", fontStyle: "italic" }}
                >
                  Break the Barrier
                </b>
              </a>
              , where I was part of the web development team.
              <br />
            </p>
          </Col>
        </Row>
        <Row>
          <Col
            md={12}
            className="home-about-social"
            style={{ textAlign: "center" }}
          >
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect</span> with me
            </p>
            <ul
              className="home-about-social-links"
              style={{ listStyleType: "none", padding: 0 }}
            >
              <li
                className="social-icons"
                style={{ display: "inline-block", margin: "0 15px" }}
              >
                <a
                  href="https://github.com/prachi1211"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li
                className="social-icons"
                style={{ display: "inline-block", margin: "0 15px" }}
              >
                <a
                  href="https://www.linkedin.com/in/prachijethava/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              ``
              <li
                className="social-icons"
                style={{ display: "inline-block", margin: "0 15px" }}
              >
                <a
                  href="https://twitter.com/PrachiJethava"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
