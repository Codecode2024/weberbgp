import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import InstallBootstrap from "./components/InstallBootstrap";

export const metadata = {
  title: "MEYER - 旗艦店",
  description: "MEYER不黏明火煎鍋及電磁鍋",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
        <InstallBootstrap />
      </body>
    </html>
  );
}
