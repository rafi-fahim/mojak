import "./globals.css";
import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "MOJAK",
  description: "A poem site for reading interesting poems.",
  icons: {
    icon: "/favicon-32x32.png",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    images:
      "https://firebasestorage.googleapis.com/v0/b/mojak-6de41.appspot.com/o/Assets%2FImages%2FMOJAK.png?alt=media&token=4256d45a-93a0-46f6-8c45-aadc4345f469",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mojak",
    description: "The ultimate area for reading poems.",
    creator: "FSR SOFT",
    images: [
      "https://firebasestorage.googleapis.com/v0/b/mojak-6de41.appspot.com/poemcrdo/Assets%2FImages%2FMOJAK.png?alt=media&token=4256d45a-93a0-46f6-8c45-aadc4345f469",
    ],
  },
  manifest: "./site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
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
