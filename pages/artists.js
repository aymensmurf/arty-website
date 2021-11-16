import Layout from "../Layout/Layout";
import { AllArtists, Featured } from "../components/artists";
import Filters from "../components/widgets/Filters";

const Artists = () => {
    return (
        <Layout isStaticNav>
            <Featured />
            <Filters />
            <AllArtists />
        </Layout>
    )
}

export default Artists;