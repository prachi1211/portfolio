import React from "react";

function Footer() {
  return (
    <footer className="site-footer">
      <p>
        Designed &amp; built by <span>Prachi Jethava</span> · {new Date().getFullYear()}
      </p>
    </footer>
  );
}

export default Footer;
