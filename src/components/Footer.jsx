"use client";

import { LogoFacebook } from "@gravity-ui/icons";
import { Mail, Phone } from "lucide-react";
import Link from "next/link";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";


const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-10">
      
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* 1. Services / Learning Links */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">
            Tutor Services
          </h2>
          <ul className="space-y-2">
            <li><Link href="/tutors" className="hover:text-white">Find Tutors</Link></li>
            <li><Link href="/add-tutor" className="hover:text-white">Add Tutor</Link></li>
            <li><Link href="/my-tutors" className="hover:text-white">Booked Tutors</Link></li>
          </ul>
        </div>

        {/* 2. Contact Information */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">
            Contact Info
          </h2>

          <div className="space-y-3 text-sm">
            <p className="flex items-center gap-2">
              <Phone size={16} /> +880 1234 567 890
            </p>
            <p className="flex items-center gap-2">
              <Mail size={16} /> support@tutorhub.com
            </p>
            <p>Dhaka, Bangladesh</p>
          </div>
        </div>

        {/* 3. Social Links */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">
            Follow Us
          </h2>

          <div className="flex gap-4">
            <a href="#" className="hover:text-white"><FaFacebook /></a>
            <a href="#" className="hover:text-white"><BiLogoInstagramAlt /></a>
            <a href="#" className="hover:text-white"><FaSquareXTwitter /></a>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-gray-700 text-center py-4 text-sm">
        © {new Date().getFullYear()} TutorHub. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;