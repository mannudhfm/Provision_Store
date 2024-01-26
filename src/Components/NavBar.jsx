import img from '../assets/provision_Img.png'

const NavBar = () => {
    return (
        <div className='navbar-container'>
            <div className='nav-brand'>
                <img src={img} alt="" />
                <h1>Provision Store</h1>
            </div>
        </div>
    )
}

export default NavBar