import React, { useState } from 'react';
import Form from '../components/forms';
import List from '../components/lists';
import Stopwatch from '../components/stopwatch/stopwatch';
import ITask from '../types/task';
import style from './styles.module.scss';

function App() {
  const [tasks, setTasks] = useState(new Array<ITask>());
  const [selectedTask, setSelectedTask] = useState<ITask>();

  const onSubmit = (task: ITask) => setTasks([...tasks, task]);

  const onTaskClick = (task: ITask) => {
    setSelectedTask(task);
  }

  return (
    <div className={style.AppStyle}>
      <Form onSubmit={onSubmit} />
      <List
        tasks={tasks}
        onTaskClick={onTaskClick}
      />
      <Stopwatch />
    </div>
  );
}

export default App;
