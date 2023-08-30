import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav>
      <Link href={"/"}>
        <h1>RSBC AGENT APP</h1>
      </Link>

      <Link href={"/clients"}>Client Monitoring</Link>
      <Link href={"/pdf-filler"}>PDF Filler</Link>
      <Link href={"/pdf-filler"}>PDF Filler</Link>
    </nav>
  );
}
