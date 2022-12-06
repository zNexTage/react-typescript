import React from 'react';
import ITask from '../../types/task';
import Button from '../button';
import style from './styles.module.scss';

interface IProps {
    onSubmit: (task: ITask) => void;
}

class Form extends React.Component<IProps> {
    state = {
        task: "",
        time: "00:00"
    }

    //Set state after user input in a field.
    private handleChange(key: string, value: string) {
        this.setState({
            ...this.state,
            [key]: value
        });
    }

    /**
     * Add a task
     * @param event 
     */
    private onSubmit(event: React.FormEvent<HTMLFormElement>) {
        // avoids the default behavior of submit, in this case, it prevents the page from being updated.
        event.preventDefault();

        this.props.onSubmit({
            task: this.state.task,
            time: this.state.time
        });

        //Reset state after submit
        this.setState({
            task: '',
            time: '00:00'
        });
    }

    render(): React.ReactNode {
        return (
            <form className={style.novaTarefa} onSubmit={this.onSubmit.bind(this)}> {/* this.onSubmit.bind(this) -> binds submit to the scope of the class */}
                <div className={style.inputContainer}>
                    <label htmlFor='txtTask'>
                        Adicione um novo estudo
                    </label>
                    <input
                        id="txtTask"
                        placeholder="O que você quer estudar?"
                        type="text"
                        name="task"
                        onChange={event => this.handleChange('task', event.target.value)}
                        value={this.state.task}
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
                        max="01:30"
                        placeholder="O que você quer estudar?"
                        type="time"
                        name="time"
                        value={this.state.time}
                        onChange={event => this.handleChange('time', event.target.value)}
                        required
                    />
                </div>
                <Button type='submit'>
                    Adicionar
                </Button>
            </form>
        )
    }
}

export default Form;