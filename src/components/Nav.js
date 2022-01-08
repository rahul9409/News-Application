import "./Nav.css"
import Drawer  from "./Drawer"
function Nav({setCategory}) {
    return (
        <div className='nav'>
            <div className='icon'>
                <Drawer setCategory={setCategory}/>
            </div>
            <img src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png"style={{cursor:"pointer"}} height="80%" alt="logo"/>
        </div>
    )
}

export default Nav
