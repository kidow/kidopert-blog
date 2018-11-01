import React from 'react';
import styles from './Button.scss'
import { Link } from 'react-router-dom'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

const Div = ({children, ...rest}) => <div {...rest}>{children}</div>

const Button = ({children, to, onClick, disabled, theme = 'default'}) => {
  const Element = (to && !disabled) ? Link : Div
  return (
    <Element 
      to={to} 
      onClick={disabled ? () => null : onClick} 
      className={cx('button', theme, {disabled})}
    >
      {children}
    </Element>
  );
};

export default Button;