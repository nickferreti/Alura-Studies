import React, { useState } from 'react';
import Cronometro from '../components/Cronometro';
import Formulario from '../components/Formulario';
import Lista from '../components/Lista';
import { ITarefa } from '../types/tarefa';
import style from './style.module.scss';

function App() {
  const [tarefas, setTarefas] = useState<ITarefa[]>([]);
  const [selecionado, setSelecionado] = useState<ITarefa>();

  function selecionaTarefa(tarefaSelecionada: ITarefa) {{
    setSelecionado(tarefaSelecionada)
    setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({
      ...tarefa,
      selecionado: tarefa.id === tarefaSelecionada.id ? true : false
    }))) 
  }}

  function finalizaTarefa(){
    if(selecionado){
      setSelecionado(undefined);
      setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefas => {
        if(tarefas.id === selecionado.id) {
          return {
            ...tarefas,
            selecionado: false,
            completado: true
          }
        }
        return tarefas;
      }));
    }
  }
  return (
    <div className={style.AppStyle}>
      <Formulario 
      setTarefas={setTarefas} />
      <Lista 
      selecionaTarefa={selecionaTarefa}
      tarefas={tarefas} />
      <Cronometro
      selecionado={selecionado}
      finalizaTarefa={finalizaTarefa} />
    </div>
  );
}

export default App;