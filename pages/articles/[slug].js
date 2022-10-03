import {HeroBlog, KeyPoint, Lecture, Read} from "@components/blog";
import {Modal} from "@components/common";
import {lectures} from "@utils/data";
import {BaseLayout} from "@components/layout";
import {getAllArticles} from "@content/articles/fetcher";

export default function Blog({article}) {
    return (
        <>
            <div className={"py-4"}>
                <HeroBlog article={article}/>
            </div>
            <KeyPoint/>
          <Read/>
            <Modal/>
        </>
    )
}

export function getStaticPaths() {
    const {data} = getAllArticles();
    return {
        paths: data.map((c)=> (
            {
                params: {
                    slug: c.slug
                }
            }
        )), fallback: false
    }
}

export function getStaticProps({params}){
    const {data} = getAllArticles();
    const article = data.filter((a)=> a.slug === params.slug)[0]
    return {props: {
            article
        }}
}

Blog.Layout = BaseLayout;
