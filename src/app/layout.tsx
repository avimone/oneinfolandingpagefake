import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import MuiProvider from "@/theme/MuiProvider";
import NavigationWrapper from "@/components/Navigation/NavigationWrapper";
import Footer from "@/components/Footer";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "700", "100", "300", "500", "900", "800", "600"],
});

export const metadata: Metadata = {
  title: "OneInfo.ai",
  description: "OneInfo is the only tool that actually sounds like me when replying. Fans don't even realize it's automated. Makes me feel 100x more professional.",
  icons: {
    icon: '/icon/favicon.ico',
    shortcut: '/icon/favicon.ico',
    apple: '/icon/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${roboto.variable} antialiased`}>
        <MuiProvider>
          <NavigationWrapper />
          {children}
          <Footer/>
        </MuiProvider>
      </body>
    </html>
  );
}
