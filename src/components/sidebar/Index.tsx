import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Home, Type, BookOpen } from "lucide-react";
import styles from "./Style.module.css";

export default function Sidebar() {
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const currentPath = location.pathname.toLowerCase();

  const isActive = (path: string) => {
    if (path === "/") return currentPath === "/";
    return currentPath.includes(path.toLowerCase());
  };

  if (isMobile) {
    return (
      <div className={styles.bottomMenu}>
        <button
          className={isActive("/") ? styles.active : ""}
          onClick={() => navigate("/")}
        >
          <Home size={18} />
          <span>Letras</span>
        </button>

        <button
          className={isActive("silabas") ? styles.active : ""}
          onClick={() => navigate("/Silabas")}
        >
          <Type size={18} />
          <span>Silabas</span>
        </button>

        <button
          className={isActive("palavras") ? styles.active : ""}
          onClick={() => navigate("/Palavras")}
        >
          <BookOpen size={18} />
          <span>Palavras</span>
        </button>
      </div>
    );
  }

  // Desktop
  return (
    <aside className={styles.sidebar}>
      <ul>
        <li
          className={isActive("/") ? styles.active : ""}
          onClick={() => navigate("/")}
        >
          Letras
        </li>

        <li
          className={isActive("silabas") ? styles.active : ""}
          onClick={() => navigate("/Silabas")}
        >
          Silabas
        </li>

        <li
          className={isActive("palavras") ? styles.active : ""}
          onClick={() => navigate("/Palavras")}
        >
          Palavras
        </li>
      </ul>
    </aside>
  );
}