import React, { useContext } from "react";
import { NewContext } from "../../Context/context";
import {
  headerContainerStyles,
  headerInputStyles,
  headerLogoStyles,
} from "../../styles/TailwindStyles/headerStyles";

export const Header = () => {
  const { setSearch } = useContext(NewContext);

  return (
    <div className={headerContainerStyles}>
      <h1 className={headerLogoStyles}>IUsers</h1>

      <input
        type="search"
        onChange={(e) => setSearch(e.target.value)}
        className={headerInputStyles}
        placeholder="Search for you user..."
      />
    </div>
  );
};
