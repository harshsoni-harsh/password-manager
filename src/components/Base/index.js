import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import PasswordItem from '../PasswordItem'
import './index.css'

class Base extends Component {
  state = {
    website: '',
    username: '',
    password: '',
    search: '',
    passwords: [],
    showPasswords: false,
  }

  color = ['color-1', 'color-2', 'color-3', 'color-4', 'color-5']

  inputSearch = e => {
    this.setState({
      search: e.target.value,
    })
  }

  inputWebsite = e => {
    this.setState({
      website: e.target.value,
    })
  }

  inputUsername = e => {
    this.setState({username: e.target.value})
  }

  inputPassword = e => {
    this.setState({password: e.target.value})
  }

  showBtn = () => {
    this.setState(prevState => ({showPasswords: !prevState.showPasswords}))
  }

  onDelete = id => {
    this.setState(prevState => ({
      passwords: prevState.passwords.filter(o => o.id !== id),
    }))
  }

  addPassword = e => {
    e.preventDefault()
    this.setState(prevState => ({
      website: '',
      username: '',
      password: '',
      passwords: [
        ...prevState.passwords,
        {
          id: uuidv4(),
          website: prevState.website,
          username: prevState.username,
          password: prevState.password,
          color: this.color[Math.floor(Math.random() * 5)],
        },
      ],
    }))
  }

  render() {
    const {
      website,
      username,
      password,
      passwords,
      search,
      showPasswords,
    } = this.state
    const filteredPasswords = passwords.filter(o => o.website.toLowerCase().includes(search.toLowerCase()))
    return (
      <div className="body">
        <div className="container">
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
              alt="app logo"
              className="logo"
            />
          </div>
          <div className="card-1">
            <form>
              <h1>Add New Password</h1>
              <div>
                <label htmlFor="website">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                    alt="website"
                  />
                </label>
                <input
                  id="website"
                  placeholder="Enter Website"
                  onChange={this.inputWebsite}
                  value={website}
                />
              </div>
              <div>
                <label htmlFor="username">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                    alt="username"
                  />
                </label>
                <input
                  id="username"
                  placeholder="Enter Username"
                  onChange={this.inputUsername}
                  value={username}
                />
              </div>
              <div>
                <label htmlFor="password">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                    alt="password"
                  />
                </label>
                <input
                  id="password"
                  placeholder="Enter Password"
                  onChange={this.inputPassword}
                  value={password}
                  type="password"
                />
              </div>
              <button type="submit" onClick={this.addPassword}>
                Add
              </button>
            </form>
            <img
              className="sm"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
              alt="password manager"
            />
            <img
              className="lg"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              alt="password manager"
            />
          </div>
          <div className="card-2">
            <div className="card-2-header">
              <div>
                <h1>Your Passwords</h1>
                <p>{filteredPasswords.length}</p>
              </div>
              <div className="searchBox">
                <label htmlFor="search">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                    alt="search"
                  />
                </label>
                <input
                  placeholder="Search"
                  id="search"
                  type="search"
                  value={search}
                  onChange={this.inputSearch}
                />
              </div>
            </div>
            <hr />
            <div className="checkBox">
              <input
                id="checkbox"
                type="checkbox"
                value={showPasswords}
                onChange={this.showBtn}
              />
              <label htmlFor="checkbox">Show Passwords</label>
            </div>
            {filteredPasswords.length === 0 ? (
              <div className="noPasswords">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                  alt="no passwords"
                />
                <p>No Passwords</p>
              </div>
            ) : (
              <ul>
                {filteredPasswords.map(o => (
                  <PasswordItem
                    details={o}
                    key={o.id}
                    onDelete={this.onDelete}
                    show={showPasswords}
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

export default Base
