import { ContactForm } from './form/contacts-form';
import { Filter } from './contacts/contacts-filter';
import { ContactList } from './contacts/contacts';

export const App = () => {
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </>
  );
};
