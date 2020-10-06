import React, { useEffect, useState } from 'react'
import Contact from '../components/widgets/Contact'

const NavTablet = ({ contact, openContact, closeContact }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        let doc = document.documentElement;
        let w = window;

        let prevScroll = w.scrollY || doc.scrollTop;
        let curScroll;
        let direction = 0;
        let prevDirection = 0;

        let header = document.getElementById('main-nav-tablet');

        let checkScroll = function () {
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
            <nav id="main-nav-tablet">
                <a href="/"><img id="logo" src="/img/logo-black.svg" alt="Jam" /></a>
                <div style={{ display: 'flex' }} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <img src={`/img/${isMenuOpen ? 'menu-close' : 'menu'}.svg`} alt="Menu icon" style={{ marginRight: 5 }} />
                    <p>Menu</p>
                </div>
            </nav>

            <div id="menu">
                <a href="#"><h3>Features</h3></a>
                <a href="#"><h3>FAQ</h3></a>
                <h3>Download</h3>
                <img src="/img/app-store-tablet.png" alt="App store" style={{ marginTop: 12 }} />
                <img src="/img/google-play-tablet.png" alt="Google play" style={{ marginTop: 12 }} />
                <h3 style={{ marginBottom: 30 }} onClick={openContact}>Contact</h3>
            </div>

            <Contact show={contact} handleClose={closeContact} />

            <style jsx>{`
                #main-nav-tablet {
                    background-color: transparent;
                    position: fixed;
                    top: 0;
                    width: 100%;
                    transition: all .5s ease;
                    z-index: 99;
                    padding: 20px 30px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                
                #main-nav-tablet.hide {
                    top: -143px;
                }

                #main-nav-tablet.bg-color {
                    background-color: #fff;
                }

                #logo {
                    width: 142px;
                    height: 45px;
                    object-fit: contain;
                }

                #menu {
                    background: linear-gradient(225deg, rgba(237,30,70,1) 0%, rgba(246,137,85,1) 100%);
                    min-height: ${isMenuOpen ? '100vh' : '0vh'};
                    position: fixed;
                    top: ${isMenuOpen ? '0' : '-100vh'};
                    width: 100%;
                    transition: all .7s ease;
                    z-index: 98;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }

                h3 {
                    color: #fff;
                    font-size: 30px;
                    line-height: 36px;
                    margin-top: 30px;
                }

                @media only screen and (max-width: 424px){
                    #logo {
                        width: 108px;
                        height: 34px;
                    }
                }
            `}</style>
        </>
    )
}

export default NavTablet
