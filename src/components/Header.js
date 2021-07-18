import React, { useEffect } from "react"
import { useHistory } from "react-router-dom"
import { auth, provider } from "../firebase"
import styled from "styled-components"

import { selectUserName, selectUserPhoto, setUserLogin, setSignOut } from "../features/user/userSlice"
import { useDispatch, useSelector } from "react-redux"

function Header() {
  const dispatch = useDispatch()
  const history = useHistory()
  const userName = useSelector(selectUserName)
  const userPhoto = useSelector(selectUserPhoto)

  useEffect(() => {
    auth.onAuthStateChanged(async user => {
      if (user) {
        dispatch(
          setUserLogin({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL
          })
        )
        history.push("/")
      }
    })
  }, [])

  const signIn = () => {
    auth.signInWithPopup(provider).then(result => {
      let user = result.user
      dispatch(
        setUserLogin({
          name: user.displayName,
          email: user.email,
          photo: user.photoURL
        })
      )
      history.push("/")
    })
  }

  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(setSignOut())
      history.push("/login")
    })
  }

  return (
    <Nav>
      <Logo src="/images/logo.svg" />
      {!userName ? (
        <LoginContainer>
          <Login onClick={signIn}>Login </Login>
        </LoginContainer>
      ) : (
        <>
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
          <UserImg onClick={signOut} src="/images/natta-profile.jpg" />
        </>
      )}
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
  overflow-x: hidden;
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
const LoginContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
`
const Login = styled.div`
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  padding: 8px 16px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  background-color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
  transition: all 250ms ease 0s;

  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`
