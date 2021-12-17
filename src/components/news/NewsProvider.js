import React, { useState, createContext } from "react"

export const NewsContext = createContext()

export const NewsProvider = (props) => {
    const [articles, setArticles] = useState([])

    const getArticles = () => {
        return fetch("http://localhost:8088/articles")
        .then(res => res.json())
        .then(setArticles)
    }

    const addArticle = articleObj => {
        return fetch("http://localhost:8088/articles", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(articleObj)
        })
        .then(getArticles)
    }

    const updateArticle = article => {
        return fetch(`http://localhost:8088/articles/${article.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(article)

        } )
        .then(getArticles)
    }

    const deleteArticle = articleId => {
        return fetch(`http://localhost:8088/articles/${articleId}`, {
            method: "DELETE"
        })
        .then(getArticles)
    }

    const getArticleById = (id) => {
        return fetch(`http://localhost:8088/articles/${id}`)
        .then(res => res.json())
    }

    

    return (
        <NewsContext.Provider value={{
            articles, getArticles, addArticle, getArticleById, updateArticle, deleteArticle
        }}>
            {props.children}
        </NewsContext.Provider>
    )

}