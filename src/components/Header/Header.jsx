"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
    const pathname = usePathname();

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "Services", path: "/services" },
        { name: "Portfolio", path: "/portfolio" },
        { name: "Contact", path: "/contact" },
        { name: "Mentions légales", path: "/mentions-legales" },
    ];

    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <span className="navbar-brand text-uppercase">John Doe</span>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#mainNavbar"
                        aria-controls="mainNavbar"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="mainNavbar">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            {navLinks.map((link) => (
                                <li className="nav-item" key={link.path}>
                                <Link
                                    href={link.path}
                                    className={`nav-link text-uppercase ${pathname === link.path ? "fw-bold text-decoration-underline" : ""}`}
                                >
                                    {link.name}
                                </Link>
                                </li>
                            ))}
                            </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}