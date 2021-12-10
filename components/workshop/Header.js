import { getImageUri } from "../../utils/funcs";

const Header = ({ title, banner }) => {
	return (
		<>
			<section className="container">
				<div className="header">
					<img src={getImageUri(banner)} alt={title} className="img" />
					<img src={getImageUri(banner)} alt={title} className="img-bg" />
				</div>
			</section>

			<style jsx>{`
				.header {
					width: 100%;
					height: 240px;
					border-radius: 25px;
					margin-top: 30px;
					overflow: hidden;
					position: relative;
				}

				.img-bg {
					width: 100%;
					height: 100%;
					object-fit: cover;
					filter: blur(20px);
					position: relative;
				}

				.img {
					width: 100%;
					height: 100%;
					object-fit: contain;
					position: absolute;
					z-index: 2;
				}
			`}</style>
		</>
	);
};

export default Header;
