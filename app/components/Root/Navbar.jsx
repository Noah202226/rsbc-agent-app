"use client";
import { UserAuth } from "@/app/context/AuthContext";
import { Button, Stack, Typography } from "@mui/material";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Navbar() {
  const { user, googleSignIn, logOut, getAuth } = UserAuth();

  const [loading, setLoading] = useState(true);

  const handleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const checkAuth = async () => {
      await new Promise((resolve) => setTimeout(resolve, 50));
      setLoading(false);
    };

    checkAuth();
  }, [user]);
  return (
    <nav>
      <Stack
        flexDirection={{ xs: "column", md: "row" }}
        alignItems={"center"}
        justifyContent={"space-between"}
        py={2}
      >
        <Link href={"/"}>
          <h1>RSBC AGENT APP</h1>
        </Link>

        {!user ? (
          <ul
            style={{
              listStyle: "none",
              display: "flex",
            }}
          >
            <li
              style={{ cursor: "pointer", marginRight: "1rem" }}
              onClick={handleSignIn}
            >
              Login
            </li>
            <li style={{ cursor: "pointer" }} onClick={handleSignIn}>
              Sign Up
            </li>
          </ul>
        ) : (
          <div>
            <Typography variant="body" mx={2}>
              Welcome, {user?.uid}
            </Typography>
            <Button size="small" variant="contained" onClick={handleLogout}>
              Logout
            </Button>
          </div>
        )}
      </Stack>
      <Link href={"/clients"} style={{ margin: "0 1rem" }}>
        Client Monitoring
      </Link>
      <Link href={"/pdf-filler"}>PDF Filler</Link>
      {/* <Link href={"/pdf-filler"}>PDF Filler</Link> */}
    </nav>
  );
}
