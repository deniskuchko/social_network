import React from "react";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
  };

  activeteEditMode = () => {
    this.setState({
      editMode: true,
    });
  };
  deactiveteEditMode = () => {
    this.setState({
      editMode: false,
    });
  };
  render() {
    return (
      <div>
        {!this.state.editMode && (
          <div>
            <span onDoubleClick={this.activeteEditMode}>
              {this.props.status}
            </span>
          </div>
        )}
        {this.state.editMode && (
          <div>
            <input
              autoFocus={true}
              onBlur={this.deactiveteEditMode}
              value={this.props.status}
            />
          </div>
        )}
        <div></div>
      </div>
    );
  }
}

export default ProfileStatus;
