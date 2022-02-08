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
					<h1>End User License Agreement (EULA)</h1>
					<p>Last updated: February 8, 2022</p>

					<h2>Interpretation and Definitions</h2>
					<p>
						The words of which the initial letter is capitalized have meanings defined under the following conditions.
						The following definitions shall have the same meaning regardless of whether they appear in singular or in
						plural.
					</p>

					<p>For the purposes of this End-User License Agreement:</p>
					<ul>
						<li>
							<b>"Agreement"</b> means this End-User License Agreement that forms the entire agreement between You and
							Innovant regarding the use of the Application.
						</li>
						<li>
							<b>"Application"</b> means the software program provided by Innovant downloaded by the user through their
							account to their Device, named ARTY
						</li>
						<li>
							<b>"Application Store"</b> means the digital distribution service operated and developed by Apple Inc.
							(Apple App Store) or Google Inc. (Google Play Store) by which the Application has been downloaded to your
							Device.
						</li>
						<li>
							<b>"Company"</b> (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to
							Innovant, the developer of ARTY.
						</li>
						<li>
							<b>"Content"</b> refers to content such as text, images, or other information that can be posted,
							uploaded, linked to or otherwise made available by You, regardless of the form of that content.
						</li>
						<li>
							<b>"Device"</b> means any device that can access the Application such as a computer, a cellphone or a
							digital tablet.
						</li>
						<li>
							<b>"Family Sharing / Family Group"</b> permits You to share applications downloaded through the
							Application Store with other family members by allowing them to view and download each others' eligible
							Applications to their associated Devices.
						</li>
						<li>
							<b>"Third-Party Services"</b> means any services or content (including data, information, applications and
							other products services) provided by a third-party that may be displayed, included or made available by
							the Application.
						</li>
						<li>
							<b>"You"</b> means the individual accessing or using the Application or the company, or other legal entity
							on behalf of which such individual is accessing or using the Application, as applicable.
						</li>
					</ul>

					<h2>Acknowledgment</h2>
					<p>
						By downloading or using the Application, You are agreeing to be bound by the terms and conditions of this
						Agreement. If You do not agree to the terms of this Agreement, do not use, do not download or do not use the
						Application.
					</p>
					<p>
						This Agreement is a legal document between You and the Company and it governs your use of the Application
						made available to You by the Company.
					</p>
					<p>
						This Agreement is between You and the Company only and not with the Application Store. Therefore, the
						Company is solely responsible for the Application and its content. Although the Application Store is not a
						party to this Agreement, it has the right to enforce it against You as a third party beneficiary relating to
						your use of the Application.
					</p>
					<p>
						The Application is free, not sold, to You by the Company for use strictly in accordance with the terms of
						this Agreement.
					</p>

					<h2>License</h2>
					<h3>Scope of License</h3>
					<p>
						The Company grants You a revocable, non-exclusive, non-transferable, free license to download, install and
						use the Application strictly in accordance with the terms of this Agreement.
					</p>
					<p>
						You may only use the Application on a Device that You own or control and as permitted by the Application
						Store's terms and conditions.
					</p>

					<h3>License Restrictions</h3>
					<p>By downloading or using this application, You agree not to, and You will not permit others to:</p>
					<ul>
						<li>
							License, sell, rent, lease, assign, distribute, transmit, host, outsource, disclose or otherwise
							commercially exploit the Application or make the Application available to any third party.
						</li>
						<li>
							Remove, alter or obscure any proprietary notice (including any notice of copyright or trademark) of the
							Company or its affiliates, partners, suppliers or the licensors of the Application.
						</li>
					</ul>

					<h2>Intellectual Property</h2>
					<p>
						The Application, including without limitation all copyrights, patents, trademarks, trade secrets and other
						intellectual property rights are, and shall remain, the sole and exclusive property of the Company.
					</p>
					<p>
						The Company shall not be obligated to indemnify or defend You with respect to any third party claim arising
						out of or relating to the Application. To the extent the Company is required to provide indemnification by
						applicable law, the Company, not the Application Store, shall be solely responsible for the investigation,
						defense, settlement and discharge of any claim that the Application or your use of it infringes any third
						party intellectual property rights.
					</p>

					<h2>Modifications to the Application</h2>
					<p>
						The Company reserves the right to modify, update, suspend or discontinue, temporarily or permanently, the
						Application or any service to which it connects, with or without notice and without liability to You.
					</p>

					<h2>Updates to the Application</h2>
					<p>
						The Company may from time to time provide enhancements or improvements to the features/functionality of the
						Application, which may include patches, bug fixes, updates, upgrades and other modifications.
					</p>
					<p>
						Updates may modify or delete certain features and/or functionalities of the Application. You agree that the
						Company has no obligation to (i) provide any Updates, or (ii) continue to provide or enable any particular
						features and/or functionalities of the Application to You.
					</p>
					<p>
						You further agree that all updates or any other modifications will be (i) deemed to constitute an integral
						part of the Application, and (ii) subject to the terms and conditions of this Agreement.
					</p>

					<h2>Maintenance and Support</h2>
					<p>
						The Company does not provide any maintenance or support for the download and use of the Application. To the
						extent that any maintenance or support is required by applicable law, the Company, not the Application
						Store, shall be obligated to furnish any such maintenance or support.
					</p>

					<h2>Term and Termination</h2>
					<p>
						This Agreement shall remain in effect until terminated by You or the Company. The Company may, in its sole
						discretion, at any time and for any or no reason, suspend or terminate this Agreement with or without prior
						notice.
					</p>
					<p>
						This Agreement will terminate immediately, without prior notice from the Company, in the event that you fail
						to comply with any provision of this Agreement. You may also terminate this Agreement by deleting the
						Application and all copies thereof from your Device or from your computer.
					</p>
					<p>
						Upon termination of this Agreement, You shall cease all use of the Application and delete all copies of the
						Application from your Device.
					</p>
					<p>
						Termination of this Agreement will not limit any of the Company's rights or remedies at law or in equity in
						case of breach by You (during the term of this Agreement) of any of your obligations under the present
						Agreement.
					</p>

					<h2>Indemnification</h2>
					<p>
						You agree to indemnify and hold the Company and its parents, subsidiaries, affiliates, officers, employees,
						agents, partners and licensors (if any) harmless from any claim or demand, including reasonable attorneys'
						fees, due to or arising out of your: (a) use of the Application; (b) violation of this Agreement or any law
						or regulation; or (c) violation of any right of a third party.
					</p>

					<h2>No Warranties</h2>
					<p>
						The Application is provided to You "AS IS" and "AS AVAILABLE" and with all faults and defects without
						warranty of any kind. To the maximum extent permitted under applicable law, the Company, on its own behalf
						and on behalf of its affiliates and its and their respective licensors and service providers, expressly
						disclaims all warranties, whether express, implied, statutory or otherwise, with respect to the Application,
						including all implied warranties of merchantability, fitness for a particular purpose, title and
						non-infringement, and warranties that may arise out of course of dealing, course of performance, usage or
						trade practice. Without limitation to the foregoing, the Company provides no warranty or undertaking, and
						makes no representation of any kind that the Application will meet your requirements, achieve any intended
						results, be compatible or work with any other software, applications, systems or services, operate without
						interruption, meet any performance or reliability standards or be error free or that any errors or defects
						can or will be corrected.
					</p>
					<p>
						Without limiting the foregoing, neither the Company nor any of the company's provider makes any
						representation or warranty of any kind, express or implied: (i) as to the operation or availability of the
						Application, or the information, content, and materials or products included thereon; (ii) that the
						Application will be uninterrupted or error-free; (iii) as to the accuracy, reliability, or currency of any
						information or content provided through the Application; or (iv) that the Application, its servers, the
						content, or e-mails sent from or on behalf of the Company are free of viruses, scripts, trojan horses,
						worms, malware, timebombs or other harmful components.
					</p>
					<p>
						Some jurisdictions do not allow the exclusion of certain types of warranties or limitations on applicable
						statutory rights of a consumer, so some or all of the above exclusions and limitations may not apply to You.
						But in such a case the exclusions and limitations set forth in this section shall be applied to the greatest
						extent enforceable under applicable law. To the extent any warranty exists under law that cannot be
						disclaimed, the Company, not the Application Store, shall be solely responsible for such warranty.
					</p>

					<h2>Limitation of Liability</h2>
					<p>
						Notwithstanding any damages that You might incur, the entire liability of the Company and any of its
						suppliers under any provision of this Agreement and your exclusive remedy for all of the foregoing shall be
						limited to the amount actually paid by You for the Application or through the Application or 100 USD if You
						haven't purchased anything through the Application.
					</p>
					<p>
						To the maximum extent permitted by applicable law, in no event shall the Company or its suppliers be liable
						for any special, incidental, indirect, or consequential damages whatsoever (including, but not limited to,
						damages for loss of profits, loss of data or other information, for business interruption, for personal
						injury, loss of privacy arising out of or in any way related to the use of or inability to use the
						Application, third-party software and/or third-party hardware used with the Application, or otherwise in
						connection with any provision of this Agreement), even if the Company or any supplier has been advised of
						the possibility of such damages and even if the remedy fails of its essential purpose.
					</p>
					<p>
						Some states/jurisdictions do not allow the exclusion or limitation of incidental or consequential damages,
						so the above limitation or exclusion may not apply to You.
					</p>
					<p>
						You expressly understand and agree that the Application Store, its subsidiaries and affiliates, and its
						licensors shall not be liable to You under any theory of liability for any direct, indirect, incidental,
						special consequential or exemplary damages that may be incurred by You, including any loss of data, whether
						or not the Application Store or its representatives have been advised of or should have been aware of the
						possibility of any such losses arising.
					</p>

					<h2>Severability and Waiver</h2>
					<h3>Severability</h3>
					<p>
						If any provision of this Agreement is held to be unenforceable or invalid, such provision will be changed
						and interpreted to accomplish the objectives of such provision to the greatest extent possible under
						applicable law and the remaining provisions will continue in full force and effect.
					</p>

					<h3>Waiver</h3>
					<p>
						Except as provided herein, the failure to exercise a right or to require performance of an obligation under
						this Agreement shall not affect a party's ability to exercise such right or require such performance at any
						time thereafter nor shall the waiver of a breach constitute a waiver of any subsequent breach.
					</p>

					<h2>Product Claims</h2>
					<p>
						The Company does not make any warranties concerning the Application. To the extent You have any claim
						arising from or relating to your use of the Application, the Company, not the Application Store, is
						responsible for addressing any such claims, which may include, but not limited to: (i) any product liability
						claims; (ii) any claim that the Application fails to conform to any applicable legal or regulatory
						requirement; and (iii) any claim arising under consumer protection, or similar legislation.
					</p>

					<h2>Changes to this Agreement</h2>
					<p>
						The Company reserves the right, at its sole discretion, to modify or replace this Agreement at any time. If
						a revision is material we will provide at least 30 days' notice prior to any new terms taking effect. What
						constitutes a material change will be determined at the sole discretion of the Company.
					</p>
					<p>
						By continuing to access or use the Application after any revisions become effective, You agree to be bound
						by the revised terms. If You do not agree to the new terms, You are no longer authorized to use the
						Application.
					</p>

					<h2>Governing Law</h2>
					<p>
						The laws of the Country, excluding its conflicts of law rules, shall govern this Agreement and your use of
						the Application. Your use of the Application may also be subject to other local, state, national, or
						international laws.
					</p>

					<h2>Entire Agreement</h2>
					<p>
						The Agreement constitutes the entire agreement between You and the Company regarding your use of the
						Application and supersedes all prior and contemporaneous written or oral agreements between You and the
						Company.
					</p>
					<p>
						You may be subject to additional terms and conditions that apply when You use or purchase other Company's
						services, which the Company will provide to You at the time of such use or purchase.
					</p>

					<h2>Contact Us</h2>
					<p>If you have any questions about this Agreement, You can contact Us:</p>
					<ul>
						<li>By visiting this page on our website: www.arty.land</li>
						<li>By sending us an email: hello@arty.land</li>
					</ul>
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
					font-size: 50px;
					line-height: 56px;
					text-align: center;
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
