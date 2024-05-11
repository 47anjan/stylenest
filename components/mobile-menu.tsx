"use client";

import { MenuIcon, X } from "lucide-react";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";

const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  const openMenu = () => setOpen(true);
  const closeMenu = useCallback(() => setOpen(false), []);

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    document.addEventListener("keydown", handleKey);

    return () => {
      document.removeEventListener("keydown", handleKey);
    };
  }, [closeMenu]);

  return (
    <>
      <button onClick={openMenu}>
        <MenuIcon />
      </button>
      {open &&
        createPortal(
          <>
            <div className="md:hidden fixed text-black z-50 inset-0 p-4">
              <div className="backdrop absolute inset-0 z-40 bg-purple bg-opacity-50 backdrop-blur-[3px]" />
              <div className="drawer absolute inset-0 w-full bg-white z-50  flex flex-col ">
                <header className="mt-2 px-5   h-14    flex justify-between items-center">
                  <Link className="text-xl font-bold" href="/">
                    StyleNest
                  </Link>
                  <button onClick={closeMenu}>
                    <X />
                  </button>
                </header>
                <div className="flex-1 px-5 overflow-auto mt-8">
                  <ul className="flex flex-col text-lg  gap-6 ">
                    <li>
                      <Link href="/shop-all">Shop all</Link>
                    </li>
                    <li>
                      <Link href="/latest-arrivals">Latest arrivals</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </>,
          document.body
        )}
    </>
  );
};
export default MobileMenu;
