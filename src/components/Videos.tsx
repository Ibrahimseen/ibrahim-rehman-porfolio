import { MdPlayArrow } from "react-icons/md";
import "./styles/Videos.css";

const videos = [
  {
    title: "Video 1",
    videoId: "N9EUpGBd-do",
    thumbnail: "/youtube-1.jpg",
  },
  {
    title: "Video 2",
    videoId: "NTXQaLHxZrI",
    thumbnail: "/youtube-2.jpg",
  },
];

const Videos = () => {
  return (
    <section className="videos-section" id="videos">
      <div className="videos-container section-container">
        <h2>
          <span>Videos</span>
        </h2>
        <div className="videos-grid">
          {videos.map(({ title, videoId, thumbnail }, index) => {
            const fallbackThumbnail = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

            return (
              <a
                className="video-card"
                href={`https://www.youtube.com/watch?v=${videoId}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${title} on YouTube`}
                key={videoId}
              >
                <div className="video-card-heading">
                  <h3>0{index + 1}</h3>
                  <h4>{title}</h4>
                </div>
                <div className="video-thumbnail">
                  <img
                    src={thumbnail}
                    alt={`${title} YouTube thumbnail`}
                    onError={(event) => {
                      if (event.currentTarget.src !== fallbackThumbnail) {
                        event.currentTarget.src = fallbackThumbnail;
                      }
                    }}
                  />
                  <span className="video-play-icon" aria-hidden="true">
                    <MdPlayArrow />
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Videos;
