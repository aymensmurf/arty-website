import React from 'react'

const Header = () => {
    return (
        <>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', padding: '40px 0px' }}>
                <div style={{ width: '33.33%' }}>
                    <a href="#">Features</a>
                    <a href="#">FAQ</a>
                    <a href="#">Download</a>
                    <a href="#">Contact</a>
                </div>
                <div style={{ width: '33.33%' }}></div>
                <div style={{ width: '33.33%' }}></div>
            </div>

            <style jsx>{`
                a {
                    margin-right: 40px;
                }
            `}</style>
        </>
    )
}

export default Header
