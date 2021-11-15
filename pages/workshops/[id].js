import React, { useState } from 'react';

import Layout from "../../Layout/Layout";
import { Details, Header } from "../../components/workshop";

const Workshop = () => {
    return (
        <Layout isStaticNav>
            <Header />
            <Details />
        </Layout>
    )
}

export default Workshop;