"use client";

import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { RiMenu2Line } from "react-icons/ri";
import { FaRedditAlien } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import React from "react";
import { LuLink } from "react-icons/lu";
import siteMetadata from "@/src/utils/siteMetaData";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaShareAlt } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaHackerNews } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { Divider } from "@nextui-org/react";

const Butybar = ({ blogy }: { blogy: any }) => {
  const [isVisible, setIsVisible] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [backdrop, setBackdrop] = React.useState("opaque");
  const iconClasses =
    "text-lg text-default-500 pointer-events-none flex-shrink-0";
  // const { toast } = useToast();

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      setIsVisible(scrolled > 350);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const copyToClipboard = async (url: string) => {
    try {
      await navigator.clipboard.writeText(url);
      // Use toast.success to display a success message
      toast.success("URL copied to clipboard!");
    } catch (err) {
      // Use toast.error to display an error message
      toast.error("Failed to copy URL to clipboard");
    }
  };

  const handleOpen = (backdrop: any) => {
    setBackdrop(backdrop);
    onOpen();
  };

  const [scrollMargin, setScrollMargin] = useState(0);

  const handleButtonClick = (e: any, myelement: string) => {
    // You can adjust the scroll margin as needed
    const newScrollMargin = 60;
    setScrollMargin(newScrollMargin);

    // Scroll to the element with the specified ID
    const element = document.getElementById(myelement);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - newScrollMargin,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="w-full p-4 px-5 sm:px-10 flex items-center justify-between">
      <nav
        className="border border-white w-max px-10 py-0.5 border-solid rounded-full font-medium capitalize items-center flex fixed bottom-6 right-1/2 translate-x-1/2 bg-alightdarkbg z-50 transition-all ease duration-300 gap-4"
        style={{
          bottom: isVisible ? "1.5rem" : "-5rem",
        }}
      >
        <Button
          isIconOnly
          className="capitalize text-white rounded-full bg-transparent focus:border focus:border-white hover:bg-black"
          onPress={() => handleOpen("tableofcontents")}
          aria-label="Table of Contents"
        >
          <FaBarsStaggered />
        </Button>
        <Modal backdrop="blur" isOpen={isOpen} onClose={onClose}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  Table of Contents
                </ModalHeader>
                <ModalBody>
                  <ul className="mt-4 text-base">
                    {blogy.toc.map((heading: any) => {
                      return (
                        <li
                          key={`#${heading.slug}`}
                          className="py-1"
                          onClick={onClose}
                        >
                          <button
                            // href={`#${heading.slug}`}
                            onClick={(e) =>
                              handleButtonClick(e, `${heading.slug}`)
                            }
                            data-level={heading.level}
                            className="data-[level=two]:pl-0 data-[level=two]:pt-2 data-[level=two]:border-t border-solid border-zinc-500/10 data-[level=three]:pl-4 sm:data-[level=three]:pl-6 w-full hover:bg-alightdarkbg transition-all duration-400 rounded-lg p-3 flex items-center justify-start !text-left"
                          >
                            {heading.level === "three" ? (
                              <span className="flex w-4 h-4 rounded-full mr-1 items-center justify-start">
                                <ChevronRight className="-mr-4" />
                              </span>
                            ) : null}

                            <p className="pl-4">{heading.text}</p>
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Close
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>

        <div className="h-7 bg-zinc-500 w-[0.25px]" />

        <Dropdown className="ml-[150px] w-fit">
          <DropdownTrigger>
            <button className="w-10 h-10 p-2 hover:bg-black flex items-center justify-center transition-all duration-150 rounded-full">
              <FaShareAlt />
            </button>
          </DropdownTrigger>
          <DropdownMenu variant="faded">
            <DropdownItem
              className="text-primary"
              color="primary"
              key="permalink"
              onPress={() =>
                copyToClipboard(`${siteMetadata.siteUrl}${blogy.url}`)
              }
              startContent={<LuLink className={iconClasses} />}
            >
              Permalink
            </DropdownItem>
            <DropdownItem
              key="twitter"
              startContent={<RiTwitterXFill className={iconClasses} />}
            >
              Twitter
            </DropdownItem>
            <DropdownItem
              key="reddit"
              startContent={<FaRedditAlien className={iconClasses} />}
            >
              Reddit
            </DropdownItem>
            <DropdownItem
              key="linkedin"
              startContent={<FaLinkedinIn className={iconClasses} />}
            >
              Linkedin
            </DropdownItem>
            <DropdownItem
              key="Hacker News"
              startContent={<FaHackerNews className={iconClasses} />}
            >
              Hacker News
            </DropdownItem>
            <DropdownItem
              key="facebook"
              startContent={<FaFacebook className={iconClasses} />}
            >
              Facebook
            </DropdownItem>
            <DropdownItem
              key="whatsup"
              startContent={<FaWhatsapp className={iconClasses} />}
            >
              Whats Up
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </nav>
    </header>
  );
};

export default Butybar;
