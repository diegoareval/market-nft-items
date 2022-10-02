import ArticleItem from "@components/article/article-item";

const ArticleList = ()=> {
    return ( <section className="grid grid-cols-2 gap-4 mb-5">
        { Array.from({length: 10}).map((_, i) =>
            {
                return (<>
                    <ArticleItem key={i} />
                </>)
            }
        )}
    </section>)
}

export default ArticleList;
