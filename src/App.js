import './App.css';
import Modal from './component/Modal';
import React from 'react';

class MyTestModal extends Modal {
  constructor(props) {
    super(props);

    const content = (
      <div><b>てすと</b><br/><br/>てすとてすと</div>
    );
    const params = {
      content: content,
      closeLabel: "閉じる",
      backdropClickToClose: true
    };
    this.setParams(params);
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);

    // 状態管理
    this.state = {
      modalShowFlag: false
    };
    this.setModalShowFlag = this.setModalShowFlag.bind(this);
  }

  // 状態変更用コールバック関数
  setModalShowFlag(newFlag) {
    this.setState({ modalShowFlag: newFlag });
  }

  render() {
    return (
      <div className="App">
        <button onClick={() => this.setModalShowFlag(true)}>モーダルを表示</button>
        <MyTestModal showFlag={this.state.modalShowFlag} setShowFlag={this.setModalShowFlag} />
      </div>
    );
  }
}

export default App;
