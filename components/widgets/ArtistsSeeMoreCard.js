const ArtistsSeeMoreCard = () => {
	return (
		<>
			<a href='/artists'>
				<div className='workshops-card'>
					<h1>Artists</h1>
					{/* <p>consectetur adipiscing elit. Cras ac ante quis est consequat tristique sed ac purus.</p> */}

					<div className='btn'>See more</div>
				</div>
			</a>

			<style jsx>{`
				.workshops-card {
					width: 100%;
					height: 100%;
					background: url("/img/bg-artist-card.png");
					background-repeat: no-repeat;
					background-position: center;
					background-size: cover;
					padding: 20px 33px;
					border-radius: 25px;
					cursor: pointer;
					transition: all 0.5s ease;
					display: flex;
					flex-direction: column;
					justify-content: center;
				}

				.workshops-card:hover {
					box-shadow: inset 0px 320px 0px 0 rgb(0, 0, 0, 0.2);
				}

				h1 {
					font-family: "Poppins";
					font-weight: 600;
					font-size: 62px;
					line-height: 72px;
					color: #fff;
				}

				p {
					font-family: "Poppins";
					font-weight: 300;
					font-size: 22px;
					line-height: 25px;
					color: #fff;
				}

				.btn {
					width: fit-content;
					border-radius: 25px;
					background: #fff;
					padding: 12px 40px;
					font-family: "Poppins";
					font-weight: 500;
					font-size: 18px;
					line-height: 28px;
					text-align: center;
					color: #ed1e46;
					margin-top: 40px;
				}
			`}</style>
		</>
	);
};

export default ArtistsSeeMoreCard;
