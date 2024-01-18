"use client";

import { Link } from "@nextui-org/link";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/navbar";
import React from "react";
import Logo from "./Logo";

export interface MenuItem {
  id: string;
  label: string;
  path: string;
}

export const mymenuitems : MenuItem[] = [
  {
    id: "home",
    label: "Home",
    path: "/",
  },
  {
    id: "contact-us",
    label: "Contact Us",
    // path: "/category/application",
    // path: "/contact-us",
    path: "/#",
  },
  {
    id: "blogs",
    label: "Blogs",
    // path: "/blogs",
    // path: "/categories/all",
    path: "/#",
    
  },
  {
    id: "about-us",
    label: "About Us",
    // path: "/about",
        path: "/#",
    // path: "/search",
  },
  
];

export default function Header() {
  // const [sticky, setSticky] = useState<boolean>(false);
  // const [navbarOpen, setNavbarOpen] = useState<boolean>(false);
  // const { data: session } = useSession();
  // const { setSearchResults, setSearchQuery } = useContext(GlobalContext);
  // const router = useRouter();
  // const pathName = usePathname();
  // console.log(session, "session");

  // function handleStickyNavbar() {
  //   if (window.scrollY >= 80) setSticky(true);
  //   else setSticky(false);
  // }

  // function handleNavbarToggle() {
  //   setNavbarOpen(!navbarOpen);
  // }

  // useEffect(() => {
  //   window.addEventListener("scroll", handleStickyNavbar);
  // });

  // useEffect(() => {
  //   setSearchResults([]);
  //   setSearchQuery("");
  // }, [pathName]);

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Navbar
      shouldHideOnScroll
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <Logo />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-8" justify="end">
        <NavbarBrand>
          <Logo />
        </NavbarBrand>
        {mymenuitems.map((item: MenuItem, index: number) => (
          <NavbarItem key={index}>
            <Link
              href={item.path}
              color="foreground"
              size="lg"
              className="font-semibold"
            >
              {item.label}
            </Link>
          </NavbarItem>
        ))}

        {/* <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem> */}
      </NavbarContent>

      <NavbarMenu>
        {/* {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              href="#"
              size="lg"
              
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))} */}

        {mymenuitems.map((item: MenuItem, index: number) => (
          <NavbarMenuItem
            key={index}
            className="flex !items-start justify-center gap-10 h-fit text-3xl"
          >
            <Link
              href={item.path}
              color="foreground"
              size="lg"
              className="font-semibold"
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
