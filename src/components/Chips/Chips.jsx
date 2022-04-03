import "./Chips.css";
import { useDataValues } from "../../contextAndReducers/DataProvider";
function Chips({ name }) {
  const { dispatch } = useDataValues();
  return (
    <span
      className="chips"
      onClick={() => dispatch({ type: "category", payload: name })}
    >
      {name}
    </span>
  );
}
export { Chips };
