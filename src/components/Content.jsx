import Title from "./Title";
import Description from "./Description";
const Content = (props) => {
  return (
    <>
      <div className="background-grey">
        <Title name={props.name} />
        {/* <h2 className="title">{props.name}</h2> */}
        {/* <p className="paragraph">{props.text}</p> */}
        <Description text={props.text} />
      </div>
    </>
  );
};
export default Content;
