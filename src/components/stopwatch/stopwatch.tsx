import Button from "../button";
import Clock from "./clock";
import style from "./stopwatch.module.scss";

const Stopwatch = () => {
    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>
                Escolha um card e inicie o cronomêtro
            </p>
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