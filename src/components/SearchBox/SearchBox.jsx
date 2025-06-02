import css from "./SearchBar.module.css";
import { useSelector, useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";

export default function SearchBox() {
  const filter = useSelector((state) => state.filters.name);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={css.container}>
      <input
        className={css.search}
        type="text"
        value={filter}
        onChange={handleChange}
      />
    </div>
  );
}
