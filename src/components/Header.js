import React from "react";

const styles = {
  headline: {
    textAlign: "center",
  },
};

function Header() {
  return (
    <header className="header">
      <h1 style={styles.headline}>UPSTAGED</h1>
    </header>
  );
}

export default Header;
