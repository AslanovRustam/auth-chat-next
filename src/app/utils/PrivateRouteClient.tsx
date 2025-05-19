"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function PrivateRouteClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const isAuthenticated = Boolean(document.cookie.includes("token="));

  //   useEffect(() => {
  //     if (!isAuthenticated) {
  //       router.replace("/");
  //     }
  //   }, [isAuthenticated, router]);

  //   if (!isAuthenticated) {
  //     return null;
  //   }

  return <>{children}</>;
}
