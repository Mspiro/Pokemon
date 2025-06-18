import { FaGithub, FaTwitter } from 'react-icons/fa';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 px-4 py-10 mt-auto">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Section 1 */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Pokemon</h3>
          <p className="text-sm">Discover detailed info on every Pokemon.</p>
        </div>

        {/* Section 2 */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-white">Home</Link></li>
            <li><Link href="/pokemon-list" className="hover:text-white">Pokemon List</Link></li>
            <li><Link href="/about" className="hover:text-white">About</Link></li>
          </ul>
        </div>

        {/* Section 3 */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom text */}
      <div className="mt-8 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Pokemon. All rights reserved.
      </div>
    </footer>
  );
}
