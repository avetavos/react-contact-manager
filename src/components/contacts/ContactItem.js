import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Consumer } from "../../Context";

class ContactItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showContact: false
    };
  }

  onDelete = (id, dispatch) => {
    dispatch({
      type: "DELETE_CONTACT",
      payload: id
    });
  };

  render() {
    const { id, name, email, phone, deleteClickHandle } = this.props;
    const { showContact } = this.state;
    return (
      <Consumer>
        {values => {
          const { dispatch } = values;
          return (
            <div className="card mb-3">
              <div className="card-body">
                <h5 className="card-title d-flex justify-content-between align-items-center">
                  <div>
                    {name}{" "}
                    <i
                      onClick={() =>
                        this.setState({ showContact: !showContact })
                      }
                      className="fas fa-sort-down"
                    />
                  </div>
                  <div>
                    <Link to={`/edit/${id}`}>
                      <i
                        className="fas fa-pencil-alt"
                        style={{ cursor: "pointer", fontSize: "20px" }}
                      />
                    </Link>
                    {` `}
                    <i
                      onClick={deleteClickHandle}
                      className="fas fa-times text-danger mt-1"
                      style={{ cursor: "pointer", fontSize: "25px" }}
                    />
                  </div>
                </h5>
                {showContact ? (
                  <ul className="list-group">
                    <li className="list-group-item">
                      <strong>Email : </strong>
                      {email}
                    </li>
                    <li className="list-group-item">
                      <strong>Phone : </strong>
                      {phone}
                    </li>
                  </ul>
                ) : null}
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

ContactItem.propTypes = {
  deleteClickHandle: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired
};

export default ContactItem;
