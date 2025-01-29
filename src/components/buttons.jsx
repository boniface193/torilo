function Button({ colors, title, triggerModal, showModal, actions, type }) {
  return (<button type={type} onClick={actions} data-bs-toggle={showModal} data-bs-target={triggerModal} className={`btn block ${colors}`}>{title}</button>)
}

export default Button;