import React from 'react'
import './NewsCard.css'

const NewsCard = ({newsItem}) => {
    const fullDate=new Date(newsItem.publishedAt);
    var date=fullDate.toString().split(" ")
    const hour=parseInt(date[4].substring(0,2));
    const time=hour>12?true:false;
    return (
        <div className="newscard">
            <img className='newsImage' alt="newstagimage" src={newsItem.urlToImage?newsItem.urlToImage:"https://image.shutterstock.com/image-vector/empty-placeholder-image-icon-design-260nw-1366372628.jpg"}/>
            <div className='newsText'>
                <div>
                    <span className='title'>{newsItem.title}</span>
                    <span className='author'>
                        <br/>
                        <a className='source' href={newsItem.url} target="__blank">
                            <b>short   </b>
                        </a>
                        <span className='muted'>
                        by {newsItem.author?newsItem.author:"Unknown"} /{" "}
                        {
                            time? `${hour-12}:${date[4].substring(3,5)} pm`
                            :`${hour}:${date[4].substring(3,5)} am`
                        }
                        {" "}on {date[2]} {date[1]} {date[3]}, {date[0]}
                        </span>
                    </span>
                </div>
                <div className="lowerNewsText">
                    <div className="description">{newsItem.description}</div>
                    <span className='readmore'>
                        Read more at {" "}
                        <a className='source' href={newsItem.url} target="__blank">
                            <b>{newsItem.source.name}</b>
                        </a>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default NewsCard