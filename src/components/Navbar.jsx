import React from 'react'
import GlitchText from './Glitch'
import '../CSS files/Navbar.css'
const Navbar = () => {
  return (
    <header className='header'>
        <a href="/" className='logo'><GlitchText size='2.6rem' heading="</Hack-NocTurn>" ></GlitchText> </a>
        <nav className='navbar'>
            <a href="/"><GlitchText size='1.5rem' heading="home" ></GlitchText></a>
            <a href="/"><GlitchText size='1.5rem' heading="about" ></GlitchText></a>
            <a href="/"><GlitchText size='1.5rem' heading="prizes" ></GlitchText></a>
            <a href="/"><GlitchText size='1.5rem' heading="timeline" ></GlitchText></a>
            <a href="/"><GlitchText size='1.5rem' heading="faq's" ></GlitchText></a>
            <a href="/"><GlitchText size='1.5rem' heading="Contact" ></GlitchText></a>
        </nav>
        
    </header>
  )
}

export default Navbar