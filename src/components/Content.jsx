import Title from "./Title";
import Description from "./Description";

const Content = (props) => {
  return (
    <>
      {props.name}
      {props.text}
    </>
  );
};
export default Content;
