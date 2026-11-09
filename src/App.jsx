import ScrollableImageDiv from './components/scroll';
import ImagePost from './components/ImagePost';
import ProfileCard from './components/ProfileCard';

// Demo content: static placeholder data, there is no backend.
const POSTS = [1, 2, 3, 4, 5].map((n) => ({
  profilePicture: `/img${n}.png`,
  profileName: `user${n}`,
  postImage: `/img${n}.png`,
  likesCount: n * 100,
}));

const SUGGESTIONS = [2, 3, 4, 5].map((n) => ({
  profilePicture: `/img${n}.png`,
  profileName: `User${n}`,
  username: String(n),
}));

function App() {
  return (
    <div className="app-container flex ml-[300px]">
      <div className="w-[700px] justify-center z-10">
        <div className="h-32 w-[700px] px-[42px] py-[25px]">
          <ScrollableImageDiv />
        </div>
        <section aria-label="Feed" className="px-[120px]">
          {POSTS.map((post) => (
            <ImagePost key={post.profileName} {...post} />
          ))}
        </section>
      </div>

      <aside aria-label="Suggestions" className="w-[370px] ml-[20px] px-[25px] mt-[6px]">
        <div className="py-[20px]">
          <ProfileCard profilePicture="/img1.png" profileName="User1" username="1" />
          <div className="flex text-sm mt-[10px]">
            <div className="text-gray-400 mr-[100px] mt-[5px] font-bold">Suggested for you</div>
            <div className="text-xs ml-[20px] font-bold">See All</div>
          </div>
        </div>
        {SUGGESTIONS.map((s) => (
          <ProfileCard key={s.username} {...s} />
        ))}
        <div className="mt-[70px] px-[9px] text-xs text-gray-400">About · Help · Press · API · Jobs · Privacy · Terms</div>
        <div className="mt-[7px] px-[9px] text-xs text-gray-400">Locations · Language</div>
      </aside>
    </div>
  );
}

export default App;
