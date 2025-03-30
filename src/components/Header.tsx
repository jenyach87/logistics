"use client"

import React, { FC, ReactNode } from "react";
import Langueages from "./languages/Langueages";
import Link from "next/link";
import Image from "next/image";

interface HeaderProps {
  children?: ReactNode;
}
const Header: FC<HeaderProps> = (props) => {
  const {children} = props;
  return (
    <div className="flex justify-between items-center">
      <Link href='/'><Image src="next.svg" width={100} height={70} alt="Next logo"  /></Link>
      <Langueages />
      <div>{children}</div>
    </div>
  )
}

export default Header;