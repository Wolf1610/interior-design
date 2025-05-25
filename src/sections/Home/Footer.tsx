import FooterBottom from "@/components/ButtonFooter";
import {
  FaLinkedinIn,
  FaPinterestP,
  FaYoutube,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";
import "@/app/globals.css";

export default function Footer() {
  return (
    <footer className=" bg-[#2e2e2e] text-white pt-16 pb-10">
      <div className="container">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo + Intro */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold uppercase tracking-wide">
              <span className="block">INTARCH STUDIO CONSULTANTS</span>
              <span className="text-lg text-gray-300">
                Mr. Himanshu Sahu
              </span>
            </h3>
            <p className="text-sm text-gray-400">
              Welcome to the world of signature style architecture & interiors
              by Intarch Studio.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white uppercase mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="/" className="hover:text-[#f45c2d] active:text-[#f45c2d]">
                  Home
                </a>
              </li>
              <li>
                <a href="/portfolio" className="hover:text-[#f45c2d] active:text-[#f45c2d]">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="/aboutus" className="hover:text-[#f45c2d] active:text-[#f45c2d]">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-[#f45c2d] active:text-[#f45c2d]">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h4 className="font-bold text-white uppercase mb-4">Projects</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="/project-category/architecture " className="hover:text-[#f45c2d] active:text-[#f45c2d]">
                  Architecture
                </a>
              </li>
              <li>
                <a href="/project-category/interior" className="hover:text-[#f45c2d] active:text-[#f45c2d]">
                  Interior
                </a>
              </li>
              <li>
                <a href="/project-category/cultural-complex" className="hover:text-[#f45c2d] active:text-[#f45c2d]">
                  Cultural Complexes
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold text-white uppercase mb-4">Newsletter</h4>
            <form className="flex items-center bg-white rounded overflow-hidden">
              <input
                type="email"
                placeholder="Email Address*"
                className="px-4 py-2 w-full text-black outline-none"
              />
              <button
                type="submit"
                className="bg-red-orange-500 px-4 py-2 text-white font-semibold"
              >
                Send
              </button>
            </form>

            <div className="mt-6">
              <h4 className="font-semibold text-white mb-2">Connect With Us</h4>
              <div className="flex space-x-4 text-white text-lg">
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#f45c2d] active:text-[#f45c2d] cursor-pointer"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href="https://www.pinterest.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#f45c2d] active:text-[#f45c2d] cursor-pointer"
                >
                  <FaPinterestP />
                </a>
                <a
                  href="https://www.youtube.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#f45c2d] active:text-[#f45c2d] cursor-pointer"
                >
                  <FaYoutube />
                </a>
                <a
                  href="https://www.twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#f45c2d] active:text-[#f45c2d] cursor-pointer"
                >
                  <FaTwitter />
                </a>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#f45c2d] active:text-[#f45c2d] cursor-pointer"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#f45c2d] active:text-[#f45c2d] cursor-pointer"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterBottom />
    </footer>
  );
}
