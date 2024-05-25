import {React} from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='navbar-container'>
            <div>
                <div className='company-name'>
                    <img src="https://www.maitilabs.org/static/media/Logo.00129f1c05848c338b15.png" alt="" />
                    <div>Maiti Labs</div>
                </div>
                <div>
                    <div className='bar'>
                        <div className='text'>Home</div>
                        <div className='text'>About</div>
                        <div className='text'>Awareness Portal</div>
                        <div className='text'>Career</div>
                        <div className='text'>Contact</div>
                        <div className='text'>Team</div>
                    </div>
                    <div></div>
                </div>
                <div className='button'><div className='text'>Login</div></div>
            </div>
        </div>
    )
}

export default Navbar