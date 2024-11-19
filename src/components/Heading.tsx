type Props = {
  text: string;
};
const Heading = ({ text }: Props) => {
  return (
    <h1 className="heading-gradient text-4xl md:text-6xl lg:text-9xl font-bold">
      {text}
    </h1>
  );
};

export default Heading;
