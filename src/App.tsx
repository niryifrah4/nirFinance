import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SocialSidebar from "./components/SocialSidebar";
import HomePage from "./pages/HomePage";
import LegalPage from "./pages/LegalPage";

function getCurrentPath() {
  if (typeof window === "undefined") {
    return "/";
  }

  return window.location.pathname;
}

export default function App() {
  const [pathname, setPathname] = useState(getCurrentPath);

  useEffect(() => {
    const handleLocationChange = () => {
      setPathname(window.location.pathname);
    };

    window.addEventListener("popstate", handleLocationChange);

    return () => {
      window.removeEventListener("popstate", handleLocationChange);
    };
  }, []);

  const isLegalPage = pathname === "/legal";

  return (
    <>
      <Header />
      {!isLegalPage ? <SocialSidebar /> : null}
      {isLegalPage ? <LegalPage /> : <HomePage />}
      <Footer />
    </>
  );
}