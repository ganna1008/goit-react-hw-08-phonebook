import { useDispatch, useSelector } from 'react-redux';
// import { InputField, InputLabel } from './Filter.styled';
import { setFilter } from 'redux/contacts/filterSlice';
import { selectFilter } from 'redux/contacts/selectors';
import { TextField } from '@mui/material';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const changeFilter = ({ target: { value } }) => {
    dispatch(setFilter(value.trimStart()));
  };

  return (
    <TextField
      label="Filter"
      sx={{
        width: '350px',
      }}
      type="text"
      value={filter}
      onChange={changeFilter}
    />
  );
};
