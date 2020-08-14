import React from "react";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";
import "./styles.css";

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars2.githubusercontent.com/u/12427718?s=460&u=fa3e191fa8a16a65f39752f990933fe04c6ccb0f&v=4"
          alt="Fabio Niglio"
        />
        <div>
          <strong>Fabio Niglio</strong>
          <span>Fisica</span>
        </div>
      </header>

      <p>
        I am a Full Stack Developer with experience in Large projects from
        different Industries using Salesforce Lightning Components Framework,
        APEX, Javascript, HTML, CSS.
        <br /> <br />I have a Bachelor in Science and Technology, and a bachelor
        in Information Engineer at the Federal University of ABC.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Get in Contact!
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
