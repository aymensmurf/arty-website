import Layout from "../Layout/Layout";
import { AllArtists, Featured } from "../components/artist";

const Artists = () => {
    return (
        <Layout isStaticNav>
            <Featured />
            <AllArtists />
        </Layout>
    )
}

export default Artists;