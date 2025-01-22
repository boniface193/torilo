function Button({ colors, title, triggerModal, showModal }) {
  return (<button data-bs-toggle={showModal} data-bs-target={triggerModal} className={`btn block ${colors}`}>{title}</button>)
}

export default Button;