const Card = (props:any) => {
  return (
    <>
     
      <div className={props.className}>
        <img/>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        <a>{props.link}</a>
      </div>
    </>
  );
};

export default Card;
