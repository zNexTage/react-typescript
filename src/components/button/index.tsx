import React from "react";
import style from "./style.module.scss";

interface IProps {
    children: React.ReactNode;
    type?: "button" | "submit" | "reset" | undefined
}

class Button extends React.Component<IProps> {

    render(): React.ReactNode {
        const { type = "button" } = this.props;

        return (
            <button
                type={type}
                className={style.botao}>
                {this.props.children}
            </button>
        )
    }
}

export default Button;