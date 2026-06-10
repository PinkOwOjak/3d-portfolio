import "./styles/Career.css";
import { EDUCATION, INTERNSHIPS, RESEARCH_PAPERS } from "../data/profile";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Education <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>{EDUCATION[2].school}</h4>
                <h5>{EDUCATION[2].degree}</h5>
              </div>
              <h3>{EDUCATION[2].year}</h3>
            </div>
            <p>
              {EDUCATION[2].school} — current undergraduate focus on computer
              science, systems, and software engineering.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>{INTERNSHIPS[0].org}</h4>
                <h5>{INTERNSHIPS[0].role}</h5>
              </div>
              <h3>Internship</h3>
            </div>
            <p>
              {INTERNSHIPS[0].description}
              <br />
              <a
                href={INTERNSHIPS[0].certificateLink}
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
                style={{ color: "var(--accentColor)" }}
              >
                Certificate
              </a>
              {" · "}
              <a
                href={INTERNSHIPS[0].recommendationLink}
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
                style={{ color: "var(--accentColor)" }}
              >
                Recommendation Letter
              </a>
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>{INTERNSHIPS[1].org}</h4>
                <h5>{INTERNSHIPS[1].role}</h5>
              </div>
              <h3>Internship</h3>
            </div>
            <p>
              {INTERNSHIPS[1].description}
              <br />
              <a
                href={INTERNSHIPS[1].certificateLink}
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
                style={{ color: "var(--accentColor)" }}
              >
                Certificate
              </a>
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Research Papers</h4>
                <h5>Accepted and in progress</h5>
              </div>
              <h3>{RESEARCH_PAPERS.length}</h3>
            </div>
            <p>{RESEARCH_PAPERS.map((paper) => paper.title).join(" · ")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
