import React, { useState } from 'react'

const Accordion = () => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <>
            <div style={{ marginTop: 35 }}>
                <div className="accordion-header" onClick={() => setCollapsed(!collapsed)}>
                    <p style={{ color: '#fff' }}>Can I make a JAM that will take place online?</p>
                    <img src="/img/plus.svg" alt="Plus" />
                </div>

                <div className="accordion-body">
                    <p style={{ textAlign: 'left' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco. laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>

            <style jsx>{`
                .accordion-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    cursor: pointer;
                }

                .accordion-body {
                    margin-top: 14px;
                    padding-right: 50px;
                    overflow: hidden;
                    height: ${collapsed ? '200px' : '0px'};
                    transition: height 600ms ease;
                }

                p {
                    font-size: 25px;
                }

                img {
                    transform: rotate(${collapsed ? '45deg' : '0deg'});
                    transition: transform 600ms ease;
                }

            `}</style>
        </>
    )
}

export default Accordion
