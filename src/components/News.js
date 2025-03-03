import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {

  constructor(){
    super();
    console.log("hello from constructor");
    this.state = {
      articles: [],
      loading: false,
      page:1
    }
  }


  async componentDidMount(){
    console.log('inside component did mount.');
    let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=bba8c05cd7a3403c8793bfdcfec56c20&page=1&pageSize=20";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults});
    
  }

  // func to navigate to next page
  handleNextClick = async()=>{
    console.log('inside next click');
    
    if (this.state.page + 1 > Math.ceil(this.state.totalResults/20)) {
      
    }
    else{
      let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=bba8c05cd7a3403c8793bfdcfec56c20&page=${this.state.page + 1}&pageSize=20`;
      let data = await fetch(url);
      let parsedData = await data.json();
  
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles
      })
    }
  }

  // func to navigate to previous page
  handlePrevClick = async()=>{
    console.log('inside prevClick');
    
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=bba8c05cd7a3403c8793bfdcfec56c20&page=${this.state.page - 1}&pageSize=20`;
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles
    })    
  }

  render() {
    console.log('inside render');
    
    return (
      <div className="container my-3">
        <h1 className="my-4 py-2">NewsApp - Top Headlines</h1>
        <div className="row">
        {this.state.articles.map((element)=>{
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
          <button className="btn btn-dark fw-bold" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    );
  }
}

export default News;
