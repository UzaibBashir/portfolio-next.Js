
import "./globals.css";

export const metadata = {
  title: "Portfolio",
  description: "Uzaib Bashir personal portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-neutral-900 text-neutral-200 antialiased selection:bg-neutral-200 selection:text-neutral-900">
        {children}
      </body>
    </html>
  );
}
