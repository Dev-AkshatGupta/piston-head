import "./Chips.css";
import { useDataValues } from "../../contextAndReducers/DataProvider";
function Chips({ name, filter }) {
  const { dispatch } = useDataValues();
 
  return (
    <span
      className={`chips ${filter.active?"chip-acitve":""}`}
      onClick={() => dispatch({ type: "CATEGORY", payload: filter })}
    >
      {name}
    </span>
  );
}
export { Chips };
