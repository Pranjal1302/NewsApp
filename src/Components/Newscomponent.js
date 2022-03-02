import React, { useEffect, useState } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const Newscomponent = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateNews = async () => {
    const url = `https://newsapi.org/v2/everything?q=agri&apiKey=c0937a1ada014e91a6739e5fa0e041b3&page=${page}`;
    // const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=c0937a1ada014e91a6739e5fa0e041b3&page='1'&pageSize=${props.pagesize}`;
    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
  };

  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`;
    updateNews();
    // eslint-disable-next-line
  }, []);

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/everything?q=agri&apiKey=c0937a1ada014e91a6739e5fa0e041b3&page=${page+1}`;
    // const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=c0937a1ada014e91a6739e5fa0e041b3&page=${page+1}&pageSize=${props.pagesize}`;
    setPage(page + 1);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
  };

  return (
    <>
      <h1
        className="text-center"
        style={{ margin: "35px 0px", marginTop: "90px" }}
      >
        NewsApp - Top {capitalizeFirstLetter(props.category)} Headlines
      </h1>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length < totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <Newsitem
                    title={element.title ? element.title : ""}
                    description={element.description ? element.description : ""}
                    urlToImage={element.urlToImage? element.urlToImage : "https://www.google.com/url?sa=i&url=https%3A%2F%2Fouikar.com%2F441031616913073459402507.html&psig=AOvVaw0mM41SlwvDfFEphQhMTo8S&ust=1645014982859000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJjdp8HcgfYCFQAAAAAdAAAAABAO"}
                    newsUrl={element.url}
                    author={element.author}
                    publishedAt={element.publishedAt}
                    name={element.source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};

Newscomponent.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general",
};

Newscomponent.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default Newscomponent;

// const Newscomponent = (props) => {

//   const [articles, setArticles] = useState([]);
//   const [page, setPage] = useState(1);
//   const [loading, setLoading] = useState(false);
//   const [totalArticles, setTotalArticles] = useState(0);

//   const capitalizeFirstLetter = (string) => {
//     return string.charAt(0).toUpperCase() + string.slice(1);
//   };

//   const updateNews = async () => {
//     const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=c0937a1ada014e91a6739e5fa0e041b3&page='1'&pageSize=${props.pagesize}`;
//     setLoading(true);
//     let data = await fetch(url);
//     let parsedData = await data.json();
//     setArticles(parsedData.articles);
//     setTotalArticles(parsedData.totalArticles);
//     setLoading(false);
//   }

//   const  componentDidMount = async () => {
//     let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=c0937a1ada014e91a6739e5fa0e041b3&page='1'&pageSize=${props.pagesize}`;
//     setLoading(true);
//     let data = await fetch(url);
//     let parsedData = await data.json();
//     console.log(parsedData);
//     setArticles(parsedData.articles);
//     setTotalArticles(parsedData.totalArticles);
//     setLoading(false);
//   }

//   useEffect(() => {
//     updateNews();
//   }, []);

//   const fetchMoreData = async () => {
//     setPage(page + 1);
//     const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=c0937a1ada014e91a6739e5fa0e041b3&page=${page}&pageSize=${props.pagesize}`;
//     setLoading(true);
//     let data = await fetch(url);
//     let parsedData = await data.json();
//     console.log(parsedData);
//     setArticles([articles.concat(parsedData.articles)]);
//     setLoading(false);
//     setTotalArticles(parsedData.totalArticles);
//   };
//     return (
//       <>
//         <div className="album py-5 bg-dark">
//           <div className="container bg-dark container">
//             <h2 className="light">
//               {capitalizeFirstLetter(props.category)}-Headlines
//             </h2>
//             {loading && <Spinner />}
//             <InfiniteScroll
//               dataLength={articles.length}
//               next={fetchMoreData}
//               hasMore={articles.length < totalArticles}
//               loader={<Spinner />}
//               >
//               <div className="container">
//                 <div className="row container">
//                   {articles.map((element) => {
//                     return (
//                       <div className="col-md-3" key={element.url}>
//                         <Newsitem
//                           title={element.title ? element.title : ""}
//                           description={
//                             element.description ? element.description : ""
//                           }
//                           urlToImage={element.urlToImage}
//                           author={element.author ? element.author : "unknown"}
//                           publishedAt={element.publishedAt}
//                           // name={element.source.name}
//                           />
//                       </div>
//                     );
//                   })}
//                 </div>
//               </div>
//             </InfiniteScroll>
//           </div>
//         </div>
//       </>
//     );
//   }

//   Newscomponent.defaultProps = {
//     country: "in",
//     pagesize: 8,
//     category: "general",
//   };

//   Newscomponent.propTypes = {
//     country: PropTypes.string,
//     pagesize: PropTypes.number,
//     category: PropTypes.string,
//   };

// export default Newscomponent;

//   prev = async () => {
//     let url = `https://newsapi.org/v2/top-headlines?country=${
//       props.country
//     }&category=${
//       props.category
//     }&apiKey=c0937a1ada014e91a6739e5fa0e041b3&page=${
//       this.state.page - 1
//     }&pageSize=${props.pagesize}`;
//     this.setState({ loading: true });
//     let data = await fetch(url);
//     let parsedData = await data.json();
//     this.setState({
//       articles: parsedData.articles,
//       page: this.state.page - 1,
//       loading: false,
//     });
//   };

//   nextpage = async () => {
//     if (
//       Math.ceil(this.state.totalArticles / props.pagesize) <
//       this.state.page + 1
//     ) {
//     } else {
//       let url = `https://newsapi.org/v2/top-headlines?country=${
//         props.country
//       }&category=${
//         props.category
//       }&apiKey=c0937a1ada014e91a6739e5fa0e041b3&page=${
//         this.state.page + 1
//       }&pageSize=${props.pagesize}`;
//       this.setState({ loading: true });
//       let data = await fetch(url);
//       let parsedData = await data.json();
//       console.log(parsedData);
//       this.setState({
//         articles: parsedData.articles,
//         page: this.state.page + 1,
//         loading: false,
//       });
//     }
//   };
