import { montserrat } from './ui/fonts';
import './ui/global.css' // estilos globales de aplicacion
import './ui/home.module.css'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
