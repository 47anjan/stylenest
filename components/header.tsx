import { MenuIcon, ShoppingBag } from "lucide-react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-[#f3f5f7]">
      <nav className="max-w-7xl mt-2 md:mt-4 h-16 md:h-20 px-5 md:px-8 mx-auto flex justify-between items-center">
        <Link className="mr-40 text-2xl font-bold" href="/">
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
              <button>
                <MenuIcon />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Header;
