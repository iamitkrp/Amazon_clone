import Image from "next/image";
import logo from "../images/logo.png";

const Footer = () => {
  return (
    <div className="w-full h-20 bg-amazon_light text-gray-300 flex items-center justify-center gap-4">
      <Image className="w-24" src={logo} alt="logo" />
      <p className="text-sm -mt-4">
        <a
          className="hover:text-white hover:underline decoration-[1px] cursor-pointer duration-300"
          href="https://www.cuchd.in/"
          target="_blank"
        >
          Made by - Amit, Akash, Arpit, Om and Sandeep.
        </a>
      </p>
    </div>
  );
};

export default Footer;
