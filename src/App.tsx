import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import SocialSidebar from "./components/SocialSidebar";
import HomePage from "./pages/HomePage";
import LegalPage from "./pages/LegalPage";
import CommunityPage from "./pages/CommunityPage";

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

  const isLegalPage     = pathname === "/legal";
  const isCommunityPage = pathname === "/community";

  if (isCommunityPage) {
    return <CommunityPage />;
  }

  return (
    <>
      {false && !isLegalPage ? <SocialSidebar /> : null}
      {isLegalPage ? <LegalPage /> : <HomePage />}
      <Footer />
    </>
  );
}