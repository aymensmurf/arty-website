import React, { useState } from 'react'

const Accordion = ({ q, a }) => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <>
            <div style={{ marginTop: 35 }}>
                <div className="accordion-header" onClick={() => setCollapsed(!collapsed)}>
                    <p style={{ color: '#fff', textAlign: 'left' }}>{q}</p>
                    <img src="/img/plus.svg" alt="Plus" />
                </div>

                <div className="accordion-body">
                    <p style={{ textAlign: 'left' }}>{a}</p>
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

                @media only screen and (max-width: 1439px){
                    p {
                        font-size: 18px;
                    }

                    img {
                        width: 21px;
                        height: 21px;
                        object-fit: contain;
                    }
                }

                @media only screen and (max-width: 767px){
                    .accordion-body {
                        height: ${collapsed ? '260px' : '0px'};
                    }
                }
            `}</style>
        </>
    )
}

export default Accordion
