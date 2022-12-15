import { useEffect, useState } from "react";
import DateTimeFormat from "../../common/utils/datetime-format";
import ITask from "../../types/task";
import Button from "../button";
import Clock from "./clock";
import style from "./stopwatch.module.scss";

interface IProps {
    task: ITask | undefined,
    onTimeEnd: () => void;
}

const Stopwatch = ({ task, onTimeEnd }: IProps) => {
    const [time, setTime] = useState<number>();

    useEffect(() => {
        if (task?.time) {
            setTime(DateTimeFormat.timeToSecond(task.time));
        }
    }, [task]);

    const countdown = (count: number = 0) => {
        const timeout = setTimeout(() => {
            if (count > 0) {
                const newTime = count - 1;

                setTime(newTime);

                return countdown(newTime);
            }

            onTimeEnd();
        }, 1000);
    }

    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>
                Escolha um card e inicie o cronomêtro
            </p>
            <div className={style.relogioWrapper}>
                <Clock time={time} />
            </div>
            <Button onClick={() => countdown(time)}>
                Começar!
            </Button>
        </div>
    )
}

export default Stopwatch;