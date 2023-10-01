import React from "react";
import Image from "next/image";
import Logo from "/public/logo.png";
import Link from "next/link";
import Wrapper from "./shared/Wrapper";
export default function Header() {
  return (
    <header className="bg-white z-10  sticky top-0">
      <Wrapper>
        <div className="flex justify-between   py-4  items-center">
          <div>
            <Link href={"/"}>
              <Image src={Logo} alt="Panaverse Dao" />
            </Link>
          </div>
          <ul className="flex space-x-8 font-medium">
            <li>
              {" "}
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              {" "}
              <Link href={"/courses "}>Courses</Link>
            </li>
          </ul>
        </div>
      </Wrapper>
    </header>
  );
}
