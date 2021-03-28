export const Strip = (props: {
  layout: "LEFT_TO_RIGHT" | "RIGHT_TO_LEFT";
  children: React.ReactChild;
  src: string;
}) => {
  return (
    <div
      className={`${props.layout === "LEFT_TO_RIGHT" ? "flex-row" : ""} ${
        props.layout === "RIGHT_TO_LEFT" ? "flex-row-reverse" : ""
      } flex`}
    >
      <div className="relative flex-1 hidden md:block">
        <div className="absolute inset-0">
          <img
            src={props.src}
            className="object-cover object-center max-w-full max-h-full min-w-full min-h-full"
          />
          <div
            className={`${
              props.layout === "LEFT_TO_RIGHT"
                ? "from-transparent to-white"
                : ""
            } ${
              props.layout === "RIGHT_TO_LEFT"
                ? "from-white to-transparent"
                : ""
            } absolute inset-0 w-full bg-gradient-to-r`}
          />
        </div>
      </div>
      <div className="flex justify-center bg-white md:justify-start">
        {props.children}
      </div>
    </div>
  );
};

export const Details = (props: {
  title: string;
  description: string;
  onSubmit: (_: { email: string; firstName: string }) => void;
}) => {
  return (
    <div className="flex flex-col items-center px-16 py-32 space-y-4 text-gray-900 md:max-w-lg">
      <h1 className="text-3xl font-bold leading-tight tracking-wider text-center">
        {props.title}
      </h1>
      <p className="text-lg font-light leading-tight tracking-wider text-center text-gray-800">
        {props.description}
      </p>
      <div className="space-y-4">
        <input
          type="email"
          className="w-full px-3 py-2 border border-gray-300 focus:outline-none"
          placeholder="Your email"
        />
        <input
          className="w-full px-3 py-2 border border-gray-300 focus:outline-none"
          placeholder="Your first name"
        />
        <button className="w-full px-3 py-2 text-lg font-semibold text-white bg-gray-800">
          Submit
        </button>
      </div>
    </div>
  );
};
