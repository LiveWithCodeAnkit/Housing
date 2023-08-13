
const Button = (props:any) => {
  return (<>
   <button className={props.className}>{props.icon}{props.title}</button>
  </>);
};

export default Button;
