import { useEffect } from "react";

const Download = ({ setCommingSoon }) => {
	return (
		<>
			<a name='download'></a>

			<section>
				<div className='phones-section'>
					<div className='phones-container'>
						<img src='/img/img-download-1.svg' alt='Arty - app - welcome screen' id='img-download-1' />
						<img src='/img/img-download-2.svg' alt='Arty - app - home screen' id='img-download-2' />
					</div>
				</div>

				<div className='download-section'>
					<div className='download-container container'>
						<img src='/img/logo-pink.svg' alt='Arty' className='logo' />
						<p>
							Find all sort of Artists in ARTY and get to know, meet them and play music, dance, paint with them and
							much more.
						</p>

						<div className='icons-container'>
							<a
								href='https://play.google.com/store/apps/details?id=land.arty.app'
								target='_blank'
								rel='noopener noreferrer'>
								<img src='/img/google-play-white.svg' alt='Google play' />
							</a>
							<a>
								<img src='/img/app-store-white.svg' alt='App store' onClick={setCommingSoon} />
							</a>
						</div>
					</div>
				</div>
			</section>

			<style jsx>{`
				.phones-section {
					background: url("/img/bg-lava.png");
					min-height: 553px;
					background-repeat: no-repeat;
					background-position: center;
					background-size: cover;
					background-attachment: fixed;
					display: flex;
					flex-direction: column;
					justify-content: flex-end;
					position: relative;
					overflow: hidden;
				}

				.download-section {
					background-color: #fff;
					padding-top: 35px;
					padding-bottom: 100px;
					position: relative;
					z-index: 2;
				}

				.download-container {
					display: flex;
					flex-direction: column;
					align-items: center;
					text-align: center;
					padding: 0px 400px;
				}

				.logo {
					width: 163px;
					height: 74px;
					object-fit: contain;
				}

				p {
					font-weight: 300;
					font-size: 22px;
					line-height: 34px;
					margin-top: 15px;
				}

				.icons-container {
					display: flex;
					justify-content: center;
					align-items: center;
					flex-wrap: wrap;
					column-gap: 42px;
					row-gap: 10px;
					margin-top: 40px;
				}

				.icons-container img {
					width: 280px;
					height: 84px;
					object-fit: contain;
					cursor: pointer;
				}

				.phones-container {
					display: flex;
					justify-content: center;
					gap: 80px;
					width: 100%;
					position: absolute;
					bottom: 0px;
					z-index: 1;
				}

				.phones-container img {
					width: 451px;
					height: 871px;
					object-fit: contain;
				}

				#img-download-1 {
					width: 360px;
					height: 694px;
					object-fit: contain;
					position: absolute;
					bottom: -200px;
					right: calc(50%);
				}
				#img-download-2 {
					width: 360px;
					height: 694px;
					object-fit: contain;
					position: absolute;
					bottom: -280px;
					left: calc(50%);
				}

				@media only screen and (max-width: 1402px) {
					.download-container {
						padding: 0px 300px;
					}
				}

				@media only screen and (max-width: 1202px) {
					.download-container {
						padding: 0px 100px;
					}
				}

				@media only screen and (max-width: 770px) {
					.download-container {
						padding: 0px 30px;
					}

					#img-download-1 {
						right: calc(50% - 180px);
					}

					#img-download-2 {
						display: none;
					}
				}

				@media only screen and (max-width: 390px) {
					#img-download-1 {
						width: 300px;
						right: calc(50% - 150px);
					}
				}

				@supports (-webkit-touch-callout: none) {
					.phones-section {
						background-attachment: inherit;
					}
				}
			`}</style>
		</>
	);
};

export default Download;
