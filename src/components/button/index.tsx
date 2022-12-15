import React from "react";
import style from "./style.module.scss";

interface IProps {
    children?: React.ReactNode;
    type?: "button" | "submit" | "reset" | undefined;
    onClick?: () => void;
}

const Button = ({ onClick, children, type = "button" }: IProps): JSX.Element => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={style.botao}>
            {children}
        </button>
    )
}

export default Button;