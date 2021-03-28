import * as react from "react";
import Link from "next/link";
import * as option from "fp-ts/Option";

export const Header = (props: { children: react.ReactNode }) => {
  return (
    <div className="z-20 flex flex-row px-4 py-4 bg-white shadow-xl sm:px-12">
      <div className="flex flex-1 sm:p-4">
        <Item href={option.some("/")}>David Bruns</Item>
      </div>
      <div className="flex flex-row space-x-4 sm:p-4 sm:space-x-12">
        {props.children}
      </div>
    </div>
  );
};

export const Item = (props: {
  href: option.Option<string>;
  children: react.ReactText;
}) => {
  return (
    <div className="text-lg font-light leading-tight tracking-wider text-gray-800">
      {option.match(
        () => <p>{props.children}</p>,
        (href: string) => (
          <Link href={href}>
            <a>
              <div className="transition-all duration-300 transform-gpu hover:scale-110 whitespace-nowrap">
                {props.children}
              </div>
            </a>
          </Link>
        )
      )(props.href)}
    </div>
  );
};
