import { getImageUri } from "../../utils/funcs";

const Header = ({ banner }) => {
	return (
		<>
			<section className="container">
				<img src={getImageUri(banner)} alt="BG" />
			</section>

			<style jsx>{`
				.container {
					width: 100%;
					height: 240px;
					border-radius: 25px;
					margin-top: 30px;
                    overflow: hidden;
				}

                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
					border-radius: 25px;
                }
			`}</style>
		</>
	);
};

export default Header;
