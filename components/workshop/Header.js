import { getImageUri } from "../../utils/funcs";

const Header = ({ banner }) => {
    return (
        <>
            <section className="container">
                <div className="bg"></div>
            </section>

            <style jsx>{`
                .bg {
                    width: 100%;
                    height: 240px;
                    background-repeat: no-repeat;
                    background-size: cover;
                    background-position: center;
                    border-radius: 25px;
                    margin-top: 30px;
                    background: url(${getImageUri(banner)});
                }
            `}</style>
        </>
    )
}

export default Header;