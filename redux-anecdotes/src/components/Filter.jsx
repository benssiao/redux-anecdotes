import { useSelector, useDispatch } from "react-redux";
import { updateFilterString } from "../reducers/filterReducer";

function Filter() {
  const filterText = useSelector((state) => state.filterText);
  const dispatch = useDispatch();

  return (
    <div>
      filter:{" "}
      <input
        onChange={(e) => {
          dispatch(updateFilterString(e.target.value));
        }}
        value={filterText}
        type="text"
        placeholder="filter string"
      ></input>
    </div>
  );
}

export default Filter;
