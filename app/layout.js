import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FontProvider } from "@/contexts/FontContext";
import { FontInfoProvider } from "@/contexts/FontInfoContext";

export const metadata = {
  title: "fffont - Discover Diverse Styles of Korean Fonts",
  description:
    "Explore a variety of Korean fonts in different styles. Enhance your website with beautiful typography.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <FontProvider>
          <FontInfoProvider>
            <Header />
            <main>{children}</main>
            <Footer />
          </FontInfoProvider>
        </FontProvider>
      </body>
    </html>
  );
}
