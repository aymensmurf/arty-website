import React, { useState } from 'react';
import Layout from "../../Layout/Layout";
import { LastAdded, AllWorkshops } from "../../components/workshops";

const Workshops = () => {
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
            <LastAdded />
            <AllWorkshops />
        </Layout>
    )
}

export default Workshops;