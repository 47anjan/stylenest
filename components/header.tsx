import { MenuIcon, ShoppingBag } from "lucide-react";
import Link from "next/link";
import MobileMenu from "./mobile-menu";

const Header = () => {
  return (
    <header className="bg-[#f3f5f7]">
      <nav className="max-w-7xl mt-2 md:mt-4 h-14 md:h-16 px-5 md:px-8 mx-auto flex justify-between items-center">
        <Link className="mr-24 text-xl font-bold" href="/">
          StyleNest
        </Link>

        <div className="flex items-center text-gray-800 flex-1 justify-between">
          <ul className="hidden md:flex text-lg items-center gap-8 ">
            <li>
              <Link href="/shop-all">Shop all</Link>
            </li>
            <li>
              <Link href="/latest-arrivals">Latest arrivals</Link>
            </li>
          </ul>

          <div className="ml-auto  flex gap-4">
            <Link href="/">
              <ShoppingBag />
            </Link>
            <div className="md:hidden">
              <MobileMenu />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Header;
