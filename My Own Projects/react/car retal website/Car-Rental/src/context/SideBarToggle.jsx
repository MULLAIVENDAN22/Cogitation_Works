import React, { createContext, useState, useContext } from "react";

const Create = createContext();

const SideBarProvider = ({ children }) => {
  const [hamburger, setHamburger] = useState(false);
  return (
    <Create.Provider value={{ hamburger, setHamburger }}>
      {children}
    </Create.Provider>
  );
};

const UseSideBar = () => useContext(Create);

export { UseSideBar, SideBarProvider };
