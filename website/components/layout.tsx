import * as header from "./header";
import * as react from "react";
import * as option from "fp-ts/Option";

export const Layout = (props: { children: react.ReactChild }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <header.Header>
        <header.Item href={option.some("/")}>Home</header.Item>
        <header.Item href={option.some("/books")}>Books</header.Item>
      </header.Header>
      <div className="relative flex-1">{props.children}</div>
    </div>
  );
};
