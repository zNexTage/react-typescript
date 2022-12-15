import ITask from "../../types/task";
import style from "./style.module.scss";

interface ITaskProps {
    task: ITask;
    onTaskClick: (task: ITask) => void;
}

const TaskItem = ({ onTaskClick, task }: ITaskProps) => {
    return (
        <li
            onClick={() => !task.completed && onTaskClick(task)}
            key={task.id}
            className={`${style.item} ${task.selected ? style.itemSelecionado : ''} ${task.completed ? style.itemCompletado : ''}`}>
            <h3>
                {task.task}
            </h3>
            <span>
                {task.time}
            </span>
            {task.completed &&
                <span aria-label="Tarefa completada" className={style.concluido}>
                </span>
            }
        </li>
    )
}

export default TaskItem;