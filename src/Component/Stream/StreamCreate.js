import React from "react";
import { Field, reduxForm } from "redux-form";

class Create extends React.Component {
  renderError({ touched, error }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }
  renderInput = ({ input, label, meta }) => {
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        <div>{this.renderError(meta)}</div>
      </div>
    );
  };
  onSubmit(formValues) {}

  render() {
    return (
      <div>
        <form
          onSubmit={this.props.handleSubmit(this.onSubmit)}
          className="ui form"
        >
          <Field
            name="title"
            component={this.renderInput}
            label="Enter Title"
          />
          <Field
            name="description"
            component={this.renderInput}
            label="Enter Description"
          />
          <button className="ui button primary">Submit</button>
        </form>
      </div>
    );
  }
}
const validate = (formValues) => {
  const error = {};
  if (!formValues.title) {
    error.title = "you must enter the title";
  }
  if (!formValues.description) {
    error.description = "you must enter a description";
  }
  return error;
};
const StreamCreate = reduxForm({
  form: "StreamCreate",
  validate,
})(Create);
export { StreamCreate };
