interface TextProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  children?: React.ReactNode;
}
const Text = ({ children, ...rest }: TextProps) => {
  return <p {...rest}>{children}</p>;
};

export { Text };
