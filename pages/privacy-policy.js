import { useState } from 'react'
import Head from 'next/head'
import Layout from '../Layout/Layout'

const Index = () => {
    const [contact, setContact] = useState(false);
    const [commingSoon, setCommingSoon] = useState(false);

    return (
        <>
            <Head>
                <title>JAM - Privacy policy</title>
            </Head>

            <Layout
                contact={contact}
                openContact={() => { setCommingSoon(false); setContact(true); }}
                closeContact={() => { setContact(false); }}
                commingSoon={commingSoon}
                setCommingSoon={() => { setCommingSoon(true); setContact(true); }}>
                <section>
                    <h1>Privacy Policy</h1>

                    <p>JAM built the JAM app as a Free app. This SERVICE is provided by JAM at no cost and is intended for use as is.</p>
                    <p>This page is used to inform visitors regarding our policies with the collection, use, and disclosure of Personal Information if anyone decided to use our Service. If you choose to use our Service, then you agree to the collection and use of information in relation to this policy.</p>
                    <p>The Personal Information that we collect is used for providing and improving the Service. we will not use or share your information with anyone except as described in this Privacy Policy. The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which is accessible at JAM unless otherwise defined in this Privacy Policy.</p>

                    <h2>Information Collection and Use</h2>
                    <p>For a better experience, while using our Service, we may require you to provide us with certain personally identifiable information. The information that we request will be retained by us and used as described in this privacy policy.</p>
                    <p>The app does use third party services that may collect information used to identify you.</p>
                    <p>Link to privacy policy of third party service providers used by the app</p>
                    <p><a href="https://policies.google.com/privacy?hl=en-US" target="_blank" rel="noopener noreferrer" >Google play services.</a></p>

                    <h2>Log Data</h2>
                    <p>We want to inform you that whenever you use our Service, in a case of an error in the app we collect data and information (through third party products) on your phone called Log Data. This Log Data may include information such as your device Internet Protocol (“IP”) address, device name, operating system version, the configuration of the app when utilizing our Service, the time and date of your use of the Service, and other statistics.</p>

                    <h2>Cookies</h2>
                    <p>Cookies are files with a small amount of data that are commonly used as anonymous unique identifiers. These are sent to your browser from the websites that you visit and are stored on your device’s internal memory.</p>
                    <p>This Service does not use these “cookies” explicitly. However, the app may use third party code and libraries that use “cookies” to collect information and improve their services. You have the option to either accept or refuse these cookies and know when a cookie is being sent to your device. If you choose to refuse our cookies, you may not be able to use some portions of this Service.</p>

                    <h2>Service Providers</h2>
                    <p>we may employ third-party companies and individuals due to the following reasons: </p>
                    <ul style={{ textAlign: "left", listStyleImage: 'url(/img/circle.svg)' }}>
                        <li>To facilitate our Service.</li>
                        <li>To provide the Service on our behalf.</li>
                        <li>To perform Service-related services.</li>
                        <li>To assist us in analyzing how our Service is used.</li>
                    </ul>
                    <p>we want to inform users of this Service that these third parties have access to your Personal Information. The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information for any other purpose.</p>

                    <h2>Security</h2>
                    <p>we value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.</p>

                    <h2>Links to Other Sites</h2>
                    <p>This Service may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by us. Therefore, we strongly advise you to review the Privacy Policy of these websites. we have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.</p>

                    <h2>Children’s Privacy</h2>
                    <p>These Services do not address anyone under the age of 13. we do not knowingly collect personally identifiable information from children under 13. In the case we discover that a child under 13 has provided us with personal information, we immediately delete this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we will be able to do necessary actions.</p>

                    <h2>Changes to This Privacy Policy</h2>
                    <p>We may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page.</p>
                    <p style={{ textDecoration: 'underline' }}>This policy is effective as of 2020-05-16</p>

                    <h2>Contact Us</h2>
                    <p>If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at:</p>
                    <p style={{ textDecoration: 'underline' }}>contact@jammusic.space</p>
                </section>
            </Layout>

            <style jsx>{`
                section {
                    max-width: 820px;
                    margin-right: auto;
                    margin-left: auto;
                    text-align: center;
                    padding: 200px 30px;
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
                    color: #416DFF;
                    text-decoration: underline;
                }

                @media only screen and (max-width: 424px){
                    h1 {
                        font-size: 48px;
                        line-height: 56px;
                    }
                }
            `}</style>
        </>
    )
}

export default Index
