import {Hero, Breadcrumb, WalletInfo} from "@components/common";
import {Currency} from "@components/web3";
import {Card} from "@components/order";
import {ArticleList} from "@components/article";
import BaseLayout from "@components/layout/base";

export default function Home() {
    return (
        <>
            <Hero/>
            <Breadcrumb/>
            <WalletInfo/>
            <Currency/>
            <Card/>
            <ArticleList/>
        </>

)
}

Home.Layout = BaseLayout;
