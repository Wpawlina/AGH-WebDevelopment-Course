import { useState } from "react";
import { useNavigate } from "react-router-dom";



interface Article{
    id: number;
    title: string;
    description: string;
    content: string;
    date:Date

}


function Add() {    
    const [article,setArticle] = useState<Article>({id:0 , date:new Date() , title:" " , description:" ", content:" "} as Article);
    const navigate=useNavigate();


    const handleAddArticle = ()=>{
        if(article.title===" " || article.description===" " || article.content===" "){
            alert("Wypełnij wszystkie pola");
            return;
        }
        const articles=Array<Article>(); ;
        let newId=0;
        if(localStorage.getItem("articles")!==null){
            let a=JSON.parse(localStorage.getItem("articles")!);
            articles.push(...a);
            newId=articles[articles.length-1].id+1;
        }
        articles.push({ ...article,id:newId, date:new Date() });
        localStorage.setItem("articles", JSON.stringify(articles));
        setArticle({id: 0, date: new Date(), title:" ", description: " ", content: " "} as Article);
        navigate("/blog");



    }

    return(
        <>
        <div>
            <h1 className="text-6xl font-bold ">Nowy Artykuł</h1>
        </div>

        <div className={` my-20  flex flex-col justify-start items-start p-14 bg-gray-400 border rounded-xl  w-full md:w-[70%] min-w-[300px] md:min-w-[600px]  `}>
            <div className="justify-start flex flex-col items-start py-2 text-lg  w-full">
                <label className="mb-2 font-bold text-xl"  htmlFor="title">Tytuł:</label>
                <input className="w-full max-w-[800px] rounded  focus:outline-1  focus:outline-cyan-300 " type="text" name="title" id="title" value={article.title} onChange={(e)=>{ setArticle({...article, title:e.target.value } )}} />
            </div>

            <div className="justify-start flex flex-col items-start py-2 text-lg  w-full">
                <label className="mb-2 font-bold text-xl"  htmlFor="description">Opis:</label>
                <textarea  rows={4} className=" resize-none w-full max-w-[800px] rounded  focus:outline-1  focus:outline-cyan-300 "  name="title" id="title" value={article.description} onChange={(e)=>{ setArticle({...article, description:e.target.value } )}} />
            </div>

            <div className="justify-start flex flex-col items-start py-2 text-lg  w-full">
                <label className="mb-2 font-bold text-xl"  htmlFor="description">Treść:</label>
                <textarea  rows={10} className=" resize-none w-full max-w-[800px] rounded  focus:outline-1  focus:outline-cyan-300 "  name="title" id="title" 
                     value={article.content} onChange={(e)=>{ setArticle({...article, content:e.target.value } )}} />
            </div>

            <div className="self-end mt-4 mr-4 py-2 bg-cyan-800 text-white p-2 rounded-full flex flex-row items-center hover:text-cyan-300 text-2xl cursor-pointer " onClick={handleAddArticle}>
                Dodaj
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6  md:size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                </svg>
        </div>
        
    </div>

        </>
    )
}

export default Add;