import React from "react"
import "./News.css"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import { NewsContext } from "./NewsProvider"



export const NewsCard = ({article}) => {

    let timestamp = article.date
      let date = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(timestamp)

    const navigate = useNavigate()
    

    return (

    <section className="article">
        <h2><a href={article.url} target={article.url}>{article.title}</a></h2>
        <address className="date">Updated: {date}</address>
        <address className="article_synopsis">{article.synopsis}</address>
        
        <button onClick={() => {
            navigate(`/articles/edit/${article.id}`)
        }}>Edit Article Info</button>


    </section>
)}