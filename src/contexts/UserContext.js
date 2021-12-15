import React, { Component } from 'react'

const UserContext = React.createContext()

class UserProvider extends Component {
  // Context state
  state = {
    user: JSON.parse(localStorage.getItem('user')),
  }

  // Method to update state
  setUser = (user) => {
    user = user ? user : null;
    // this.setState(() => ({ user }))
    this.setState(() => ( user ))
    // localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('user', JSON.parse(user));
  }

  render() {
    const { children } = this.props
    const { user } = this.state
    const { setUser } = this

    return (
      <UserContext.Provider
        value={{
          user,
          setUser,
        }}
      >
        {children}
      </UserContext.Provider>
    )
  }
}

export default UserContext

export { UserProvider }