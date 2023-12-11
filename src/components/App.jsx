import { ContactForm } from './form/contacts-form';
import { Filter } from './contacts/contacts-filter';
import { ContactList } from './contacts/contacts';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { selectContacts, selectError, selectIsLoading } from 'redux/selectors';

export const App = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      {isLoading && !error && <b>Loading contacts...</b>}
      {error ? (
        <b>Oops, {error.toLowerCase()}! Please, try again!</b>
      ) : (
        <>
          {contacts.length > 0 && (
            <>
              <h2>Contacts</h2>
              <Filter />
              <ContactList />
            </>
          )}
        </>
      )}
    </>
  );
};
