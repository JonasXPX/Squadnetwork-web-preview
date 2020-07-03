import React, { Component, ReactElement, ReactChildren, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { IProps } from '..'

export default class HeaderBar extends Component {
  
  render() {
    return (
      <nav className="nav">
        <NavItem>
          <Link to={'/'}>Home</Link>
        </NavItem>
        <NavItem>
          <Link to='/rankings'>Ranking</Link>
        </NavItem>
      </nav>
    )
  }
}


export const NavItem = ({ children }: IProps) => <div className='nav-item'>{children}</div>

