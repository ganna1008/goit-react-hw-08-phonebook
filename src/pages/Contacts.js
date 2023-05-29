import { useDispatch, useSelector } from 'react-redux';
import { ContactForm } from '../components/ContactForm/ContactForm';
import { ContactList } from '../components/ContactList/ContactList';
import { Filter } from '../components/Filter/Filter';
import { fetchContacts } from 'redux/contacts/operations';
import { selectError, selectIsLoading } from 'redux/contacts/selectors';
import { useEffect } from 'react';
import { PropagateLoader } from 'react-spinners';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />

      <div style={{ margin: '15px 0' }}>
        <PropagateLoader
          loading={isLoading}
          color="#36d7b7"
          cssOverride={{
            display: 'flex',
            marginLeft: '150px',
            alignItems: 'center',
          }}
          size={25}
          aria-label="Loading Spinner"
        />
      </div>

      {error && (
        <p style={{ color: 'red', fontWeight: 700, marginLeft: '40px' }}>
          {error}
        </p>
      )}
      <ContactList />
    </div>
  );
};

export default Contacts;
