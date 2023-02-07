import React, { useState } from 'react';
import * as C from './App.styles'
import { Item } from './types/Item'
import { ListItem } from './components/ListItem';
import {AddArea} from './components/AddArea'

function App() {
  const [list, setlist] = useState<Item[]>([
    {id: 1, name: 'Comprar pão', done: false},
    {id: 2, name: 'Comprar Pastel', done: true},
  ])
  const handleAddTask = (taskName: string)=>{
    let newList = [...list];
    newList.push({
      id: list.length +1,
      name:taskName,
      done:false
    });
    setlist(newList)
  }
  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista de tarefas</C.Header>

        <AddArea onEnter={handleAddTask}/>

        {list.map((item, index) => (
          <ListItem key={index} item={item} />
        ))}
      </C.Area>
    </C.Container>
  );
}

export default App;
