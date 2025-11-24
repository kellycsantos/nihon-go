import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.scss";

const fontPoppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700', '800']
});

export const metadata: Metadata = {
  title: "Nihon? Go!",
  description: `Discover the Magic of Japan with us.
  From ancient temples to modern cities, experience the perfect blend of tradition and innovation.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fontPoppins.variable}`}>
        {children}
      </body>
    </html>
  );
}
