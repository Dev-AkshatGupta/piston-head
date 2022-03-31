import "./FilterArea.css";
import { Chips } from "../Chips/Chips";
import { useDataValues } from "../../contextAndReducers/DataProvider";
function FilterArea() {
  const { dispatch } = useDataValues();
  return (
    <div className="FilterArea">
      <Chips name={"Home"} />
      <Chips name={"American Classics"} />
      <Chips name={"Car Reviews"} />
      <Chips name={"Custom"} />
      <Chips name={"Repairs"} />
      <Chips name={"Bikes"} />
    </div>
  );
}
export { FilterArea };
