import { useEffect, useRef, useState } from "react";
import { FaGithub, FaInstagram, FaLinkedinIn, FaYoutube, FaTiktok } from "react-icons/fa6";
import type { IconType } from "react-icons";
import { MdArrowOutward, MdPlayArrow } from "react-icons/md";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./styles/Videos.css";

type VideoSource = "channel" | "platform";
type VideoFilter = "all" | VideoSource;

type Video = {
  id: string;
  title: string;
  category: string;
  source: VideoSource;
};

type Platform = {
  name: string;
  handle: string;
  desc: string;
  url: string;
  icon: IconType;
};

export const videos: Video[] = [
  {
    id: "N9EUpGBd-do",
    title: "Your video title 1",
    category: "React",
    source: "channel",
  },
  {
    id: "NTXQaLHxZrI",
    title: "Your video title 2",
    category: "Development",
    source: "channel",
  },
  {
    id: "N9EUpGBd-do",
    title: "Your video title 3",
    category: "React",
    source: "channel",
  },
];
export const platforms: Platform[] = [
  {
    name: "GitHub",
    handle: "@Ibrahimseen",
    desc: "Open-source projects and code.",
    url: "https://github.com/Ibrahimseen",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    handle: "Ibrahim Rehman",
    desc: "Professional experience and updates.",
    url: "https://www.linkedin.com/in/ibrahim-rehman-238422300/",
    icon: FaLinkedinIn,
  },
  {
    name: "Instagram",
    handle: "@ibrahim",
    desc: "Short-form content and the person behind the work.",
    url: "https://www.instagram.com/your_devloper?mdxt=bzRubjkyOHplOW4%3D&utm_source=qr",
    icon: FaInstagram,
  },
  {
    name: "YouTube",
    handle: "@YOUR_CHANNEL_HANDLE",
    desc: "Long-form tutorials and explanations.",
    url: "https://www.youtube.com/@your-devloper",
    icon: FaYoutube,
  },
  {
    name: "TikTok",
    handle: "Your_devloper",
    desc: "Long-form tutorials and explanations.",
    url: "https://www.tiktok.com/@itz_yourdevloper",
    icon: FaTiktok,
  },
];

const filters: { label: string; value: VideoFilter }[] = [
  { label: "All", value: "all" },
  { label: "My channel", value: "channel" },
  { label: "Platforms", value: "platform" },
];

const Videos = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const filterTimeout = useRef<number | null>(null);
  const filterFrame = useRef<number | null>(null);
  const [activeFilter, setActiveFilter] = useState<VideoFilter>("all");
  const [isFiltering, setIsFiltering] = useState(false);

  const visibleVideos = videos.filter(
    (video) => activeFilter === "all" || video.source === activeFilter
  );

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const reveals = section.querySelectorAll<HTMLElement>("[data-videos-reveal]");

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.set(reveals, { opacity: 1, y: 0 });
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const context = gsap.context(() => {
      gsap.fromTo(
        reveals,
        { opacity: 0, y: 18 },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          ease: "power3.out",
          stagger: 0.08,
          clearProps: "transform",
          scrollTrigger: {
            trigger: section,
            start: "top 95%",
            once: true,
            invalidateOnRefresh: true,
          },
        }
      );
    }, section);

    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    const timer = window.setTimeout(refresh, 800);

    return () => {
      window.removeEventListener("load", refresh);
      window.clearTimeout(timer);
      context.revert();
    };
  }, []);

  useEffect(
    () => () => {
      if (filterTimeout.current !== null) {
        window.clearTimeout(filterTimeout.current);
      }
      if (filterFrame.current !== null) {
        window.cancelAnimationFrame(filterFrame.current);
      }
    },
    []
  );

  const changeFilter = (filter: VideoFilter) => {
    if (filter === activeFilter) return;

    if (filterTimeout.current !== null) {
      window.clearTimeout(filterTimeout.current);
    }
    if (filterFrame.current !== null) {
      window.cancelAnimationFrame(filterFrame.current);
    }

    setIsFiltering(true);
    filterTimeout.current = window.setTimeout(() => {
      setActiveFilter(filter);
      filterFrame.current = window.requestAnimationFrame(() => {
        setIsFiltering(false);
        filterFrame.current = null;
      });
      filterTimeout.current = null;
    }, 180);
  };

  return (
    <section className="videos-section" id="videos" ref={sectionRef}>
      <div className="videos-container section-container">
        <header className="videos-header" data-videos-reveal>
          <p className="videos-eyebrow">05 / VIDEOS &amp; PLATFORMS</p>
          <h2>
            Teaching &amp; building
            <br />
            <em>
              in <span>public.</span>
            </em>
          </h2>
          <p className="videos-intro">
            Sharing what I learn while building useful things for the web.
            <br className="videos-intro-break" /> Tutorials, projects, and
            ideas in progress.
          </p>
          <div className="videos-divider" />
        </header>

        <div className="videos-library" data-videos-reveal>
          <div className="videos-library-heading">
            <div className="videos-filters" aria-label="Filter videos">
              {filters.map(({ label, value }) => (
                <button
                  type="button"
                  className={`videos-filter${activeFilter === value ? " is-active" : ""}`}
                  aria-pressed={activeFilter === value}
                  key={value}
                  onClick={() => changeFilter(value)}
                >
                  {label}
                </button>
              ))}
            </div>
            <h3>Selected videos</h3>

          </div>

          {videos.length === 0 ? (
            <p className="videos-empty">
              Videos are on the way. Check back soon.
            </p>
          ) : visibleVideos.length === 0 ? (
            <p className="videos-empty">
              No platform videos added yet. Choose another filter to explore.
            </p>
          ) : (
            <div
              className={`videos-grid${isFiltering ? " is-filtering" : ""}`}
              aria-live="polite"
            >
              {visibleVideos.map((video, index) => (
                <article className="video-card" key={`${video.id}-${index}`}>
                  <a
                    className="video-thumbnail"
                    href={`https://www.youtube.com/watch?v=${video.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Watch ${video.title} on YouTube`}
                  >
                    <img
                      src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                      alt={`${video.title} YouTube thumbnail`}
                      loading="lazy"
                    />
                    <span className="video-play-icon" aria-hidden="true">
                      <MdPlayArrow />
                    </span>
                  </a>
                  <div className="video-card-info">
                    <p className="video-category">
                      {video.category} <span>·</span>{" "}
                      {video.source === "channel" ? "My channel" : "Platform"}
                    </p>
                    <h4>{video.title}</h4>
                    <a
                      className="video-watch-link"
                      href={`https://www.youtube.com/watch?v=${video.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Watch on YouTube <MdArrowOutward aria-hidden="true" />
                    </a>
                  </div>
                  <span className="video-index" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </article>
              ))}
            </div>
          )}

          <a
            className="videos-view-all"
            href="https://www.youtube.com/@YOUR_CHANNEL_HANDLE"
            target="_blank"
            rel="noopener noreferrer"
          >
            View all on YouTube <MdArrowOutward aria-hidden="true" />
          </a>
        </div>

        <div className="videos-platforms" data-videos-reveal>
          <div className="videos-platforms-label">
            <p className="videos-eyebrow">AROUND THE WEB</p>
            <h3>Different places, same curiosity.</h3>
          </div>
          <div className="videos-platform-list">
            {platforms.map(({ name, handle, desc, url, icon: Icon }) => (
              <a
                className="videos-platform"
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                key={name}
              >
                <Icon className="videos-platform-icon" aria-hidden="true" />
                <span className="videos-platform-copy">
                  <span className="videos-platform-name">{name}</span>
                  <span className="videos-platform-handle">{handle}</span>
                  <span className="videos-platform-desc">{desc}</span>
                </span>
                <MdArrowOutward
                  className="videos-platform-arrow"
                  aria-hidden="true"
                />
              </a>
            ))}
          </div>
        </div>

        <div className="videos-cta" data-videos-reveal>
          <div>
            <p className="videos-eyebrow">HAVE A GOOD ONE IN MIND?</p>
            <h3>Let&apos;s build something together.</h3>
            <p>Have a project or an idea? I&apos;d love to hear about it.</p>
          </div>
          <a className="videos-cta-link" href="#contact">
            Let&apos;s connect <MdArrowOutward aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Videos;
