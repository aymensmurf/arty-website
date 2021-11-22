import React, { useState, useEffect } from 'react';
import Layout from "../../Layout/Layout";
import { AllWorkshops } from "../../components/workshops";
import Filters from '../../components/widgets/Filters';
import client from '../../graphql';
import { SEARCH_WORKSHOPS } from '../../graphql/queries/workshop';
import FiltersTablet from '../../components/widgets/FiltersTablet';
import Spinner from '../../components/widgets/Spinner';

const Workshops = () => {
    const [contact, setContact] = useState(false);
    const [commingSoon, setCommingSoon] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [workshops, setWorkshops] = useState([]);
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

    useEffect(() => {
        getWorkshops();
    }, [filters]);

    const getWorkshops = async () => {
        setIsLoading(true);

        try {
            const { data } = await client.query({
                query: SEARCH_WORKSHOPS,
                variables: filters,
                fetchPolicy: 'network-only',
            });

            if (data && data.searchForWorkshop && data.searchForWorkshop.length > 0) {
                setWorkshops(data.searchForWorkshop);
            }
        } catch (error) {
            console.error(`error`, error)
        }

        setIsLoading(false);
    }

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
            <FiltersTablet filters={filters} setFilters={setFilters} />

            {isLoading ? (
                <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '140px 20px' }}>
                    <Spinner />
                </div>
            ) : (
                workshops.length > 0 ? (
                    <AllWorkshops data={workshops} />
                ) : (
                    <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '140px 20px' }}>
                        <img src="/img/404-workshops.svg" alt="No workshops found" />
                    </div>
                )
            )}
        </Layout>
    )
}

export default Workshops;