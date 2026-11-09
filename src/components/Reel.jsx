import { FaHeart, FaCommentDots, FaShare, FaBookmark, FaEllipsisH } from "react-icons/fa";

const Reel = ({ video, username, likes }) => {
  return (
    <div className="flex justify-center items-center h-[700px] w-[400px]  bg-black text-white">
      <div className="relative w-full max-w-md h-full">
        {/* Video Section */}
        <div className="relative w-full h-full">
          <video
            src={video}
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            aria-label={`Reel by ${username}`}
          ></video>
          
          {/* Action Buttons */}
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4 items-center">
            <button type="button" aria-label="Like" className="flex flex-col items-center space-y-1">
              <FaHeart size={24} className="hover:text-red-500" />
              <span className="text-sm">{likes}</span>
            </button>
            <button type="button" aria-label="Comment" className="flex flex-col items-center space-y-1">
              <FaCommentDots size={24} className="hover:text-gray-300" />
              <span className="text-sm">345</span>
            </button>
            <button type="button" aria-label="Share" className="flex flex-col items-center space-y-1">
              <FaShare size={24} className="hover:text-gray-300" />
              <span className="text-sm">Share</span>
            </button>
            <button type="button" aria-label="Save" className="flex flex-col items-center space-y-1">
              <FaBookmark size={24} className="hover:text-gray-300" />
              <span className="text-sm">Save</span>
            </button>
            <button type="button" aria-label="More options">
              <FaEllipsisH size={24} className="hover:text-gray-300" />
            </button>
          </div>

          {/* Bottom Section */}
          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center space-x-2">
                <span className="font-semibold">@{username}</span>
                <button type="button" className="px-3 py-1 text-sm font-semibold border border-white rounded-lg hover:bg-blue-600">Follow</button>
              </div>
            </div>
            <p className="text-sm">
              This is a caption for the reel. It can be long and descriptive or short and concise. 
              <span className="font-semibold">#hashtag</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reel;
