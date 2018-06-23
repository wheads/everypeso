import React, { Component } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { Logo } from '../../styles/styles-header'
import logo from './img-everypeso-logo-new.svg'

const MenuLink = styled(Link)`
  margin-left: 24px;
  font-size: 24px;
  text-decoration: none;
  color: #69757a;
  border-bottom: 2px solid #f5f7f8;
  width: 100%;
  
  &:hover {
    color: #424242;
  }

  @media (max-width: 767px) {
    margin: 0;
    padding: 10px;
  }
`;

const SignUpButton = styled(Link)`
  display: inline-block;
  width: 100%;
  padding: 12px 24px;
  margin-top: 30px;
  border: 1px solid #146414;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  line-height: 1.25;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  white-space: nowrap;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-color: #fff;
  color: #146414;
  &:hover{
    background-color: #146414;
    color: #fff;
  }
`;

class MobileHeaderMenu extends Component {
  constructor() {
    super();

    this.state = {
      showMenu: false
    }

    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  showMenu(event) {
    event.preventDefault();

    this.setState({ showMenu: true}, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }

  closeMenu(event) {

    if (!this.dropdownMenu.contains(event.target)) {

      this.setState({ showMenu: false }, () => {
        document.removeEventListener('click', this.closeMenu);
      });

    }
  }

  render() {
    return (
      <div>
        <p style={{color:`#00b9ff`,fontWeight:`bold`,marginBottom:`16px`}} onClick={this.showMenu}>
          MENU
        </p>
        
        {
          this.state.showMenu
            ? (
              <div
                style={{
                  position:`fixed`,
                  top:`0`,
                  bottom:`0`,
                  left:`0`,
                  right:`0`,
                  backgroundColor:`#fff`,
                  zIndex:`999`
                }}  
              >
                <div
                  style={{
                    display:`flex`,
                    flexDirection:`row`,
                    alignItems:`center`,
                    justifyContent:`space-between`,
                    maxWidth:`1200px`,
                    padding:`22px 32px`,
                    margin:`auto`,
                    backgroundColor:`#fff`
                  }}
                >
                  <div>
                    <Link to="/">
                      <Logo src={logo} alt="EveryPeso.com" />
                    </Link>
                  </div>
                  <p style={{color:`#00b9ff`,fontWeight:`bold`,marginBottom:`16px`}} onClick={this.showMenu}>
                    CLOSE
                  </p>
                </div>  
                <div 
                  style={{
                    display:`flex`,
                    flexDirection:`column`,
                    padding:`0 32px`
                  }}
                  className="menu"
                  ref={(element) => {
                    this.dropdownMenu = element;
                  }}
                >
                  <MenuLink to="/">Home</MenuLink>
                  <MenuLink to="#">Classes</MenuLink>
                  <MenuLink to="#">Events</MenuLink>
                  <MenuLink to="/tools">Tools</MenuLink>
                  <MenuLink to="#">Contact</MenuLink>
                  <SignUpButton to="/get-started">Get Started</SignUpButton>
                </div>
              </div>
            )
            : (
              null
            )
        }        
      </div>
    );
  }
}

export default MobileHeaderMenu