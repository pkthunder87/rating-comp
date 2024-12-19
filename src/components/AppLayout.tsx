import React, { ReactNode } from "react";

interface Props<T> {
  props: T;
  children: ReactNode;
}

function AppLayout<T>({ children }: Props<T>) {
  return <main className="app-layout">{children}</main>;
}

export default AppLayout;
