function Button({colors, title}) {
  return (<button className={`btn block ${colors}`}>{title}</button>)
}

export default Button;