import { Container } from '@mui/material'
import React from 'react'
import NewsCard from '../newscard/NewsCard'
// import NewsCard from '../newscard/NewsCard'
import './NewsContent.css'

const NewsContent = ({newsArray,newsResults,loadmore,setLoadmore}) => {
    // console.log(newsArray)
    return (
        <Container  maxWidth="md">
            <div className='content'>
                <div className='downloadMessage'>
                    <span className="downloadText">For best experience use inshort app in your smartphone</span>
                    <img src="https://assets.inshorts.com/website_assets/images/appstore.png" height="80%" alt='appStore'/>
                    <img src="https://assets.inshorts.com/website_assets/images/playstore.png" height="80%" alt="playStore"/>
                </div>
                {newsArray.map((newsItem)=>(
                <NewsCard newsItem={newsItem} key={newsItem.title}/>
                ))}
                {loadmore<=newsResults &&(
                <>
                <hr/>
                <button className='loadmore' onClick={()=>setLoadmore(loadmore+20)}>Load More</button>
                </>
                )}
                </div>
        </Container>
    )
}

export default NewsContent
