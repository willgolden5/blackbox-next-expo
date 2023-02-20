"use client";
import { SignedIn, useAuth } from "@clerk/nextjs";
import ComingSoon from "../components/ComingSoon";

export default function Home() {
  const { isLoaded, userId } = useAuth();

  if (!isLoaded) return null;
  if (userId)
    return (
      <>
        <ComingSoon />
        <>signed in</>
      </>
    );

  return <ComingSoon />;
}
