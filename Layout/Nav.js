import React, { useEffect } from 'react'
import Contact from '../components/widgets/Contact'

const Nav = ({ contact, openContact, closeContact, commingSoon, setCommingSoon }) => {

    useEffect(() => {
        let doc = document.documentElement;
        let w = window;

        let prevScroll = w.scrollY || doc.scrollTop;
        let curScroll;
        let direction = 0;
        let prevDirection = 0;

        let header = document.getElementById('main-nav');
        // header.classList.remove('bg-color');

        let checkScroll = function () {
            /*
            ** Find the direction of scroll
            ** 0 - initial, 1 - up, 2 - down
            */

            curScroll = w.scrollY || doc.scrollTop;

            if (curScroll <= 150) {
                header.classList.remove('bg-color');
            }

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
                prevDirection = direction;
            } else if (direction === 1) {
                header.classList.remove('hide');
                header.classList.add('bg-color');
                prevDirection = direction;
            }
        };

        window.addEventListener('scroll', checkScroll);
    }, [])

    return (
        <>
            <nav id="main-nav">
                <div className="container grid-3" style={{ padding: '20px 10px' }}>
                    <div>
                        <a href="/#features">Features</a>
                        <a href="/#faq">FAQ</a>
                        <a href="/#download">Download</a>
                        <a onClick={openContact}>Contact</a>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <a href="/#home" style={{ marginRight: 0 }}><img id="logo" src="/img/logo-black.svg" alt="Jam" /></a>
                    </div>
                    <div id="stores" style={{ textAlign: 'end' }}>
                        <img src="/img/nav-google.png" alt="Google Play" onClick={setCommingSoon} style={{ marginRight: 10 }} />
                        <img src="/img/nav-apple.png" alt="App store" onClick={setCommingSoon} />
                    </div>
                </div>
            </nav>

            <Contact show={contact} handleClose={closeContact} commingSoon={commingSoon} />

            <style jsx>{`
                #main-nav {
                    background-color: transparent;
                    position: fixed;
                    top: 0;
                    width: 100%;
                    transition: all .5s ease;
                    z-index: 99;
                }

                #main-nav.hide {
                    top: -143px;
                }

                #main-nav.bg-color {
                    background-color: #fff;
                }

                .grid-3 {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    align-items: center;
                }

                a {
                    margin-right: 40px;
                    cursor: pointer;
                }

                #logo {
                    width: 180px;
                    height: 57px;
                    object-fit: contain;
                }

                #stores img {
                    cursor: pointer;
                }

                @media only screen and (max-width: 1439px){
                    a {
                        margin-right: 20px;
                        font-size: 17px;
                    }

                    #logo {
                        width: 142px;
                        height: 45px;
                        object-fit: contain;
                    }

                    #stores img {
                        width: 65px;
                        height: 43px;
                        object-fit: contain;
                    }
                }
            `}</style>
        </>
    )
}

export default Nav
