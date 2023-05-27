import React from "react";

const Header = (props) => {
  return (
    <div className="row">
      <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
        <div style={{ display: "flex", marginLeft: "30px", alignItems: "center" }}>
          <img
            src="https://i.ibb.co/sR6Gbsy/Pencil.png"
            alt="Pencil"
            width={36}
            height={36}
          />
          <h1 style={{ color: "whitesmoke", marginLeft: "16px" }}>To Do</h1>
        </div>
      </nav>
    </div>
  );
};

export default Header;
