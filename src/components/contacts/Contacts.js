import React, { Component } from "react";
import axios from "axios";

import { Consumer } from "../../Context";
import ContactItem from "./ContactItem";
import AddContact from "./AddContact";

class Contacts extends Component {
  deleteContact = async (id, dispatch) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);

      dispatch({
        type: "DELETE_CONTACT",
        payload: id
      });
    } catch (e) {
      dispatch({
        type: "DELETE_CONTACT",
        payload: id
      });
    }
  };
  render() {
    return (
      <Consumer>
        {value => {
          const { contacts, dispatch } = value;
          return (
            <React.Fragment>
              <AddContact />
              {contacts.map(contact => (
                <ContactItem
                  key={contact.id}
                  id={contact.id}
                  name={contact.name}
                  email={contact.email}
                  phone={contact.phone}
                  deleteClickHandle={this.deleteContact.bind(
                    this,
                    contact.id,
                    dispatch
                  )}
                />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Contacts;
