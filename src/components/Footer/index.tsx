
import Link from "next/link";
import SocialMediaIcons from "./SocialMediaIcons";

const Footer = () => {

  return (
    <div className="flex flex-col w-full text-center pb-12 mx-14">

              <div className="w-full flex justify-between sm:flex-row flex-col items-center">
                <div className="h-7 w-64" />
                <SocialMediaIcons gap='gap-14' />
                <div className="flex sm:gap-5 gap-3 my-6">
                <Link className="sm:text-lg text-sm underline" href="/about">About Us</Link>
                <Link className="sm:text-lg text-sm underline" href="/contact">Contact Us</Link>
                </div>
                
              </div>

              <p className="text-white/40 text-xs">
              Copyright © 2014-2024 Alight Motion All rights reserved. | <Link href='/privacy-policy' className="hover:underline">Privacy Policy</Link> | <Link href='/dmca' className="hover:underline">DMCA Disclaimer</Link> | <Link href="/terms-&-conditions" className="hover:underline">Terms & Conditons</Link>
              </p>
            </div>
  );
};

export default Footer;
