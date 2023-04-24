const Content = (props) => {
  return (
    <>
      <h2 className="title">{props.name}</h2>
      <p className="paragraph">{props.text}</p>
    </>
  );
};
export default Content;
