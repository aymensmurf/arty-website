import React from 'react'
import PropTypes from 'prop-types'

const Spinner = ({ color, }) => {
    return (
        <>
            <div
                className={`spinner-border`}
                style={{
                    color,
                    width: '2rem',
                    height: '2rem',
                }}>
                <span className="sr-only">Loading...</span>
            </div>

            <style jsx>{`
                .spinner-border {
                    display: inline-block;
                    width: 2rem;
                    height: 2rem;
                    vertical-align: text-bottom;
                    border: 0.25em solid currentColor;
                    border-right-color: transparent;
                    border-radius: 50%;
                    animation: spinner-border 0.75s linear infinite;

                    @keyframes spinner-border {
                        to {
                            transform: rotate(360deg);
                        }
                    }
                }
            `}</style>
        </>
    )
}

Spinner.propTypes = {
    color: PropTypes.string,
    noMargin: PropTypes.bool
}

Spinner.defaultProps = {
    color: "#ED1E46"
}

export default Spinner
