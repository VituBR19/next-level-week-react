import React, { useState, FormEvent } from 'react';

import { PageHeader } from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';

import api from '../../services/api';

import './styles.css';

export default function TeacherList() {
  const [ teachers, setTeachers ] = useState([]);

  const [ weekDay, setWeekDay ] = useState('');
  const [ subject, setSubject ] = useState('');
  const [ time, setTime ] = useState('');

  async function searchTeachers(e: FormEvent) {
    e.preventDefault();

    const response = await api.get('classes', {
      params: {
        week_day: weekDay,
        subject,
        time
      }
    });

    if( !response.data ) return alert('nada encontrado');

    setTeachers( response.data );
  }

  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis." >
        <form id="search-teachers" onSubmit={ searchTeachers }>
          <Select 
            label="Matéria"
            name="subject"
            value={ subject }
            onChange={ e => setSubject( e.target.value ) }
            options= {[
              {value: 'Artes', label: "Artes"},
              {value: 'Portugues', label: "Portugues"},
              {value: 'Ciencias', label: "Ciencias"},
              {value: 'Matematica', label: "Matematica"},
              {value: 'Historia', label: "Historia"},
              {value: 'Geografia', label: "Geografia"},
              {value: 'Biologia', label: "Biologia"},
              {value: 'Fisica', label: "Fisica"},
              {value: 'Informatica', label: "Informatica"},
              {value: 'Coach fisico', label: "Coach fisico"}
            ]}
          />

          <Select 
            label="Dia da semana"
            name="week_day"
            value={ weekDay }
            onChange={ e => setWeekDay( e.target.value ) }
            options= {[
              {value: '0', label: "Domingo"},
              {value: '1', label: "Segunda-feira"},
              {value: '2', label: "Terça-feira"},
              {value: '3', label: "Quarta-feira"},
              {value: '4', label: "Quinta-feira"},
              {value: '5', label: "Sexta-feira"},
              {value: '6', label: "Sábado"},
            ]}
          />
          
          <Input 
            label="Hora"
            name="time"
            type="time"
            value={ time }
            onChange={ e => setTime( e.target.value ) }
          />

          <button type="submit">
            Buscar
          </button>
        </form>
      </PageHeader>

      <main>
        { teachers.map(( teacher: Teacher ) => (
          <TeacherItem key={ teacher.id } teacher={ teacher }/>
        )) }
      </main>
    </div>
  );
}