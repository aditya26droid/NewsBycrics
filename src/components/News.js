import React, { Component } from 'react'

export default function News(props){

    let {title,description,imgurl,newsUrl,author,date}=props;
    
    return (
    <>

                <div className="card">
                <img src={imgurl} className="card-img-top" alt="any"/>
                <div className="card-body">
                                <h5 className="card-title">{title}</h5>
                                <p>{description}</p>
                                <p className='text-muted'>Author: {!author?"unknown":author}  </p>
                                <p className='text-muted'>Last updated: {date} </p>
                                <a rel='noreferrer' href={newsUrl} target='_blank'  className="btn btn-sm btn-primary">Go somewhere</a>        
                 </div>
                </div>
    </>
      );
}
