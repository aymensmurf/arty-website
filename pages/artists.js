import { useEffect, useState } from 'react'
import Layout from "../Layout/Layout";
import { AllArtists } from "../components/artists";
import Filters from "../components/widgets/Filters";
import client from '../graphql';
import { SEARCH_USERS } from '../graphql/queries/user';
import FiltersTablet from '../components/widgets/FiltersTablet';

const Artists = () => {
    const [contact, setContact] = useState(false);
    const [commingSoon, setCommingSoon] = useState(false);
    const [users, setUsers] = useState([]);
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
        getUsers();
    }, [filters]);

    const getUsers = async () => {
        try {
            const { data } = await client.query({
                query: SEARCH_USERS,
                variables: filters,
                fetchPolicy: 'network-only',
            });

            if (data && data.searchForUser && data.searchForUser.length > 0) {
                setUsers(data.searchForUser);
            }
        } catch (error) {
            console.error(`error`, error)
        }
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

            {users.length > 0 ? (
                <AllArtists data={users} />
            ) : (
                <h1>Nth to c here</h1>
            )}
        </Layout>
    )
}

export default Artists;