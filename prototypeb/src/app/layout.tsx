import React from 'react';
import '../styles/theme.css';
import '../styles/globals.css'; 

export const metadata = {
  title: 'Maya | Junior Web Developer Portfolio',
  description: 'Vibrant and minimal portfolio of Maya, a Junior Web Developer specializing in React and modern UI/UX.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
