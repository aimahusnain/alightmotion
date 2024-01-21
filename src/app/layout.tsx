import "../styles/fonts.css";
import "./globals.css";
import { cx } from "@/src/utils";
// import { Inter, Manrope } from "next/font/google";
import Header from "@/src/components/Header";
import Footer from "../components/Footer";
import siteMetadata from "../utils/siteMetaData";
import { Providers } from "./providers";
import NextThemeProvider from "@/src/providers/theme-provider";
import Loading from "../providers/loading";
import { ToastContainer } from 'react-toastify';

// const inter = Inter({
//   subsets: ["latin"],
//   display: "swap",
//   variable: "--font-in",
// });

// const manrope = Manrope({
//   subsets: ["latin"],
//   display: "swap",
//   variable: "--font-mr",
// });

export const metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    template: `%s | ${siteMetadata.title}`,
    default: siteMetadata.title,
  },
  description: siteMetadata.description,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: siteMetadata.siteUrl,
    siteName: siteMetadata.title,
    images: [siteMetadata.socialBanner],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: siteMetadata.title,
    images: [siteMetadata.socialBanner],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cx(
          "font-EuclidCircularB",  // Use the declared font-family
          "font-mr !bg-black dark:bg-black text-white"
        )}
      >
        <NextThemeProvider>
          <Header />
          <Providers>
            <Loading>
            {children}
            <ToastContainer />
            </Loading>
          </Providers>
          {/* <Footer /> */}
        </NextThemeProvider>
      </body>
    </html>
  );
}
