import {React, useState} from 'react'
import './Navbar.css'
import assets from '../../assets/assets'

const Navbar = () => {

    const [toggle, settoggle] = useState(false);

    return (
        <>
            <div className='navbar' style={{ display: toggle ? 'none' : 'block' }}>
                <div className='navbar_logo'>
                    <img src={assets.logo} alt="" />
                </div>
                <hr />
                <div className="menu_list">
                    <div className="menu_item">
                        <img src={assets.user} alt="" />
                        <p>User</p>
                    </div>

                    <div className="menu_item">
                        <img src={assets.dashboard} alt="" />
                        <p>Dashboard</p>
                    </div>

                    <div className="menu_item">
                        <img src={assets.courses} alt="" />
                        <p>Courses</p>
                    </div>

                    <div className="menu_item">
                        <img src={assets.chat} alt="" />
                        <p>Chat</p>
                    </div>

                    <div className="menu_item">
                        <img src={assets.calender} alt="" />
                        <p>Calender</p>
                    </div>

                </div>

            </div>
            <div onClick={() => settoggle(!toggle)} className='navbutton'>
                <img src={assets.navbutton} alt="" />
            </div>
        </>
    )
}

export default Navbar