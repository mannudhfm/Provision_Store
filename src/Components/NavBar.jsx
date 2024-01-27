import { useNavigate } from 'react-router-dom'
import img from '../assets/provision_Img.png'


const NavBar = () => {
    const navigate = useNavigate()
    return (
        <div className='navbar-container'>
            <div className='nav-brand' onClick={() => navigate('/product-list')}>
                <img src={img} alt="logo" />
                <h1>Provision Store</h1>
            </div>
            <div className='about'>
                <h2 onClick={() => navigate('/about')}>About</h2>
            </div>
        </div>
    )
}

export default NavBar