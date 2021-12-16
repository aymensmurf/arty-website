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
				}}>
				<section>
					<h1>Privacy Policy</h1>
					<p>Last updated: December 16, 2021</p>

					<p>
						Thank you for choosing to be part of our community at InnovAnt ("Company," "we," "us," or "our"). We are
						committed to protecting your personal information and your right to privacy. If you have any questions or
						concerns about this privacy notice or our practices with regard to your personal information, please contact
						us at contact@innovant.studio.
					</p>

					<p>This privacy notice describes how we might use your information if you:</p>

					<ul>
						<li>Download and use our mobile application — ARTY - Where everything is music</li>
						<li>Engage with us in other related ways ― including any sales, marketing, or events</li>
					</ul>

					<p>In this privacy notice, if we refer to:</p>

					<ul>
						<li>
							"App," we are referring to any application of ours that references or links to this policy, including any
							listed above
						</li>
						<li>
							"Services," we are referring to our App, and other related services, including any sales, marketing, or
							events
						</li>
					</ul>

					<p>
						The purpose of this privacy notice is to explain to you in the clearest way possible what information we
						collect, how we use it, and what rights you have in relation to it. If there are any terms in this privacy
						notice that you do not agree with, please discontinue use of our Services immediately.
					</p>

					<p>
						Please read this privacy notice carefully, as it will help you understand what we do with the information
						that we collect.
					</p>

					<h2>1. WHAT INFORMATION DO WE COLLECT?</h2>
					<h3>Personal information you disclose to us</h3>

					<p>In Short: We collect personal information that you provide to us.</p>
					<p>We collect personal information that you voluntarily provide to us when you register on the App.</p>
					<p>
						The personal information that we collect depends on the context of your interactions with us and the App,
						the choices you make and the products and features you use. The personal information we collect may include
						the following:
					</p>

					<ul>
						<li>
							Personal Information Provided by You. We collect names; email addresses; usernames; passwords; contact
							preferences; contact or authentication data; skills; location; social media accounts; and other similar
							information.
						</li>
						<li>
							Social Media Login Data. We may provide you with the option to register with us using your existing social
							media account details, like your Google. If you choose to register in this way, we will collect the
							information described in the section called "HOW DO WE HANDLE YOUR SOCIAL LOGINS?" below.
						</li>
					</ul>
					<p>
						All personal information that you provide to us must be true, complete and accurate, and you must notify us
						of any changes to such personal information.
					</p>

					<h3>Information automatically collected</h3>
					<p>
						In Short: Some information — such as your Internet Protocol (IP) address and/or browser and device
						characteristics — is collected automatically when you visit our App.
					</p>
					<p>
						We automatically collect certain information when you visit, use or navigate the App. This information does
						not reveal your specific identity (like your name or contact information) but may include device and usage
						information, such as your IP address, browser and device characteristics, operating system, language
						preferences, referring URLs, device name, country, location, information about how and when you use our App
						and other technical information. This information is primarily needed to maintain the security and operation
						of our App, and for our internal analytics and reporting purposes.
					</p>

					<p>Like many businesses, we also collect information through cookies and similar technologies.</p>

					<p>The information we collect includes:</p>

					<ul>
						<li>
							Log and Usage Data. Log and usage data is service-related, diagnostic, usage and performance information
							our servers automatically collect when you access or use our App and which we record in log files.
							Depending on how you interact with us, this log data may include your IP address, device information,
							browser type and settings and information about your activity in the App (such as the date/time stamps
							associated with your usage, pages and files viewed, searches and other actions you take such as which
							features you use), device event information (such as system activity, error reports (sometimes called
							'crash dumps') and hardware settings).
						</li>
						<li>
							Device Data. We collect device data such as information about your computer, phone, tablet or other device
							you use to access the App. Depending on the device used, this device data may include information such as
							your IP address (or proxy server), device and application identification numbers, location, browser type,
							hardware model Internet service provider and/or mobile carrier, operating system and system configuration
							information.
						</li>
						<li>
							Location Data. We collect location data such as information about your device's location, which can be
							either precise or imprecise. How much information we collect depends on the type and settings of the
							device you use to access the App. For example, we may use GPS and other technologies to collect
							geolocation data that tells us your current location (based on your IP address). You can opt out of
							allowing us to collect this information either by refusing access to the information or by disabling your
							Location setting on your device. Note however, if you choose to opt out, you may not be able to use
							certain aspects of the Services.
						</li>
					</ul>

					<h3>Information collected through our App</h3>

					<p>
						In Short: We collect information regarding your geolocation, mobile device, push notifications, when you use
						our App.
					</p>

					<p>If you use our App, we also collect the following information:</p>

					<ul>
						<li>
							Geolocation Information. We may request access or permission to and track location-based information from
							your mobile device, either continuously or while you are using our App, to provide certain locationbased
							services. If you wish to change our access or permissions, you may do so in your device's settings.
						</li>
						<li>
							Mobile Device Data. We automatically collect device information (such as your mobile device ID, model and
							manufacturer), operating system, version information and system configuration information, device and
							application identification numbers, browser type and version, hardware model, Internet service provider
							and/or mobile carrier, and Internet Protocol (IP) address (or proxy server). If you are using our App, we
							may also collect information about the phone network associated with your mobile device, your mobile
							device’s operating system or platform, the type of mobile device you use, your mobile device’s unique
							device ID and information about the features of our App you accessed.
						</li>
						<li>
							Push Notifications. We may request to send you push notifications regarding your account or certain
							features of the App. If you wish to optout from receiving these types of communications, you may turn them
							off in your device's settings.
						</li>
					</ul>

					<p>
						This information is primarily needed to maintain the security and operation of our App, for troubleshooting
						and for our internal analytics and reporting purposes.
					</p>

					<h2>2. HOW DO WE USE YOUR INFORMATION?</h2>
					<p>
						In Short: We process your information for purposes based on legitimate business interests, the fulfillment
						of our contract with you, compliance with our legal obligations, and/or your consent.
					</p>

					<p>
						We use personal information collected via our App for a variety of business purposes described below. We
						process your personal information for these purposes in reliance on our legitimate business interests, in
						order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal
						obligations. We indicate the specific processing grounds we rely on next to each purpose listed below.
					</p>

					<p>We use the information we collect or receive:</p>

					<ul>
						<li>
							To facilitate account creation and logon process. If you choose to link your account with us to a
							third-party account (such as your Google or Facebook account), we use the information you allowed us to
							collect from those third parties to facilitate account creation and logon process for the performance of
							the contract. See the section below headed "HOW DO WE HANDLE YOUR SOCIAL LOGINS?" for further information.
						</li>
						<li>
							To post testimonials. We post testimonials on our App that may contain personal information. Prior to
							posting a testimonial, we will obtain your consent to use your name and the content of the testimonial. If
							you wish to update, or delete your testimonial, please contact us at hi@arty.land and be sure to include
							your name, testimonial location, and contact information.
						</li>
						<li>
							Request feedback. We may use your information to request feedback and to contact you about your use of our
							App.
						</li>
						<li>
							To enable user-to-user communications. We may use your information in order to enable user-to-user
							communications with each user's consent.
						</li>
						<li>
							To manage user accounts. We may use your information for the purposes of managing our account and keeping
							it in working order
						</li>
						<li>
							To send administrative information to you. We may use your personal information to send you product,
							service and new feature information and/or information about changes to our terms, conditions, and
							policies.
						</li>
						<li>
							To protect our Services. We may use your information as part of our efforts to keep our App safe and
							secure (for example, for fraud monitoring and prevention).
						</li>
						<li>
							To enforce our terms, conditions and policies for business purposes, to comply with legal and regulatory
							requirements or in connection with our contract.
						</li>
						<li>
							To respond to legal requests and prevent harm. If we receive a subpoena or other legal request, we may
							need to inspect the data we hold to determine how to respond.
						</li>
					</ul>

					<h2>3. WILL YOUR INFORMATION BE SHARED WITH ANYONE?</h2>
					<p>
						In Short: We only share information with your consent, to comply with laws, to provide you with services, to
						protect your rights, or to fulfill business obligations
					</p>

					<p>We may process or share your data that we hold based on the following legal basis:</p>

					<ul>
						<li>
							Consent: We may process your data if you have given us specific consent to use your personal information
							for a specific purpose.
						</li>
						<li>
							Legitimate Interests: We may process your data when it is reasonably necessary to achieve our legitimate
							business interests.
						</li>
						<li>
							Performance of a Contract: Where we have entered into a contract with you, we may process your personal
							information to fulfill the terms of our contract.
						</li>
						<li>
							Legal Obligations: We may disclose your information where we are legally required to do so in order to
							comply with applicable law, governmental requests, a judicial proceeding, court order, or legal process,
							such as in response to a court order or a subpoena (including in response to public authorities to meet
							national security or law enforcement requirements).
						</li>
						<li>
							Vital Interests: We may disclose your information where we believe it is necessary to investigate,
							prevent, or take action regarding potential violations of our policies, suspected fraud, situations
							involving potential threats to the safety of any person and illegal activities, or as evidence in
							litigation in which we are involved.
						</li>
					</ul>

					<p>
						More specifically, we may need to process your data or share your personal information in the following
						situations:
					</p>

					<ul>
						<li>
							Business Transfers. We may share or transfer your information in connection with, or during negotiations
							of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to
							another company.
						</li>
						<li>
							Google Maps Platform APIs. We may share your information with certain Google Maps Platform APIs (e.g.,
							Google Maps API, Place API). To find out more about Google’s Privacy Policy, please refer to this{" "}
							<a href='https://policies.google.com/privacy' target='_blank' rel='noreferrer noopener'>
								link
							</a>
							.
						</li>
						<li>
							Vendors, Consultants and Other Third-Party Service Providers. We may share your data with third-party
							vendors, service providers, contractors or agents who perform services for us or on our behalf and require
							access to such information to do that work. Examples include: payment processing, data analysis, email
							delivery, hosting services, customer service and marketing efforts. We may allow selected third parties to
							use tracking technology on the App, which will enable them to collect data on our behalf about how you
							interact with our App over time. This information may be used to, among other things, analyze and track
							data, determine the popularity of certain content, pages or features, and better understand online
							activity. Unless described in this notice, we do not share, sell, rent or trade any of your information
							with third parties for their promotional purposes. We have contracts in place with our data processors,
							which are designed to help safeguard your personal information. This means that they cannot do anything
							with your personal information unless we have instructed them to do it. They will also not share your
							personal information with any organization apart from us. They also commit to protect the data they hold
							on our behalf and to retain it for the period we instruct.
						</li>
						<li>
							Affiliates. We may share your information with our affiliates, in which case we will require those
							affiliates to honor this privacy notice. Affiliates include our parent company and any subsidiaries, joint
							venture partners or other companies that we control or that are under common control with us.
						</li>
						<li>
							Other Users. When you share personal information (for example, by posting comments, contributions or other
							content to the App) or otherwise interact with public areas of the App, such personal information may be
							viewed by all users and may be publicly made available outside the App in perpetuity. If you interact with
							other users of our App and register for our App through a social network (such as Google or Facebook),
							your contacts on the social network will see your name, profile photo, and descriptions of your activity.
							Similarly, other users will be able to view descriptions of your activity, communicate with you within our
							App, and view your profile.
						</li>
					</ul>

					<h2>4. WHO WILL YOUR INFORMATION BE SHARED WITH?</h2>
					<p>In Short: We only share information with the following categories of third parties.</p>

					<p>
						We only share and disclose your information with the following categories of third parties. If we have
						processed your data based on your consent and you wish to revoke your consent, please contact us using the
						contact details provided in the section below titled "HOW CAN YOU CONTACT US ABOUT THIS NOTICE?".
					</p>

					<ul>
						<li>Cloud Computing Services</li>
						<li>Data Analytics Services</li>
						<li>Data Storage Service Providers</li>
						<li>User Account Registration & Authentication Services</li>
						<li>Testing Tools</li>
						<li>Website Hosting Service Providers</li>
					</ul>

					<h2>5. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</h2>
					<p>In Short: We may use cookies and other tracking technologies to collect and store your information</p>

					<p>
						We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store
						information. Specific information about how we use such technologies and how you can refuse certain cookies
						is set out in our Cookie Notice
					</p>

					<h2>6. HOW DO WE HANDLE YOUR SOCIAL LOGINS?</h2>

					<p>
						In Short: If you choose to register or log in to our services using a social media account, we may have
						access to certain information about you.
					</p>

					<p>
						Our App offers you the ability to register and login using your third-party social media account details
						(like your Google or Facebook logins). Where you choose to do this, we will receive certain profile
						information about you from your social media provider. The profile information we receive may vary depending
						on the social media provider concerned, but will often include your name, email address, friends list,
						profile picture as well as other information you choose to make public on such social media platform.
					</p>

					<p>
						We will use the information we receive only for the purposes that are described in this privacy notice or
						that are otherwise made clear to you on the relevant App. Please note that we do not control, and are not
						responsible for, other uses of your personal information by your third-party social media provider. We
						recommend that you review their privacy notice to understand how they collect, use and share your personal
						information, and how you can set your privacy preferences on their sites and apps.
					</p>

					<h2>7. HOW LONG DO WE KEEP YOUR INFORMATION?</h2>
					<p>
						In Short: We keep your information for as long as necessary to fulfill the purposes outlined in this privacy
						notice unless otherwise required by law
					</p>

					<p>
						We will only keep your personal information for as long as it is necessary for the purposes set out in this
						privacy notice, unless a longer retention period is required or permitted by law (such as tax, accounting or
						other legal requirements). No purpose in this notice will require us keeping your personal information for
						longer than three (3) months past the termination of the user's account.
					</p>

					<p>
						When we have no ongoing legitimate business need to process your personal information, we will either delete
						or anonymize such information, or, if this is not possible (for example, because your personal information
						has been stored in backup archives), then we will securely store your personal information and isolate it
						from any further processing until deletion is possible.
					</p>

					<h2>8. HOW DO WE KEEP YOUR INFORMATION SAFE?</h2>
					<p>
						In Short: We aim to protect your personal information through a system of organizational and technical
						security measures
					</p>

					<p>
						We have implemented appropriate technical and organizational security measures designed to protect the
						security of any personal information we process. However, despite our safeguards and efforts to secure your
						information, no electronic transmission over the Internet or information storage technology can be
						guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other
						unauthorized third parties will not be able to defeat our security, and improperly collect, access, steal,
						or modify your information. Although we will do our best to protect your personal information, transmission
						of personal information to and from our App is at your own risk. You should only access the App within a
						secure environment.
					</p>

					<h2>9. DO WE COLLECT INFORMATION FROM MINORS?</h2>
					<p>In Short: We do not knowingly collect data from or market to children under 18 years of age.</p>

					<p>
						We do not knowingly solicit data from or market to children under 18 years of age. By using the App, you
						represent that you are at least 18 or that you are the parent or guardian of such a minor and consent to
						such minor dependent’s use of the App. If we learn that personal information from users less than 18 years
						of age has been collected, we will deactivate the account and take reasonable measures to promptly delete
						such data from our records. If you become aware of any data we may have collected from children under age
						18, please contact us at hi@arty.land.
					</p>

					<h2>10. WHAT ARE YOUR PRIVACY RIGHTS?</h2>
					<p>
						In Short: In some regions, such as the European Economic Area (EEA) and United Kingdom (UK), you have rights
						that allow you greater access to and control over your personal information. You may review, change, or
						terminate your account at any time.
					</p>

					<p>
						In some regions (like the EEA and UK), you have certain rights under applicable data protection laws. These
						may include the right (i) to request access and obtain a copy of your personal information, (ii) to request
						rectification or erasure; (iii) to restrict the processing of your personal information; and (iv) if
						applicable, to data portability. In certain circumstances, you may also have the right to object to the
						processing of your personal information. To make such a request, please use the contact details provided
						below. We will consider and act upon any request in accordance with applicable data protection laws.
					</p>

					<p>
						If we are relying on your consent to process your personal information, you have the right to withdraw your
						consent at any time. Please note however that this will not affect the lawfulness of the processing before
						its withdrawal, nor will it affect the processing of your personal information conducted in reliance on
						lawful processing grounds other than consent.
					</p>

					<p>
						If you are a resident in the EEA or UK and you believe we are unlawfully processing your personal
						information, you also have the right to complain to your local data protection supervisory authority. You
						can find their contact details here:{" "}
						<a
							href='https://ec.europa.eu/justice/dataprotection/bodies/authorities/index_en.htm'
							target='_blank'
							rel='noreferrer noopener'>
							https://ec.europa.eu/justice/dataprotection/bodies/authorities/index_en.htm
						</a>
						.
					</p>

					<p>
						If you are a resident in Switzerland, the contact details for the data protection authorities are available
						here:{" "}
						<a href='https://www.edoeb.admin.ch/edoeb/en/home.html' target='_blank' rel='noreferrer noopener'>
							https://www.edoeb.admin.ch/edoeb/en/home.html
						</a>
						.
					</p>

					<p>If you have questions or comments about your privacy rights, you may email us at hi@arty.land.</p>

					<h3>Account Information</h3>
					<p>
						If you would at any time like to review or change the information in your account or terminate your account,
						you can:
					</p>
					<ul>
						<li>Log in to your account settings and update your user account.</li>
						<li>Contact us using the contact information provided</li>
					</ul>

					<p>
						Upon your request to terminate your account, we will deactivate or delete your account and information from
						our active databases. However, we may retain some information in our files to prevent fraud, troubleshoot
						problems, assist with any investigations, enforce our Terms of Use and/or comply with applicable legal
						requirements.
					</p>

					<p>
						Cookies and similar technologies: Most Web browsers are set to accept cookies by default. If you prefer, you
						can usually choose to set your browser to remove cookies and to reject cookies. If you choose to remove
						cookies or reject cookies, this could affect certain features or services of our App. To opt-out of
						interest-based advertising by advertisers on our App visit{" "}
						<a href='http://www.aboutads.info/choices/' target='_blank' rel='noreferrer noopener'>
							http://www.aboutads.info/choices/
						</a>
						.
					</p>

					<p>
						Opting out of email marketing: You can unsubscribe from our marketing email list at any time by clicking on
						the unsubscribe link in the emails that we send or by contacting us using the details provided below. You
						will then be removed from the marketing email list — however, we may still communicate with you, for example
						to send you service-related emails that are necessary for the administration and use of your account, to
						respond to service requests, or for other non-marketing purposes. To otherwise opt-out, you may:
					</p>

					<ul>
						<li>Access your account settings and update your preference</li>
						<li>Contact us using the contact information provided.</li>
					</ul>

					<h2>11. CONTROLS FOR DO-NOT-TRACK FEATURES</h2>

					<p>
						Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track ("DNT")
						feature or setting you can activate to signal your privacy preference not to have data about your online
						browsing activities monitored and collected. At this stage no uniform technology standard for recognizing
						and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals
						or any other mechanism that automatically communicates your choice not to be tracked online. If a standard
						for online tracking is adopted that we must follow in the future, we will inform you about that practice in
						a revised version of this privacy notice.
					</p>

					<h2>12. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</h2>
					<p>
						In Short: Yes, if you are a resident of California, you are granted specific rights regarding access to your
						personal information.
					</p>

					<p>
						California Civil Code Section 1798.83, also known as the "Shine The Light" law, permits our users who are
						California residents to request and obtain from us, once a year and free of charge, information about
						categories of personal information (if any) we disclosed to third parties for direct marketing purposes and
						the names and addresses of all third parties with which we shared personal information in the immediately
						preceding calendar year. If you are a California resident and would like to make such a request, please
						submit your request in writing to us using the contact information provided below.
					</p>

					<p>
						If you are under 18 years of age, reside in California, and have a registered account with the App, you have
						the right to request removal of unwanted data that you publicly post on the App. To request removal of such
						data, please contact us using the contact information provided below, and include the email address
						associated with your account and a statement that you reside in California. We will make sure the data is
						not publicly displayed on the App, but please be aware that the data may not be completely or
						comprehensively removed from all our systems (e.g. backups, etc.).
					</p>

					<h3>CCPA Privacy Notice</h3>
					<p>The California Code of Regulations defines a "resident" as:</p>
					<ul>
						<li>
							every individual who is in the State of California for other than a temporary or transitory purpose and
						</li>
						<li>
							every individual who is domiciled in the State of California who is outside the State of California for a
							temporary or transitory purpose
						</li>
					</ul>

					<p>All other individuals are defined as "non-residents."</p>

					<p>
						If this definition of "resident" applies to you, we must adhere to certain rights and obligations regarding
						your personal information.
					</p>

					<h3>What categories of personal information do we collect?</h3>
					<p>We have collected the following categories of personal information in the past twelve (12) months:</p>

					<table>
						<thead>
							<tr>
								<td>Category</td>
								<td>Examples</td>
								<td>Collected</td>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>A. Identifiers</td>
								<td>
									Contact details, such as real name, alias, postal address, telephone or mobile contact number, unique
									personal identifier, online identifier, Internet Protocol address, email address and account name
								</td>
								<td>YES</td>
							</tr>

							<tr>
								<td>B. Personal information categories listed in the California Customer Records statute</td>
								<td>Name, contact information, education, employment, employment history and financial information</td>
								<td>YES</td>
							</tr>
							<tr>
								<td>C. Protected classification characteristics under California or federal law</td>
								<td>Gender and date of birth </td>
								<td>NO</td>
							</tr>
							<tr>
								<td>D. Commercial information</td>
								<td>Transaction information, purchase history, financial details and payment information</td>
								<td>NO</td>
							</tr>
							<tr>
								<td>E. Biometric information</td>
								<td>Fingerprints and voiceprints </td>
								<td>NO</td>
							</tr>
							<tr>
								<td>F. Internet or other similar network activity</td>
								<td>
									Browsing history, search history, online behavior, interest data, and interactions with our and other
									websites, applications, systems and advertisements
								</td>
								<td>NO</td>
							</tr>
							<tr>
								<td>G. Geolocation data </td>
								<td>Device location </td>
								<td>NO</td>
							</tr>
							<tr>
								<td>H. Audio, electronic, visual, thermal, olfactory, or similar information</td>
								<td>Images and audio, video or call recordings created in connection with our business activities</td>
								<td>NO</td>
							</tr>
							<tr>
								<td>I. Professional or employment-related information</td>
								<td>
									Business contact details in order to provide you our services at a business level, job title as well
									as work history and professional qualifications if you apply for a job with us
								</td>
								<td>NO</td>
							</tr>
							<tr>
								<td>J. Education Information </td>
								<td>Student records and directory information</td>
								<td>NO</td>
							</tr>
							<tr>
								<td>K. Inferences drawn from other personal information</td>
								<td>
									Inferences drawn from any of the collected personal information listed above to create a profile or
									summary about, for example, an individual’s preferences and characteristics
								</td>
								<td>YES</td>
							</tr>
						</tbody>
					</table>

					<p>
						We may also collect other personal information outside of these categories instances where you interact with
						us in-person, online, or by phone or mail in the context of:
					</p>

					<ul>
						<li>Receiving help through our customer support channels;</li>
						<li>Participation in customer surveys or contests; and</li>
						<li>Facilitation in the delivery of our Services and to respond to your inquiries.</li>
					</ul>

					<h3>How do we use and share your personal information?</h3>
					<p>More information about our data collection and sharing practices can be found in this privacy notice.</p>

					<p>
						You may contact us by email at hi@arty.land, or by referring to the contact details at the bottom of this
						document.
					</p>

					<p>
						If you are using an authorized agent to exercise your right to opt-out we may deny a request if the
						authorized agent does not submit proof that they have been validly authorized to act on your behalf.
					</p>

					<h3>Will your information be shared with anyone else?</h3>
					<p>
						We may disclose your personal information with our service providers pursuant to a written contract between
						us and each service provider. Each service provider is a for-profit entity that processes the information on
						our behalf
					</p>

					<p>
						We may use your personal information for our own business purposes, such as for undertaking internal
						research for technological development and demonstration. This is not considered to be "selling" of your
						personal data.
					</p>

					<p>
						InnovAnt may has disclosed the following categories of personal information to third parties for a business
						or commercial purpose in the preceding twelve (12) months:
					</p>

					<ul>
						<li>
							Category A. Identifiers, such as contact details, like your real name, alias, postal address, unique
							personal identifier, online identifier, Internet Protocol address, email address and account name.
						</li>
						<li>
							Category B. Personal information, as defined in the California Customer Records law, such as your name,
							and contact information.
						</li>
					</ul>

					<p>
						The categories of third parties to whom we disclosed personal information for a business or commercial
						purpose can be found under "WHO WILL YOUR INFORMATION BE SHARED WITH?".
					</p>

					<p>
						InnovAnt has not sold any personal information to third parties for a business or commercial purpose in the
						preceding twelve (12) months. InnovAnt will not sell personal information in the future belonging to website
						visitors, users and other consumers.
					</p>

					<h3>Your rights with respect to your personal data</h3>
					<p style={{ textDecoration: "underline" }}>Right to request deletion of the data - Request to delete</p>

					<p>
						You can ask for the deletion of your personal information. If you ask us to delete your personal
						information, we will respect your request and delete your personal information, subject to certain
						exceptions provided by law, such as (but not limited to) the exercise by another consumer of his or her
						right to free speech, our compliance requirements resulting from a legal obligation or any processing that
						may be required to protect against illegal activities.
					</p>

					<p style={{ textDecoration: "underline" }}>Right to be informed - Request to know</p>
					<p>Depending on the circumstances, you have a right to know:</p>
					<ul>
						<li>whether we collect and use your personal information;</li>
						<li>the categories of personal information that we collect;</li>
						<li>the purposes for which the collected personal information is used;</li>
						<li>whether we sell your personal information to third parties;</li>
						<li>the categories of personal information that we sold or disclosed for a business purpose;</li>
						<li>
							the categories of third parties to whom the personal information was sold or disclosed for a business
							purpose; and
						</li>
						<li>the business or commercial purpose for collecting or selling personal information.</li>
					</ul>

					<p>
						In accordance with applicable law, we are not obligated to provide or delete consumer information that is
						de-identified in response to a consumer request or to re-identify individual data to verify a consumer
						request.
					</p>

					<p style={{ textDecoration: "underline" }}>
						Right to Non-Discrimination for the Exercise of a Consumer’s Privacy Rights
					</p>

					<p>We will not discriminate against you if you exercise your privacy rights.</p>

					<p style={{ textDecoration: "underline" }}>Verification process</p>

					<p>
						Upon receiving your request, we will need to verify your identity to determine you are the same person about
						whom we have the information in our system. These verification efforts require us to ask you to provide
						information so that we can match it with information you have previously provided us. For instance,
						depending on the type of request you submit, we may ask you to provide certain information so that we can
						match the information you provide with the information we already have on file, or we may contact you
						through a communication method (e.g. phone or email) that you have previously provided to us. We may also
						use other verification methods as the circumstances dictate.
					</p>

					<p>
						We will only use personal information provided in your request to verify your identity or authority to make
						the request. To the extent possible, we will avoid requesting additional information from you for the
						purposes of verification. If, however, we cannot verify your identity from the information already
						maintained by us, we may request that you provide additional information for the purposes of verifying your
						identity, and for security or fraud-prevention purposes. We will delete such additionally provided
						information as soon as we finish verifying you.
					</p>

					<p style={{ textDecoration: "underline" }}>Other privacy rights</p>

					<ul>
						<li>you may object to the processing of your personal data.</li>
						<li>
							you may request correction of your personal data if it is incorrect or no longer relevant, or ask to
							restrict the processing of the data.
						</li>
						<li>
							you can designate an authorized agent to make a request under the CCPA on your behalf. We may deny a
							request from an authorized agent that does not submit proof that they have been validly authorized to act
							on your behalf in accordance with the CCPA.
						</li>
						<li>
							you may request to opt-out from future selling of your personal information to third parties. Upon
							receiving a request to opt-out, we will act upon the request as soon as feasibly possible, but no later
							than 15 days from the date of the request submission.
						</li>
					</ul>

					<p>
						To exercise these rights, you can contact us by email at hi@arty.land, or by referring to the contact
						details at the bottom of this document. If you have a complaint about how we handle your data, we would like
						to hear from you.
					</p>

					<h2>13. DO WE MAKE UPDATES TO THIS NOTICE?</h2>
					<p>In Short: Yes, we will update this notice as necessary to stay compliant with relevant laws.</p>

					<p>
						We may update this privacy notice from time to time. The updated version will be indicated by an updated
						"Revised" date and the updated version will be effective as soon as it is accessible. If we make material
						changes to this privacy notice, we may notify you either by prominently posting a notice of such changes or
						by directly sending you a notification. We encourage you to review  this privacy notice frequently to be
						informed of how we are protecting your information.
					</p>

					<h2>14. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</h2>

					<p>If you have questions or comments about this notice, you may email us at hi@arty.land or by post to:</p>
					<p>
						InnovAnt <br />
						Technopark Elghazela B11 <br />
						Ariana, Elghazela 2083 <br />
						Tunisia
					</p>

					<h2>15. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</h2>
					<p>
						Based on the applicable laws of your country, you may have the right to request access to the personal
						information we collect from you, change that information, or delete it in some circumstances. To request to
						review, update, or delete your personal information, please contact us.
					</p>
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

				h3 {
					font-family: "Montserrat", sans-serif;
					font-weight: bold;
					font-size: 24px;
					line-height: 30px;
					margin-top: 18px;
				}

				p {
					margin-top: 22px;
				}

				ul {
					text-align: left;
					list-style-image: url(/img/circle.svg);
				}

				li {
					margin-top: 16px;
				}

				a {
					color: #416dff;
					text-decoration: underline;
				}

				table {
					width: 100%;
					margin-top: 20px;
					border-collapse: collapse;
				}

				table,
				td,
				th {
					border: 1px solid black;
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
