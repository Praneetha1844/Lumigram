import Reel from './components/Reel';

const REELS = [
  { video: '/Video1.mp4', username: 'john_doe', likes: '12.3K' },
  { video: '/Video2.mp4', username: 'doe_john', likes: '12.3K' },
  { video: '/Video5.mp4', username: 'johny_doey', likes: '12.3K' },
];

function ReelsPage() {
  return (
    <div className="p-8 flex flex-col items-center justify-center px-[610px]">
      <h1 className="sr-only">Reels</h1>
      {REELS.map((reel) => (
        <div key={reel.username} className="mb-4 rounded-lg overflow-hidden shadow-lg">
          <Reel {...reel} />
        </div>
      ))}
    </div>
  );
}

export default ReelsPage;
