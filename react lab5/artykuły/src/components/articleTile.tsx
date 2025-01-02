import { Link } from "react-router-dom";


interface Article{
    id: number;
    title: string;
    description: string;
    content: string;
    date:Date

}

interface ArticleTileProps{
    type:number;
    article:Article;
    
}


function ArticleTile({type,article  }:ArticleTileProps) {
  return (
    <div className={`flex flex-col justify-start items-start p-10 my-10  border rounded-full  w-full md:w-[70%] min-w-[300px] md:min-w-[600px] ${type===1? "bg-gray-300" :"bg-gray-400" } `}>
        <h1 className="self-center text-2xl md:text-4xl font-bold py-2">{article.title}</h1>
        <div className=" text-xs md:text-sm py-1">{  article.date.toDateString()  }</div>
        <div className=" text-xl md:text-2xl py-2">{article.description}</div>
        <Link className="self-end" to={`/article/${article.id}`}><div className=" mr-4 py-2 bg-cyan-800 text-white p-2 rounded-full flex flex-row items-center hover:text-cyan-300 ">
            Przeczytaj 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-3  md:size-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
            </svg>
        </div>
        </Link>
    </div>
  );
}

export default ArticleTile;