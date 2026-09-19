function Footer() {
  return (
    <footer className="bg-[#f1f1f6] mt-16">
      <div className="max-w-6xl mx-auto px-6 py-12">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          <div>
            <div className="flex items-center gap-2 mb-5">
              <div className="bg-[#ff5200] text-white font-bold text-2xl w-10 h-10 rounded-lg flex items-center justify-center">
                S
              </div>

              <span className="text-2xl font-bold text-[#ff5200]">
                Swiggy
              </span>
            </div>

            <p className="text-gray-500 text-sm leading-6">
              © 2026 Swiggy Clone
            </p>

            <p className="text-gray-500 text-sm mt-2">
              Made using React JS
            </p>
          </div>

          <div>
            <h3 className="font-bold text-gray-800 mb-5">
              Company
            </h3>

            <ul className="space-y-3 text-gray-500 text-sm">
              <li className="hover:text-[#ff5200] cursor-pointer">About Us</li>
              <li className="hover:text-[#ff5200] cursor-pointer">Careers</li>
              <li className="hover:text-[#ff5200] cursor-pointer">Team</li>
              <li className="hover:text-[#ff5200] cursor-pointer">Swiggy One</li>
              <li className="hover:text-[#ff5200] cursor-pointer">Swiggy Instamart</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-gray-800 mb-5">
              Contact & Support
            </h3>

            <ul className="space-y-3 text-gray-500 text-sm">
              <li className="hover:text-[#ff5200] cursor-pointer">
                Help & Support
              </li>
              <li className="hover:text-[#ff5200] cursor-pointer">
                Partner with us
              </li>
              <li className="hover:text-[#ff5200] cursor-pointer">
                Ride with us
              </li>
              <li className="hover:text-[#ff5200] cursor-pointer">
                Terms & Conditions
              </li>
              <li className="hover:text-[#ff5200] cursor-pointer">
                Privacy Policy
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-gray-800 mb-5">
              Follow Us
            </h3>

            <div className="flex gap-4">
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-gray-600 hover:bg-[#ff5200] hover:text-white transition"
              >
                X
              </a>

              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-gray-600 hover:bg-[#ff5200] hover:text-white transition"
              >
                in
              </a>

              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-gray-600 hover:bg-[#ff5200] hover:text-white transition"
              >
                f
              </a>

              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-gray-600 hover:bg-[#ff5200] hover:text-white transition"
              >
                ◎
              </a>
            </div>
          </div>

        </div>

        <div className="border-t border-gray-300 my-10"></div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          <h2 className="text-xl font-bold text-gray-700 text-center md:text-left">
            For better experience, download the app
          </h2>

          <div className="flex gap-4">
            <button className="bg-black text-white px-5 py-3 rounded-lg flex items-center gap-2 hover:scale-105 transition">
              <span className="text-xl">▶</span>
              <div className="text-left">
                <p className="text-[10px]">GET IT ON</p>
                <p className="font-semibold text-sm">Google Play</p>
              </div>
            </button>

            <button className="bg-black text-white px-5 py-3 rounded-lg flex items-center gap-2 hover:scale-105 transition">
              <span className="text-xl"></span>
              <div className="text-left">
                <p className="text-[10px]">Download on the</p>
                <p className="font-semibold text-sm">App Store</p>
              </div>
            </button>
          </div>

        </div>

      </div>

      <div className="bg-[#e5e5eb] py-4">
        <p className="text-center text-sm text-gray-500">
          © 2026 Swiggy Clone. This project is created for educational purposes.
        </p>
      </div>
    </footer>
  );
}

export default Footer;