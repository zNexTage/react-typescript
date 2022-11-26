import React from "react";
import style from "./style.module.scss";

class Button extends React.Component {
    render(): React.ReactNode {
        return (
            <button className={style.botao}>
                Botão
            </button>
        )
    }
}

export default Button;