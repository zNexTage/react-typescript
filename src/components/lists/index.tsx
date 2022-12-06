import React, { useState } from "react";
import ITask from "../../types/task";
import style from "./style.module.scss";


interface IProps {
    tasks: Array<ITask>
}

// Function Components -> Forma moderna de escrever componentes em React. 
const List = ({ tasks }: IProps): JSX.Element => {

    return (
        <aside className={style.listaTarefas}>
            <h2>
                Estudos do dia
            </h2>
            <ul>
                {
                    tasks.map(({ task, time, id, completed, selected }, index) => (
                        <li
                            key={id}
                            className={style.item}>
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