import { NavLink } from 'react-router-dom';

const NAV_ITEMS = [
  { label: 'Home', icon: '/home.png', to: '/' },
  { label: 'Search', icon: '/search-interface-symbol.png', toggle: true },
  { label: 'Explore', icon: '/compass.png', to: '/explore' },
  { label: 'Reels', icon: '/image.png', to: '/reels' },
  { label: 'Messages', icon: '/mess.png' },
  { label: 'Notifications', icon: '/heart.png' },
  { label: 'Create', icon: '/create.png' },
  { label: 'Profile', icon: '/profile.jpg', round: true },
  { label: 'AI Studio', icon: '/profile.jpg', round: true, gapBefore: true },
  { label: 'Threads', icon: '/threads.png' },
  { label: 'More', icon: '/more.png' },
];

function Sidebar({ isCollapsed, toggleSidebar }) {
  const itemClass = (item, isActive = false) =>
    `m-2 flex w-[calc(100%-1rem)] items-center py-3 cursor-pointer rounded-lg hover:bg-gray-100 ${
      isCollapsed ? 'justify-center' : ''
    } ${item.gapBefore ? 'mt-10' : ''} ${isActive ? 'font-bold' : ''}`;

  const content = (item) => (
    <>
      <img
        src={item.icon}
        alt=""
        className={`h-6 w-6 ${isCollapsed ? '' : 'ml-3 mr-4'} ${item.round ? 'rounded-full' : ''}`}
      />
      {!isCollapsed && <span>{item.label}</span>}
    </>
  );

  return (
    <div className="relative">
      <nav
        aria-label="Primary"
        className={`fixed ${isCollapsed ? 'w-[72px]' : 'w-1/6'} h-screen border-r transition-all duration-300 z-10`}
      >
        <div className={`mt-8 mb-6 text-2xl font-semibold ${isCollapsed ? 'text-center' : 'ml-5'}`}>
          {isCollapsed ? 'L' : 'Lumigram'}
        </div>

        <ul className="space-y-1.5">
          {NAV_ITEMS.map((item) => (
            <li key={item.label}>
              {item.to ? (
                <NavLink
                  to={item.to}
                  end
                  aria-label={item.label}
                  className={({ isActive }) => itemClass(item, isActive)}
                >
                  {content(item)}
                </NavLink>
              ) : (
                <button
                  type="button"
                  aria-label={item.label}
                  aria-expanded={item.toggle ? isCollapsed : undefined}
                  className={itemClass(item)}
                  onClick={item.toggle ? toggleSidebar : undefined}
                >
                  {content(item)}
                </button>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* Search panel, shown while the sidebar is collapsed */}
      {isCollapsed && (
        <div className="fixed left-[72px] z-20 h-screen w-[400px] rounded-lg border bg-white p-4 shadow-lg">
          <p className="mb-5 ml-2.5 py-2 text-2xl font-bold">Search</p>
          <input
            type="search"
            aria-label="Search"
            placeholder="Search"
            className="mb-8 w-full rounded-lg border border-gray-300 p-2"
          />
          <p className="mb-5 ml-2 py-2 font-bold">Recent</p>
        </div>
      )}
    </div>
  );
}

export default Sidebar;
