import React from "react";
import { connect } from "react-redux";
import { Modal } from "../Modal";
import history from "../../history";
import { fetchStream, deleteStream } from "../../actions";
import { Link } from "react-router-dom";
class Delete extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }
  renderActions() {
    return (
      <React.Fragment>
        <button
          onClick={() => this.props.deleteStream(this.props.match.params.id)}
          className="ui  button negative"
        >
          Delete
        </button>
        <Link to="/" className="ui  button">
          Cancle
        </Link>
      </React.Fragment>
    );
  }
  renderContent() {
    if (!this.props.stream) {
      return "Are You Sure Want To Delete  Stream...?";
    }
    return `Are You Sure Want To Delete the  Stream with title ${this.props.stream.title} `;
  }
  render() {
    return (
      <Modal
        title="Stream Delete"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push("/")}
      />
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};
const StreamDelete = connect(mapStateToProps, { fetchStream, deleteStream })(
  Delete
);
export { StreamDelete };
