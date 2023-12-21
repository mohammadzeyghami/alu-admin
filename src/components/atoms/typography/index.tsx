import { twMerge } from "tailwind-merge";

const P = ({
  children,
  className,
  ...rest
}: React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
>) => {
  return (
    <p className={twMerge("text-[12px] text-white", className)} {...rest}>
      {children}
    </p>
  );
};

export { P };

const H1 = ({
  children,
  className,
  ...rest
}: React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>) => {
  return (
    <h1 className={twMerge("text-[18px] text-white", className)} {...rest}>
      {children}
    </h1>
  );
};

export { H1 };

const H2 = ({
  children,
  className,
  ...rest
}: React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>) => {
  return (
    <h2 className={twMerge("text-[16px] text-white", className)} {...rest}>
      {children}
    </h2>
  );
};

export { H2 };

const H3 = ({
  children,
  className,
  ...rest
}: React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>) => {
  return (
    <h3 className={twMerge("text-[14px] text-white", className)} {...rest}>
      {children}
    </h3>
  );
};

export { H3 };

const H4 = ({
  children,
  className,
  ...rest
}: React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>) => {
  return (
    <h4 className={twMerge("text-[12px] text-white", className)} {...rest}>
      {children}
    </h4>
  );
};

export { H4 };
