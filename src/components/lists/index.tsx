import ITask from "../../types/task";
import TaskItem from "../task-item";
import style from "./style.module.scss";

interface IListProps {
    tasks: Array<ITask>;
    onTaskClick: (task: ITask) => void;
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
                        <TaskItem
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