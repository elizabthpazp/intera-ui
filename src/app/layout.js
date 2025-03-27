import React from "react";

export const metadata = {
  title: "React Components for free",
  description: "A collection of free React components for your project, easy to use and customize.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
