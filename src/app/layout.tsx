import Header from "@/components/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="flex flex-col w-full max-w-screen-2xl mx-auto">
        <Header></Header>
        <hr></hr>
        <main>{children}</main>
      </body>
    </html>
  );
}
