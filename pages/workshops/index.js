import React, { useState } from 'react';
import Layout from "../../Layout/Layout";
import { AllWorkshops } from "../../components/workshops";
import Filters from '../../components/widgets/Filters';

const Workshops = () => {
    const [contact, setContact] = useState(false);
    const [commingSoon, setCommingSoon] = useState(false);
    const [filters, setFilters] = useState({
        genres: [],
        instruments: [],
        paintings: [],
        paintingtools: [],
        dances: [],
        theatres: [],
        photographies: [],
        photographytools: [],

        sculptures: [],
        architectures: [],
        literatures: [],
        calligraphy: [],
        handcrafts: [],
        sandarts: [],
    });

    return (
        <Layout
            isStaticNav
            contact={contact}
            commingSoon={commingSoon}
            openContact={() => { setCommingSoon(false); setContact(true); }}
            closeContact={() => { setContact(false); }}
            setCommingSoon={() => { setCommingSoon(true); setContact(true); }}
        >
            <Filters filters={filters} setFilters={setFilters} />

            <AllWorkshops />
        </Layout>
    )
}

export default Workshops;