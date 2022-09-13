import React from "react";
import "./style.scss";

export default function Footer({ children }: { children: React.ReactNode }) {
  return (
    <footer className="footer">
      {children}
      <a
        className="footer__info"
        target="_blank"
        rel="noopener noreferrer"
        href="footer"
      >
        
      </a>
    </footer>
  );
}
