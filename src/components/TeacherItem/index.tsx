import React from "react";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars1.githubusercontent.com/u/28353500?s=460&u=c3ad36517b738e6f907017e0d222053413c06462&v=4"
          alt="Leo"
        />
        <div>
          <strong>Leo</strong>
          <span>Teologia</span>
        </div>
      </header>

      <p>
        Entusiasta do ensino bíblico universal.
        <br />
        <br />
        Apaixonado por export e explicar a Palavra de Deus de maneira que ela
        possa ser compreendida por todos que desejam conhecer mais de Deus.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
