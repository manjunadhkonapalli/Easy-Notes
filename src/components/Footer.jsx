import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright@Manjunadh Konapalliⓒ {year}</p>
    </footer>
  );
}

export default Footer;
