import React from "react";
import './blogs&news.css';
import blog from '../../../assets/blog.jpg'
import author from '../../../assets/author.png';

export default function BlogsNews(){
    return (
        <div className="blogsContainer">
            <div className="blogs">
                <p style={{color: '#2AA7FF'}}>Blog & News</p>
                <h1 style={{color: '#1B3C74'}}>Read Our Latest News</h1>
                <div className="imageBox">

                    <div className="card" style={{padding: '0px'}}>
                    <img src={blog} alt="img" />
                    <div className="date">
                        <p>Medical</p>
                        <p>March 31, 2022</p>
                    </div>
                    <p className="tips">6 Tips To Protect Your Mental Health When You’re Sick</p>
                    <div className="author">
                        <img src={author} alt="pic" style={{width: '32px', height: '32px'}}/>
                        <p>Rebecca Lee</p>
                    </div>
                    </div>
                    <div className="card" style={{padding: '0px'}}>
                    <img src={blog} alt="img" />
                    <div className="date">
                        <p>Medical</p>
                        <p>March 31, 2022</p>
                    </div>
                    <p className="tips">6 Tips To Protect Your Mental Health When You’re Sick</p>
                    <div className="author">
                        <img src={author} alt="pic" style={{width: '32px', height: '32px'}}/>
                        <p>Rebecca Lee</p>
                    </div>
                    </div>
                    <div className="card" style={{padding: '0px'}}>
                    <img src={blog} alt="img" />
                    <div className="date">
                        <p>Medical</p>
                        <p>March 31, 2022</p>
                    </div>
                    <p className="tips">6 Tips To Protect Your Mental Health When You’re Sick</p>
                    <div className="author">
                        <img src={author} alt="pic" style={{width: '32px', height: '32px'}}/>
                        <p>Rebecca Lee</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}