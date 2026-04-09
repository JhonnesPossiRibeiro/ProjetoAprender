import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar/Index";
import ScrollToTop from "../scrollToTop/Index";

const Layout = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    const handleResize = () => setIsMobile(mediaQuery.matches);

    handleResize();
    mediaQuery.addEventListener("change", handleResize);

    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  const Menus = [
    {
      label: "Letras",
      path: "/",
      icone: "L",
      submenus: [],
    },
    {
      label: "Silabas",
      path: "Silabas",
      icone: "S",
      submenus: [],
    },
    {
      label: "Palavras",
      path: "Palavras",
      icone: "P",
      submenus: [],
    },
  ];

  return (
    <>
      <ScrollToTop />
      <div
        style={{
          display: "flex",
          height: "100vh",
          backgroundColor: "#e7e5e5ff",
        }}
      >
        <Sidebar menus={Menus} onExpandChange={setIsExpanded} />
        <main
          style={{
            marginLeft: isMobile ? 0 : isExpanded ? 220 : 50,
            transition: "margin-left 0.3s ease",
            flex: 1,
            overflow: "auto",
            padding: "20px 10px",
          }}
        >
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default Layout;
