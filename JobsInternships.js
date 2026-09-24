// src/pages/JobsInternships.jsx
import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./JobsInternships.css";

import "./StudentDashboard.js";
import { Link } from "react-router-dom";

/*
  ============================================================
  FASTAPI + DATABASE CONNECTION PLACEHOLDER
  ============================================================

  FastAPI Base URL:
  const API_BASE_URL = "http://localhost:8000/api";

  Suggested endpoints:
  GET  /jobs-internships
  GET  /jobs-internships/:id
  POST /jobs-internships/:id/apply
  GET  /student/applications
  POST /student/applications
  GET  /student/profile

  Example:
  const response = await fetch(`${API_BASE_URL}/jobs-internships`);
  const data = await response.json();

  Database:
  FastAPI -> SQLAlchemy -> PostgreSQL/MySQL
*/

const API_BASE_URL = "http://localhost:8000/api";

const mockPostings = [
  {
    id: 1,
    type: "Internship",
    title: "Frontend Developer Intern",
    company: "TechNova Solutions",
    location: "Bengaluru / Remote",
    mode: "Hybrid",
    duration: "6 Months",
    stipend: "₹20,000 / month",
    posted: "2 days ago",
    deadline: "15 Oct 2026",
    applicants: 84,
    skills: ["React", "JavaScript", "HTML", "CSS", "Git"],
    description:
      "Work with the frontend engineering team to build responsive and scalable web applications.",
    requirements: [
      "Strong knowledge of HTML, CSS and JavaScript",
      "Basic React knowledge",
      "Understanding of Git and GitHub",
      "Good problem-solving skills",
    ],
  },
  {
    id: 2,
    type: "Job",
    title: "Junior Python Developer",
    company: "DataSphere AI",
    location: "Hyderabad",
    mode: "On-site",
    duration: "Full Time",
    stipend: "₹5 - 8 LPA",
    posted: "1 day ago",
    deadline: "30 Oct 2026",
    applicants: 142,
    skills: ["Python", "FastAPI", "SQL", "REST API", "Git"],
    description:
      "Join our backend team and develop APIs and data processing systems for AI-powered products.",
    requirements: [
      "Python programming fundamentals",
      "Knowledge of REST APIs",
      "Basic SQL",
      "FastAPI or Flask experience is preferred",
    ],
  },
  {
    id: 3,
    type: "Internship",
    title: "Machine Learning Intern",
    company: "NeuralEdge Labs",
    location: "Pune / Remote",
    mode: "Remote",
    duration: "4 Months",
    stipend: "₹25,000 / month",
    posted: "3 days ago",
    deadline: "20 Oct 2026",
    applicants: 96,
    skills: ["Python", "Machine Learning", "Pandas", "NumPy", "Scikit-learn"],
    description:
      "Assist the ML team in preparing datasets, training models and evaluating machine-learning solutions.",
    requirements: [
      "Python programming",
      "Basic ML concepts",
      "Pandas and NumPy",
      "Understanding of model evaluation",
    ],
  },
  {
    id: 4,
    type: "Job",
    title: "UI/UX Designer",
    company: "PixelCraft Studio",
    location: "Mumbai",
    mode: "Hybrid",
    duration: "Full Time",
    stipend: "₹6 - 10 LPA",
    posted: "5 days ago",
    deadline: "10 Nov 2026",
    applicants: 73,
    skills: ["Figma", "UI Design", "UX Research", "Prototyping"],
    description:
      "Design intuitive user experiences and collaborate with product and engineering teams.",
    requirements: [
      "Figma proficiency",
      "Understanding of UI/UX principles",
      "Strong visual communication",
      "Portfolio of design work",
    ],
  },
  {
    id: 5,
    type: "Internship",
    title: "Data Analyst Intern",
    company: "InsightWorks",
    location: "Delhi NCR",
    mode: "Hybrid",
    duration: "6 Months",
    stipend: "₹18,000 / month",
    posted: "1 week ago",
    deadline: "25 Oct 2026",
    applicants: 61,
    skills: ["Excel", "SQL", "Python", "Power BI", "Data Analysis"],
    description:
      "Analyze business data and create dashboards that support strategic decision-making.",
    requirements: [
      "SQL fundamentals",
      "Excel",
      "Basic Python",
      "Data visualization knowledge",
    ],
  },
  {
    id: 6,
    type: "Internship",
    title: "Cloud Engineering Intern",
    company: "CloudMatrix Technologies",
    location: "Chennai / Remote",
    mode: "Remote",
    duration: "5 Months",
    stipend: "₹22,000 / month",
    posted: "4 days ago",
    deadline: "05 Nov 2026",
    applicants: 52,
    skills: ["AWS", "Docker", "Linux", "DevOps", "Networking"],
    description:
      "Work with cloud engineers to deploy, monitor and maintain cloud-native applications.",
    requirements: [
      "Linux basics",
      "Cloud fundamentals",
      "Docker basics",
      "Networking concepts",
    ],
  },
];

function JobsInternships() {
  const navigate = useNavigate();

  const [postings, setPostings] = useState(mockPostings);
  const [activeTab, setActiveTab] = useState("All");
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("All");
  const [selectedPosting, setSelectedPosting] = useState(null);
  const [saved, setSaved] = useState([]);
  const [loading, setLoading] = useState(false);

  // ============================================================
  // FASTAPI CONNECTION
  // ============================================================

  useEffect(() => {
    /*
    const loadPostings = async () => {
      try {
        setLoading(true);

        const response = await fetch(
          `${API_BASE_URL}/jobs-internships`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch postings");
        }

        const data = await response.json();
        setPostings(data);
      } catch (error) {
        console.error("FastAPI connection failed:", error);
        setPostings(mockPostings);
      } finally {
        setLoading(false);
      }
    };

    loadPostings();
    */

    // Remove the comment above when FastAPI is ready.
  }, []);

  const filteredPostings = useMemo(() => {
    return postings.filter((posting) => {
      const matchesTab =
        activeTab === "All" || posting.type === activeTab;

      const searchText = search.toLowerCase();

      const matchesSearch =
        posting.title.toLowerCase().includes(searchText) ||
        posting.company.toLowerCase().includes(searchText) ||
        posting.skills.some((skill) =>
          skill.toLowerCase().includes(searchText)
        );

      const matchesLocation =
        location === "All" ||
        posting.location.toLowerCase().includes(location.toLowerCase());

      return matchesTab && matchesSearch && matchesLocation;
    });
  }, [postings, activeTab, search, location]);

  const toggleSave = (id) => {
    setSaved((previous) =>
      previous.includes(id)
        ? previous.filter((item) => item !== id)
        : [...previous, id]
    );
  };

  const applyToPosting = async (posting) => {
    /*
    ============================================================
    FASTAPI APPLICATION REQUEST
    ============================================================

    try {
      await fetch(`${API_BASE_URL}/student/applications`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          posting_id: posting.id,
          student_id: "CURRENT_STUDENT_ID",
          posting_type: posting.type,
        }),
      });
    } catch (error) {
      console.error(error);
    }
    */

    localStorage.setItem(
      "selectedApplication",
      JSON.stringify({
        postingId: posting.id,
        title: posting.title,
        company: posting.company,
        type: posting.type,
        status: "Applied",
      })
    );

    setSelectedPosting(null);

    navigate("/student/dashboard?section=applied-internships");
  };

  return (
    <div className="opportunities-page">
      <div className="background-orb orb-one"></div>
      <div className="background-orb orb-two"></div>

      <header className="opportunities-header">
        <div className="brand-area">
          <div className="brand-icon">SI</div>
          <div>
            <h1>SkillBridge</h1>
            <span>Jobs & Internship Hub</span>
          </div>
        </div>

        <nav className="top-navigation">
          <button
            className="nav-button active"
            onClick={() => navigate("/jobs-internships")}
          >
            Opportunities
          </button>

          <button
            className="nav-button"
            onClick={() => navigate("/student-dashboard")}
          >Student Dashboard
            
          </button>

          
        </nav>
      </header>

      <main className="opportunities-container">
        <section className="hero-section">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="pulse-dot"></span>
              Live Industry Opportunities
            </div>

            <h2>
              Find opportunities that
              <span> match your skills.</span>
            </h2>

            <p>
              Explore verified jobs and internships from companies looking
              for your skills, interests and potential.
            </p>

            <div className="hero-actions">
              <button
                className="primary-action"
                onClick={() =>
                  document
                    .getElementById("opportunity-list")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Explore Opportunities
                <span>→</span>
              </button>

              <button
                className="secondary-action"
                onClick={() => navigate("/student-dashboard")}
              >
                Open Dashboard
              </button>
            </div>
          </div>

          <div className="hero-visual">
            <div className="floating-card card-main">
              <div className="visual-icon">💼</div>
              <div>
                <strong>1,240+</strong>
                <span>Active Opportunities</span>
              </div>
              <div className="trend">↗ 18%</div>
            </div>

            <div className="floating-card card-small card-small-one">
              <span>✓</span>
              <div>
                <strong>Skill Matched</strong>
                <small>92% match</small>
              </div>
            </div>

            <div className="floating-card card-small card-small-two">
              <span>⚡</span>
              <div>
                <strong>New Today</strong>
                <small>48 postings</small>
              </div>
            </div>

            <div className="hero-circle">
              <div>🚀</div>
            </div>
          </div>
        </section>

        <section className="stats-row">
          <div className="stat-card">
            <div className="stat-icon blue">💼</div>
            <div>
              <strong>840+</strong>
              <span>Jobs</span>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon purple">🎓</div>
            <div>
              <strong>400+</strong>
              <span>Internships</span>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon green">🏢</div>
            <div>
              <strong>180+</strong>
              <span>Companies</span>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon orange">🎯</div>
            <div>
              <strong>92%</strong>
              <span>Avg. Skill Match</span>
            </div>
          </div>
        </section>

        <section className="filter-section" id="opportunity-list">
          <div className="section-heading">
            <div>
              <span className="section-label">DISCOVER</span>
              <h3>Latest Opportunities</h3>
              <p>Find jobs and internships aligned with your career goals.</p>
            </div>

            <button
              className="dashboard-link"
              onClick={() => navigate("/student/dashboard")}
            >
              Dashboard →
            </button>
          </div>

          <div className="filter-panel">
            <div className="search-box">
              <span>⌕</span>
              <input
                type="text"
                placeholder="Search jobs, internships, companies or skills..."
                value={search}
                onChange={(event) => setSearch(event.target.value)}
              />
              {search && (
                <button onClick={() => setSearch("")}>×</button>
              )}
            </div>

            <div className="filter-controls">
              <div className="tab-buttons">
                {["All", "Job", "Internship"].map((tab) => (
                  <button
                    key={tab}
                    className={activeTab === tab ? "active" : ""}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab === "All" && "All"}
                    {tab === "Job" && "Jobs"}
                    {tab === "Internship" && "Internships"}
                  </button>
                ))}
              </div>

              <select
                value={location}
                onChange={(event) => setLocation(event.target.value)}
              >
                <option value="All">All Locations</option>
                <option value="Remote">Remote</option>
                <option value="Bengaluru">Bengaluru</option>
                <option value="Hyderabad">Hyderabad</option>
                <option value="Pune">Pune</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Delhi">Delhi NCR</option>
                <option value="Chennai">Chennai</option>
              </select>
            </div>
          </div>
        </section>

        <section className="results-section">
          <div className="results-header">
            <span>
              Showing <strong>{filteredPostings.length}</strong> opportunities
            </span>

            <button
              className="view-applied-button"
              onClick={() =>
                navigate("/student/dashboard?section=applied-internships")
              }
            >
              Applied Opportunities →
            </button>
          </div>

          {loading ? (
            <div className="loading-state">
              <div className="loader"></div>
              Loading opportunities...
            </div>
          ) : filteredPostings.length === 0 ? (
            <div className="empty-state">
              <div>🔍</div>
              <h3>No opportunities found</h3>
              <p>Try changing your search or filters.</p>
              <button
                onClick={() => {
                  setSearch("");
                  setLocation("All");
                  setActiveTab("All");
                }}
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="opportunity-grid">
              {filteredPostings.map((posting, index) => (
                <article
                  className="opportunity-card"
                  key={posting.id}
                  style={{ "--delay": `${index * 0.07}s` }}
                >
                  <div className="card-top">
                    <div
                      className={`company-logo company-${posting.id}`}
                    >
                      {posting.company
                        .split(" ")
                        .map((word) => word[0])
                        .join("")
                        .slice(0, 2)}
                    </div>

                    <div className="card-top-actions">
                      <span
                        className={`posting-type ${
                          posting.type === "Job"
                            ? "job-type"
                            : "internship-type"
                        }`}
                      >
                        {posting.type}
                      </span>

                      <button
                        className={`save-button ${
                          saved.includes(posting.id) ? "saved" : ""
                        }`}
                        onClick={() => toggleSave(posting.id)}
                      >
                        {saved.includes(posting.id) ? "♥" : "♡"}
                      </button>
                    </div>
                  </div>

                  <div className="company-name">{posting.company}</div>

                  <h4>{posting.title}</h4>

                  <div className="posting-meta">
                    <span>📍 {posting.location}</span>
                    <span>◷ {posting.duration}</span>
                  </div>

                  <div className="skill-list">
                    {posting.skills.slice(0, 4).map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                    {posting.skills.length > 4 && (
                      <span>+{posting.skills.length - 4}</span>
                    )}
                  </div>

                  <div className="match-row">
                    <div className="match-progress">
                      <div className="match-progress-track">
                        <div
                          className="match-progress-fill"
                          style={{
                            width: `${Math.min(
                              96,
                              68 + posting.id * 4
                            )}%`,
                          }}
                        ></div>
                      </div>

                      <span>
                        {Math.min(96, 68 + posting.id * 4)}% Skill Match
                      </span>
                    </div>
                  </div>

                  <div className="card-footer">
                    <div className="posting-info">
                      <strong>{posting.stipend}</strong>
                      <small>{posting.posted}</small>
                    </div>

                    <button
                      className="details-button"
                      onClick={() => setSelectedPosting(posting)}
                    >
                      View Details
                      <span>→</span>
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>

        <section className="career-section">
          <div className="career-content">
            <span className="section-label">YOUR CAREER JOURNEY</span>
            <h3>Turn your skills into opportunities.</h3>
            <p>
              Complete assessments, verify your skills and discover
              opportunities that match your career profile.
            </p>

            <button
              onClick={() => navigate("/student/dashboard")}
              className="career-button"
            >
              Go to Student Dashboard →
            </button>
          </div>

          <div className="career-steps">
            <div>
              <span>01</span>
              <strong>Build Profile</strong>
              <small>Skills + Interests</small>
            </div>
            <div>
              <span>02</span>
              <strong>Verify Skills</strong>
              <small>Take assessments</small>
            </div>
            <div>
              <span>03</span>
              <strong>Get Matched</strong>
              <small>Find opportunities</small>
            </div>
          </div>
        </section>
      </main>

      {selectedPosting && (
        <div
          className="modal-overlay"
          onClick={() => setSelectedPosting(null)}
        >
          <div
            className="posting-modal"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setSelectedPosting(null)}
            >
              ×
            </button>

            <div className="modal-header">
              <div className="modal-company-logo">
                {selectedPosting.company
                  .split(" ")
                  .map((word) => word[0])
                  .join("")
                  .slice(0, 2)}
              </div>

              <div>
                <span
                  className={`posting-type ${
                    selectedPosting.type === "Job"
                      ? "job-type"
                      : "internship-type"
                  }`}
                >
                  {selectedPosting.type}
                </span>

                <h2>{selectedPosting.title}</h2>
                <p>{selectedPosting.company}</p>
              </div>
            </div>

            <div className="modal-details-grid">
              <div>
                <span>📍 Location</span>
                <strong>{selectedPosting.location}</strong>
              </div>

              <div>
                <span>💰 Compensation</span>
                <strong>{selectedPosting.stipend}</strong>
              </div>

              <div>
                <span>◷ Duration</span>
                <strong>{selectedPosting.duration}</strong>
              </div>

              <div>
                <span>📅 Deadline</span>
                <strong>{selectedPosting.deadline}</strong>
              </div>
            </div>

            <div className="modal-body">
              <section>
                <h3>About this opportunity</h3>
                <p>{selectedPosting.description}</p>
              </section>

              <section>
                <h3>Required Skills</h3>
                <div className="modal-skills">
                  {selectedPosting.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </section>

              <section>
                <h3>Requirements</h3>
                <ul>
                  {selectedPosting.requirements.map((requirement) => (
                    <li key={requirement}>{requirement}</li>
                  ))}
                </ul>
              </section>
            </div>

            <div className="modal-footer">
              <div className="modal-match">
                <span>Your estimated skill match</span>
                <strong>
                  {Math.min(96, 68 + selectedPosting.id * 4)}%
                </strong>
              </div>

              <button
                className="apply-button"
                onClick={() => applyToPosting(selectedPosting)}
              >
                Apply Now
                <span>→</span>
              </button>
            </div>
          </div>
        </div>
      )}

      <footer className="opportunities-footer">
        <div>
          <strong>SkillBridge</strong>
          <span>Degree + Resume + Verified Skill Intelligence</span>
        </div>

        <div>
          <span>© 2026 SkillBridge</span>
          <button>
              <Link to="/student-dashboard">
              Student Dashboard
            </Link>
          </button>
          
        </div>
      </footer>
    </div>
  );
}

export default JobsInternships;