import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

class InputGroup extends Component {
  render() {
    const {
      type,
      id,
      placeholder,
      error,
      value,
      onChange,
      label,
      name
    } = this.props;
    return (
      <div className="form-group">
        <label htmlFor={id}>{label}</label>
        <input
          type={type}
          className={classnames("form-control", { "is-invalid": error })}
          placeholder={placeholder}
          id={id}
          value={value}
          onChange={onChange}
          name={name}
        />
        {error ? <div className="invalid-feedback">{error}</div> : null}
      </div>
    );
  }
}

InputGroup.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  error: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired
};

InputGroup.defaultProps = {
  type: "text"
};

export default InputGroup;
