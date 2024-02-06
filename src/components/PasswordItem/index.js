import './index.css'

const PasswordItem = props => {
  const {details, show, onDelete} = props
  const {id, website, username, password, color} = details
  const nameInit = `${color} nameInit`
  const deletePassword = () => {
    onDelete(id)
  }
  return (
    <li>
      <div className={nameInit}>
        <p>{website[0].toUpperCase()}</p>
      </div>
      <div>
        <div>
          <p>{website}</p>
          <p>{username}</p>
          {show ? (
            <p>{password}</p>
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
              alt="stars"
              className='stars'
            />
          )}
        </div>
        <button type="button" onClick={deletePassword} data-testid="delete">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default PasswordItem
