import React from 'react';
import Form from '../components/forms';
import List from '../components/lists';
import Stopwatch from '../components/stopwatch/stopwatch';
import style from './styles.module.scss';

function App() {
  return (
    <div className={style.AppStyle}>
      <Form />
      <List />
      <Stopwatch />
    </div>
  );
}

export default App;
