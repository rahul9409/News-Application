import { Container } from '@material-ui/core'
import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <Container>
                <div className='left-footer'>
                <img src="https://assets.inshorts.com/website_assets/images/logo_footer.png" width="80%" alt="logo-footer"/>
                {/* <img alt="footer-contact" className="contact"src="https://assets.inshorts.com/website_assets/images/contact_icon.png" width="10%"/> */}
                <br/>
                <span style={{fontSize:"14px",color:"grey"}}><b style={{color:"white"}}>Inshorts</b>  medialabs pvt. ltd</span>
                <br/>
                <span style={{fontSize:"14px",color:"grey", marginLeft:"45px"}}>©COPYRIGHT 2022</span>
               </div>
               <div className='v1'></div>
               <div className="right-footer">
                <img alt="footer-contact" className="contact"src="https://assets.inshorts.com/website_assets/images/contact_icon.png" width="60%"/>
                <br/>
                <span><a style={{fontSize:"14px",color:"white", textDecoration:"none"}} href='https://inshorts.com/tnc'>Terms & Condition</a></span>
                <br/>
                <span><a style={{fontSize:"14px", color:"white", textDecoration:"none"}} href='https://inshorts.com/tnc'>Privacy Policy</a></span>
                </div>
                <div className='icons'>
                <a href="https://www.facebook.com/inshortsapp" target="__blank"><i style={{color:"white"}} className="fa fa-facebook fa-2x"></i></a>
                <a href="https://twitter.com/inshorts" target="__blank"><i style={{marginLeft:"20px",color:"white"}} className="fa fa-twitter fa-2x"></i></a>
                <a href="https://www.linkedin.com/company/news-in-shorts" target="__blank"><i style={{marginLeft:"20px",color:"white"}} className="fa fa-linkedin fa-2x"></i></a>
                </div>
            </Container>
        </div>
    )
}

export default Footer
