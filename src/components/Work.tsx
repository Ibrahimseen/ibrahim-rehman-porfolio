import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const projects = [
  {
    name: "Support AI - Multi-Tenant AI Chatbot SaaS",
    category: "SaaS",
    tools:
      "Next.js, TypeScript, MongoDB, Scalekit, Google Gemini API, Vercel",
    image: "/images/aiChatbot.png",
    link: "https://support-ai-rose.vercel.app/",
  },
  {
    name: "E-Kart - E-Commerce Platform",
    category: "E-Commerce",
    tools:
      "React.js, Redux, Tailwind CSS, Node.js, Express.js, MongoDB, JWT, Cloudinary",
    image: "/images/ecomerce.png",
    link: "https://ekart-frontend-ug4u.onrender.com/",
  },
  {
    name: "Eventix - Event Management Platform",
    category: "Web App",
    tools: "React.js, Node.js, Express.js, MongoDB, JWT, REST APIs",
    image: "/images/eventora.png",
    link: "https://event-booking-1-82p5.onrender.com/",
  },
  {
    name: "FitLinks - URL Shortener",
    category: "Web App",
    tools: "Next.js, React.js, REST API, Responsive Design",
    image: "/images/urlshortner.png",
    link: "https://github.com/Ibrahimseen",
  },
  {
    name: "YouTube Clone",
    category: "Frontend",
    tools: "React.js, CSS, JavaScript, YouTube Data API",
    image: "/images/youtbeclone.png",
    link: "https://github.com/Ibrahimseen",
  },
  {
    name: "MBA Chai Wala Clone",
    category: "Landing Page",
    tools: "React.js, CSS",
    image: "/images/chaiwalaclone.png",
    link: "https://github.com/Ibrahimseen",
  },
];

const Work = () => {
 useGSAP(() => {
  const mm = gsap.matchMedia();

  mm.add("(min-width: 1026px)", () => {
    const flex = document.querySelector<HTMLElement>(".work-flex");
    if (!flex) return;
    const getDistance = () => {
      const boxes = gsap.utils.toArray<HTMLElement>(".work-box");
      if (boxes.length === 0) return 0;

      const currentX = Number(gsap.getProperty(flex, "x")) || 0;
      const lastRect = boxes[boxes.length - 1].getBoundingClientRect();
      const lastRightUntransformed = lastRect.right - currentX;

      const paddingRight =
        parseFloat(getComputedStyle(flex).paddingRight) || 0;

      const distance =
        lastRightUntransformed + paddingRight - window.innerWidth;

      return Math.max(0, distance);
    };

    gsap.to(flex, {
      x: () => -getDistance(),
      ease: "none",
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: () => `+=${getDistance()}`,
        scrub: 0.6,
        pin: true,
        invalidateOnRefresh: true,
        anticipatePin: 1,
        id: "work",
      },
    });
  });

  return () => mm.revert();
}, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage
                image={project.image}
                alt={project.name}
                link={project.link}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
