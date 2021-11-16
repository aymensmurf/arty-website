import React, { useState } from 'react';
import Layout from "../../Layout/Layout";
import { Details, Header, MoreWorkshops } from "../../components/workshop";

const Workshop = () => {
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
            <Header />
            <Details
                setCommingSoon={() => { setCommingSoon(true); setContact(true); }}
            />
            <MoreWorkshops />
        </Layout>
    )
}

export default Workshop;