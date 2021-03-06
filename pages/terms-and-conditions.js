import { useState } from "react";
import Head from "next/head";

import Layout from "../Layout/Layout";

const Index = () => {
	const [contact, setContact] = useState(false);
	const [commingSoon, setCommingSoon] = useState(false);

	return (
		<>
			<Head>
				<title>ARTY - Terms & Conditions</title>
			</Head>

			<Layout
				isStaticNav
				contact={contact}
				openContact={() => {
					setCommingSoon(false);
					setContact(true);
				}}
				closeContact={() => {
					setContact(false);
				}}
				commingSoon={commingSoon}
				setCommingSoon={() => {
					setCommingSoon(true);
					setContact(true);
				}}
			>
				<section>
					<div className="container">
						<h1>Terms & Conditions</h1>
					</div>
					<div
						style={{ maxWidth: 820, marginRight: "auto", marginLeft: "auto" }}
					>
						<p>
							By downloading or using the app, these terms will automatically
							applied to you – you should make sure therefore that you read them
							carefully before using the app.
						</p>
						<p>
							You’re not allowed to copy, or modify the app itself, any part of
							the app, or our trademarks in any way. You’re not allowed to
							attempt to extract the source code of the app, and you also
							shouldn’t try to translate the app into other languages, or make
							derivative versions. The app itself, and all the trade marks,
							copyright, database rights and other intellectual property rights
							related to it, are only belong to ARTY.
						</p>
						<p>
							ARTY is committed to ensure that the app is as useful and
							efficient as possible. For that reason, we reserve the right to
							make changes to the app or to charge for its services, at any time
							and for any reason. We will never charge you for the app or its
							services without making it very clear to you what you’re exactly
							paying for.The ARTY app stores and processes the personal data
							that you have provided us with , in order to provide our Services.
						</p>
						<p>
							It’s your responsibility to keep your phone and access to the app
							secure. We therefore recommend that you do not jailbreak or root
							your phone, which is the process of removing software restrictions
							and limitations imposed by the official operating system of your
							device. It could make your phone vulnerable to
							malware/viruses/malicious programs, compromise your phone’s
							security features and it could mean that the ARTY app won’t work
							properly or at all.
						</p>
						<p>
							The app does use third party services that declare their own Terms
							and Conditions.
						</p>
						<p>
							Here is the link to Terms and Conditions of third party service
							providers used by the app
						</p>
						<p>
							<a
								href="https://play.google.com/intl/en-us_us/about/play-terms/index.html"
								target="_blank"
								rel="noopener noreferrer"
							>
								Google play services.
							</a>
						</p>
						<p>
							You should be aware that there are certain things that ARTY will
							not take responsibility for. Certain functions of the app will
							require the app to have an active internet connection. The
							connection can be Wi-Fi, or provided by your mobile network
							provider, but ARTY cannot take responsibility for the app not
							working at full functionality if you don’t have access to Wi-Fi,
							and you don’t have any of your data allowance left. If you’re
							using the app outside an area with Wi-Fi, you should remember that
							your terms of the agreement with your mobile network provider will
							still be applied. As a result, you may be charged by your mobile
							provider for the cost of data for the duration of the connection
							while accessing the app, or other third party charges. In using
							the app, you’re assuming responsibility for any such charges,
							including roaming data charges if you use the app outside your
							home territory (i.e. region or country) without turning off data
							roaming. If you are not the bill payer for the device on which
							you’re using the app, please be aware that we assume that you have
							received permission from the bill payer for using the app.
						</p>
						<p>
							Along the same lines, ARTY cannot always take responsibility for
							the way you use the app i.e. You need to make sure that your
							device stays charged – if it runs out of battery and you can’t
							turn it on to avail the Service, ARTY cannot assume
							responsibility. With respect to ARTY’s responsibility for your use
							of the app, when you’re using the app, it’s important to bear in
							mind that although we endeavour to ensure that it is updated and
							correct at all times, we do rely on third parties to provide
							information to us so that we can make it available to you. ARTY
							accepts no liability for any direct or indirect loss, your
							experience as a result of wholly relying on this functionality of
							the app.
						</p>
						<p>
							At some point, we may wish to update the app. The app is currently
							available on Android – the requirements for system (and for any
							additional systems we decide to extend the availability of the app
							to) may change, and you’ll need to download the updates if you
							want to keep using the app. ARTY does not promise that it will
							always update the app so that it is relevant to you and/or works
							with the Android version that you have installed on your device.
							However, you promise to always accept updates to the application
							when offered to you, We may also wish to stop providing the app,
							and may terminate use of it at any time without giving notice of
							termination to you.
						</p>
						<p>
							Unless we tell you otherwise, upon any termination, (a) the rights
							and licenses granted to you in these terms will end; (b) you must
							stop using the app, and (if needed) delete it from your device.
						</p>

						<h2>Changes to Terms and Conditions</h2>
						<p>
							We may update our Terms and Conditions from time to time. Thus,
							you are advised to review this page periodically for any possible
							changes. We will notify you of any changes by posting the new
							Terms and Conditions on this page.
						</p>
						<p style={{ textDecoration: "underline" }}>
							This Terms and Conditions is effective as of 2021-08-14
						</p>

						<h2>Contact Us</h2>
						<p>
							If you have any questions or suggestions about our Terms and
							Conditions, do not hesitate to contact us at:
						</p>
						<p style={{ textDecoration: "underline" }}>hi@arty.land</p>
					</div>
				</section>
			</Layout>

			<style jsx>{`
				section {
					text-align: center;
					padding: 100px 30px 200px;
				}

				h1 {
					font-size: 67px;
				}

				h2 {
					font-size: 30px;
					line-height: 36px;
					margin-top: 35px;
				}

				p {
					margin-top: 22px;
				}

				a {
					color: #416dff;
					text-decoration: underline;
				}

				@media only screen and (max-width: 424px) {
					h1 {
						font-size: 38px;
						line-height: 46px;
					}
				}
			`}</style>
		</>
	);
};

export default Index;
