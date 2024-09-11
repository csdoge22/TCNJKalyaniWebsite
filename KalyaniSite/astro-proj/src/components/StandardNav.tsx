import { useState } from "react";

const white = {background: "white"}
const red = {background: "red"}

const StandardNav = () => {
    // each action will fall into a state (the action of a component at a particular point of time)
    
    const [color, setColor] = useState(white)
    return (
        // navbar-expand ensures everything is displayed horizontally
        <>
            <nav className="container-fluid navbar navbar-expand-sm bg-danger-subtle b-round-3 position-sticky">
                <div className="m-auto">
                    <ul className="navbar-nav m-auto">
                        <li className="nav-item bg-light p-1 m-2 text-info b-round-3">
                            <a id="index" className="nav-link" href="/" data-astro-prefetch onMouseEnter={
                                () => setColor(red)
                            } style={color}>
                                Home
                            </a>
                        </li>
                        <li className="nav-item bg-light p-1 m-2 text-info"><a className="nav-link" href="/about" data-astro-prefetch>About</a></li>
                        <li className="nav-item bg-light p-1 m-2 text-info round"><a className="nav-link" href="/highlights" data-astro-prefetch>Highlights</a></li>
                        <li className="nav-item bg-light p-1 m-2 text-info"><a className="nav-link" href="/contacts" data-astro-prefetch>Contact Us</a></li>
                        <li className="nav-item bg-light p-1 m-2 text-info"><a className="nav-link" href="/asite" data-astro-prefetch>About The Site</a></li>
                    </ul>
                </div>
            </nav>
        </>
    );
}
export default StandardNav;