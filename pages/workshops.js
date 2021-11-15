import Layout from "../Layout/Layout";
import { LastAdded, AllWorkshops } from "../components/workshops";

const Workshops = () => {
    return (
        <>
            <Layout isStaticNav>
                <LastAdded />
                <AllWorkshops />
            </Layout>
        </>
    )
}

export default Workshops;