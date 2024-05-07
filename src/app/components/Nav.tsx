import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  return (
    <nav className="bg-gray-200 p-3 pb-0 flex  items-center justify-between">
      <Image src="/CookMania.png" alt="CookMania" width={120} height={120} />
      <div className="flex items-center h-10 pl-3 m-6 bg-gray-100 rounded-lg">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <input
          id="search"
          type="text"
          placeholder="Search recipes..."
          className="w-full h-full pl-2 bg-transparent outline-none"
        />
      </div>
      <ul className="flex space-around text-l gap-4 pr-4 ">
        <Link href="/" className="hover:text-blue-500">
          Log In
        </Link>
        <Link href="/" className="hover:text-blue-500">
          Profile
        </Link>
        <Link href="/" className="hover:text-blue-500">
          About Us
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
