import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <>
      <h4>Choose form</h4>
      <nav>
        <Link href={"/pdf-filler/rsbc"}>Rsbc Form</Link>
        <Link href={"/pdf-filler/east-west"}>East West Form</Link>
        <Link href={"/pdf-filler/security-bank"}>Security Bank Form</Link>
      </nav>
    </>
  );
}
