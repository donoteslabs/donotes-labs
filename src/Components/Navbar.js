import {Link, useNavigate} from 'react-router-dom'
import logo from '../logo.png';
function NavBar() {
    const navigate = useNavigate();
    return(
        <div className="nav">
            <Link className='logo' to="/">
                <img src={logo} alt="Logo" className='img' />
                <div className='logotext'>
                    Tools
                </div>
            </Link>
            <div className='buttonGroup'>
            <md-filled-tonal-button onClick={()=>{navigate('/')}}>
  Search for tools
  <svg slot="icon" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
</md-filled-tonal-button>
            </div>
        </div>
    )
}
export default NavBar;