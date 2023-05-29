import PropTypes from 'prop-types';
import { ContactItem } from './ContactListItem.style';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export const ContactListItem = ({ contact: { name, number, id } }) => {
  const dispatch = useDispatch();
  const onDeleteContact = () => dispatch(deleteContact(id));
  return (
    <ContactItem>
      <p>
        {name}: {number}
      </p>

      <IconButton aria-label="delete" onClick={onDeleteContact}>
        <DeleteIcon />
      </IconButton>
    </ContactItem>
  );
};

ContactListItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};
