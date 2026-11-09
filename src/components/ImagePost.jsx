function ImagePost({ profilePicture, profileName, postImage, likesCount }) {
  return (
    <div className="border rounded-lg shadow-sm mb-6 bg-white">
      {/* Header: Profile Picture and Name */}
      <div className="flex items-center p-4">
        <img
          src={profilePicture}
          alt={`${profileName} profile picture`}
          loading="lazy"
          className="h-10 w-10 rounded-full mr-4"
        />
        <span className="font-semibold text-gray-800">{profileName}</span>
      </div>

      {/* Post Image */}
      <div>
        <img
          src={postImage}
          alt={`Post by ${profileName}`}
          loading="lazy"
          className="w-full h-[500px] object-cover"
        />
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between items-center p-4">
        {/* Left Actions */}
        <div className="flex space-x-4">
          {/* Like Icon */}
          <button type="button" aria-label="Like" className="focus:outline-none">
            <img
              src="/heart.png"
              alt=""
              className="h-6 w-6"
            />
          </button>
          {/* Comment Icon */}
          <button type="button" aria-label="Comment" className="focus:outline-none">
            <img
              src="/comment.png"
              alt=""
              className="h-6 w-6"
            />
          </button>
          {/* Share Icon */}
          <button type="button" aria-label="Share" className="focus:outline-none">
            <img
              src="/share.png"
              alt=""
              className="h-6 w-6"
            />
          </button>
        </div>

        {/* Save Icon */}
        <button type="button" aria-label="Save" className="focus:outline-none">
          <img
            src="/save.png"
            alt=""
            className="h-6 w-6"
          />
        </button>
      </div>

      {/* Likes Count */}
      <div className=" text-sm text-gray-600 px-[18px] font-bold">
        {likesCount || 0} {likesCount === 1 ? "like" : "likes"}
      </div>
    </div>
  );
}

export default ImagePost;
