import ModeToggle from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import React from "react";

function Home() {
  return (
    <div className="m-4">
      <h1>Home page content</h1>
    </div>
  );
}

export default Home;
