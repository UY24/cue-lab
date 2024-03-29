"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Nav = () => {
  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/assets/images/logo2.svg"
          alt="logo"
          width={30}
          height={30}
          className="object-contain"
        />
        <p className="logo_text">Cue Lab</p>
      </Link>
    </nav>
  );
};

export default Nav;
