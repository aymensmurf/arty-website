import React from "react";
import Pill from "./Pill";

const Filter = ({ title, options, isActive, selectedFilters, handleOptionClick }) => {
    return (
        <>
            <div style={{ position: 'relative' }}>
                <div className="pill-container">
                    <Pill title={title} isActive={isActive} />
                </div>

                {options && (
                    <div className="options">
                        <div className="options-content">
                            {Object.entries(options).map(([key, value]) => (
                                <React.Fragment key={key}>
                                    <p className="option-title">{value.title}</p>

                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 10 }}>
                                        {(value.options.length > 0) && (
                                            value.options.map((elm, i) => (
                                                <Pill
                                                    key={i}
                                                    title={elm}
                                                    isActive={selectedFilters.includes(elm)}
                                                    isOneColor
                                                    handleClick={() => handleOptionClick(key, elm)}
                                                />
                                            ))
                                        )}
                                    </div>
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                )}

            </div>

            <style jsx>{`
                .pill-container:hover + .options {
                    height: 268px;
                }

                .options:hover {
                    height: 268px;
                }

                .options {
                    width: 350px;
                    height: 0px;
                    max-width: 350px;
                    max-height: 268px;
                    padding-top: 10px;
                    position: absolute;
                    top: 40px;
                    left: 0;
                    z-index: 2;
                    overflow: hidden;
                    transition: all .5s ease;
                }

                .options-content {
                    width: 100%;
                    height: 100%;
                    background-color: #fff;
                    padding: 30px 10px;
                    overflow-y: scroll;
                    border-radius: 9px;
                    border: 1px solid #000;
                }

                .options-content::-webkit-scrollbar {
                    width: 14px;
                }

                .options-content::-webkit-scrollbar-thumb {
                    border: 4px solid rgba(0, 0, 0, 0);
                    background-clip: padding-box;
                    -webkit-border-radius: 8px;
                    background-color: rgba(0, 0, 0, 1);
                }

                .options-content::-webkit-scrollbar-button {
                    width: 0;
                    height: 0;
                    display: none;
                }
                .options-content::-webkit-scrollbar-corner {
                    background-color: transparent;
                }

                .option-title {
                    font-family: "Poppins";
                    font-weight: 600;
                    font-size: 18px;
                    color: #ed1e46;
                    text-transform: capitalize;
                    margin-bottom: 10px;
                }
            `}</style>
        </>
    )
}

export default Filter;