import React, { useState } from 'react';
import ITask from '../../types/task';
import Button from '../button';
import style from './styles.module.scss';
import { v4 as uuid } from "uuid";

interface IProps {
    onTaskSubmit: (task: ITask) => void;
}

const Form = ({ onTaskSubmit }: IProps): JSX.Element => {
    const INITIAL_TIME = "00:00";

    const [task, setTask] = useState<string>("");
    const [time, setTime] = useState<string>(INITIAL_TIME);

    //Set state after user input in a field.
    const handleChange = (state: React.Dispatch<React.SetStateAction<string>>, value: string) => {
        state(value);
    }

    /**
     * Add a task
     * @param event 
     */
    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        // avoids the default behavior of submit, in this case, it prevents the page from being updated.
        event.preventDefault();

        onTaskSubmit({
            id: uuid(),
            task: task,
            time: time,
            completed: false,
            selected: false
        });

        //Reset state after submit
        setTask("");
        setTime(INITIAL_TIME);
    }

    return (
        <form
            className={style.novaTarefa}
            onSubmit={onSubmit}>
            <div className={style.inputContainer}>
                <label htmlFor='txtTask'>
                    Adicione um novo estudo
                </label>
                <input
                    id="txtTask"
                    placeholder="O que você quer estudar?"
                    type="text"
                    name="task"
                    onChange={event => handleChange(setTask, event.target.value)}
                    value={task}
                    required
                />
            </div>
            <div className={style.inputContainer}>
                <label htmlFor='txtTime'>
                    Tempo
                </label>
                {/* Controlled input */}
                <input
                    id="txtTime"
                    step={1}
                    min="00:00:00"
                    placeholder="O que você quer estudar?"
                    type="time"
                    name="time"
                    value={time}
                    onChange={event => handleChange(setTime, event.target.value)}
                    required
                />
            </div>
            <Button type='submit'>
                Adicionar
            </Button>
        </form>
    )
}

export default Form;