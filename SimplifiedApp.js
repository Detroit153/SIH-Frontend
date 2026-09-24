import React, { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";

import StudentDashboard from "./StudentDashboard";
import HRDashboard from "./HRDashboard";
import JobsInternships from "./JobsInternships";
import "./App.css";


// =====================================================
// LANDING PAGE
// =====================================================

function LandingPage() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const features = [
    {
      icon: "🎯",
      title: "AI Skill Assessment",
      text: "Measure your actual technical and professional capabilities.",
    },
    {
      icon: "✓",
      title: "Verified Skills",
      text: "Build a skill profile based on assessment performance.",
    },
    {
      icon: "📊",
      title: "Skill Gap Analysis",
      text: "Discover what you need to improve for your target role.",
    },
    {
      icon: "💼",
      title: "Industry Matching",
      text: "Connect verified student capabilities with relevant opportunities.",
    },
  ];

  return (
    <div className="landing-page">

      {/* ================= NAVBAR ================= */}

      <header className="landing-navbar">

        <Link to="/" className="brand">
          <div className="brand-mark">S</div>
          <span>SkillBridge</span>
        </Link>

        <nav className={`landing-nav ${menuOpen ? "mobile-open" : ""}`}>
          <a href="#features">Features</a>
          <a href="#how-it-works">How It Works</a>
          <a href="#roles">For Students</a>
          <a href="#roles">For HR</a>

          <div className="mobile-actions">
            <button
              className="nav-login"
              onClick={() => navigate("/student-signup")}
            >
              Sign In
            </button>

            <button
              className="nav-signup"
              onClick={() => navigate("/student-signup")}
            >
              Get Started
            </button>
          </div>
        </nav>

        <div className="desktop-actions">
          <button
            className="nav-login"
            onClick={() => navigate("/student-signup")}
          >
            Sign In
          </button>

          <button
            className="nav-signup"
            onClick={() => navigate("/student-signup")}
          >
            Get Started
          </button>
        </div>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

      </header>


      {/* ================= HERO SECTION ================= */}

      <section className="hero-section">

        <div className="hero-content">

          <div className="hero-badge">
            <span className="pulse-dot" />
            AI-Powered Skill Intelligence Platform
          </div>

          <h1>
            Turn Your
            <span className="gradient-text"> Skills </span>
            Into
            <br />
            Real Opportunities.
          </h1>

          <p className="hero-description">
            SkillBridge connects students, academia and industry through
            personalized skill assessments, verified capabilities and
            intelligent internship matching.
          </p>

          <div className="hero-buttons">

            <button
              className="hero-primary"
              onClick={() => navigate("/student-signup")}
            >
              Start as a Student →
            </button>

            <Link
              to="/hr-dashboard"
              className="hero-secondary"
            >
              Explore for HR →
            </Link>

          </div>

          <div className="hero-trust">

            <div className="trust-avatars">
              <span>R</span>
              <span>A</span>
              <span>P</span>
              <span>K</span>
            </div>

            <div>
              <strong>Built for the next generation</strong>
              <small>Students • Academia • Industry</small>
            </div>

          </div>

        </div>


        {/* ================= HERO PREVIEW ================= */}

        <div className="hero-visual">

          <div className="floating-card floating-card-one">

            <div className="mini-icon purple-bg">✓</div>

            <div>
              <strong>Python</strong>
              <small>Skill Verified</small>
            </div>

            <span className="mini-score">92%</span>

          </div>


          <div className="dashboard-preview">

            <div className="preview-top">

              <div>
                <small>Student Skill Intelligence</small>
                <h3>Rishabh's Profile</h3>
              </div>

              <div className="preview-avatar">RS</div>

            </div>


            <div className="preview-score">

              <div className="score-circle">
                <span>82%</span>
                <small>Overall</small>
              </div>


              <div className="preview-skills">

                <div>
                  <span>Python</span>
                  <strong>92%</strong>
                </div>

                <div className="preview-bar">
                  <i style={{ width: "92%" }} />
                </div>


                <div>
                  <span>React</span>
                  <strong>84%</strong>
                </div>

                <div className="preview-bar">
                  <i style={{ width: "84%" }} />
                </div>


                <div>
                  <span>Machine Learning</span>
                  <strong>76%</strong>
                </div>

                <div className="preview-bar">
                  <i style={{ width: "76%" }} />
                </div>

              </div>

            </div>


            <div className="preview-match">

              <div className="match-icon">💼</div>

              <div>
                <strong>Internship Match Found</strong>
                <small>AI / ML Intern • 94% Match</small>
              </div>

              <span>→</span>

            </div>

          </div>


          <div className="floating-card floating-card-two">

            <div className="match-circle">94%</div>

            <div>
              <strong>Role Match</strong>
              <small>AI / ML Internship</small>
            </div>

          </div>


          <div className="glow glow-one" />
          <div className="glow glow-two" />

        </div>

      </section>


      {/* ================= STATS ================= */}

      <section className="stats-strip">

        <div>
          <strong>Skill First</strong>
          <span>Career discovery</span>
        </div>

        <div>
          <strong>AI Powered</strong>
          <span>Personalized assessments</span>
        </div>

        <div>
          <strong>Verified</strong>
          <span>Capability intelligence</span>
        </div>

        <div>
          <strong>Industry Ready</strong>
          <span>Relevant opportunities</span>
        </div>

      </section>


      {/* ================= FEATURES ================= */}

      <section
        className="features-section"
        id="features"
      >

        <div className="section-heading">

          <span>THE PLATFORM</span>

          <h2>
            From a Resume to a Real Skill Profile.
          </h2>

          <p>
            Go beyond degrees and self-declared skills with measurable,
            continuously updated skill intelligence.
          </p>

        </div>


        <div className="feature-grid">

          {features.map((feature, index) => (

            <div
              className="feature-card"
              key={feature.title}
              style={{
                "--delay": `${index * 0.1}s`,
              }}
            >

              <div className="feature-icon">
                {feature.icon}
              </div>

              <h3>{feature.title}</h3>

              <p>{feature.text}</p>

              <span className="feature-arrow">
                →
              </span>

            </div>

          ))}

        </div>

      </section>


      {/* ================= HOW IT WORKS ================= */}

      <section
        className="workflow-section"
        id="how-it-works"
      >

        <div className="section-heading">

          <span>HOW IT WORKS</span>

          <h2>
            One Continuous Skill Loop.
          </h2>

        </div>


        <div className="workflow">

          <div className="workflow-line" />

          <div className="workflow-step">
            <div>01</div>
            <strong>Create Profile</strong>
            <span>Skills + interests + target role</span>
          </div>

          <div className="workflow-step">
            <div>02</div>
            <strong>Take Assessment</strong>
            <span>Personalized skill evaluation</span>
          </div>

          <div className="workflow-step">
            <div>03</div>
            <strong>Get Verified</strong>
            <span>Evidence-based skill intelligence</span>
          </div>

          <div className="workflow-step">
            <div>04</div>
            <strong>Get Matched</strong>
            <span>Relevant jobs and internships</span>
          </div>

        </div>

      </section>


      {/* ================= ROLE CARDS ================= */}

      <section
        className="role-section"
        id="roles"
      >

        <div className="section-heading">

          <span>BUILT FOR EVERY SIDE</span>

          <h2>
            One Platform. Multiple Possibilities.
          </h2>

        </div>


        <div className="role-grid">

          <div className="role-card student-role">

            <div className="role-top">

              <div className="role-icon">🎓</div>

              <span>STUDENT</span>

            </div>

            <h3>
              Build a Skill Profile That Proves What You Can Do.
            </h3>

            <p>
              Take personalized assessments, identify skill gaps and discover
              opportunities matched to your verified capabilities.
            </p>

            <button
              onClick={() => navigate("/student-signup")}
            >
              Join as Student →
            </button>

          </div>


          <div className="role-card hr-role">

            <div className="role-top">

              <div className="role-icon">🏢</div>

              <span>HR / RECRUITER</span>

            </div>

            <h3>
              Discover Candidates by Verified Skills.
            </h3>

            <p>
              Search candidates based on real capabilities instead of relying
              only on resumes and self-declared skills.
            </p>

            <Link to="/hr-dashboard">
              Open HR Dashboard →
            </Link>

          </div>

        </div>

      </section>


      {/* ================= FINAL CTA ================= */}

      <section className="final-cta">

        <div className="cta-glow" />

        <span>READY TO BUILD YOUR FUTURE?</span>

        <h2>
          Your degree says
          <br />
          what you studied.
          <br />
          <strong>
            Your skills show what you can do.
          </strong>
        </h2>

        <button
          onClick={() => navigate("/student-signup")}
        >
          Create Your Student Profile →
        </button>

      </section>


      {/* ================= FOOTER ================= */}

      <footer className="landing-footer">

        <div className="brand">

          <div className="brand-mark">S</div>

          <span>SkillBridge</span>

        </div>

        <span>
          Degree + Resume + Verified Skill Intelligence
        </span>

        <div>
          <Link to="/student-dashboard">
            Student
          </Link>

          <Link to="/hr-dashboard">
            HR
          </Link>
        </div>

      </footer>

    </div>
  );
}


// =====================================================
// STUDENT SIGNUP PAGE
// =====================================================

function StudentSignup() {

  const navigate = useNavigate();

  const [accountType, setAccountType] = useState("personal");

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");


  // Update form fields
  const handleChange = (event) => {

    const fieldName = event.target.name;
    const fieldValue = event.target.value;

    setForm({
      ...form,
      [fieldName]: fieldValue,
    });

  };


  // Handle normal signup
  const handleSignup = async (event) => {

    event.preventDefault();

    setLoading(true);
    setMessage("");

    try {

      // Temporary frontend simulation
      await new Promise((resolve) => {
        setTimeout(resolve, 900);
      });

      setMessage("Account created successfully!");

      setTimeout(() => {
        navigate("/student-dashboard");
      }, 700);

    } catch (error) {

      setMessage(
        error.message || "Something went wrong."
      );

    } finally {

      setLoading(false);

    }
  };


  // Handle Google signup
  const handleGoogleSignup = async () => {

    setLoading(true);

    // Temporary simulation
    await new Promise((resolve) => {
      setTimeout(resolve, 700);
    });

    setLoading(false);

    navigate("/student-dashboard");
  };


  return (

    <div className="signup-page">

      {/* Background */}

      <div className="signup-background">

        <div className="signup-orb orb-one" />
        <div className="signup-orb orb-two" />

      </div>


      {/* Header */}

      <header className="signup-header">

        <Link to="/" className="brand">

          <div className="brand-mark">
            S
          </div>

          <span>
            SkillBridge
          </span>

        </Link>


        <button
          className="back-home"
          onClick={() => navigate("/")}
        >
          ← Back to Home
        </button>

      </header>


      <main className="signup-container">


        {/* LEFT SIDE */}

        <div className="signup-info">

          <div className="signup-badge">
            🎓 STUDENT
          </div>

          <h1>
            Build your
            <span> verified skill </span>
            identity.
          </h1>

          <p>
            Create your SkillBridge account and start building a profile
            based on your actual skills, assessments and career goals.
          </p>


          <div className="signup-benefits">

            <div>
              <span>✓</span>

              <div>
                <strong>
                  Personalized assessments
                </strong>

                <small>
                  Tests based on your target career.
                </small>
              </div>
            </div>


            <div>
              <span>✓</span>

              <div>
                <strong>
                  Verified skill profile
                </strong>

                <small>
                  Show employers what you can actually do.
                </small>
              </div>
            </div>


            <div>
              <span>✓</span>

              <div>
                <strong>
                  Smart internship matching
                </strong>

                <small>
                  Discover opportunities matching your skills.
                </small>
              </div>
            </div>

          </div>

        </div>


        {/* RIGHT SIDE */}

        <div className="signup-card">

          <div className="signup-card-header">

            <h2>
              Create Student Account
            </h2>

            <p>
              Start your skill journey today.
            </p>

          </div>


          {/* ACCOUNT TYPE */}

          <div className="account-selector">

            <button
              className={
                accountType === "personal"
                  ? "selected"
                  : ""
              }
              onClick={() => setAccountType("personal")}
              type="button"
            >

              <span>👤</span>

              <div>
                <strong>
                  Personal Account
                </strong>

                <small>
                  Email & password
                </small>
              </div>

            </button>


            <button
              className={
                accountType === "google"
                  ? "selected"
                  : ""
              }
              onClick={() => setAccountType("google")}
              type="button"
            >

              <span className="google-symbol">
                G
              </span>

              <div>
                <strong>
                  Google Account
                </strong>

                <small>
                  Continue with Google
                </small>
              </div>

            </button>

          </div>


          {/* GOOGLE SIGNUP */}

          {accountType === "google" ? (

            <div className="google-signup">

              <div className="google-big-icon">
                G
              </div>

              <h3>
                Continue with Google
              </h3>

              <p>
                Use your Google account to create your
                SkillBridge student profile.
              </p>

              <button
                className="google-button"
                onClick={handleGoogleSignup}
                disabled={loading}
              >

                <span className="google-g">
                  G
                </span>

                {loading
                  ? "Connecting..."
                  : "Continue with Google"}

              </button>

              <small className="oauth-note">
                🔒 Secure OAuth authentication
              </small>

            </div>

          ) : (

            /* PERSONAL ACCOUNT */

            <form onSubmit={handleSignup}>

              <label>
                Full Name

                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                />

              </label>


              <label>
                Email Address

                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                />

              </label>


              <label>
                Password

                <input
                  name="password"
                  type="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="Create a strong password"
                  minLength="6"
                  required
                />

              </label>


              <div className="terms">

                <input
                  type="checkbox"
                  required
                />

                <span>
                  I agree to the Terms of Service
                  and Privacy Policy.
                </span>

              </div>


              <button
                className="create-account"
                type="submit"
                disabled={loading}
              >

                {loading
                  ? "Creating Account..."
                  : "Create Student Account →"}

              </button>

            </form>

          )}


          {/* MESSAGE */}

          {message && (

            <div className="signup-message">
              ✓ {message}
            </div>

          )}


          {/* LOGIN */}

          <div className="login-line">

            Already have an account?

            <button
              onClick={() => navigate("/student-dashboard")}
            >
              Sign in
            </button>

          </div>

        </div>

      </main>

    </div>
  );
}


// =====================================================
// ROUTES
// =====================================================

export default function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<LandingPage />}
        />

        <Route
          path="/student-signup"
          element={<StudentSignup />}
        />

        <Route
          path="/student-dashboard"
          element={<StudentDashboard />}
        />

        <Route
          path="/hr-dashboard"
          element={<HRDashboard />}
        />

        <Route
          path="/jobs-internships"
          element={<JobsInternships />}
        />

        {/* Same page, different URL */}
        <Route
          path="/internships"
          element={<JobsInternships />}
        />

      </Routes>

    </BrowserRouter>
  );
}