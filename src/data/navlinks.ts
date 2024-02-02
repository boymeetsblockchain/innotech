export interface NavLink {
    name: string;
    path: string;
  }
  
  export const navlinks: NavLink[] = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" },
  ];
  