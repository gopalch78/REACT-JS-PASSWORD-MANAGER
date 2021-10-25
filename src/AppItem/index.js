import './index.css'

const AppItem = props => {
  const {deletePassword, isChecked, appDetails} = props

  const {id, websiteInput, userNameInput, passwordInput} = appDetails
  const initial = websiteInput ? websiteInput[0].toUpperCase() : ''

  const onDeletePassword = () => {
    deletePassword(id)
  }
  const passwordUnShow = isChecked ? (
    <p className="para">{passwordInput}</p>
  ) : (
    <img
      src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
      alt="stars"
    />
  )
  return (
    <li>
      <div className="website-password-container">
        <div>
          <p className="initialName">{initial}</p>
        </div>
        <div>
          <p>{websiteInput}</p>
          <p>{userNameInput}</p>
          {passwordUnShow}
        </div>
        <div>
          <button type="button" testid="delete" onClick={onDeletePassword}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
              alt="delete"
              className="delete"
            />
          </button>
        </div>
      </div>
    </li>
  )
}

export default AppItem

