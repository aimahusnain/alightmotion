import React, { Suspense } from "react";
import "../styles/fonts.css";
import "./globals.css";
import { cx } from "@/src/utils";
import Header from "@/src/components/Header";
import siteMetadata from "../utils/siteMetaData";
import { Providers } from "./providers";
import NextThemeProvider from "@/src/providers/theme-provider";
import Loading from "../providers/loading";
import { ToastContainer } from 'react-toastify';

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
          "font-EuclidCircularB",
          "font-mr !bg-black dark:bg-black text-white"
        )}
      >
        <NextThemeProvider>
          <Header />
          <Providers>
            <Suspense fallback={<div>Loading...</div>}>
              <Loading>
                {children}
                <ToastContainer />
              </Loading>
            </Suspense>
          </Providers>
        </NextThemeProvider>
      </body>
    </html>
  );
}