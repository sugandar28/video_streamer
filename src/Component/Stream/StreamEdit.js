import React from "react";
import { connect } from "react-redux";
import { fetchStream, editStream } from "../../actions";
import { WrappedForm } from "./StreamForm";
import _ from "lodash";

class Edit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }
  onSubmit = (formValues) => {
    this.props.editStream(this.props.match.params.id, formValues);
  };

  render() {
    if (!this.props.stream) {
      return <div>Loading.....</div>;
    }
    return (
      <div>
        <h3>Edit Stream</h3>
        <WrappedForm
          onSubmit={this.onSubmit}
          initialValues={_.pick(this.props.stream, "title", "description")}
        />
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};
const StreamEdit = connect(mapStateToProps, { fetchStream, editStream })(Edit);
export { StreamEdit };
