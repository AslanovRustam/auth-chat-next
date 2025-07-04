"use client";
import { AppStore, makeStore } from "@/store";
import { useRef } from "react";
import { Provider } from "react-redux";
export const dynamic = "force-dynamic";

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const storeRef = useRef<AppStore>(undefined);
  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
