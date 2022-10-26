
import { useState } from 'react';
import { Item } from './types/Item';
import { ListItem } from './components/ListItem/Index';
import { AddArea } from './components/AddArea';
import React from 'react';
import { render } from 'react-dom';
import * as C from './App.styles';
window.React = React;

const App = () => {

  const [list, setList] = useState<Item[]>([]);

  const handleAddTask = (taskName: string) => {

    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false
    });

    setList(newList);
  }

  return(
    <C.Container>
      <C.Area>
        <C.Header>TO DO LIST</C.Header>

        <AddArea onEnter={handleAddTask} />

        {list.map((item, index)=>(
          <ListItem key={index} item={item} />
        ))}
        
      </C.Area>
    </C.Container>
  );

}

export default App;