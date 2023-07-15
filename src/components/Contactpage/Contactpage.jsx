import React from "react";
import "../../pages/style.css";
import { Container } from "react-bootstrap";

function Contactpage() {
  return (
    <div className="contactbackground">
      <Container>
        <h2 className="contacthead">My Contact</h2>
        <p className="contactpara">
          Email: vanlq160803@gmail.com. <br />
          Phone: 0852336547. <br />
          Address: Nam Từ Liêm, Hà Nội.

        </p>
        <button
          className="contactbtn"
          onClick={() => {
            window.open("https://github.com/Vanlq162003");
          }}
        >
          My Git
        </button>
        <span></span>
        <p className="copyright">
          © Copyright 2023
          <hr />
          Performed by <span>Lê Quang Văn</span>
        </p>
      </Container>
    </div>
  );
}

export default Contactpage;
