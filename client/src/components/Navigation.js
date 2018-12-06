import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="Navigation">
      <ul>
        <li>
          <Link to="/trails">Trails</Link>
        </li>
        <li>Wishlist</li>
        <li>Summitted</li>
        <li>Gearlist</li>
      </ul>
    </div>
  );
};

export default Navigation;
