import './ui/global.css'
import { monserrat } from './ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className=''>{children}</body>
    </html>
  );
}

