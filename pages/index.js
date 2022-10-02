import {Footer, NavBar, Hero, Breadcrumb, WalletInfo} from "@components/common";
import {Currency} from "@components/web3";
import {Card} from "@components/order";
import {ArticleList} from "@components/article";

export default function Home() {
    return (
    <div>
        <div className="relative bg-white overflow-hidden">
            <div className="relative max-w-7xl mx-auto px-4">
               <NavBar/>
                <div className="fit">
                   <Hero/>
                    <Breadcrumb/>
                    <WalletInfo/>
                  <Currency/>
                  <Card/>
                   <ArticleList/>

                </div>
            </div>
           <Footer/>
        </div>
    </div>
)
}
