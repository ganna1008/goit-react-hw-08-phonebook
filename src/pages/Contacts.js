import { useDispatch, useSelector } from 'react-redux';
import { ContactForm } from '../components/ContactForm/ContactForm';
import { ContactList } from '../components/ContactList/ContactList';
import { Filter } from '../components/Filter/Filter';
import { fetchContacts } from 'redux/contacts/operations';
import { selectError, selectIsLoading } from 'redux/contacts/selectors';
import { useEffect } from 'react';
import { PropagateLoader } from 'react-spinners';
import { Box, Paper, Typography } from '@mui/material';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Paper
        sx={{
          display: 'flex',
          justifyContent: 'center',
          padding: '15px 15px',
        }}
      >
        <Box>
          <Typography
            component="h1"
            variant="h5"
            color="#a0a8ba"
            sx={{ fontWeight: '700', mb: '10px' }}
          >
            Phonebook
          </Typography>

          <ContactForm />
        </Box>
      </Paper>

      <Paper
        sx={{
          display: 'flex',
          justifyContent: 'center',
          padding: '15px 15px',
        }}
      >
        <Box>
          <Typography
            component="h2"
            variant="h5"
            color="#a0a8ba"
            sx={{ fontWeight: '700', mb: '10px' }}
          >
            Contacts
          </Typography>

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
        </Box>
      </Paper>
    </>
  );
};

export default Contacts;
