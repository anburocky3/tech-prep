"use client";

import Link from "next/link";
import * as React from "react";
import { cn } from "../lib/utils";
import { LearningIcon } from "./icons/learning-icon";
import { usePathname } from "next/navigation";

interface INavbarProps {}

interface INavbarLinkProps {
  href: string;
  label: string;
  icon?: string;
  className: string;
}

const NavbarLink: React.FunctionComponent<INavbarLinkProps> = ({
  href,
  label,
  icon,
  className,
}) => {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={cn("hover:text-orange-600", {
        "text-orange-500": pathname === href,
      })}
    >
      {label}
    </Link>
  );
};

const Navbar: React.FunctionComponent<INavbarProps> = (props) => {
  return (
    <header className="px-10 py-5 container  flex items-center justify-between border-b fixed bg-white  w-full z-[999]">
      <Link href={"/"} className="font-semibold flex items-center">
        <LearningIcon className="mr-2 text-transparent fill-current" />
        TechPrep
      </Link>
      <div>
        <ul className="font-medium text-sm flex items-center space-x-8">
          <li>
            <NavbarLink href="/paths" label="Paths" className="" />
          </li>
          <li>
            <NavbarLink href="/about" label="About" className="" />
          </li>
          <li>
            <NavbarLink href="/community" label="Community" className="" />
          </li>
          <li>
            <Link
              href="#"
              className="px-4 py-2 rounded bg-blue-500 hover:bg-blue-600 text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                className="inline-flex mr-2 text-white fill-current"
              >
                <path
                  fillRule="evenodd"
                  d="M6.989 4.89a64.248 64.248 0 0 1 10.022 0l2.24.176a2.725 2.725 0 0 1 2.476 2.268c.517 3.09.517 6.243 0 9.332a2.725 2.725 0 0 1-2.475 2.268l-2.24.175a64.24 64.24 0 0 1-10.023 0l-2.24-.175a2.725 2.725 0 0 1-2.476-2.268a28.315 28.315 0 0 1 0-9.332a2.725 2.725 0 0 1 2.475-2.268zM10 14.47V9.53a.3.3 0 0 1 .454-.257l4.117 2.47a.3.3 0 0 1 0 .514l-4.117 2.47A.3.3 0 0 1 10 14.47"
                  clipRule="evenodd"
                ></path>
              </svg>
              Learn
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
