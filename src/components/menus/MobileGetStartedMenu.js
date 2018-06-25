import React, { Component } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const MenuLink = styled(Link)`
  font-size: 18px;
  text-decoration: none;
  color: #fff;
  width: 100%;
  
  &:hover {
    color: #424242;
  }

  @media (max-width: 767px) {
    margin: 0;
    padding: 8px 0;
  }
`;

class MobileGetStartedMenu extends Component {
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
        <p style={{marginBottom:`0`,padding:`0 1.5rem`,color:`#fff`,fontSize:`18px`}} onClick={this.showMenu}>
          More...
        </p>
        
        {
          this.state.showMenu
            ? (
              <div
                style={{
                  position:`absolute`,
                  top:`45px`,
                  right:`0`,
                  backgroundColor:`#146144`,
                  zIndex:`998`
                }}  
              >
                
                <div 
                  style={{
                    display:`flex`,
                    flexDirection:`column`,
                    padding:`0 32px`,
                    textAlign:`left`
                  }}
                  className="menu"
                  ref={(element) => {
                    this.dropdownMenu = element;
                  }}
                >
                  <MenuLink to="#">Savings</MenuLink>
                  <MenuLink to="#">Retirement</MenuLink>
                  <MenuLink to="#">Insurance</MenuLink>
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

export default MobileGetStartedMenu