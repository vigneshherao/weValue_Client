import React from "react";
import {
  FaInstagram,
  FaXTwitter,
  FaLinkedinIn,
  FaFacebookF,
  FaYoutube,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-white text-black border-t">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          {/* Logo + Social */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2 text-xl font-bold">
              WeValue
            </div>

            <div className="flex gap-4 text-gray-600 text-xl">
              <FaInstagram />
              <FaXTwitter />
              <FaLinkedinIn />
              <FaFacebookF />
            </div>

            <div className="text-sm text-gray-500 mt-2">
              <p>© 2025 WeValue</p>
            </div>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-sm">
            <div>
              <h4 className="font-semibold mb-2">Company</h4>
              <ul className="space-y-1 text-gray-600">
                <li>About us</li>
                <li>Careers</li>
                <li>Security</li>
                <li>Status</li>
                <li>Terms & privacy</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Download</h4>
              <ul className="space-y-1 text-gray-600">
                <li>iOS & Android</li>
                <li>Mac & Windows</li>
                <li>Calendar</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Resources</h4>
              <ul className="space-y-1 text-gray-600">
                <li>Help center</li>
                <li>Pricing</li>
                <li>Blog</li>
                <li>Community</li>
                <li>Integrations</li>
                <li>Templates</li>
                <li>Affiliates</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Wevalue for</h4>
              <ul className="space-y-1 text-gray-600">
                <li>Tution Center</li>
                <li>Education/Colleges</li>
                <li>Online Courses</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
