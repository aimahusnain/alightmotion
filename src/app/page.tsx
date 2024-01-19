"use client";

import { Tooltip } from "@nextui-org/tooltip";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineFacebook } from "react-icons/md";
import { RiTwitterXFill } from "react-icons/ri";
import { SlSocialYoutube } from "react-icons/sl";
import AlightMotionSpecifications from "../components/blogs/AlightMotionSpecifications";
import AlreadyFeatures from "../components/blogs/AlreadyFeatures";
import Conclution from "../components/blogs/Conclution";
import Downloadingsteps from "../components/blogs/Downloadingsteps";
import FAQ from "../components/blogs/Faq";
import OnthisPage from "../components/blogs/OnthisPage";
import WhyUseit from "../components/blogs/WhyUseit";
import Footer from "../components/Footer";


async function extractAllBlogs() {
  try {
    const res = await fetch(`${process.env.URL}/api/blog-post/get-all-post`, {
      method: "GET",
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch data from the API");
    }

    const data = await res.json();

    if (data.success) {
      return data.data;
    } else {
      throw new Error("API request was not successful");
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

export default function Home() {
  // const [selected, setSelected] = React.useState<any>("photos");
  // const [comment, setComment] = useState<string>("");
  // const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    let interval = setInterval(() => {
      router.refresh();
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    // <main className="flex flex-col items-center justify-center">
    //   <HomeCoverSection blogs={allBlogs} />
    //   <FeaturedPosts blogs={allBlogs} />
    //   <RecentPosts blogs={allBlogs} />
    // </main>

    <div className="bg-black">
      <div className="absolute -mt-8 !text-white">
        <video
          className="mix-blend-screen w-full object-cover z-0 hidden md:block glitch"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/desktop_landing.mp4" type="video/mp4" />{" "}
        </video>
        <video
          className="mix-blend-screen w-full object-cover h-full z-0 md:hidden glitch mobile-video"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/mobile_landing.mp4" type="video/mp4" />{" "}
        </video>
      </div>

      <div className="w-full md:h-[450px] h-[400px] shadow-xl shadow-[#000]">
        <img
          src="/download.jpg"
          className="object-cover h-full w-screen"
          alt=""
        />
      </div>

      <div className="bg-black">
        <div className="absolute z-[10] p-7 pt-20 w-full h-full">
          <div className="justify-center items-center flex flex-col gap-4">
            <div className="justify-center items-center flex flex-col gap-4 lg:mx-44 md:mx-16 sm:mx-4">
              <h1
                id="title"
                style={{ scrollMarginTop: "70px" }}
                className="sm:text-5xl text-4xl font-bold text-center"
              >
                Alight Motion MOD APK 2024 with Pro Features, No Watermark, and
                Ad-Free Experience!
              </h1>

              <p className="sm:text-[1.2rem] text-[1rem] sm:leading-[30px] leading-[25px] text-[#a6a6a6] text-center sm:mx-14 mx-2">
                Create stunning motion designs, videos, and animations with the
                world&apos;s first professional motion graphics toolset for
                mobile platforms. From keyframe animation to video compositing
                to visual effects, do it all from your iPhone, iPad, Mac (with
                Apple Silicon), or Android device.
              </p>
            </div>
            <WhyUseit />
            <div className="flex flex-col gap-8 lg:flex-row flex-wrap w-full items-center justify-center">
              <Link
                href="/"
                className="bg-black h-fit border mt-7 px-4 p-3 gap-3 border-white rounded-xl flex flex-row items-center"
              >
                <img
                  src="/alightmotionlogo.webp"
                  width={70}
                  height={70}
                  className="aspect-square rounded-xl"
                  alt="Alight Motion Logo"
                />

                <div className="flex flex-col text-left">
                  <p
                    id="download"
                    className="text-3xl uppercase -mt-1 font-semibold"
                  >
                    Download
                  </p>
                  <p className="text-lg">From Here</p>
                </div>
              </Link>
            </div>
            <div className="w-full sm:px-36 px-0  ">
              <AlightMotionSpecifications />
              <div className="lg:mx-52 mx-0">
                <OnthisPage />
              </div>
            </div>

            <AlreadyFeatures />

            <FAQ />

            <Downloadingsteps />

              <Conclution />
            
            <Footer />
          </div>
        </div>

        <img
          src="/bg.png"
          className="hidden md:block h-full w-full"
          alt="sdf"
        />

        {/* <img src="/bg_1.png" className="md:hidden h-full w-full" alt="" /> */}

        <img
          src="/stars.png"
          alt=""
          className="hidden sm:block h-full w-full absolute top-[600px]"
        />
        <img
          src="/vertical_stars.png"
          alt=""
          className="sm:hidden h-full w-full absolute top-[500px]"
        />
      </div>
      <div>
        <img
          src="/bg_tint.png"
          className="hidden md:block h-full w-full"
          alt=""
        ></img>
      </div>
    </div>
  );
}
