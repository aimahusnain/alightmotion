
import { Tooltip } from "@nextui-org/tooltip";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineFacebook } from "react-icons/md";
import { RiTwitterXFill } from "react-icons/ri";
import { SlSocialYoutube } from "react-icons/sl";

const Footer = () => {

  return (
    <div className="flex flex-col text-center pb-12">
      <div className="w-full flex justify-between items-center">
        <div className="h-7 w-52" />
        <div className="h-fit flex gap-14 py-8 justify-center">
          <Tooltip showArrow={true} content="Instagram">
            <Link target="_blank" href="https://www.instagram.com/alightmotion">
              <FaInstagram
                size={20}
                className="hover:scale-125 transition-all"
              />
            </Link>
          </Tooltip>

          <Tooltip showArrow={true} content="Twitter">
            <Link target="_blank" href="https://twitter.com/alightcreative">
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
            <Link target="_blank" href="https://youtube.com/alightmotion">
              <SlSocialYoutube
                size={20}
                className="hover:scale-125 transition-all w-8"
              />
            </Link>
          </Tooltip>
        </div>
        
        <div className="flex gap-5">
          <Link className="text-lg underline" href="/privacy-policy">
            Privacy & Policy
          </Link>
          <Link className="text-lg underline" href="/terms-&-conditions">
            Terms & Conditions
          </Link>
          <Link className="text-lg underline" href="/dmca">
            DMCA
          </Link>
        </div>
      </div>

      <p className="text-white/40 text-xs">
        Copyright © Splice Video Editor S.r.l. | Corso Como 15, 20154 Milan,
        Italy | VAT, tax code, and number of registration with the Milan Monza
        Brianza Lodi Company Register 11505810967 | REA number MI 2608304 |
        Contributed capital €10.000,00 | Sole shareholder company subject to the
        management and coordination of Bending Spoons S.p.A.{" "}
      </p>
    </div>
  );
};

export default Footer;
