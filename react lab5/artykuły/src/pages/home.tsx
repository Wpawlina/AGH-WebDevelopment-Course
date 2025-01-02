import {Link} from 'react-router-dom';

function Home() {
  return (
    <>
    <div className="border-2 border-cyan-300 p-6 text-2xl md:text-6xl rounded-full w-[60%] font-bold" >
      <h1>Witaj na moim Blogu!!!</h1>
      
    </div>

    <Link to="/blog">
      <div className="mt-10 text-lg  md:text-2xl bg-gray-400 py-3 px-8  border rounded-full hover:text-cyan-300  flex flex-row items-baseline justify-center ">
        Sprawdz najnowsze artykuły
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-3  md:size-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
        </svg>
      </div>
    </Link>

  </>
  );
}


export default Home;