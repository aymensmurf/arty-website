import React, { useEffect, useState } from 'react'
import Contact from '../components/widgets/Contact'

const NavTablet = ({ contact, commingSoon, isStaticNav = false, openContact, closeContact, setCommingSoon }) => {
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
                <a href="/#home-t"><img id="logo" src="/img/logo-white.svg" alt="Jam" style={{ width: 120, objectFit: 'contain' }} /></a>
                <div style={{ display: 'flex' }} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <img src={`/img/${isMenuOpen ? 'menu-close' : 'menu'}.svg`} alt="Menu icon" style={{ marginRight: 5 }} />
                    <p style={{ color: '#fff' }}>Menu</p>
                </div>
            </nav>

            <div id="menu">
                <a href="/#home"><h3>Home</h3></a>
                <a href="/workshops"><h3>Workshops</h3></a>
                <a href="/artists"><h3>Artists</h3></a>
                <h3 style={{ marginBottom: 20 }} onClick={openContact}>Contact</h3>
                <a>
                    <img src="/img/google-play-white.svg" alt="Google play" onClick={setCommingSoon} style={{ marginTop: 12, height: 60, objectFit: 'contain' }} />
                </a>
                <a href="https://play.google.com/store/apps/details?id=land.arty.app" target="_blank" rel="noopener noreferrer">
                    <img src="/img/app-store-white.svg" alt="App store" onClick={setCommingSoon} style={{ marginTop: 12, height: 60, objectFit: 'contain' }} />
                </a>
            </div>

            <Contact show={contact} handleClose={closeContact} commingSoon={commingSoon} />

            <style jsx>{`
                #main-nav-tablet {
                    position: fixed;
                    top: 0;
                    width: 100%;
                    transition: all .5s ease;
                    z-index: 99;
                    padding: 10px 30px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    background-color: ${isStaticNav ? '#ED1E46' : 'transparent'};
                    position: ${isStaticNav ? 'relative' : 'fixed'} ;
                }
                
                #main-nav-tablet.hide {
                    top: -143px;
                }

                #main-nav-tablet.bg-color {
                    background-color: #ED1E46;
                }

                #logo {
                    width: 142px;
                    height: 45px;
                    object-fit: contain;
                }

                #menu {
                    background: linear-gradient(225deg, rgba(237,30,70,1) 0%, rgba(246,137,85,1) 100%);
                    position: fixed;
                    width: 100%;
                    transition: all .7s ease;
                    z-index: 98;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    top: ${isMenuOpen ? '0' : '-100vh'};
                    min-height: ${isMenuOpen ? '100vh' : '0vh'};
                }

                h3 {
                    color: #fff;
                    font-size: 30px;
                    line-height: 36px;
                    margin-top: 15px;
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
