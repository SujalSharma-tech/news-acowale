import applogo from "../assets/applogo.png";
import { Copyright } from "lucide-react";
const FooterComponent = () => {
  return (
    <>
      <div className="footer bg-[#0E1E32] h-auto w-full p-4 pb-0 mt-5 border-b-2 border-slate-700">
        <div className="w-32 invert">
          <img src={applogo} alt="" />
        </div>
        <div className="links flex gap-2 justify-between  pb-5 ">
          <div>
            <ul className="flex flex-col text-white font-semibold mt-10 text-[15px] gap-3">
              <li className=" list-none">Privacy Policy</li>
              <li className=" list-none">Do not sell my personal info</li>
              <li className=" list-none">Terms of Service</li>
              <li className=" list-none">nbcnews.com Site Map</li>
            </ul>
          </div>
          <div>
            <ul className="flex flex-col text-white font-semibold mt-10 text-[15px] gap-3">
              <li className=" list-none">About</li>
              <li className=" list-none">Contacts</li>
              <li className=" list-none">Career</li>
              <li className=" list-none">Coupons</li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <p className="flex text-slate-700 py-2 justify-center bg-[#0E1E32]">
          Copyright <Copyright /> 2024 acowale news site
        </p>
      </div>
    </>
  );
};

export default FooterComponent;
