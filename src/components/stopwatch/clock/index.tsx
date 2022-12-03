import React from "react";
import style from "./clock.module.scss";

const Clock = () => {
    return (
        <React.Fragment> {/* Equivalent to <></> */}
            <span className={style.relogioNumero}>
                0
            </span>
            <span className={style.relogioNumero}>
                0
            </span>
            <span className={style.relogioDivisao}>
                :
            </span>
            <span className={style.relogioNumero}>
                0
            </span>
            <span className={style.relogioNumero}>
                0
            </span>
        </React.Fragment>
    )
}

export default Clock;