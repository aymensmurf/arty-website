import { DANCE, MORE_SKILLS, MUSIC, PAINTINGS, PHOTOGRAPHY, THEATER } from "../../utils/consts";
import Filter from "./Filter";

const Filters = ({ filters, setFilters }) => {
    const toggleElm = (title, value) => {
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
        <>
            <section className="container">
                <Filter
                    title="MUSIC"
                    options={MUSIC}
                    isActive={filters.genres.length > 0 || filters.instruments.length > 0}
                    selectedFilters={filters.genres.concat(filters.instruments)}
                    handleOptionClick={toggleElm}
                />
                <Filter
                    title="PAINTING"
                    options={PAINTINGS}
                    isActive={filters.paintings.length > 0 || filters.paintingtools.length > 0}
                    selectedFilters={filters.paintings.concat(filters.paintingtools)}
                    handleOptionClick={toggleElm}
                />
                <Filter
                    title="DANCE"
                    options={DANCE}
                    isActive={filters.dances.length > 0}
                    selectedFilters={filters.dances}
                    handleOptionClick={toggleElm}
                />
                <Filter
                    title="THEATER"
                    options={THEATER}
                    isActive={filters.theatres.length > 0}
                    selectedFilters={filters.theatres}
                    handleOptionClick={toggleElm}
                />
                <Filter
                    title="PHOTOGRAPHY"
                    options={PHOTOGRAPHY}
                    isActive={filters.photographies.length > 0 || filters.photographytools.length > 0}
                    selectedFilters={filters.photographies.concat(filters.photographytools)}
                    handleOptionClick={toggleElm}
                />

                <Filter
                    title="MORE"
                    options={MORE_SKILLS}
                    isActive={
                        filters.sculptures.length > 0 ||
                        filters.architectures.length > 0 ||
                        filters.literatures.length > 0 ||
                        filters.calligraphy.length > 0 ||
                        filters.handcrafts.length > 0 ||
                        filters.sandarts.length > 0
                    }
                    selectedFilters={
                        filters.sculptures.concat(
                            filters.photographytools,
                            filters.architectures,
                            filters.literatures,
                            filters.calligraphy,
                            filters.handcrafts,
                            filters.sandarts,
                        )
                    }
                    handleOptionClick={toggleElm}
                />
            </section>

            <style jsx>{`
                .container {
                    display: flex;
                    justify-content: center;
                    gap: 17px;
                    margin-top: 100px;
                }
            `}</style>
        </>
    )
}

export default Filters;