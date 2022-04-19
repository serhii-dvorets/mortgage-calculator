import { NavLink } from "react-router-dom"

export const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title">MORTGAGE CALCULATOR</h1>
      <nav className="nav">
        <NavLink to='' className="nav__link">BANKS</NavLink>
        <NavLink to='calculator' className="nav__link">CALCULATOR</NavLink>
      </nav>
    </header>
  )
}
