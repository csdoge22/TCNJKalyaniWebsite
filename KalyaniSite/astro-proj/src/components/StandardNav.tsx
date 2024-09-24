const StandardNav = () => {
    return (
        // navbar-expand ensures everything is displayed horizontally
        <>
            <nav className="container-fluid navbar navbar-expand-sm bg-black sticky-top">
                <div className="m-auto">
                    <ul className="navbar-nav rounded m-auto">
                        <li className="nav-item bg-light p-1 m-2 rounded-3 text-info">
                            <a id="index" className="nav-link" href="/" data-astro-prefetch>Home</a>
                        </li>
                        <li className="nav-item bg-light p-1 m-2 rounded-3 text-info">
                            <a className="nav-link" href="/about" data-astro-prefetch>
                                About
                            </a>
                        </li>
                        <li className="nav-item bg-light p-1 m-2 rounded-3 text-info">
                            <a className="nav-link" href="/contacts" data-astro-prefetch>
                                Contact Us
                            </a>
                        </li>
                        <li className="nav-item bg-light p-1 m-2 rounded-3 text-info"><a className="nav-link" href="/asite" data-astro-prefetch>About The Site</a></li>
                    </ul>
                </div>
            </nav>
        </>
    );
}
export default StandardNav;