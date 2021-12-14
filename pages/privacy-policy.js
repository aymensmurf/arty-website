import { useState } from "react";
import Head from "next/head";
import Layout from "../Layout/Layout";

const Index = () => {
	const [contact, setContact] = useState(false);
	const [commingSoon, setCommingSoon] = useState(false);

	return (
		<>
			<Head>
				<title>ARTY - Privacy policy</title>
			</Head>

			<Layout
				isStaticNav
				contact={contact}
				commingSoon={commingSoon}
				openContact={() => {
					setCommingSoon(false);
					setContact(true);
				}}
				closeContact={() => {
					setContact(false);
				}}
				setCommingSoon={() => {
					setCommingSoon(true);
					setContact(true);
				}}
			>
				<section>
					<h1>Privacy Policy</h1>

					<p>
						ARTY is a Free app which SERVICE is provided at no cost and is
						intended to be used as it is.
					</p>
					<p>
						This privacy policy aims to help our users get a clearer view about
						the collection, use and disclosure of their personal information. So
						,if you choose to use our services, you have to agree to the
						collection and use of your information in relation to this policy.
					</p>
					<p>
						The Personal Information that we collect is used for providing and
						improving the Service. we will not use or share your information
						with anyone except as described in this Privacy Policy. The terms
						used in this Privacy Policy have the same meanings as in our Terms
						and Conditions, which is accessible at ARTY unless it is defined
						otherwise in this Privacy Policy.
					</p>

					<h2>We collect information in a few different ways</h2>
					<p>
						The app does use third party services that may collect information
						used to identify you.
					</p>
					<p>
						Link to privacy policy of third party service providers used by the
						app
					</p>
					<p>
						<a
							href="https://policies.google.com/privacy?hl=en-US"
							target="_blank"
							rel="noopener noreferrer"
						>
							Google play services.
						</a>
					</p>

					<p>
						1. When you give it to us or give us permission to obtain it When
						you sign up for or use ARTY, you voluntarily share certain
						information including your name, birthday date, email address,
						photos and any other information you give us. You can also choose to
						share your precise location using your device settings or through
						photos. We will still use your IP address, which is used to
						approximate your location, even if you don't choose to share your
						precise location. You will also have the option to share other
						information about yourself such as your Youtube, Soundcloud, Behance
						and Instagram accounts.
					</p>
					<p>
						If you are connected to Google or other third-party accounts to
						ARTY, we use information from those accounts to improve your ARTY
						experience. This depends on the privacy policies or settings for
						those accounts.
					</p>

					<p>
						2. We also get technical information when you use ARTY When you use
						a website, mobile application or other internet services, certain
						internet and electronic network activity information gets created
						and logged automatically. This is also true when you use ARTY. Here
						are some of the types of information we collect:
					</p>

					<ul
						style={{
							textAlign: "left",
							listStyleImage: "url(/img/circle.svg)",
						}}
					>
						<li>
							<span style={{ fontStyle: "italic" }}>Log data</span>: When you
							use ARTY, our servers record information (“log data”), including
							information that your browser automatically sends whenever you
							visit a website, or that your mobile app automatically sends when
							you’re using it. This log data includes your Internet Protocol
							address (which we use to infer your approximate location), the
							address of and activity on websites you visit that incorporate
							ARTY features (like the “Save” button—more details below),
							searches, browser type and settings, the date and time of your
							request, how you used ARTY, cookie data and device data.
						</li>
						<li>
							<span style={{ fontStyle: "italic" }}>Cookies</span> are files
							with a small amount of data that are commonly used as anonymous
							unique identifiers. These are sent to your browser from the
							websites that you visit and are stored on your device’s internal
							memory. This Service does not use these “cookies” explicitly.
							However, the app may use third party code and libraries that use
							“cookies” to collect information and improve their services. You
							have the option to either accept or refuse these cookies and know
							when a cookie is being sent to your device. If you choose to
							refuse our cookies, you may not be able to use some portions of
							this Service.
						</li>
						<li>
							<span style={{ fontStyle: "italic" }}>Device information</span>:
							In addition to log data, we collect information about the device
							you’re using ARTY on, including the type of device, operating
							system, settings, unique device identifiers and crash data that
							helps us understand when something breaks.
						</li>
						<li>
							<span style={{ fontStyle: "italic" }}>
								Clickstream data and inferences
							</span>
							: When you’re on ARTY, we use your activity—such as which arts you
							click on, workshops you create, and any text that you add in
							description—along with the information you provided when you first
							signed up to make inferences about you and your preferences. For
							example, if you create a workshop about dancing, we may infer that
							you are fond of this skill.
						</li>
					</ul>

					<h2>How and when we share information</h2>
					<p>
						Anyone can see the workshops you create and profile information you
						give us. We also make this public information available through what
						are called APIs (basically a technical way to share information
						quickly). We also share your information with:
					</p>
					<ul
						style={{
							textAlign: "left",
							listStyleImage: "url(/img/circle.svg)",
						}}
					>
						<li>
							Other services, at your direction, to enable you to sign up for or
							log in to ARTY, or when you decide to link your ARTY account to
							those services, like Google, or when you publish your content on
							ARTY to them. For example, if you choose to publish your workshop
							to Instagram or google, then information about that content will
							be shared with Instagram or google.
						</li>
						<li>
							Law enforcement agencies or government agencies. We only share
							information if we believe that disclosure is reasonably necessary
							to comply with a law, regulation or legal request; to protect the
							safety, rights, or property of the public, any person, or ARTY; or
							to detect, prevent, or otherwise address fraud, security or
							technical issues.
						</li>
					</ul>

					<h2>How long we keep your information</h2>

					<p>
						We keep your information only as long as we need it to provide ARTY
						to you and fulfil the purposes described in this policy. This is
						also the case for anyone that we share your information with and who
						carries out services on our behalf. When we no longer need to use
						your information and there is no need for us to keep it to comply
						with our legal or regulatory obligations, we’ll either remove it
						from our systems or depersonalise it so that we can't identify you.
					</p>

					<h2>Service Providers</h2>
					<p>
						we may employ third-party companies and individuals due to the
						following reasons:{" "}
					</p>
					<ul
						style={{
							textAlign: "left",
							listStyleImage: "url(/img/circle.svg)",
						}}
					>
						<li>To facilitate our Service.</li>
						<li>To provide the Service on our behalf.</li>
						<li>To perform Service-related services.</li>
						<li>To assist us in analyzing how our Service is used.</li>
					</ul>
					<p>
						we want to inform users of this Service that these third parties
						have access to your Personal Information. The reason is to perform
						the tasks assigned to them on our behalf. However, they are
						obligated not to disclose or use the information for any other
						purpose.
					</p>

					<h2>Security</h2>
					<p>
						we value your trust in providing us your Personal Information, thus
						we are doing our best to use commercially acceptable means of
						protection. But remember that no method of transmission over the
						internet, or method of electronic storage is 100% secure and
						reliable, and we cannot guarantee its absolute security.
					</p>
					<p>
						It is your responsibility to keep your passwords private and secure.
						We strongly recommend against sharing your logins and passwords with
						others. We take the protection of your information very seriously
						and employ measures through administrative, technical, and physical
						safeguards designed to protect information against loss, theft,
						misuse, unauthorised access, disclosure, alteration, and
						destruction. We encrypt all data in transit and at rest. We take
						reasonable precautions to ensure the integrity and security of our
						network and systems, but cannot guarantee these security measures
						will prevent third parties from obtaining information by illegal
						actions or attacks.
					</p>

					<h2>Links to Other Sites</h2>
					<p>
						This Service may contain links to other sites. If you click on a
						third-party link, you will be directed to that site. Note that these
						external sites are not operated by us. Therefore, we strongly advise
						you to review the Privacy Policy of these websites. We have no
						control over them and we can not assume any responsibility for their
						content, privacy policies, or practices of any third-party sites or
						services.
					</p>

					<h2>Children’s Privacy</h2>
					<p>
						These Services do not address anyone under the age of 13. we do not
						knowingly collect personally identifiable information from children
						under 13. In the case we discover that a child under 13 has provided
						us with personal information, we immediately delete this from our
						servers. If you are a parent or guardian and you are aware that your
						child has provided us with personal information, please contact us
						so that we will be able to do necessary actions.
					</p>

					<h2>Changes to This Privacy Policy</h2>
					<p>
						We may update our Privacy Policy from time to time. Thus, you are
						advised to review this page periodically for any changes. We will
						notify you of any changes by posting the new Privacy Policy on this
						page.
					</p>
					<p style={{ textDecoration: "underline" }}>
						This policy is effective as of 2021-12-14
					</p>

					<h2>Contact Us</h2>
					<p>
						If you have any questions or suggestions about our Privacy Policy,
						do not hesitate to contact us at:
					</p>
					<p style={{ textDecoration: "underline" }}>hi@arty.land</p>
				</section>
			</Layout>

			<style jsx>{`
				section {
					max-width: 820px;
					margin-right: auto;
					margin-left: auto;
					text-align: left;
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

				li {
					margin-top: 16px;
				}

				a {
					color: #416dff;
					text-decoration: underline;
				}

				@media only screen and (max-width: 424px) {
					h1 {
						font-size: 48px;
						line-height: 56px;
					}
				}
			`}</style>
		</>
	);
};

export default Index;
