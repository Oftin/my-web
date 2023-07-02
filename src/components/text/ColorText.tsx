interface ColorTextProps {
  text: string;
  color: string;
}

export const ColorText = ({ text, color }: ColorTextProps) => {
  return <p style={{ color: color, font: "bold" }}>{text}</p>;
};
