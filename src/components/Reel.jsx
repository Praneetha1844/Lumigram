import { useEffect, useRef } from "react";
import { FaHeart, FaCommentDots, FaShare, FaBookmark, FaEllipsisH } from "react-icons/fa";

// Plays the video only while at least 60% of it is on screen, so several reels on one
// page do not all decode at once.
function usePlayWhileVisible(ref) {
  useEffect(() => {
    const video = ref.current;
    if (!video || typeof IntersectionObserver === "undefined") return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => {});
        else video.pause();
      },
      { threshold: 0.6 }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, [ref]);
}

const Reel = ({ video, username, likes }) => {
  const videoRef = useRef(null);
  usePlayWhileVisible(videoRef);

  // Click or Enter/Space toggles playback, so motion can be stopped (WCAG 2.2.2).
  const toggle = () => {
    const el = videoRef.current;
    if (!el) return;
    if (el.paused) el.play().catch(() => {});
    else el.pause();
  };

  return (
    <div className="flex justify-center items-center h-[700px] w-[400px] bg-black text-white">
      <div className="relative w-full max-w-md h-full">
        {/* Video Section */}
        <div className="relative w-full h-full">
          <video
            ref={videoRef}
            src={video}
            className="w-full h-full object-cover"
            loop
            muted
            playsInline
            preload="metadata"
            tabIndex={0}
            onClick={toggle}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                toggle();
              }
            }}
            aria-label={`Reel by ${username}. Press Enter to play or pause.`}
          ></video>

          {/* Action Buttons */}
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4 items-center">
            <button type="button" aria-label="Like" className="flex flex-col items-center space-y-1">
              <FaHeart size={24} className="hover:text-red-500" aria-hidden="true" />
              <span className="text-sm">{likes}</span>
            </button>
            <button type="button" aria-label="Comment" className="flex flex-col items-center space-y-1">
              <FaCommentDots size={24} className="hover:text-gray-300" aria-hidden="true" />
              <span className="text-sm">345</span>
            </button>
            <button type="button" aria-label="Share" className="flex flex-col items-center space-y-1">
              <FaShare size={24} className="hover:text-gray-300" aria-hidden="true" />
              <span className="text-sm">Share</span>
            </button>
            <button type="button" aria-label="Save" className="flex flex-col items-center space-y-1">
              <FaBookmark size={24} className="hover:text-gray-300" aria-hidden="true" />
              <span className="text-sm">Save</span>
            </button>
            <button type="button" aria-label="More options">
              <FaEllipsisH size={24} className="hover:text-gray-300" aria-hidden="true" />
            </button>
          </div>

          {/* Bottom Section */}
          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center space-x-2">
                <span className="font-semibold">@{username}</span>
                <button
                  type="button"
                  className="px-3 py-1 text-sm font-semibold border border-white rounded-lg hover:bg-blue-600"
                >
                  Follow
                </button>
              </div>
            </div>
            <p className="text-sm">
              This is a caption for the reel. It can be long and descriptive or short and concise.{" "}
              <span className="font-semibold">#hashtag</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reel;
