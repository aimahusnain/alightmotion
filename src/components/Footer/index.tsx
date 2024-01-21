
import { Tooltip } from "@nextui-org/tooltip";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineFacebook } from "react-icons/md";
import { RiTwitterXFill } from "react-icons/ri";
import { SlSocialYoutube } from "react-icons/sl";

const Footer = () => {

  return (
    <div className="flex flex-col w-full text-center pb-12 mx-8">

              <div className="w-full flex justify-between sm:flex-row flex-col items-center">
                <div className="h-7 w-64" />
                <div className="h-fit flex gap-14 py-8 justify-center">
                  <Tooltip showArrow={true} content="Instagram">
                    <Link
                      target="_blank"
                      href="https://www.instagram.com/alightmotion"
                    >
                      <FaInstagram
                        size={20}
                        className="hover:scale-125 transition-all"
                      />
                    </Link>
                  </Tooltip>

                  <Tooltip showArrow={true} content="Twitter">
                    <Link
                      target="_blank"
                      href="https://twitter.com/alightcreative"
                    >
                      <RiTwitterXFill
                        size={20}
                        className="hover:scale-125 transition-all"
                      />
                    </Link>
                  </Tooltip>

                  <Tooltip showArrow={true} content="Facebook">
                    <Link
                      target="_blank"
                      href="https://www.facebook.com/alightcreative"
                    >
                      <MdOutlineFacebook
                        size={20}
                        className="hover:scale-125 transition-all"
                      />
                    </Link>
                  </Tooltip>

                  <Tooltip showArrow={true} content="Youtube">
                    <Link
                      target="_blank"
                      href="https://youtube.com/alightmotion"
                    >
                      <SlSocialYoutube
                        size={20}
                        className="hover:scale-125 transition-all w-8"
                      />
                    </Link>
                  </Tooltip>
                </div>
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
