import React from 'react';
import { ITarefa } from '../../types/tarefa';
import style from './Lista.module.scss';
import Item from './item/item';


function Lista({ tarefas }: { tarefas: ITarefa[] }) {
  return (
    <aside className={style.listaTarefas}>
      <h2> Estudos do dia </h2>
      <ul>
        {tarefas.map((item, index) => (
          <Item
            key={index}
            {...item}
          />
        ))}
      </ul>
    </aside>
  )
}

export default Lista;