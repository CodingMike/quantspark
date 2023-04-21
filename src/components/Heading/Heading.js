export const Heading = ({ level, text, className }) => {
  const Tag = `h${level}`;

  return <Tag className={className}>{text}</Tag>;
};
