import { useSelector } from 'react-redux';
import { ContactText, ContactsItem, ContactsList } from './contacts.styled';
import { deleteContact } from 'redux/contactsSlice';
import { useDispatch } from 'react-redux';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const filtredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <>
      <ContactsList>
        {filtredContacts.map(({ id, name, number }) => {
          return (
            <ContactsItem key={id}>
              <ContactText>
                {name}: {number}
              </ContactText>
              <button type="button" onClick={() => dispatch(deleteContact(id))}>
                Delete
              </button>
            </ContactsItem>
          );
        })}
      </ContactsList>
    </>
  );
};
