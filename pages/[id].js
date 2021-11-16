import React, { useState } from 'react';
import Layout from "../Layout/Layout";
import { Content } from "../components/artist";
import client from '../graphql'
import { GET_USER_BY_USERNAME } from '../graphql/queries/user';

const Artist = ({ data }) => {
    const [contact, setContact] = useState(false);
    const [commingSoon, setCommingSoon] = useState(false);

    return (
        <Layout
            isStaticNav
            contact={contact}
            commingSoon={commingSoon}
            openContact={() => { setCommingSoon(false); setContact(true); }}
            closeContact={() => { setContact(false); }}
            setCommingSoon={() => { setCommingSoon(true); setContact(true); }}
        >
            {data ? (
                <Content data={data} />
            ) : (
                <h1>Not found</h1>
            )}
        </Layout>
    )
}

export async function getServerSideProps({ query }) {
    if (query && query.id) {
        try {
            const { data } = await client.query({ query: GET_USER_BY_USERNAME, variables: { username: query.id } });

            if (data.getUserByUsername) {
                return {
                    props: {
                        data: data.getUserByUsername
                    },
                };
            }

            return { props: {}, };
        } catch (error) {
            console.log(`--- error`, error.networkError.response)
            return { props: {}, };
        }
    }

    return { props: {}, };
}

export default Artist;