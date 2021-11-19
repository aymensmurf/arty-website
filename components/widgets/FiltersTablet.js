import React from "react";
import { DANCE, MORE_SKILLS, MUSIC, PAINTINGS, PHOTOGRAPHY, THEATER } from "../../utils/consts";
import Pill from "./Pill";

const FiltersTablet = ({ filters, setFilters }) => {
    const toggleFilterOption = (title, value) => {
        const _key = title.toLowerCase().replace('_', '');
        const _filters = { ...filters };
        const _filtersElm = [..._filters[_key]];

        const elmIndex = _filtersElm.indexOf(value);

        if (elmIndex !== -1) {
            _filtersElm.splice(elmIndex, 1);
        } else {
            _filtersElm.push(value)
        }

        _filters[_key] = _filtersElm;

        setFilters(_filters);
    }

    return (
        <div className="container visible-tablet">
            <div style={{ position: 'relative', width: '100%' }}>
                <div className="select">
                    <p>Filters</p>
                    <i className="fas fa-caret-down" style={{ color: "#797979" }}></i>
                </div>

                <div className="options">
                    <div className="options-content">
                        <h3 style={{ marginTop: 0 }}>Music</h3>

                        {Object.entries(MUSIC).map(([key, value]) => (
                            <div key={key} style={{ marginLeft: 20, marginTop: 20 }}>
                                <p className="option-title">{value.title}</p>

                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 10 }}>
                                    {(value.options.length > 0) && (
                                        value.options.map((elm, i) => (
                                            <Pill
                                                key={i}
                                                title={elm}
                                                isActive={filters.genres.concat(filters.instruments).includes(elm)}
                                                isOneColor
                                                handleClick={() => toggleFilterOption(key, elm)}
                                            />
                                        ))
                                    )}
                                </div>
                            </div>
                        ))}

                        <h3>Painting</h3>

                        {Object.entries(PAINTINGS).map(([key, value]) => (
                            <div key={key} style={{ marginLeft: 20, marginTop: 20 }}>
                                <p className="option-title">{value.title}</p>

                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 10 }}>
                                    {(value.options.length > 0) && (
                                        value.options.map((elm, i) => (
                                            <Pill
                                                key={i}
                                                title={elm}
                                                isActive={filters.paintings.concat(filters.paintingtools).includes(elm)}
                                                isOneColor
                                                handleClick={() => toggleFilterOption(key, elm)}
                                            />
                                        ))
                                    )}
                                </div>
                            </div>
                        ))}

                        <h3>Dance</h3>

                        {Object.entries(DANCE).map(([key, value]) => (
                            <div key={key} style={{ marginLeft: 20, marginTop: 20 }}>
                                <p className="option-title">{value.title}</p>

                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 10 }}>
                                    {(value.options.length > 0) && (
                                        value.options.map((elm, i) => (
                                            <Pill
                                                key={i}
                                                title={elm}
                                                isActive={filters.dances.includes(elm)}
                                                isOneColor
                                                handleClick={() => toggleFilterOption(key, elm)}
                                            />
                                        ))
                                    )}
                                </div>
                            </div>
                        ))}

                        <h3>Theater</h3>

                        {Object.entries(THEATER).map(([key, value]) => (
                            <div key={key} style={{ marginLeft: 20, marginTop: 20 }}>
                                <p className="option-title">{value.title}</p>

                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 10 }}>
                                    {(value.options.length > 0) && (
                                        value.options.map((elm, i) => (
                                            <Pill
                                                key={i}
                                                title={elm}
                                                isActive={filters.theatres.includes(elm)}
                                                isOneColor
                                                handleClick={() => toggleFilterOption(key, elm)}
                                            />
                                        ))
                                    )}
                                </div>
                            </div>
                        ))}

                        <h3>Photography</h3>

                        {Object.entries(PHOTOGRAPHY).map(([key, value]) => (
                            <div key={key} style={{ marginLeft: 20, marginTop: 20 }}>
                                <p className="option-title">{value.title}</p>

                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 10 }}>
                                    {(value.options.length > 0) && (
                                        value.options.map((elm, i) => (
                                            <Pill
                                                key={i}
                                                title={elm}
                                                isActive={filters.photographies.concat(filters.photographytools).includes(elm)}
                                                isOneColor
                                                handleClick={() => toggleFilterOption(key, elm)}
                                            />
                                        ))
                                    )}
                                </div>
                            </div>
                        ))}

                        <h3>More</h3>

                        {Object.entries(MORE_SKILLS).map(([key, value]) => (
                            <div key={key} style={{ marginLeft: 20, marginTop: 20 }}>
                                <p className="option-title">{value.title}</p>

                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 10 }}>
                                    {(value.options.length > 0) && (
                                        value.options.map((elm, i) => (
                                            <Pill
                                                key={i}
                                                title={elm}
                                                isActive={
                                                    filters.sculptures.concat(
                                                        filters.photographytools,
                                                        filters.architectures,
                                                        filters.literatures,
                                                        filters.calligraphy,
                                                        filters.handcrafts,
                                                        filters.sandarts,
                                                    ).includes(elm)
                                                }
                                                isOneColor
                                                handleClick={() => toggleFilterOption(key, elm)}
                                            />
                                        ))
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
                .select {
                    border-radius: 20px;
                    background: #e4e4e4;
                    padding: 10px 30px;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    user-select: none;
                }

                .select.active {
                    color: #fff;
                    background: linear-gradient(120deg, #f68955 0%, #ed1e46 100%);
                }

                p {
                    font-family: "Poppins";
                    font-weight: 600;
                    font-size: 13px;
                    line-height: 14px;
                    color: #797979;
                    text-transform: uppercase;
                }

                .select:hover + .options {
                    height: 300px;
                }

                .options:hover {
                    height: 300px;
                }

                .options {
                    width: 100%;
                    height: 0px;
                    max-height: 300px;
                    padding-top: 10px;
                    position: absolute;
                    top: 40px;
                    z-index: 2;
                    overflow: hidden;
                    transition: all .5s ease;
                }

                .options-content {
                    width: 100%;
                    height: 100%;
                    background-color: #fff;
                    padding: 30px 20px;
                    overflow-y: scroll;
                    border-radius: 9px;
                    border: 1px solid #707070;
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

                h3 {
                    font-family: "Poppins";
                    font-weight: 600;
                    font-size: 24px;
                    color: #ed1e46;
                    text-transform: capitalize;
                    margin-top: 40px;
                }

                .option-title {
                    font-family: "Poppins";
                    font-weight: 600;
                    font-size: 18px;
                    color: #000;
                    text-transform: capitalize;
                    margin-bottom: 15px;
                }
            `}</style>
        </div>
    )
}

export default FiltersTablet;