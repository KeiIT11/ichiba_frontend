import Link from 'next/link';

export const HomeNavBar = () => {
    return (
        <header>
            <div className="navbar px-10">
                <Link href="/" className='btn btn-ghost normal-case text-xl'>
                    Rakuten New Life
                </Link>

                <div className='md:px-12'></div>

                <div className="form-control w-full">
                    <input type="text" placeholder="Search" className="input input-bordered w-full" />
                </div>

                <div className='md:px-12'></div>

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
        </header>
    )
};