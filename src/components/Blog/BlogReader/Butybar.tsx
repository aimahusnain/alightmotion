"use client";

// import {
//   Dialog,
//   DialogClose,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/src/components/ui/dialog";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";

import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { RiMenu2Line } from "react-icons/ri";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuGroup,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuPortal,
//   DropdownMenuSeparator,
//   DropdownMenuShortcut,
//   DropdownMenuSub,
//   DropdownMenuSubContent,
//   DropdownMenuSubTrigger,
//   DropdownMenuTrigger,
// } from "@/src/components/ui/dropdown-menu"

import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import { cn } from "@nextui-org/react";
import React from "react";

const Butybar = ({ blogy }: { blogy: any }) => {
  const [isVisible, setIsVisible] = useState(false);
  const iconClasses =
    "text-xl text-default-500 pointer-events-none flex-shrink-0";

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

      console.log("URL copied to clipboard:", url);
    } catch (err) {
      console.error("Failed to copy URL to clipboard:", err);
    }
  
  
  };


  const {isOpen, onOpen, onClose} = useDisclosure();
  const [backdrop, setBackdrop] = React.useState('opaque')

  const backdrops = ["opaque", "blur", "transparent"];

  const handleOpen = (backdrop: any) => {
    setBackdrop(backdrop)
    onOpen();
  }
  
  
  return (
    <header className="w-full p-4 px-5 sm:px-10 flex items-center justify-between">
      <nav
        className="border border-white w-max py-3 px-4 sm:px-8 border-solid rounded-full font-medium capitalize items-center flex fixed bottom-6 right-1/2 translate-x-1/2 bg-alightdarkbg z-50 transition-all ease duration-300 gap-2"
        style={{
          bottom: isVisible ? "1.5rem" : "-5rem",
        }}
      >
        {/* <Dialog>
          <DialogTrigger>
            <button className="w-10 h-10 p-2 hover:bg-black flex items-center justify-center transition-all duration-150 rounded-full">
              <RiMenu2Line />
            </button>{" "}
          </DialogTrigger>
          <DialogContent className="bg-alightdarkbg">
            <DialogHeader>
              <DialogTitle>Table of contents</DialogTitle>
            </DialogHeader>
            <ul className="mt-4 text-base">
              {blogy.toc.map((heading: any) => {
                return (
                  <li key={`#${heading.slug}`} className="py-1">
                    <DialogClose asChild>
                      <Link
                        href={`#${heading.slug}`}
                        // onClick={(e) => handleButtonClick(e, `${heading.slug}`)}
                        data-level={heading.level}
                        className="data-[level=two]:pl-0 data-[level=two]:pt-2 data-[level=two]:border-t border-solid border-zinc-500/10 data-[level=three]:pl-4 sm:data-[level=three]:pl-6 w-full hover:bg-black transition-all duration-400 rounded-lg p-3 flex items-center justify-start !text-left"
                      >
                        {heading.level === "three" ? (
                          <span className="flex w-4 h-4 rounded-full mr-1 items-center justify-start">
                            <ChevronRight className="-mr-4" />
                          </span>
                        ) : null}

                        <p className="pl-4">{heading.text}</p>
                      </Link>
                    </DialogClose>
                  </li>
                );
              })}
            </ul>
          </DialogContent>
        </Dialog> */}
        
        <div className="flex flex-wrap gap-3">
        {backdrops.map((b) => (
          <Button  
            key={b}
            variant="flat" 
            color="warning" 
            onPress={() => handleOpen(b)}
            className="capitalize"
          >
           {b}
          </Button>
        ))}  
      </div>
      <Modal backdrop='blur' isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
              <ModalBody>
                <p> 
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit
                  dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. 
                  Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. 
                  Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur 
                  proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>

        <div className="h-7 bg-zinc-500 w-[0.25px]" />

        <Dropdown>
          <DropdownTrigger>
            <button className="w-10 h-10 p-2 hover:bg-black flex items-center justify-center transition-all duration-150 rounded-full">
              <RiMenu2Line />
            </button>
          </DropdownTrigger>
          <DropdownMenu variant="faded" aria-label="Dropdown menu with icons">
            <DropdownItem
              key="new"
              shortcut="⌘N"
              startContent={<ChevronRight className={iconClasses} />}
            >
              New file
            </DropdownItem>
            <DropdownItem
              key="copy"
              shortcut="⌘C"
              startContent={<ChevronRight className={iconClasses} />}
            >
              Copy link
            </DropdownItem>
            <DropdownItem
              key="edit"
              shortcut="⌘⇧E"
              startContent={<ChevronRight className={iconClasses} />}
            >
              Edit file
            </DropdownItem>
            <DropdownItem
              key="delete"
              className="text-danger"
              color="danger"
              shortcut="⌘⇧D"
              startContent={
                <ChevronRight className={cn(iconClasses, "text-danger")} />
              }
            >
              Delete file
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        {/* Table of Contents */}
        {/* Share */}
      </nav>
    </header>
  );
};

export default Butybar;
