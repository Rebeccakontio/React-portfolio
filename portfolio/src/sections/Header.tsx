export const Header = () => {
  return (
    <div className="flex justify-center items-center fixed top-3 w-full">
      <nav className="flex gap-1 p-0.5 border border-white/10 rounded-full bg-white/10 backdrop-blur">
        <a href="#" className="nav">
          Home
        </a>
        <a href="#" className="nav">
          About
        </a>
        <a href="#" className="nav">
          Projects
        </a>
        <a href="#" className="nav bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900">
          Contact
        </a>
      </nav>
    </div>
  );
};
