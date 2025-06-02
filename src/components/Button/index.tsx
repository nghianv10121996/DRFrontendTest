import React from 'react';
import "./styles.scss";

export enum EButton {
  outlined = "outlined",
  default = 'default'
}

interface IButton {
  type?: EButton;
  text: string;
  onClick?: () => void;
  icon?: React.ReactNode;
}

const Button: React.FC<IButton> = (props: IButton) => {
  const { type = EButton.outlined, text, onClick, icon } = props;
  const classNames = type === EButton.outlined ? "--outlined" : "--default";
  return (
    <button className={`button --shadow ${classNames}`} disabled={!onClick} onClick={onClick} >
      {text}
      {icon}
    </button>
  )
}

export default Button;