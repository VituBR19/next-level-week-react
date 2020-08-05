import React from 'react';

import wppIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';
import api from '../../services/api';

export interface Teacher {
  id: number;
  user_id: number;
  name: string;
  avatar: string;
  subject: string;
  bio: string;
  cost: number;
  whatsapp: string;
}

interface TeacherItemsProps {
  teacher: Teacher;
}

function newConnection(user_id: number) {
  api.post('connections', {
    user_id
  }).then(() => {
    console.log('conexão feita')
  }).catch(err => {
    console.log(err)
  });
}

 const TeacherItem: React.FC<TeacherItemsProps> = ({ teacher }) => {
  return(
    <article className="teacher-item">
      <header>
        <img src={ teacher.avatar } alt="Avatar do professor"/>
        <div>
          <strong>{ teacher.name }</strong>
          <span>{ teacher.subject }</span>
        </div>
      </header>

      <p>
        { teacher.bio }
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ { teacher.cost.toFixed(2) }</strong>
        </p>

        <a href={`https://wa.me/${ teacher.whatsapp }`} target="_blank" onClick={ e => newConnection( teacher.user_id ) }>
          <img src={wppIcon} alt="Whatsapp"/>
          Entrar em contato
        </a>
      </footer>
    </article>
  );
}

export default TeacherItem;