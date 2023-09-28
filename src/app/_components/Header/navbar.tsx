import Link from 'next/link';

const HomeNavBar = () => {
    return (
        <header>
            <div className="navbar px-10">
                <div className="flex-1">
                    <Link href="/" className='btn btn-ghost normal-case text-xl'>
                        Rakuten New Life
                    </Link>
                </div>
                <div className="navbar-end">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <Link href="/login">
                                Login
                            </Link>
                        </li>
                    </ul>
                    <Link href="/login" className='btn'>
                        Sign up
                    </Link>
                </div>
            </div>
        </header>
    )
};
export default HomeNavBar;