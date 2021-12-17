import React, { useContext, useEffect, useState } from "react"
import { NewsContext } from "./NewsProvider"
import "./News.css"
import { useNavigate, useParams } from "react-router-dom"


export const NewsForm = () => {
    const { addArticle, updateArticle, getArticleById, deleteArticle, getArticles } = useContext(NewsContext)

    const [article, setArticle] = useState({})

    const [isLoading, setIsLoading] = useState(true)

    const {articleId } = useParams();

    const timestamp = Date.now()

    const navigate = useNavigate();

    //Delete article
    const handleClickDeleteArticle = () => {
        deleteArticle(article.id)
        .then(() => {
            navigate("/articles")
        })
    }

    //Edited article
    const handleControlledInputChange = (event) => {

        const newArticle = {...article}

        newArticle[event.target.id] = event.target.value

        setArticle(newArticle)
    }

    
    //Save article
    const handleClickSaveArticle = (event) => {
        
        const userId = parseInt(localStorage.getItem("nutshell_user"))
        article.userId = userId
    

    if(article.title === "" || article.url === "" ) {
        window.alert("Please fill in the form.")
    } else {
        setIsLoading(true);
        if (articleId) {
            updateArticle({
                id: article.id,
                title: article.title,
                synopsis: article.synopsis,
                url: article.url,
                date: timestamp,
                userId: parseInt(article.userId)
            })
            .then(() => navigate("/articles"))
        } else {
            addArticle({
                title: article.title,
                synopsis: article.synopsis,
                url: article.url,
                date: timestamp,
                userId: parseInt(article.userId)
            })
            .then(() => navigate("/articles"))
        }
    }
}

useEffect(() => {
    getArticles().then(() => {
        if (articleId){
            getArticleById(articleId)
            .then(article => {
                setArticle(article)
                setIsLoading(false)
            })
        } else {
            setIsLoading(false)
        }
    
})
}, [])


return (

    <form className="NewsForm">
          <h2 className="NewsForm__title">{articleId ? <>Edit Article</> : <>New Article</>} </h2>
          <fieldset>
              <div className="form-group">
                  <label htmlFor="title">Article Title: </label>
                  <input type="text" id="title" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Article title..." value={article.title}/>
              </div>
          </fieldset>
          <fieldset>
              <div className="form-group">
                  <label htmlFor="synopsis">Synopsis: </label>
                  <input type="text" id="synopsis" onChange={handleControlledInputChange} className="form-control" placeholder="Synopsis..." value={article.synopsis}/>
              </div>
          </fieldset>
          <fieldset>
              <div className="form-group">
                  <label htmlFor="url">URL: </label>
                  <input type="url" id="url" onChange={handleControlledInputChange} className="form-control" placeholder="URL..." value={article.url}/>
              </div>
          </fieldset>

          <button className="saveArticle"
          disabled={isLoading}
          onClick={event => {
              event.preventDefault()
              handleClickSaveArticle()
          }}> 
          {articleId ? <>Save Article</> : <>Add Article</>}
          </button>

          <button className="deleteArticle"
          disabled={isLoading}
          onClick={event => {
              event.preventDefault()
              handleClickDeleteArticle()
          }}>Delete Article</button>
    </form>
)


}