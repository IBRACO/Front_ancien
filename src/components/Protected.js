import { Component } from "react";
import UserContext from "../contexts/UserContext";


class Protected extends Component {
  static contextType = UserContext;
  render() {
    const { children, role, noauth } = this.props;
    const { user } = this.context;

    return (
      ((noauth && !user) ||
        (!noauth && user && (!role ||user.role  === role))) && <>{children}</>
    );
  }
}

export { Protected };
// import React from 'react'
// import React, {   useContext } from "react";
// import UserContext from "../contexts/UserContext";

// function Protected() {
//   const context = useContext(UserContext)

//   const { children, role, noauth } =this.props;
//   const { user } = this.context;

//   return (
//      ((noauth && !user) ||
//         (!noauth && user && (!role || user.role === role))) && <>{children}</>
//   )
// }

// export default Protected
