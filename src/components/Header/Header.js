import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import TokenService from '../../services/token-service'
import UserContext from '../../contexts/UserContext'
import './Header.css'

class Header extends Component {
  static contextType = UserContext

  handleLogoutClick = () => {
    this.context.processLogout()
  }

  renderLogoutLink() {
    return (
      <div>
        <span className='hello'>
          {this.context.user.name}
        </span>
        <nav>
          <Link className='text-link'
            onClick={this.handleLogoutClick}
            to='/login'>
            Logout
          </Link>
        </nav>
      </div>
    )
  }

  renderLoginLink() {
    return (
      <nav>
        <Link className='text-link'
         to='/login'>Login</Link>
        {' '}
        <Link className='text-link'
        to='/register'>Sign up</Link>
      </nav>
    )
  }

  render() {
    return (
      <header className='header'>
        <div className="flex header-content">
          <h1>
            <Link className='spaced-rep-link'
              to='/'>
              Creole With Spaced
              Repetition
          </Link>
          </h1>
          {TokenService.hasAuthToken()
            ? this.renderLogoutLink()
            : this.renderLoginLink()}
        </div>
      </header>
    );
  }
}

export default Header
