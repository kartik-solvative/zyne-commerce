import type { Props as NavigationProps } from "#components/Navigation";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { IoLogoYoutube } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";

export type HeaderProps = Partial<NavigationProps>;

export const FirstSubHeader: React.FC<HeaderProps> = () => {
  return (
    <div className="bg-red-800 flex p-2 justify-evenly">
      <div className="leftFirstSubHeaderDiv flex items-center">
        <span className="text-white font-bold text-sm">
          FREE DELIVERY FOR SELECTED ORDERS
        </span>
      </div>
      <div className="rightFirstSubHeaderDiv w-1/2 flex justify-end">
        <div className="iconRightFirstSubHeaderDiv w-1/6 justify-between flex text-white font-bold text-sm items-center">
          <FaFacebookF />
          <FaTwitter />
          <IoMail />
          <IoLogoYoutube />
          <FaLinkedin />
        </div>
        <div className="callUsRightFirstSubHeaderDiv ml-2 w-1/3 text-center">
          <span className="text-white font-bold text-sm">
            CALL US: +61 8 8293834 554
          </span>
        </div>
        <div className="newsletterRightFirstSubHeaderDiv w-1/5 text-center">
          <span className="text-white font-bold text-sm">NEWSLETTER</span>
        </div>
      </div>
    </div>
  );
};
