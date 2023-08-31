"use client";

import { UserAuth } from "./context/AuthContext";

export default function Home() {
  const { user } = UserAuth();
  return (
    <main>
      {user
        ? `Welcome, ${user?.displayName}`
        : `You need to login to view all details.`}
      <h2>Your tools for easily track and manage your clients</h2>
    </main>
  );
}
