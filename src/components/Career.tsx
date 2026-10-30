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
              <h3>2025 to present</h3>
            </div>
            <p>
              Built and maintained the InstaPay Affiliate platform, a fintech solution for managing referrals, commissions, and multi-role operations. Developed the Affiliate, Admin, and Agency panels as responsive, component-driven interfaces using React, Next.js, and TypeScript, and translated Figma designs into production-ready UI. Managed application state with Zustand, integrated REST APIs for seamless backend communication, and worked on performance optimization and maintainable code across the InstaPay platform.
              </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full stack Engineer</h4>
                <h5>Backend Mastery</h5>
              </div>
              <h3>2025 - 2026</h3>
            </div>
            <p>
              Built full-stack applications using React.js, Next.js, Node.js,
              Express.js, TypeScript, and MongoDB, covering frontend development
              and backend architecture. Developed RESTful APIs, implemented JWT
              authentication and OTP verification, designed database schemas,
              managed application business logic, and worked with MongoDB
              aggregation pipelines for data processing. Also gained practical
              experience with Docker, AWS, and cloud deployment through company
              projects, focusing on scalable architecture, secure APIs, and
              maintainable code.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
