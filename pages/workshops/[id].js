import React, { useState } from 'react';
import Head from 'next/head';
import Layout from "../../Layout/Layout";
import { Details, Header, MoreWorkshops } from "../../components/workshop";
import { GET_WORKSHOP_BY_SLUG } from '../../graphql/queries/workshop';
import client from '../../graphql';

const Workshop = ({ data }) => {
    const [contact, setContact] = useState(false);
    const [commingSoon, setCommingSoon] = useState(false);

    return (
        <>
            <Head>
                <meta name="title" content={data.title ? data.title : "Arty"} />
                <meta name="description" content={data.description ? data.description : "Connect, aspire and inspire"} />

                <meta property="og:title" content={data.title ? data.title : "Arty"} />
                <meta property="og:description" content={data.description ? data.description : "Connect, aspire and inspire"} />
                <meta property="og:image" content={data.banner ? data.banner : "/img/singers.svg"} />
                <meta property="og:type" content="website" />

                <meta property="twitter:title" content={data.title ? data.title : "Arty"} />
                <meta property="twitter:description" content={data.description ? data.description : "Connect, aspire and inspire"} />
                <meta property="twitter:image" content={data.banner ? data.banner : "/img/singers.svg"} />
                <meta property="twitter:card" content="summary_large_image" />
            </Head>

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
        </>
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