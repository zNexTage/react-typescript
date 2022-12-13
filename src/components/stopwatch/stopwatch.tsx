import { useEffect, useState } from "react";
import DateTimeFormat from "../../common/utils/datetime-format";
import ITask from "../../types/task";
import Button from "../button";
import Clock from "./clock";
import style from "./stopwatch.module.scss";

interface IProps {
    task: ITask | undefined
}

const Stopwatch = ({ task }: IProps) => {
    const [time, setTime] = useState<number>();

    useEffect(() => {
        if (task?.time) {
            setTime(DateTimeFormat.timeToSecond(task.time));
        }
    }, [task]);

    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>
                Escolha um card e inicie o cronomêtro
            </p>
            Tempo: {time}
            <div className={style.relogioWrapper}>
                <Clock />
            </div>
            <Button>
                Começar!
            </Button>
        </div>
    )
}

export default Stopwatch;