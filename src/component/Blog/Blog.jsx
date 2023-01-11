import React from "react"
import './Blog.css'

function Blog(props){
    return(
        <>
        <div className="fond"> <span className="s1">blog </span><span className="s2">card</span></div>
<div className="card">
  <div className="thumbnail"><img className="left" src={props.blogimg}/></div>
  <div className="right">
    <h1>{props.title}</h1>
    <div className="author"><img src={props.authorimage}/>
      <h2>{props.name}</h2>
    </div>
    <div className="separator"></div>
    <p>{props.dsc}</p>
  </div>
  <h5>{props.date}</h5>
  <h6>{props.month}</h6>
  <ul>
    <li><i className="fa fa-eye fa-2x"></i></li>
    <li><i className="fa fa-heart-o fa-2x"></i></li>
    <li><i className="fa fa-envelope-o fa-2x"></i></li>
    <li><i className="fa fa-share-alt fa-2x"></i></li>
  </ul>
  <div className="fab"><i className="fa fa-arrow-down fa-3x"> </i></div>
</div>
        </>
        

    )
}

export default Blog;