import { dropDownList } from "./constant/DropDown";
const DropDown = (props) => {
  const idName = props.id;

  
  console.log("dfhsdg:=",dropDownList);
 

  let options = [];

  for (let i = 0; i < dropDownList.length; i++) {
    if (dropDownList[i].name === idName) {
      options = dropDownList[i].options;
      break;
    }
  }
  console.log("type of :=",typeof(options));
  return (
    
    <select className={props.className} id={props.id}>
      <option value="">{idName}</option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};
export default DropDown;