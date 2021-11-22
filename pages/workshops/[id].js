import React, { useState } from 'react';
import Layout from "../../Layout/Layout";
import { Details, Header, MoreWorkshops } from "../../components/workshop";
import { GET_WORKSHOP_BY_SLUG } from '../../graphql/queries/workshop';
import client from '../../graphql';

const Workshop = ({ data }) => {
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
                <>
                    <Header banner={data.banner} />
                    <Details
                        data={data}
                        setCommingSoon={() => { setCommingSoon(true); setContact(true); }}
                    />
                </>
            ) : (
                <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '300px 20px' }}>
                    <img src="/img/404.svg" alt="No workshops found" />
                </div>
            )}

            <MoreWorkshops />
        </Layout>
    )
}

export async function getServerSideProps({ query }) {
    if (query && query.id) {
        try {
            const { data } = await client.query({ query: GET_WORKSHOP_BY_SLUG, variables: { slug: query.id }, fetchPolicy: 'network-only' });

            if (data.getWorkshopBySlug) {
                return {
                    props: {
                        data: data.getWorkshopBySlug
                    },
                };
            }

            return { props: {}, };
        } catch (error) {
            console.error(`error`, error)
            return { props: {}, };
        }
    }

    return { props: {}, };
}
export default Workshop;