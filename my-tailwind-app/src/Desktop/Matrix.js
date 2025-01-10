import React, { useEffect, useState } from "react";
import "../App.scss"; // Import the SCSS file

const MatrixBackground = () => {
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    const updateColumns = () => {
      const columnCount = Math.floor(window.innerWidth / 10); // Adjust column width
      setColumns(Array.from({ length: columnCount }));
    };

    updateColumns();
    window.addEventListener("resize", updateColumns);

    return () => window.removeEventListener("resize", updateColumns);
  }, []);

  return (
    <ul className="matrix">
      {columns.map((_, index) => (
        <li key={index}></li>
      ))}
    </ul>
  );
};

export default MatrixBackground;
