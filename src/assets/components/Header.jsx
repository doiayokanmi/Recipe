import React from 'react'

const Header = () => {

    const navLinks = [
        {
            title: "About",
            link: "#"
        },
        {
            title: "Docs",
            link: "#"
        },
        {
            title: "Donate",
            link: "#"
        }
    ]
  return (
    <>
        <nav>
            <div id="navBrand">
                Recipe API
            </div>

            <div id="nav-links">
                {
                    navLinks.map ((links, index) => (
                        <a key={index} href={links.link}>{links.title}</a>
                    ))
                }
            </div>
        </nav>
    </>
  )
}

export default Header