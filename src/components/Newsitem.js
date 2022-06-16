import React, {useState,useEffect} from "react";
import News from "./News";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export default function Newsitem (props) {
  const[articles,setArticles]=useState([]);
  const [loading, setloading] = useState(false);
  const [page, setpage] = useState(1);
  const [totalresult, settotalresult] = useState(0);
  const capitalize = (category) => {
    return category.charAt(0).toUpperCase() + category.slice(1);
  };
  
  const updateNews = async ()=>  {document.title = `${capitalize(props.category)} by NewsBycrics`;
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&from=2022-06-12&to=2022-06-12&category=${props.category}&apiKey=e0d6e0c79b944f989a89da230da72aac&pageSize${props.pageSize}`;
    setloading(true);
    let data = await fetch(url);
    let parsed_data = await data.json();
    setloading(false);
    setArticles(parsed_data.articles);
    settotalresult(parsed_data.totalresult);
    props.setProgress(100);}
    
useEffect(() => {
 updateNews();

}, [])

const fetchMoreData = async () => {
  props.setProgress(10);
  let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&from=2022-06-12&to=2022-06-12&category=${props.category}&apiKey=e0d6e0c79b944f989a89da230da72aac&page=${page+1}&pageSize=${props.pageSize}`;
   setpage(page + 1);
    setloading(true);  
    let data = await fetch(url);
    let parsed_data = await data.json();
    setArticles(articles.concat(parsed_data.articles));
    setloading(false);
    props.setProgress(100);
  }

    return (
      <>
          {/*state.loading && <Spinner/>*/}
          <InfiniteScroll
            dataLength={articles.length}
            next={fetchMoreData}
            hasMore={articles.length!==totalresult}
            loader={<h4><Spinner/></h4>}
          >
            <div className='container'>
             <div className="row my-3">
              {articles.map((element) => {
                return (
                  <div className="col-md-4 my-4" key={element.url}>
                    <div>
                      <News
                        title={element.title ? element.title.slice(0, 45) : ""}
                        description={
                          element.description
                            ? element.description.slice(0, 88)
                            : ""
                        }
                        imgurl={
                          element.urlToImage
                            ? element.urlToImage
                            : "https://www.vecteezy.com/vector-art/1826199-progress-loading-bar-buffering-download-upload-and-loading-icon"
                        }
                        newsUrl={element.url}
                        author={element.author}
                        date={element.publishedAt}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
            </div>
          </InfiniteScroll>
      </>
    );
}
Newsitem.defaultProps = {
  country: "in",
  pageSize: 8,
};
Newsitem.propTypes = {
  country: PropTypes.string,
  page: PropTypes.number,
};

