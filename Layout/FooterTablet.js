import React from "react";

const FooterTablet = () => {
	return (
		<>
			<footer>
				<img src='/img/logo-white.svg' alt='Jam' style={{ width: 200, height: 87 }} />

				<div style={{ marginTop: 40, display: "flex", flexDirection: "column", justifyContent: "center", gap: 25 }}>
					<a href='/privacy-policy'>Privacy policy</a>
					<a href='/terms-and-conditions'>Terms & conditions</a>
					<a href='/eula'>Terms of use</a>
				</div>

				<div className='social-media'>
					<a
						href='https://www.facebook.com/the.arty.land'
						target='_blank'
						rel='noopener noreferrer'
						className='header-social-box'>
						<i className='fab fa-facebook-f'></i>
					</a>
					<a
						href='https://www.instagram.com/the.arty.land'
						target='_blank'
						rel='noopener noreferrer'
						className='header-social-box'>
						<i className='fab fa-instagram'></i>
					</a>
					<a
						href='https://www.linkedin.com/company/the-arty-land'
						target='_blank'
						rel='noopener noreferrer'
						className='header-social-box'>
						<i className='fab fa-linkedin'></i>
					</a>
					<a
						href='https://twitter.com/the_arty_land'
						target='_blank'
						rel='noopener noreferrer'
						className='header-social-box'>
						<i className='fab fa-twitter'></i>
					</a>
					<a
						href='https://www.youtube.com/channel/UC7am7GDTYOBjF5-eP6-vsaw'
						target='_blank'
						rel='noopener noreferrer'
						className='header-social-box'>
						<i className='fab fa-youtube' style={{ marginRight: 0 }}></i>
					</a>
				</div>

				<p style={{ marginTop: 44 }}>© All rights reserved for ARTY 2020</p>

				<div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: 30 }}>
					<p>Made with </p>
					<img src='/img/heart.svg' alt='Love' style={{ marginRight: 5, marginLeft: 5 }} />
				</div>
			</footer>

			<style jsx>{`
				footer {
					background-color: #151515;
					padding: 70px 30px;
					text-align: center;
				}

				p,
				a {
					color: #fff;
				}

				a {
					text-decoration: underline;
				}

				.social-media {
					margin-top: 55px;
				}

				.social-media i {
					color: #fff;
					font-size: 40px;
					margin-right: 32px;
				}

				@media only screen and (max-width: 364px) {
					.social-media {
						margin-top: 40px;
					}

					.social-media i {
						font-size: 30px;
						margin-right: 30px;
					}
				}
			`}</style>
		</>
	);
};

export default FooterTablet;
