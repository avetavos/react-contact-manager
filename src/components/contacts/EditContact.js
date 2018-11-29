import React, { Component } from "react";
import uuid from "uuid";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import InputGroup from "../commons/InputGroup";
import { Consumer } from "../../Context";

class EditContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    errors: {}
  };

  async componentDidMount() {
    const id = this.props.match.params.id;
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );

    const contact = res.data;
    this.setState({
      name: contact.name,
      email: contact.email,
      phone: contact.phone
    });
  }

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

    const updateContact = {
      name: name,
      email: email,
      phone: phone
    };

    this.setState({
      showForm: !this.state.showForm
    });

    const id = this.props.match.params.id;
    const res = await axios.put(
      `https://jsonplaceholder.typicode.com/users/${id}`,
      updateContact
    );

    dispatch({
      type: "UPDATE_CONTACT",
      payload: res.data
    });

    this.setState({
      name: "",
      email: "",
      phone: "",
      errors: {}
    });

    this.props.history.push("/");
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
              <div className="card col-12 p-0">
                <div className="card-header">
                  <h1 className="display-6">
                    <span className="text-danger">Edit</span> Contact
                  </h1>
                </div>
                <div className="list-group list-group-flush p-3">
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
                        Update
                      </Button>{" "}
                      <Link className="btn btn-secondary" to="/">
                        Cancel
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default EditContact;
