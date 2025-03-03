import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'


export class News extends Component {

  static defaultProps = {
    country: 'us',
    pageSize: 10
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number
  }

  constructor(){
    super();
    this.state = {
      articles: [],
      loading: false,
      page:1
    }
  }


  async componentDidMount(){
    console.log('inside component did mount.');
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=bba8c05cd7a3403c8793bfdcfec56c20&page=1&pageSize=${this.props.pageSize}`;

    // loading true, spinner will be displayed
    this.setState({loading:true})

    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults, loading:false});
  }

  // func to navigate to next page
  handleNextClick = async()=>{
    console.log('inside next click');
    
    if (!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))) {

      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=bba8c05cd7a3403c8793bfdcfec56c20&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      // loading true, spinner will be displayed
      this.setState({loading:true})
      let data = await fetch(url);
      let parsedData = await data.json();

      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,

        // loading false, loading will disappear
        loading: false
      })
    }
  }

  // func to navigate to previous page
  handlePrevClick = async()=>{
    console.log('inside prevClick');
    
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=bba8c05cd7a3403c8793bfdcfec56c20&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    
    // loading true, spinner will be displayed
    this.setState({loading:true})
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false
    })    
  }

  render() {
    console.log('inside render');
    
    return (
      <div className="container my-3">
        <h1 className="my-4 py-2 text-center ">NewsApp - Top Headlines</h1>
        {this.state.loading && <Spinner />}

        <div className="row">
        {!this.state.loading && this.state.articles.map((element)=>{
          return <div className="col-md-4 my-3" key={element.url}>
            <NewsItem
              title={element.title?element.title: ""}
              description={element.description?element.description.slice(0,88): ""}
              imageUrl={element.urlToImage?element.urlToImage: '/random.jpeg'}
              newsUrl={element.url}
            />
          </div>
        })}
        </div>
        <hr />
        <div className="container d-flex justify-content-around my-4">
          <button className="btn btn-dark fw-bold" disabled={this.state.page<=1} onClick={this.handlePrevClick}>&larr; Previous</button>
          <button 
              className="btn btn-dark fw-bold" 
              disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} 
              onClick={this.handleNextClick}
          >Next &rarr;</button>
        </div>
      </div>
    );
  }
}

export default News;
