import React from 'react'
import ButtonLogin from './ButtonLogin'
import Logo from './Logo'
import SearchBar from './SearchBar'
import DotsButton from './DotsButton';
import DotsMenu from './DotsMenu';


function Header() {

  return (
    <header>
      <Logo />
      <SearchBar />
      <DotsMenu/>
      <div className="header_rightSection">
        <DotsButton />
        <ButtonLogin value="SE CONNECTER"/>
      </div>

    </header>
  )
}

export default Header

