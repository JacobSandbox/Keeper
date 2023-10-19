import React from "react";

// Footer component for Keeper App
function Footer() {
    let year = new Date().getFullYear();
    return <footer><p>© Jacob Salemi {year}</p></footer>;
}

export default Footer;