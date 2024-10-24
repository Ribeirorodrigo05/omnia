"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const token = window.localStorage.getItem("token");

  if (!token) router.push("/login");

  return <div></div>;
}
