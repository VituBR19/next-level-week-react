import React from 'react';

import wppIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

export default function TeacherItem() {
  return(
    <article className="teacher-item">
      <header>
        <img src="https://avatars0.githubusercontent.com/u/59032828?s=460&u=82b52bfe21e4daf953bc6feb9cef19f487ac9c53&v=4" alt=""/>
        <div>
          <strong>Vitor Couto</strong>
          <span>Programador</span>
        </div>
      </header>

      <p>
        Entusiasta da programação voltada para o desenvolvimento de interfaces.
        <br/><br/>
        Ama o que faz e adora ensinar as coisas que sabe para as pessoas, o conhecimento é nossa melhor arma.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 90,00</strong>
        </p>

        <button type="submit">
          <img src={wppIcon} alt="Whatsapp"/>
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}