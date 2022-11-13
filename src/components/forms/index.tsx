import React from 'react';
import Button from '../button';

class Form extends React.Component {
    render(): React.ReactNode {
        return (
            <form>
                <div>
                    <label htmlFor='txtTask'>
                        Adicione um novo estudo
                    </label>
                    <input
                        id="txtTask"
                        placeholder="O que você quer estudar?"
                        type="text"
                        name="task"
                        required
                    />
                </div>
                <div>
                    <label htmlFor='txtTime'>
                        Tempo
                    </label>
                    <input
                        id="txtTime"
                        step={1}
                        min="00:00:00"
                        max="01:30"
                        placeholder="O que você quer estudar?"
                        type="time"
                        name="time"
                        required
                    />
                </div>
                <Button>
                    Butão
                </Button>
            </form>
        )
    }
}

export default Form;