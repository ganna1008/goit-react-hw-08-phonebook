import { useSelector, useDispatch } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
// import {
//   ButtonSubmit,
//   InputField,
//   InputForm,
//   InputLabel,
// } from './ContactForm.styled';
import { addContact } from 'redux/contacts/operations';
import { Button, Stack, TextField } from '@mui/material';

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    const isExist = contacts.some(contact => contact.name === name);

    if (isExist) {
      alert(`${name} is already in contacts`);
    } else {
      dispatch(addContact({ name, number }));
    }
    form.reset();
  };

  return (
    <Stack
      onSubmit={handleSubmit}
      component="form"
      sx={{
        width: '350px',
      }}
      spacing={2}
      autoComplete="off"
    >
      <TextField
        required
        id="outlined-required"
        label="Name"
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      />

      {/* <InputLabel>
        Name
        <InputField
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </InputLabel> */}

      <TextField
        required
        id="outlined-required"
        label=" Number"
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
      />

      {/* <InputLabel>
        Number
        <InputField
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </InputLabel> */}
      {/* <ButtonSubmit type="submit">Add contact</ButtonSubmit> */}
      <Button variant="outlined" type="submit" sx={{ height: '50px' }}>
        Add contact
      </Button>
    </Stack>
  );
};
