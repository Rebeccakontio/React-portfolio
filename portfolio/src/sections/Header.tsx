export const Header = () => {
  return (
    <div className="flex justify-center items-center fixed top-4 w-full z-50">
      <nav className="flex gap-1 p-0.5 border border-white/10 rounded-full bg-white/20 backdrop-blur">
        <a href="#about" className="nav">
          About
        </a>
        <a href="#projects" className="nav">
          Projects
        </a>
        <a href="#experience" className="nav">
          Experience
        </a>
        <a
          href="mailto:kontiorebecca@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="nav bg-white text-gray-900 hover:bg-cyan-400 hover:text-gray-900"
        >
          Contact
        </a>
      </nav>
    </div>
  );
};
