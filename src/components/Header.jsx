import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-[#ff5200] font-sans">
      <div className="flex flex-wrap justify-between pt-8.5 pl-48 pr-48 pb-8.5">
        <Link to="/home">
          <div className="">
            <img
              className="h-12 "
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/static-assets/images/swiggy_logo_white.png"
              alt="Swiggy Logo"
            />
          </div>
        </Link>
        <div className="flex justify-between items-center w-150 text-white font-bold font-poppins">
          <a href="https://www.swiggy.com/corporate/">
            <button>Swiggy Corporate</button>
          </a>
          <a href="https://partner.swiggy.com/food/login">
            <button>Partner with us</button>
          </a>
          <a href="" className="border-2 rounded-xl p-3 w-30">
            <button>Get the App</button>
          </a>
          <button className="border-2 border-black rounded-xl p-3 bg-black w-30">
            Sign in
          </button>
        </div>
      </div>
      <div className="pt-16 pb-8 relative border-b border-gray-300">
        <div className="">
          <img
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png"
            alt=""
            className="absolute h-120 w-62 top-0"
          />
          <img
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png"
            alt=""
            className="absolute h-120 w-62 right-0 top-0"
          />
          <div className="w-340 h-28 flex justify-center mx-auto pb-32">
            <div className="text-5xl text-white font-bold max-w-[60%] text-center">
              Order food & groceries. Discover best restaurants. Swiggy it!
            </div>
          </div>
          <div className="flex gap-4 justify-center">
            <div className="bg-white rounded-xl h-15 w-76 flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 18 23"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.115 21.8122C12.4772 19.4062 17.7886 13.4751 17.7886 8.78883C17.7886 3.79647 13.9976 0 9.00526 0C4.0129 0 0.210938 3.79647 0.210938 8.78883C0.210938 13.4755 5.52998 19.4073 7.89476 21.8129C8.51149 22.4403 9.49871 22.44 10.115 21.8122ZM8.99988 12.7888C11.4269 12.7888 13.3943 10.8214 13.3943 8.39441C13.3943 5.96745 11.4269 4 8.99988 4C6.57292 4 4.60547 5.96745 4.60547 8.39441C4.60547 10.8214 6.57292 12.7888 8.99988 12.7888Z"
                  fill="#FF5200"
                />
              </svg>
              <input
                type="text"
                placeholder="Enter your delivery location"
                className="w-[80%] h-[100%] font-bold ml-2"
              />
            </div>
            <div className="bg-white rounded-xl h-15 w-121 flex justify-center items-center">
              <input
                type="text"
                placeholder="Search for restraunt, item or more"
                className="w-[80%] h-[100%] font-bold"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gray-500"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center pb-6">
        <div className="flex justify-center items-center max-w-[80%] min-height-[320px]">
          <Link to="/restaurants">
            <div className="">
              <img
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.png"
                alt=""
              />
            </div>
          </Link>
          <Link to="">
            <div className="">
              <img
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b5c57bbf-df54-4dad-95d1-62e3a7a8424d_IM3BU.png"
                alt=""
              />
            </div>
          </Link>
          <Link to="">
            <div className="">
              <img
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b6d9b7ab-91c7-4f72-9bf2-fcd4ceec3537_DO3BU.png"
                alt=""
              />
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
