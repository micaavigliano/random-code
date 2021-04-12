import React, { useState, useMemo } from "react";

import Modal from "./Modal/Modal";
import ProgressBar from "./ProgressBar/ProgressBar";
import "./index.css";

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const min = 10;
  const max = 60;
  const a = useMemo(
    () => Math.floor(Math.random() * (max - min + 1)) + min,
    []
  );

  return (
    <div className="App">
      <h1>Parent container</h1>
      <h3>This is just a demo container</h3>
      <button onClick={() => setIsModalVisible(true)}>open modal</button>
      {isModalVisible && (
        <Modal onModalClose={() => setIsModalVisible(false)}>
          <Modal.Header>Header</Modal.Header>
          <Modal.Body>Body</Modal.Body>
          <Modal.Footer>
            <Modal.Footer.CloseBtn>Close</Modal.Footer.CloseBtn>
          </Modal.Footer>
        </Modal>
      )}
      <ProgressBar percent={a} />
    </div>
  );
}

export default App;
