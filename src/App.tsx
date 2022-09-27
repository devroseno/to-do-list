import { useState } from 'react';
import * as C from './App.styles';
import React from 'react';


const App = () => {
  const [list, setList] = useState([]);

  return(
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>
      </C.Area>
    </C.Container>
  );
}

export default App;