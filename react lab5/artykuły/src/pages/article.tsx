import { useParams,useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";


interface Article{
  id: number;
  title: string;
  description: string;
  content: string;
  date:Date

}


function Article() {
  const { id } = useParams();
  const [article, setArticle] = useState<Article>({id:0 , date:new Date() , title:" " , description:" ", content:" "} as Article);
  const navigate=useNavigate();

  useEffect(()=>{
    let a=Array<Article>();
    if(localStorage.getItem("articles")===null){
      navigate("/404");
      return;
    }

    a=JSON.parse(localStorage.getItem("articles")!);
    a.forEach(article => {article.date=new Date(article.date)}); 
    let art=a.find((article)=> article.id===parseInt(id!));

    if(art===undefined){
      navigate("*");
      return;  
    }

    setArticle(art!);
  
  },[])



  return (
    <div className={`flex flex-col justify-start items-start px-10 py-28  md:p-36 pt-10   my-10  border rounded-full  w-full md:w-[70%] min-w-[300px] md:min-w-[600px] bg-gray-400 `}>
      <h1 className="self-center text-2xl md:text-6xl font-bold py-2">{article.title}</h1>
      <div className=" text-xs md:text-md py-1">{  article.date.toDateString()  }</div>
      <div className=" text-sm md:text-2xl py-2 text-justify">{article.content}</div>
    </div>
    
  );
}   

export default Article;