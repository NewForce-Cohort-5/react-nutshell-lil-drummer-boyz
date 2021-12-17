import React, { useContext, useEffect, useState } from "react";
import { NewsContext } from "./NewsProvider";
import { NewsCard } from "./NewsCard";
import "./News.css"
import { useNavigate } from "react-router-dom";

export const NewsList = () => {

    const { getArticles, articles } = useContext(NewsContext)

    //for search bar
    // const [filteredArticles, setFiltered ] = useState([])

    const navigate = useNavigate()



    useEffect(() => {
        getArticles()
    }, [])




    return (
        <>
            <h1>Your News</h1>

            <button onClick={() => { navigate("/articles/create") }}>Add Article
            </button>

            <div className="articles">
                {

                    articles.sort((a, b) => {
                        return new Date(b.date) - new Date(a.date)
                    }).map(article => {
                        return (
                            article.userId === parseInt(localStorage.getItem("nutshell_user"))
                                ? <NewsCard
                                    key={article.id}
                                    article={article} /> : <></>
                        )
                    })

                }
            </div>

        </>
    )

}