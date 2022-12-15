import React from "react";
import DateTimeFormat from "../../../common/utils/datetime-format";
import style from "./clock.module.scss";

interface IProps {
    time: number | undefined
}

const Clock = ({ time = 0 }: IProps) => {
    const { minutes, seconds } = DateTimeFormat.secondsToMinute(time);
    
    const [minDozens, minUnit] = `${minutes}`.padStart(2, "0");
    const [secondDozens, secondUnit] = `${seconds}`.padStart(2, "0");

    return (
        <React.Fragment> {/* Equivalent to <></> */}
            <span className={style.relogioNumero}>
                {minDozens}
            </span>
            <span className={style.relogioNumero}>
                {minUnit}
            </span>
            <span className={style.relogioDivisao}>
                :
            </span>
            <span className={style.relogioNumero}>
                {secondDozens}
            </span>
            <span className={style.relogioNumero}>
                {secondUnit}
            </span>
        </React.Fragment>
    )
}

export default Clock;