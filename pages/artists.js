import { useState } from 'react'
import Layout from "../Layout/Layout";
import { AllArtists, Featured } from "../components/artists";
import Filters from "../components/widgets/Filters";

const Artists = () => {
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
            <Featured />
            <Filters />
            <AllArtists />
        </Layout>
    )
}

export default Artists;