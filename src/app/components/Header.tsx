"use client";
import Image from "next/image";
import React from "react";

type Props = {};

function Header({}: Props) {
  return (
    <header className=" w-full flex items-center justify-evenly shadow-black shadow-lg">
      <Image
        width={100}
        height={100}
        src="/note.png"
        className="cursor-pointer"
        alt=""
        onClick={() => {
          window.location.href = "/";
        }}
      />
      <h1 className="font-bold text-3xl">Note App made by Adam Hatabi</h1>
    </header>
  );
}

export default Header;
