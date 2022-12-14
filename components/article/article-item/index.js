import Image from 'next/image';
import Link from 'next/link';
const ArticleItem = ({ article})=> {
    return (
        <div key={article.id} className="bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div className="flex h-full">
                <div className="flex h-full">
                    <Image className="object-cover" layout={"fixed"} width={200} height={230}
                         src={article.coverImage}
                         alt={article.title} />
                </div>
                <div className="p-8">
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{article.type}</div>
                    <Link href={`/articles/${article.slug}`}>
                        <a className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
                            {article.title}
                        </a>
                    </Link>

                    <p className="mt-2 text-gray-500">
                        {article.description}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ArticleItem;
