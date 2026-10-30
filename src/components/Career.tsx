import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>MERN Stack Developer</h4>
                <h5>TechOn-Ventures</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Built the InstaPay Affiliate platform to manage client referrals
              and commissions, with role and route based access and four
              dedicated consoles (Master Agent, Sub-Agent, Operator, Business).
              Translated Figma designs into responsive React interfaces,
              integrated REST and third-party APIs with React Hooks and
              Zustand, improved performance with lazy loading and bundle
              optimization, containerized apps with Docker, automated
              deployment with Jenkins CI/CD and Ansible, and deployed the
              platform on AWS.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>MERN Stack Developer (Self-Learning)</h4>
                <h5>Personal Projects</h5>
              </div>
              <h3>2025 - 2026</h3>
            </div>
            <p>
              Built full stack web applications using the MERN stack and
              Next.js, including authentication systems, REST APIs, e-commerce,
              event booking, and URL shortener applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
