import axios from 'axios';
import { useState,useEffect } from 'react';
import Footer from './components/footer/Footer';
import Nav from './components/Nav';
import NewsContent from './components/newscontent/NewsContent';
import apiKey from './data/Config';
function App() {
  const [category, setCategory] = useState('general')
  // console.log(category)
  const [newsArray,setNewsArray]=useState([])
  const [newsResults,setNewsResults]=useState()
  const [loadmore,setLoadmore]=useState(20);
  const [cat,setCat]=useState("general");
  const newsApi=async ()=>{
    try{
      const news=await axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}&category=${category}&pageSize=${loadmore}`);
      setNewsArray(news.data.articles);
      setNewsResults(news.data.totalResults);
    } catch(err){
      console.log(err);
    }
  };// eslint-disable-next-line
  const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  };
  
  window.addEventListener('scroll', toggleVisible);
  if(category!==cat){
    setLoadmore(20);
    setCat(category)
    scrollToTop()
  }
  // console.log(newsArray)
  useEffect(() => {
    newsApi();// eslint-disable-next-line
  }, [category,newsResults,loadmore])
  return (
    <div className="App">
      <Nav setCategory={setCategory}/>
      <NewsContent 
      loadmore={loadmore}
      setLoadmore={setLoadmore}
      newsArray={newsArray} 
      newsResults={newsResults}
      />
      <Footer/>
    </div>
  );
}

export default App;
