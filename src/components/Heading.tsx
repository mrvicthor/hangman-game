type Props = {
  text: string;
  classes: string;
};
const Heading = ({ text, classes }: Props) => {
  return <h1 className={`heading-gradient ${classes} font-bold`}>{text}</h1>;
};

export default Heading;
