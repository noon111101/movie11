import './Header.scss'
import logo from '../../asset/logo.png'
import { NavLink, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Header() {
  const headerNav = [
    {
      display: 'Home',
      path: '/'
    },
    {
      display: 'Movie',
      path: '/movie'
    },
    {
      display: 'TV Series',
      path: '/tv'
    }
  ]
  const { pathname } = useLocation()
  const active = headerNav.findIndex(e => e.path === pathname)
  window.onscroll = function () { scrollFunction() };
  function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      document.getElementById("header").classList.add('shrink');
    } else {
      document.getElementById("header").classList.remove('shrink');
    }
  }

  const [keyword, setKeyword] = useState('')
  const navigate = useNavigate();
  const handleclick = () => {
    navigate(`/search/${keyword}`)
  }
  return (
    <div id='header' className="Header">
      <div className='wrapHeader Container'>
        <div className="logo">
          <img src={logo} alt="" />
          <NavLink to="/">11Movie</NavLink>
        </div>
        <div className='search_movie'>
          <form onSubmit={handleclick}>
            <input value={keyword} className="input_search" type="text" onChange={(e) => setKeyword(e.target.value)} placeholder='   find some thing ...' />
          </form>
        </div>
        <ul className='__nav'>
          {headerNav.map((e, i) =>
            <NavLink to={e.path}>
              <li key={i} className={`${i === active ? 'active' : ''}`}>{e.display}</li>
            </NavLink>
          )}
        </ul>
      </div>
    </div>
  );
}