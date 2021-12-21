import { MEDIA_POSITIONS } from "../../utils/consts";
import { getImageUri } from "../../utils/funcs";

const Media = ({ media }) => {
	console.log(`MEDIA_POSITIONS.length`, MEDIA_POSITIONS.length);
	return (
		<>
			<section>
				<h1>Discover New Artists and artworks</h1>

				<div className='media-container'>
					{media.map(({ _id, url }, i) => (
						<img
							key={_id}
							src={getImageUri(url)}
							style={{
								width: MEDIA_POSITIONS[i].w,
								height: MEDIA_POSITIONS[i].h,
								top: `${MEDIA_POSITIONS[i].t}%`,
								left: `calc(${MEDIA_POSITIONS[i].l}% - ${(MEDIA_POSITIONS[i].w + 10) / 2}px)`,
							}}
						/>
					))}
				</div>

				<div style={{ display: "flex", justifyContent: "center" }}>
					<a href='/explore'>
						<div className='btn'>Explore Now</div>
					</a>
				</div>
			</section>

			<style jsx>{`
				section {
					margin-bottom: 76px;
				}

				h1 {
					font-family: "Poppins";
					font-weight: bold;
					font-size: 58px;
					line-height: 40px;
					text-align: center;
					color: #ed1e46;
				}

				.media-container {
					margin-top: 50px;
					position: relative;
					min-height: 450px;
					margin-bottom: 96px;
				}

				img {
					position: absolute;
					object-fit: cover;
					border-radius: 10px;
					box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.14);
					cursor: pointer;
					transition: all 300ms ease;
				}

				img:hover {
					transform: scale(1.05);
				}

				.btn {
					width: fit-content;
					border-radius: 38px;
					background: #ed1e46;
					padding: 25px 44px;
					font-family: "Poppins";
					font-weight: bold;
					font-size: 18px;
					text-align: center;
					color: #fff;
					transition: all 300ms ease;
					border: 1px solid #ed1e46;
				}

				.btn:hover {
					border: 1px solid #ed1e46;
					background: #fff;
					color: #ed1e46;
				}
			`}</style>
		</>
	);
};

export default Media;
