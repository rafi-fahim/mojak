import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Head from "next/head";

export const metadata: Metadata = {
  title: "MOJAK",
  description: "A poem site for reading interesting poems.",
  manifest: "/site.webmanifest.json",
  icons: {
    icon: "/favicon-32x32.png",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    images:
      "https://firebasestorage.googleapis.com/v0/b/mojak-6de41.appspot.com/o/Assets%2FImages%2Fhome-bg.png?alt=media&token=9185c395-8c12-4a68-b5c4-26fbf69486e3",
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mojak',
    description: 'The ultimate area for reading poems.',
    creator: 'FSR SOFT',
      images: ["https://firebasestorage.googleapis.com/v0/b/mojak-6de41.appspot.com/o/Assets%2FImages%2Fhome-bg.png?alt=media&token=9185c395-8c12-4a68-b5c4-26fbf69486e3"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="../public/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="../public/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="../public/favicon-16x16.png"
        />
      </Head>
      <html lang="en">
        <body className="font-rubik">
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </>
  );
}
