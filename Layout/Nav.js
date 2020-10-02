import React, { useEffect, useState } from 'react'
import Contact from '../components/widgets/Contact'

const Nav = () => {
    const [contact, setContact] = useState(false)

    useEffect(() => {
        let doc = document.documentElement;
        let w = window;

        let prevScroll = w.scrollY || doc.scrollTop;
        let curScroll;
        let direction = 0;
        let prevDirection = 0;

        let header = document.getElementById('main-nav');

        let checkScroll = function () {
            /*
            ** Find the direction of scroll
            ** 0 - initial, 1 - up, 2 - down
            */

            curScroll = w.scrollY || doc.scrollTop;
            if (curScroll > prevScroll) {
                direction = 2;
            }
            else if (curScroll < prevScroll) {
                direction = 1;
            }

            if (direction !== prevDirection) {
                toggleHeader(direction, curScroll);
            }

            prevScroll = curScroll;
        };

        let toggleHeader = function (direction, curScroll) {
            if (direction === 2 && curScroll > 150) {
                header.classList.add('hide');
                header.classList.remove('bg-color');
                prevDirection = direction;
            }
            else if (direction === 1) {
                header.classList.remove('hide');
                header.classList.add('bg-color');
                prevDirection = direction;
            } else if (direction === 1 && curScroll <= 150) {
                header.classList.remove('bg-color');
            }
        };

        window.addEventListener('scroll', checkScroll);
    }, [])

    return (
        <>
            <nav id="main-nav">
                <div className="container" style={{ display: 'flex', justifyContent: 'space-between', padding: '20px 0px', alignItems: 'center' }}>
                    <div style={{ width: '33.33%' }}>
                        <a href="#">Features</a>
                        <a href="#">FAQ</a>
                        <a href="#">Download</a>
                        <a onClick={() => setContact(true)}>Contact</a>
                    </div>
                    <div style={{ width: '33.33%', textAlign: 'center' }}>
                        <a href="/"><img src="/img/logo-black.svg" alt="Jam" /></a>
                    </div>
                    <div style={{ width: '33.33%', textAlign: 'right' }}>
                        <img src="/img/nav-google.png" alt="Google Play" style={{ marginRight: 11 }} />
                        <img src="/img/nav-apple.png" alt="App store" />
                    </div>
                </div>
            </nav>

            <Contact show={contact} handleClose={() => setContact(false)} />

            <style jsx>{`
                #main-nav {
                    position: fixed;
                    top: 0;
                    width: 100%;
                    transition: all .3s ease;
                }

                #main-nav.hide {
                    top: -143px;
                }

                #main-nav.bg-color {
                    background-color: #fff;
                }

                a {
                    margin-right: 40px;
                    cursor: pointer;
                }
            `}</style>
        </>
    )
}

export default Nav
