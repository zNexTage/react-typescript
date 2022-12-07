import React, { useState } from "react";
import ITask from "../../types/task";
import style from "./style.module.scss";


interface IListProps {
    tasks: Array<ITask>;
    onTaskClick: (task: ITask) => void;
}

interface IItemProps {
    task: ITask;
    onTaskClick: (task: ITask) => void;
}

const Item = ({ onTaskClick, task }: IItemProps) => {
    return (
        <li
            onClick={() => onTaskClick(task)}
            key={task.id}
            className={`${style.item} ${task.selected ? style.itemSelecionado : ''}`}>
            <h3>
                {task.task}
            </h3>
            <span>
                {task.time}
            </span>
        </li>
    )
}

// Function Components -> Modern way to write components
const List = ({ tasks, onTaskClick }: IListProps): JSX.Element => {

    return (
        <aside className={style.listaTarefas}>
            <h2>
                Estudos do dia
            </h2>
            <ul>
                {
                    tasks.map((task, index) => (
                        <Item
                            key={task.id}
                            task={task}
                            onTaskClick={onTaskClick}
                        />
                    ))
                }
            </ul>
        </aside>
    )
}

export default List;