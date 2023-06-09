import React from "react";
import './layout.css';
import { Navbar } from "../../components/navbar/Navbar";
import { Outlet } from "react-router-dom";
import { Footer } from "../../components/footer/Footer";

export const Layout = () => {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    )
}