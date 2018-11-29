import React, { Component } from "react";
import uuid from "uuid";
import axios from "axios";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import InputGroup from "../commons/InputGroup";
import { Consumer } from "../../Context";

class AddContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    errors: {}
  };

  toggle = () => {
    this.setState({
      showForm: !this.state.showForm,
      name: "",
      email: "",
      phone: "",
      errors: {}
    });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = async (dispatch, e) => {
    e.preventDefault();

    const { name, email, phone } = this.state;

    if (name === "") {
      this.setState({ errors: { name: "Name is required" } });
      return;
    }
    if (email === "") {
      this.setState({ errors: { email: "Email is required" } });
      return;
    }
    if (phone === "") {
      this.setState({ errors: { phone: "Phone is required" } });
      return;
    }

    this.setState({
      showForm: !this.state.showForm
    });

    const newContact = {
      name: name,
      email: email,
      phone: phone
    };

    const res = await axios.post(
      "https://jsonplaceholder.typicode.com/users",
      newContact
    );

    dispatch({
      type: "ADD_CONTACT",
      payload: res.data
    });

    this.setState({
      name: "",
      email: "",
      phone: "",
      errors: {}
    });
  };

  static defaultProps = {};

  render() {
    const { name, email, phone, errors } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="row mb-3">
              <div className="col-md-6">
                <h1 className="display-4">
                  <span className="text-danger">Contact</span> list
                </h1>
              </div>
              <div className="col-md-6 d-flex align-items-center justify-content-end">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={this.toggle}
                >
                  <i className="fas fa-plus" /> Add Contact
                </button>
                <Modal
                  isOpen={this.state.showForm}
                  toggle={this.toggle}
                  className={this.props.className}
                >
                  <ModalHeader toggle={this.showForm}>Add Contact</ModalHeader>
                  <ModalBody>
                    <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                      <InputGroup
                        id="name"
                        name="name"
                        placeholder="Enter name ..."
                        value={name}
                        error={errors.name}
                        onChange={this.onChange}
                        label="Name"
                      />
                      <InputGroup
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter email ..."
                        value={email}
                        error={errors.email}
                        onChange={this.onChange}
                        label="Email"
                      />
                      <InputGroup
                        id="phone"
                        name="phone"
                        placeholder="Enter phone ..."
                        value={phone}
                        error={errors.phone}
                        onChange={this.onChange}
                        label="Phone"
                      />
                      <div className="text-center">
                        <Button color="success" type="submit">
                          Save
                        </Button>{" "}
                        <Button color="danger" onClick={this.toggle}>
                          Cancel
                        </Button>
                      </div>
                    </form>
                  </ModalBody>
                </Modal>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default AddContact;
