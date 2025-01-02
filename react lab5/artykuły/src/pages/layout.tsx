import { Outlet } from "react-router-dom";
import { Link,useLocation } from "react-router-dom";


function Layout() {
  const location = useLocation();

  return (
    <>
        <div className="w-screen h-screen overflow-y-scroll ">

       
          <nav  className="flex flex-row w-full justify-center bg-gray-400 py-4 text-xl text-black  max-w-screen"  >
          <Link to="/"><div className={`px-8 border-x-2 border-gray-800 border-dashed hover:text-cyan-400 ${ location.pathname==="/"? "text-cyan-800": "" }` }>Home</div></Link>
          <Link to="/blog"><div className={`px-8 border-r-2 border-gray-800 border-dashed hover:text-cyan-400 ${ location.pathname==="/blog"? "text-cyan-800": "" }` }>Blog</div></Link>
          <Link to="/dodaj"><div className={`px-8 border-r-2 border-gray-800 border-dashed hover:text-cyan-400 ${ location.pathname==="/dodaj"? "text-cyan-800": "" }` }>Dodaj</div></Link>
            
                  
              
              
          </nav>
          <main className="flex flex-col justify-center w-full bg-gray-100 pt-10 items-center"> <Outlet /></main>
        </div>
        
       
    </>
  );
}

export default Layout;