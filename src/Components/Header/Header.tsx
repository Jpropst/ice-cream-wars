import React from "react";
import "./Header.css"

type HeaderProps = {
    user: string
}

const Header: React.FC<HeaderProps> = ({ user }) => (
    <header className="header">
        <h1 className="ice-cream-wars-header">Ice Cream Wars</h1>
        <span className="username">Welcome {user}</span>
    </header>
)

export default Header