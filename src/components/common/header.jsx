import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../assets/img/logo.svg";

const Header = () => {
  return (
    <section className="fixed left-0 right-0 z-10 ">
      <nav className="container mx-auto flex flex-col sm:flex-row justify-between items-center bg-white pt-5 px-2">
        <Link href="/" className="flex justify-center items-center">
          <Image src={logo} width={65} priority alt="logo" />
          <span className="text-xl font-semibold">oducts Listing</span>
        </Link>
        <span className="flex gap-5 font-semibold py-2 ">
          <Link href="/" className="hover:text-orange-600">Home</Link>
          <Link href="about" className="hover:text-orange-600">About Us</Link>
        </span>
      </nav>
    </section>
  );
};

export default Header;
