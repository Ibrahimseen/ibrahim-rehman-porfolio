import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);

  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };

  useEffect(() => {
    if (!ScrollTrigger.isTouch) return;

    const cleanups = containerRef.current.map((container) => {
      if (!container) return () => {};

      container.classList.remove("what-noTouch");
      const onClick = () => handleClick(container);
      container.addEventListener("click", onClick);

      return () => container.removeEventListener("click", onClick);
    });

    return () => cleanups.forEach((cleanup) => cleanup());
  }, []);

  return (
    <div className="whatIDO">
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            I<span className="do-h2"> DO</span>
          </div>
        </h2>
      </div>

      <div className="what-box">
        <div className="what-box-in">
          <div className="what-border2">
            <svg width="100%">
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
              <line
                x1="100%"
                y1="0"
                x2="100%"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
            </svg>
          </div>

          {/* DEVELOP */}
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 0)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="0"
                  x2="100%"
                  y2="0"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>

            <div className="what-content-in">
              <h3>DEVELOP</h3>
              <h4>Frontend and Backend</h4>
              <p>
                I build scalable and responsive web applications, combining
                modern frontend experiences with reliable backend systems and
                RESTful APIs. Focused on clean code, performance, and
                maintainable architecture.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">React.js</div>
                <div className="what-tags">Next.js</div>
                <div className="what-tags">TypeScript</div>
                <div className="what-tags">JavaScript</div>
                <div className="what-tags">Redux</div>
                <div className="what-tags">Zustand</div>
                <div className="what-tags">TanStack Query</div>
                <div className="what-tags">Tailwind CSS</div>
                <div className="what-tags">Material-UI</div>
                <div className="what-tags">Shadcn/UI</div>
                <div className="what-tags">Node.js</div>
                <div className="what-tags">Express.js</div>
                <div className="what-tags">MongoDB</div>
                <div className="what-tags">REST APIs</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>

          {/* ENGINEER */}
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 1)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>

            <div className="what-content-in">
              <h3>ENGINEER</h3>
              <h4>Infrastructure and DevOps</h4>
              <p>
                Beyond development, I explore system architecture, cloud
                infrastructure, automation, and deployment workflows to build
                reliable and efficient software solutions.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">Docker</div>
                <div className="what-tags">AWS</div>
                <div className="what-tags">Jenkins</div>
                <div className="what-tags">CI/CD</div>
                <div className="what-tags">Ansible</div>
                <div className="what-tags">Git</div>
                <div className="what-tags">GitHub</div>
                <div className="what-tags">Postman</div>
                <div className="what-tags">JWT</div>
                <div className="what-tags">REST APIs</div>
                <div className="what-tags">API Integration</div>
                <div className="what-tags">Cloud Deployment</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;

function handleClick(container: HTMLDivElement) {
  container.classList.toggle("what-content-active");
  container.classList.remove("what-sibling");

  if (container.parentElement) {
    const siblings = Array.from(container.parentElement.children);

    siblings.forEach((sibling) => {
      if (sibling !== container) {
        sibling.classList.remove("what-content-active");
        sibling.classList.toggle("what-sibling");
      }
    });
  }
}