export default function RootLayout({ children }: any) {
  return (
    <html className="h-full bg-gray-100">
      <body className="h-full">
        <div className="flex h-screen w-screen flex-col items-center justify-center">
          {children}
        </div>
      </body>
    </html>
  );
}
