import React, {useEffect,useState } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

export default function News (props) {
  const [articles,setArticles] =useState([])
  const [loading,setLoadings] =useState(true)
  const [pages,setPages] =useState(1)
  const [totalResults,setTotalResults] =useState(0)

  document.title="News-" + props.catagories[0].toUpperCase() + props.catagories.slice(1);

  const updateNews= async() =>{
    props.setProgress(0)
    let url=`https://newsapi.org/v2/top-headlines?country=in&category=${props.catagories}&apiKey=${props.apiKey}&page=${pages}&pageSize=${props.pageSize}`;
    props.setProgress(30)
    setLoadings(true)
    let data=await fetch(url);
    let parsedData=await data.json();
    props.setProgress(70)
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoadings(false)
    props.setProgress(100)
  }
 
  useEffect(()=>{
      updateNews();
  },[])


 const fetchMoreData = async () => {
   let url=`https://newsapi.org/v2/top-headlines?country=in&category=${props.catagories}&apiKey=${props.apiKey}&page=${pages +1}&pageSize=${props.pageSize}`;
    setPages(pages+1)
    let data=await fetch(url);
    let parsedData=await data.json();
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
    setLoadings(false)
  };

    return (
      <>
      <h2 className='text-center' style={{margin : '80px 0px 35px 35px'}}>Latest News- Top Headlines </h2>
      {loading && <Spinner />}
       <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner />}
        >
        
      <div className='container my-3'>

       <div className="row">
        
      {articles.map((elements)=>{
        console.log(elements);
         return(
           <div className="col-md-4" key={elements.url}> 
              <Newsitem author={elements.author} publishedAt={elements.publishedAt} newUrl={elements.url} title= {elements.title} description={elements.description === null ? elements.description : elements.description} imageUrl={elements.urlToImage} source={elements.source.name}/>
          </div>
         )
      })}

    </div>
    </div>
    </InfiniteScroll>

      </>
    )

    }
News.defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general',
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}

