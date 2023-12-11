import { useSelector } from 'react-redux';
import { ContactText, ContactsItem, ContactsList } from './contacts.styled';

import { useDispatch } from 'react-redux';
import { selectFilteredContacts } from 'redux/selectors';
import { deleteContact } from 'redux/operations';

export const ContactList = () => {
  const filtredContacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();
  return (
    <>
      <ContactsList>
        {filtredContacts.map(({ id, name, phone }) => {
          return (
            <ContactsItem key={id}>
              <ContactText>
                {name}: {phone}
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
