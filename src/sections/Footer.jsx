import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-[#222] text-white">

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20
                      grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-16">

        {/* LEFT SIDE */}
        <div>

          {/* Title */}
          <p className="font-semibold mb-10">APURA CLOUD</p>

          {/* Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-16 gap-y-6 text-sm">

            {/* Products */}
            <div>
              <p className="text-white/50 mb-4">Products</p>
              <ul className="space-y-3">
                <li>Apura IaaS</li>
                <li>Apura Workspace</li>
                <li>Apura Socials</li>
              </ul>
            </div>

            {/* Roadmap */}
            <div>
              <p className="text-white/50 mb-4">Roadmap</p>
              <ul className="space-y-3">
                <li>Stage 1</li>
                <li>Stage 2</li>
                <li>Stage 3</li>
                <li>Stage 4</li>
                <li>Stage 5</li>
              </ul>
            </div>

            {/* Help */}
            <div>
              <p className=" mb-4">Help us on our journey</p>
              <ul className="space-y-3">
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
              </ul>
            </div>

          </div>

          {/* Bottom */}
          <div className="mt-16">

{/* Social Icons */}
<div className="flex gap-4 mb-4">
  <span className="w-9 h-9 rounded-full bg-[#EFFF6A] flex items-center justify-center text-black">
    <FaFacebookF size={16} />
  </span>

  <span className="w-9 h-9 rounded-full bg-[#EFFF6A] flex items-center justify-center text-black">
    <FaInstagram size={16} />
  </span>

  <span className="w-9 h-9 rounded-full bg-[#EFFF6A] flex items-center justify-center text-black">
    <FaTwitter size={16} />
  </span>

  <span className="w-9 h-9 rounded-full bg-[#EFFF6A] flex items-center justify-center text-black">
    <FaYoutube size={16} />
  </span>
</div>



            {/* Copyright */}
            <p className="text-white/60 text-sm">
              © 2025 Apura Cloud. All rights reserved.
            </p>

          </div>
        </div>

        {/* RIGHT SIDE MAP */}
<div className="hidden md:flex justify-end items-center opacity-40">
  <img
    src="/europe-map.png"
    alt="Europe map"
    className="w-[420px] max-w-full"
  />
</div>


      </div>
    </footer>
  )
}
