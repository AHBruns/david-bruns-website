import * as react from "react";
import * as option from "fp-ts/Option";

export const Splash = (props: {
  title: string;
  subtitle: option.Option<react.ReactNode>;
  src: string;
}) => {
  return (
    <div className="relative w-full px-16 py-64 overflow-hidden bg-black">
      <div className="relative z-20 flex flex-col items-center text-center text-white">
        <h1 className="text-5xl font-bold leading-tight tracking-wider">
          {props.title}
        </h1>
        {option.match(
          () => null,
          (subtitle: react.ReactNode) => (
            <h2 className="text-3xl font-semibold leading-tight tracking-wider">
              {subtitle}
            </h2>
          )
        )(props.subtitle)}
      </div>
      <img
        src={props.src}
        className="absolute inset-0 object-cover object-center max-w-full max-h-full min-w-full min-h-full opacity-50"
      />
    </div>
  );
};
