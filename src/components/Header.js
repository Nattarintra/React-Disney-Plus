import React from "react"
import styled from "styled-components"

function Header() {
  return (
    <Nav>
      <Logo src="/images/logo.svg" />
      <NavMenu>
        <a>
          <img src="/images/home-icon.svg" alt="home-icon" />
          <span>Home</span>
        </a>
        <a>
          <img src="/images/search-icon.svg" alt="search-icon" />
          <span>Search</span>
        </a>
        <a>
          <img src="/images/watchlist-icon.svg" alt="watchlist-icon" />
          <span>watchList</span>
        </a>
        <a>
          <img src="/images/original-icon.svg" alt="watchlist-icon" />
          <span>original</span>
        </a>
        <a>
          <img src="/images/movie-icon.svg" alt="watchlist-icon" />
          <span>movies</span>
        </a>
        <a>
          <img src="/images/series-icon.svg" alt="watchlist-icon" />
          <span>serie</span>
        </a>
      </NavMenu>
      <UserImg src="/images/natta-profile.jpg" />
      {/* <UserImg src="https://ibb.co/71w4ZYD" /> */}
      {/* <UserImg src="https://lh3.googleusercontent.com/a-/AOh14GhPEWpoUbE" /> */}
    </Nav>
  )
}

export default Header

const Nav = styled.nav`
  height: 70px;
  background: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;
`
const Logo = styled.img`
  width: 80px;
`
const NavMenu = styled.div`
  text-transform: uppercase;
  display: flex;
  flex: 1;
  margin-left: 25px;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;
    img {
      height: 20px;
    }
    span {
      fontsize: 13px;
      later-space: 1.42px;
      position: relative;

      // white underline on naMenu hiddend and display in hover
      &: after {
        content: "";
        height: 2px;
        background: white;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        // smoothly transition
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        transform-origin: left center;
        transform: scaleX(0);
      }
    }
    // white underline on naMenu hiddend and display in hover
    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
`
const UserImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
`
