 import Link from 'next/link';
const NavBar = ()=> {
    return (
        <section>
            <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
                <nav className="relative" aria-label="Global">
                    <div className="flex justify-between">
                        <div>
                            <Link href="/">
                                <a  className="font-medium mr-8 text-gray-500 hover:text-gray-900">Home</a>
                            </Link>

                            <Link href="/">
                                <a  className="font-medium mr-8 text-gray-500 hover:text-gray-900">Marketplace</a>
                            </Link>

                            <Link href="/articles/create">
                                <a  className="font-medium mr-8 text-gray-500 hover:text-gray-900">Create Blog</a>
                            </Link>
                        </div>
                        <div>
                            <Link href="/">
                                <a className="font-medium mr-8 text-gray-500 hover:text-gray-900">Devs Software</a>
                            </Link>
                            <Link href="/">
                                <a className="font-medium mr-8 text-indigo-600 hover:text-indigo-500">Log in</a>
                            </Link>
                        </div>
                    </div>
                </nav>
            </div>
        </section>
    )
}

export default NavBar;
