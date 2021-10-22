import './index.css'

const AppItem = props => {
  const {appDetails, deletePassword, isChecked} = props
  const {id, websiteName, userName, userPassword} = appDetails
  const initial = websiteName ? websiteName[0].toUpperCase() : ''
  const onDeletePassword = () => {
    deletePassword(id)
  }
  const passwordUnShow = isChecked ? (
    <p className="para">{userPassword}</p>
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
          <p>{websiteName}</p>
          <p>{userName}</p>
          <p>{passwordUnShow}</p>
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
