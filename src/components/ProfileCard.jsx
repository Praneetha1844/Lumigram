function ProfileCard({ profilePicture, profileName, username }) {
  return (
    <div className="flex items-center justify-between bg-white p-1 mb-[5px] w-[315px] ">
      {/* Profile Picture, Name, and Username */}
      <div className="flex items-center space-x-2">
        <img
          src={profilePicture}
          alt={`${profileName} profile picture`}
          className="h-12 w-12 rounded-full"
        />
        <div className="flex flex-col">
          <span className="font-semibold text-gray-800">{profileName}</span>
          {/* Username below the profile name */}
          <span className="text-sm text-gray-600">{`@${username}`}</span>
        </div>
      </div>

      {/* Follow Button */}
      <button type="button" className="py-2 text-blue-700 hover:text-black transition-colors duration-300 text-xs font-bold">
        Follow
      </button>
    </div>
  );
}

export default ProfileCard;
