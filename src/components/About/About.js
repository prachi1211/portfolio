import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle"; // Adjust the path as necessary
import "./Timeline.css"; // Ensure this CSS file is created

function ExperienceTimeline() {
  const experiences = [
    {
      title: "Software Engineer Intern",
      company: "Dream Leo",
      date: "September 2022 - February 2023",
      description: [
        "Developed and maintained multiple ongoing real-time web applications based on client requirements, usingOptimized developing process and maintained 5+ ongoing real-time web applications based on client requirements, using MongoDB, React.js, and Node.js, resulting in a 30% reduction in development time and a 25% increase in testing efficiency",
        "Enhanced problem-solving skills by collaborating with 3 cross-functional teams and using an iterative software development approach, following 2-week Agile sprints, leading to a 40% improvement in project delivery timelines ",
        "Delivered scalable solutions by managing a 500GB MongoDB database, implementing 20+ React.js features, and developing Node.js back-end logic, improving performance by 50% and reducing server response time by 35%.",
      ],
    },
    {
      title: "Software Engineer Intern (Data Processing)",
      date: "July 2022 - August 2022",
      company: "Capgemini",
      description: [
        "Led 12 two-week Agile sprints as Scrum Master, managing a team developing a AI driven resume parsing web application using MERN stack and Bootstrap. Conducted sprint planning, retrospectives, and JIRA-based tracking, improving sprint velocity by 30% ",
        "Developed system using HaarCascade and Regular Expressions, Bounding Box, displaying data in a tabular format on the website and converted into a one-pager summary per resume, improving retrieval accuracy by 40% and reduced manual entry time by 50% ",
        "Enhanced extraction by integrating HaarCascade for image fetching (85% accuracy), Bounding Box for structured section retrieval and Regular Expressions for key data extraction (95% accuracy in phone number & email detection) improvise availability for recruiters",
      ],
    },
    {
      title: "Data Scientist",
      date: "June 2022 - July 2022",
      company: "BrainyBeam Technologies",
      description: [
        "Designed a sentiment analysis system using SVM and Bayes classifier to analyze user feedback, incorporating a custom word-ranking algorithm to reduce data noise by 75%. improving product recommendation relevance by 40%, leading to enhanced context analysis ",
        "Built and implemented an NLP tool leveraging RNN and LSTM architectures to process over 10,000 reviews per hour with 85% accuracy, significantly reducing manual moderation time by 60% and improving overall content moderation efficiency for real-time data handling ",
      ],
    },
    {
      title: "Web Development Team",
      date: "March 2022 - August 2022",
      company: (
        <a
          href="https://breakthebarrier.ldrp.ac.in/"
          style={{
            fontStyle: "italic",
            textDecoration: "underline",
            fontWeight: "bold",
            color: "#231f9c",
          }}
        >
          Break The Barrier
        </a>
      ),
      description: [
        "Contributed to the development of a website for the national-level hackathon Break the Barrier  as part of the web development team, utilizing React for the frontend.",
        "Collaborated with team members to implement the backend using Flask, enhancing website functionality and user experience.",
      ],
    },
    // Add more experiences as needed
  ];

  return (
    <Container fluid className="experience-section" id="experience">
      <Particle />
      <Container>
        <Row className="justify-content-center">
          <Col md={8}>
            <h1
              className="project-heading"
              style={{
                paddingBottom: "20px",
                marginTop: "60px",
                textAlign: "center",
              }}
            >
              My <strong className="purple">Experience</strong>
            </h1>
            <div className="timeline">
              {experiences.map((exp, index) => (
                <div
                  className={`timeline-item ${
                    index % 2 === 0 ? "left" : "right"
                  }`}
                  key={index}
                >
                  <div className="timeline-content">
                    <h4>{exp.title}</h4>
                    <p style={{ fontStyle: "italic" }}>{exp.company}</p>{" "}
                    {/* Render each description point in a new line */}
                    {exp.description.map((point, i) => (
                      <p key={i}>
                        <strong>{">"}</strong> {point}
                      </p>
                    ))}
                    <div className="timeline-date">{exp.date}</div>
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default ExperienceTimeline;
