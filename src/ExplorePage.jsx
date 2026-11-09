const VIDEOS = [
  { src: '/Video1.mp4', poster: '/img2.png', shape: 'vertical' },
  { src: '/Video2.mp4', poster: '/img1.png', shape: 'square' },
  { src: '/Video3.mp4', poster: '/img3.png', shape: 'square' },
  { src: '/Video3.mp4', poster: '/img4.png', shape: 'square' },
  { src: '/Video5.mp4', poster: '/img5.png', shape: 'square' },
  { src: '/Video1.mp4', poster: '/img5.png', shape: 'vertical' },
  { src: '/Video1.mp4', poster: '/img2.png', shape: 'square' },
  { src: '/Video2.mp4', poster: '/img1.png', shape: 'square' },
  { src: '/Video3.mp4', poster: '/img3.png', shape: 'square' },
  { src: '/Video3.mp4', poster: '/img4.png', shape: 'square' },
  { src: '/Video5.mp4', poster: '/img5.png', shape: 'vertical' },
  { src: '/Video1.mp4', poster: '/img5.png', shape: 'square' },
];

// play() returns a promise that rejects if playback is interrupted (for example by a quick
// mouse-leave); the rejection is expected and safe to ignore.
const play = (e) => e.currentTarget.play().catch(() => {});
const pause = (e) => e.currentTarget.pause();

function ExplorePage() {
  return (
    <div className="ml-[20.6667%] justify-center">
      <h1 className="sr-only">Explore</h1>
      <div className="p-4">
        <div className="grid grid-cols-3 grid-rows-3 gap-4">
          {VIDEOS.map((video, index) => (
            <div
              key={index}
              className={`relative cursor-pointer overflow-hidden rounded-lg shadow-lg transition-all duration-300 ${
                video.shape === 'square' ? 'w-[370px] h-[370px]' : 'w-[370px] h-[760px] row-span-2'
              }`}
            >
              <video
                src={video.src}
                poster={video.poster}
                aria-label={`Explore video ${index + 1}`}
                muted
                loop
                preload="none"
                tabIndex={0}
                className="w-full h-full object-cover"
                onMouseEnter={play}
                onMouseLeave={pause}
                onFocus={play}
                onBlur={pause}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ExplorePage;
