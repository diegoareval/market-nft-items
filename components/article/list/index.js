import ArticleItem from "@components/article/article-item";

const ArticleList = ({articles})=> {
    return ( <section className="grid md:grid-cols-1 lg:grid-cols-2 gap-4 mb-5">
        { articles.map((article) =>
            {
                return (<>
                    <ArticleItem article={article} />
                </>)
            }
        )}
    </section>)
}

export default ArticleList;
