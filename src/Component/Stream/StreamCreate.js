import React from "react";
import { Field, reduxForm } from "redux-form";

class Create extends React.Component {
  renderInput({ input }) {
    return <input {...input} />;
  }

  render() {
    return (
      <div>
        <form>
          <Field name="title" component={this.renderInput} />
          <Field name="description" component={this.renderInput} />
        </form>
      </div>
    );
  }
}
const StreamCreate = reduxForm({
  form: "StreamCreate",
})(Create);
export { StreamCreate };
