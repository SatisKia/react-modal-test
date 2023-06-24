import './App.css';
import { useState } from 'react';
import Modal from './component/Modal';

function MyTestModal({ modalShowFlag, setModalShowFlag }) {
  const content = (
    <div><b>てすと</b><br/><br/>てすとてすと</div>
  );
  const params = {
    content: content,
    closeLabel: "閉じる",
    backdropClickToClose: true
  };
  return (
    <Modal modalShowFlag={modalShowFlag} setModalShowFlag={setModalShowFlag} params={params} />
  );
}

function App() {
  const [ modalShowFlag, setModalShowFlag ] = useState(false);
  return (
    <div className="App">
      <button onClick={() => setModalShowFlag(true)}>モーダルを表示</button>
      <MyTestModal modalShowFlag={modalShowFlag} setModalShowFlag={setModalShowFlag} />
    </div>
  );
}

export default App;
