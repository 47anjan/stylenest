import { MenuIcon, ShoppingBag } from "lucide-react";
import Link from "next/link";
import MobileMenu from "./mobile-menu";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="bg-[#f3f5f7]">
      <nav className="max-w-7xl py-8 px-4 md:px-8 mx-auto flex justify-between gap-[103px] items-center">
        <Link href="/">
          <Logo />
        </Link>

        <div className="flex items-center text-gray-800 flex-1 justify-between">
          <ul className="hidden md:flex text-base items-center gap-8 ">
            <li>
              <Link href="/shop-all">Shop all</Link>
            </li>
            <li>
              <Link href="/latest-arrivals">Latest arrivals</Link>
            </li>
          </ul>

          <div className="ml-auto  flex gap-5">
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
