import './Modal.css';

function Modal({ modalShowFlag, setModalShowFlag, params }) {
  if (modalShowFlag) {
    return (
      <div id="overlay" onClick={() => params.backdropClickToClose ? setModalShowFlag(false) : null}>
        <div id="modal" onClick={(e) => e.stopPropagation()}>
          {params.content}
          <br/>
          <button onClick={() => setModalShowFlag(false)}>{params.closeLabel}</button>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default Modal;
