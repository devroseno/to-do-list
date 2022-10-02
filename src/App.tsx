
import { useState } from 'react';
import * as C from './App.styles';
import { Item } from './types/Item';
import { ListItem } from './components/ListItem/Index';
import React from 'react';
import { render } from 'react-dom';
window.React = React;

const App = () => {
  const [list, setList] = useState<Item[]>([
    { id: 1, name: 'Comprar o pão na padaria', done: true},
    { id: 2, name: 'Levar o cachorro para passear', done: false},

  ]);

  return(
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>

        {/* Área de adicionar nova tarefas */}

        {list.map((item, index)=>(
          <ListItem key={index} item={item} />
        ))}
        
      </C.Area>
    </C.Container>
  );
}

export default App;