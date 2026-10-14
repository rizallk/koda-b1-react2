import { Link } from 'react-router';

export default function Navbar() {
  return (
    <nav className="flex justify-around border border-fuchsia-700 rounded-lg py-3 mb-5 border-b-4 text-fuchsia-700">
      <Link to="/" className="hover:text-fuchsia-900 transition">
        Home
      </Link>
      <Link to="/about" className="hover:text-fuchsia-900 transition">
        About
      </Link>
      <Link to="/contact" className="hover:text-fuchsia-900 transition">
        Contact
      </Link>
    </nav>
  );
}
