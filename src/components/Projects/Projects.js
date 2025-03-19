import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import youtube from "../../Assets/Projects/Youtube.png";
import vacaybuddy from "../../Assets/Projects/Vacay.png";
import news from "../../Assets/Projects/News.png";
import music from "../../Assets/Projects/music.png";
import ipl from "../../Assets/Projects/IPL.png";
import resume from "../../Assets/Projects/resume.png"
import employee from "../../Assets/Projects/Employee.png";
import cancer from "../../Assets/Projects/cancer.png";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={youtube}
              isBlog={false}
              title="Unveiling Trends: A Cloud-Driven Data"
              description="The project extracted insights from YouTube data to identify emerging video categories and audience for demographics, helping optimize online video strategies and empower businesses and content creators to make informed decisions."
              ghLink="https://github.com/prachi1211/ECC"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vacaybuddy}
              isBlog={false}
              title="Flight Booking System-VacayBuddy"
              description="Developed a user platform for flight booking, itinerary management, search, and recommendations. The ystem suggested 5 similar places based on user searches or itinerary additions, with data cached for future recommendations."
              ghLink="https://github.com/juyee1698/VacayBuddy-backend"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={resume}
              isBlog={false}
              title="Fix Your Resume"
              description="Fix Your ResumeAn AI-powered tool using Gemini's AI prompt engineering to optimize resumes. Users upload their resumes and a job description, receiving tailored suggestions to add keywords, align content, and enhance their chances of landing the job."
              ghLink="https://github.com/prachi1211/FixYourResume"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ipl}
              isBlog={false}
              title="IPL Score Prediction (IBM top in Hack Challenge)"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/prachi1211/IPL_Score_Prediction"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={employee}
              isBlog={false}
              title="Employee Management System"
              description="Developed a web-based employee management system that allows users to add, update, and delete employee records alongwith job recommendation based on profile. The system also provides a search feature to find employees by name, department, or job title."
              ghLink="https://github.com/prachi1211/Employee-Management-System"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={news}
              isBlog={false}
              title="News Article Summarisation"
              description="An article summarization tool has been developed based on abstractive analysis, which ranks articles to identify the best matches. A web application has been created that generates summaries upon article upload."
              ghLink="https://github.com/prachi1211/News-Article-Summarisation"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cancer}
              isBlog={false}
              title="Breast Cancer Detection"
              description="Image data analysis was performed using processing techniques to enhance detection accuracy in distinguishing between benign and malignant tumors. A deep learning model, specifically Inception v3, was implemented to extract features and classify tumor spots based on a defined threshold after image cleaning."
              ghLink="https://github.com/prachi1211/Breast-Cancer-Detection"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={music}
              isBlog={false}
              title="Music Recommendation System"
              description="Developed a recommendation system that suggests options based on the nearest match, using preferences from users with similar tastes to provide personalized suggestions."
              ghLink="https://github.com/prachi1211/Music-Recommendation-System"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
