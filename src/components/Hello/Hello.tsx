export interface HelloProps {
  text: string;
}

/**
 * Hello World Component
 * @param {HelloProps} props
 * @returns {JSX.Element}
 */

const Hello = ({ text }: HelloProps): JSX.Element => {
  return <p>{text}</p>;
};

export default Hello;
