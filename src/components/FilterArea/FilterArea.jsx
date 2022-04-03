import "./FilterArea.css";
import { useEffect } from "react";
import { Chips } from "../Chips/Chips";
import { useDataValues } from "../../contextAndReducers/DataProvider";
function FilterArea() {

  const { dispatch, state } = useDataValues();

  return (
    <div className="FilterArea">
     
      {state.categories.map((item) => (
        <Chips name={item.categoryName} key={item._id} />
      ))}
    </div>
  );
}
export { FilterArea };
