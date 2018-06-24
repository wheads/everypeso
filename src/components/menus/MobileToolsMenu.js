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

  @media (max-width: 1023px) {
    margin: 0;
    padding: 8px 0;
    color: #0073b9;
  }
`;

class MobileToolsMenu extends Component {
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
        <p style={{fontSize:`18px`,fontWeight:`bold`,textTransform:`uppercase`,color:`#b6bec2`,padding:`0 1.5rem`,marginBottom:`0`}} onClick={this.showMenu}>
          Tools By Topic &darr;
        </p>
        
        {
          this.state.showMenu
            ? (
              <div
                style={{
                  width:`100%`,
                  backgroundColor:`#f5f7f8`
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
                  <MenuLink to="#get-started">Get Started</MenuLink>
                  <MenuLink to="#investing">Investing</MenuLink>    
                  <MenuLink to="#">Budgeting</MenuLink>
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

export default MobileToolsMenu