import Image from "next/image";
import { navlinks } from "@/data/navlinks";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="px-6 py-2 flex justify-around max-w-8xl mx-auto">
      <div>
        <p>Innotech</p>
      </div>
      <div className="navLinks">
        <ul className="flex lg:space-x-10 ">
          {navlinks.map((nav) => (
            <li key={nav.name}>
              <Link href={nav.path} className="text-gray-500 text-xl">
                {nav.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
