import React, { useState } from 'react';
import Layout from "../../Layout/Layout";
import { Details, Header, MoreWorkshops } from "../../components/workshop";

const Workshop = () => {
    return (
        <Layout isStaticNav>
            <Header />
            <Details />
            <MoreWorkshops />
        </Layout>
    )
}

export default Workshop;