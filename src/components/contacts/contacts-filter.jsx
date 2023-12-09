import { useDispatch, useSelector } from 'react-redux';
import { updateFilter } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);
  return (
    <>
      <h4>Find contacts by name</h4>
      <input
        type="text"
        value={filter}
        onChange={e => dispatch(updateFilter(e.target.value))}
      ></input>
    </>
  );
};
