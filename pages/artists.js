import { useEffect, useState } from 'react'
import Layout from "../Layout/Layout";
import { AllArtists, Featured } from "../components/artists";
import Filters from "../components/widgets/Filters";
import client from '../graphql';
import { SEARCH_USERS } from '../graphql/queries/user';

const Artists = () => {
    const [contact, setContact] = useState(false);
    const [commingSoon, setCommingSoon] = useState(false);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = async () => {
        try {
            const { data } = await client.query({ query: SEARCH_USERS });

            if (data && data.searchForUser && data.searchForUser.length > 0) {
                setUsers(data.searchForUser);
            }
        } catch (error) {
            console.log(`error`, error)
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
            {/* <Featured /> */}
            <Filters />
            {users.length > 0 ? (
                <AllArtists data={users} />
            ) : (
                <h1>Nth to c here</h1>
            )}
        </Layout>
    )
}

export default Artists;