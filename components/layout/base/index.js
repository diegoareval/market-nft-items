import {Footer, NavBar} from "@components/common";

const BaseLayout = ({children})=> {
   return (
       <>
      <div className="relative max-w-7xl mx-auto px-4">
         <NavBar/>
         <div className="fit">
            {children}
         </div>
      </div>
      <Footer/>
   </>
   )
}

export default BaseLayout;
