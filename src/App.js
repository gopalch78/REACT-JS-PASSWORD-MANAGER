import {Component} from 'react'

import {v4} from 'uuid'

import AppItem from './AppItem'

import './App.css'

class App extends Component {
  state = {
    searchInput: '',
    websiteInput: '',
    userNameInput: '',
    passwordInput: '',
    passwordList: [],
    isChecked: false,
  }

  deletePassword = id => {
    const {passwordList} = this.state
    const filteredPassword = passwordList.filter(password => password.id !== id)
    this.setState({
      passwordList: filteredPassword,
    })
  }

  renderNoPasswordsView = () => (
    <div className="no-passwords-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
        alt="no passwords"
        className="no-passwords-image"
      />

      <p>No Passwords</p>
    </div>
  )

  onAddPassword = event => {
    event.preventDefault()
    const {websiteInput, userNameInput, passwordInput} = this.state
    const newPassword = {
      id: v4(),
      websiteInput,
      userNameInput,
      passwordInput,
    }

    this.setState(prevState => ({
      passwordList: [...prevState.passwordList, newPassword],
      websiteInput: '',
      userNameInput: '',
      passwordInput: '',
    }))
  }

  onChecked = () => {
    this.setState(prev => ({isChecked: !prev.isChecked}))
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onChangePasswordInput = event => {
    this.setState({passwordInput: event.target.value})
  }

  onChangeUserNameInput = event => {
    this.setState({userNameInput: event.target.value})
  }

  onChangeWebsiteInput = event => {
    this.setState({websiteInput: event.target.value})
  }

  render() {
    const {
      searchInput,
      websiteInput,
      userNameInput,
      passwordInput,
      passwordList,
      isChecked,
    } = this.state
    const searchResults = passwordList.filter(eachUser =>
      eachUser.websiteInput.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="app-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="app-logo"
        />
        <div className="app-sub-container">
          <div className="input-image-container">
            <div className="input-container">
              <h1 className="input-heading">Add New Password</h1>
              <form onSubmit={this.onAddPassword}>
                <div className="website-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                    className="website"
                    alt="website"
                  />
                  <input
                    type="text"
                    placeholder=" Enter Website"
                    className="input-text"
                    value={websiteInput}
                    onChange={this.onChangeWebsiteInput}
                  />
                </div>
                <div className="username-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                    className="username"
                    alt="username"
                  />
                  <input
                    type="text"
                    placeholder="Enter Username"
                    className="input-text"
                    value={userNameInput}
                    onChange={this.onChangeUserNameInput}
                  />
                </div>
                <div className="password-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                    className="password"
                    alt="password"
                  />
                  <input
                    type="password"
                    placeholder="Enter Password"
                    className="input-text"
                    value={passwordInput}
                    onChange={this.onChangePasswordInput}
                  />
                </div>
                <div className="button-container">
                  <button type="submit" className="button">
                    Add
                  </button>
                </div>
              </form>
            </div>

            <div className="image-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
                alt=" password manager"
                className="password-manager"
              />
            </div>
          </div>

          <div className="result-container">
            <div className="result-sub-container">
              <div className="heading-value-container">
                <h2 className="password-heading">Your Passwords</h2>
                <p>{searchResults.length}</p>
              </div>
              <div className="image-search-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                  alt="search"
                  className="search-image"
                />
                <input
                  type="search"
                  className="input-search"
                  value={searchInput}
                  onChange={this.onChangeSearchInput}
                />
              </div>
            </div>
            <hr />
            <div className="checkbox-label">
              <input
                type="checkbox"
                checked={isChecked}
                id="showPassword"
                onChange={this.onChecked}
              />
              <label htmlFor="showPassword">Show passwords</label>
            </div>
            {searchResults.length === 0 ? (
              this.renderNoPasswordsView()
            ) : (
              <ul>
                {searchResults.map(eachPassword => (
                  <AppItem
                    key={eachPassword.id}
                    appDetails={eachPassword}
                    deletePassword={this.deletePassword}
                    isChecked={isChecked}
                    searchResults={this.searchResults}
                  />
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default App
