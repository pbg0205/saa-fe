import Header from "@/components/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="overflow-y-scroll [scrollbar-gutter:stable]">
      <body className="flex flex-col w-full max-w-screen-2xl mx-auto">
        <Header></Header>
        <main>{children}</main>
      </body>
    </html>
  );
}
