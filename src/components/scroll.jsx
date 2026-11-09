import { useRef } from 'react';

function ScrollableImageDiv() {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full flex items-center">
      {/* Left Icon */}
      <button
        type="button"
        aria-label="Scroll stories left"
        className="absolute left-0 z-10 bg-gray-200 rounded-full p-2 shadow hover:bg-gray-300"
        onClick={scrollLeft}
      >
        <img src="/left.png" alt="" className="h-4 w-4" />
      </button>

      {/* Scrollable Image Container */}
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-scroll space-x-4 px-8 scrollbar-hide"
      >
        {/* Images and Usernames */}
        {[...Array(10).keys()].map((i) => (
          <div key={i} className="flex flex-col items-center space-y-2">
            <div className="relative h-[60px] w-[60px] rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500  p-[2px]">
              <div className="h-full w-full rounded-full bg-white flex items-center justify-center">
                <span className="flex h-[54px] w-[54px] items-center justify-center rounded-full bg-gray-200 text-gray-600">
                  {i + 1}
                </span>
              </div>
            </div>
            <span className="text-xs text-gray-500">
              Username{i + 1}
            </span>
          </div>
        ))}
      </div>

      {/* Right Icon */}
      <button
        type="button"
        aria-label="Scroll stories right"
        className="absolute right-0 z-10 bg-gray-200 rounded-full p-2 shadow hover:bg-gray-300"
        onClick={scrollRight}
      >
        <img src="/right.png" alt="" className="h-4 w-4" />
      </button>
    </div>
  );
}

export default ScrollableImageDiv;
