import { Metadata } from "next";
import WithQueryClientProvider from "@/hoc/withQueryClientProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bime Bazar",
  description: "Insurance policy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <WithQueryClientProvider wrappedComponent={children} />
      </body>
    </html>
  );
}
