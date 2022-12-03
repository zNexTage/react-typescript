import React, { useState } from "react";
import style from "./style.module.scss";

// Function Components -> Forma moderna de escrever componentes em React. 

const List = (): JSX.Element => {
    const [tasks, setTasks] = useState([{
        task: "React",
        time: "02:00"
    }, {
        task: "Javascript",
        time: "01:00"
    }, {
        task: "Typescript",
        time: "03:00"
    }]);

    return (
        <aside className={style.listaTarefas}>
            <h2 onClick={() => {
                setTasks([...tasks, { task: 'Estudar estado', time: '05:00:00' }])
            }}>
                Estudos do dia
            </h2>
            <ul>
                {
                    tasks.map(({ task, time }, index) => (
                        <li key={index} className={style.item}>
                            <h3>
                                {task}
                            </h3>
                            <span>
                                {time}
                            </span>
                        </li>
                    ))
                }
            </ul>
        </aside>
    )
}

export default List;