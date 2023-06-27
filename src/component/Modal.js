import './Modal.css';
import React from 'react';

class Modal extends React.Component {
  constructor(props) {
    super(props);
  }

  params = {
    content: '',
    closeLabel: "閉じる",
    backdropClickToClose: false
  };
  setParams(newParams) {
    if (newParams.content != undefined) {
      this.params.content = newParams.content;
    }
    if (newParams.closeLabel != undefined) {
      this.params.closeLabel = newParams.closeLabel;
    }
    if (newParams.backdropClickToClose != undefined) {
      this.params.backdropClickToClose = newParams.backdropClickToClose;
    }
  }

  render() {
    if (this.props.showFlag) {
      return (
        <div id="overlay" onClick={() => this.params.backdropClickToClose ? this.props.setShowFlag(false) : null}>
          <div id="modal" onClick={(e) => e.stopPropagation()}>
            {this.params.content}
            <br/>
            <button onClick={() => this.props.setShowFlag(false)}>{this.params.closeLabel}</button>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Modal;
