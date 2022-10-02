import articles from './index.json';
export const getAllArticles = ()=> {
    return {
        data: articles,
        articlesMap: articles.reduce((a, c , i)=> {
         a[c.id] = c;
         a[c.id].index = i;
         return a;
        }, {})
    }
}
