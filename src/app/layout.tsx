import { Metadata } from "next";
import WithQueryClientProvider from "@/hoc/withQueryClientProvider";
import localFont from "next/font/local";
import "./globals.css";

// DESC: add title and description on page head
export const metadata: Metadata = {
  title: "Bime Bazar",
  description: "Insurance policy",
};

// DESC: add dana font on all body
const danaFont = localFont({
  src: [
    {
      path: "../../public/dana-fanum-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/dana-fanum-medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/dana-fanum-demibold.woff2",
      weight: "600",
      style: "normal",
    },
  ],
});

function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={danaFont.className}>
        <WithQueryClientProvider wrappedComponent={children} />
      </body>
    </html>
  );
}

export default RootLayout;
