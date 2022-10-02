import {Hero, Breadcrumb, WalletInfo} from "@components/common";
// import {Currency} from "@components/web3";
// import {Card} from "@components/order";
import {ArticleList} from "@components/article";
import BaseLayout from "@components/layout/base";
import {getAllArticles} from "@content/articles/fetcher";

export default function Home({articles}) {
    return (
        <>
            <Hero/>
            {/*<Breadcrumb/>*/}
            {/*<WalletInfo/>*/}
            {/*<Currency/>*/}
            {/*<Card/>*/}
            <ArticleList articles={articles}/>
        </>
)
}

export function getStaticProps(){
    const {data, articlesMap} = getAllArticles();
    return {props: {
            articles:data , articlesMap
        }}
}

Home.Layout = BaseLayout;
