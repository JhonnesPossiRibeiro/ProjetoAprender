import type { ReactNode } from "react"
import styles from "./Style.module.css";

type HeaderProps = {
  children: ReactNode
}

const Header = ({children}:HeaderProps) => {
  return(
      <h1 className={styles.h1}>{children}</h1>
  )
}

export default Header