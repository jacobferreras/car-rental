import React from "react";

const Footer = () => {
  return (
    <footer className="bottom-0 left-0 footer footer-horizontal footer-center bg-base-300 text-base-content rounded p-10">
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by ACME
          Industries Ltd
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
