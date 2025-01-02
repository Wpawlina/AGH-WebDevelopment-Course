import { useState,useEffect } from "react";
import ArticleTile from "../components/articleTile";


interface Article{
  id: number;
  title: string;
  description: string;
  content: string;
  date:Date

}

function Blog() {
 

  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(()=>{
    let a=Array<Article>();
    if(localStorage.getItem("articles")!==null){
      console.log("articles")
      a=JSON.parse(localStorage.getItem("articles")!);
    }
    a.forEach(article => {article.date=new Date(article.date)}); 
    setArticles(a);
  

  },[])




  return (
    <>
        <div>
        <h1 className="text-6xl font-bold ">Artykuły</h1>
        </div>

        <div className="mt-20 w-full flex flex-col justify-center items-center">
          {articles.map((article,index)=>{
            return <ArticleTile key={article.id} type={index%2} article={article} />
          })}

          
        </div>


    </>
  );
}

export default Blog;