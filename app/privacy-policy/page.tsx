'use client'
import TitleHeaderBanner from '@/components/TitleBanner'
import { Container, styled } from '@mui/material'
import React from 'react'

const StyledPrivacyPolicy = styled(Container)(({ theme }) => ({
  '& h4': {
    fontWeight: 500,
    color: `${theme.palette.grey[700]} !important`,
    marginTop: 10
  },
  '& h6': {
    fontWeight: 500,
    fontSize: 18,
    color: `${theme.palette.grey[700]} !important`,
    marginTop: 10
  },
}))

const PrivacyPolicy = () => {
  return (
    <StyledPrivacyPolicy maxWidth="xl" disableGutters>
      <TitleHeaderBanner title="Privacy Policy" />
      <section className="px-6 spx-6 relative overflow-hidden bg-gradient-to-br from-primary/5 to-transparent">
        <div className="container mx-auto">
          <div className="py-6">&nbsp;</div>
          <div className="mb-4 fade-in pb-16 visible">
            <h2 className="text-4xl font-bold mb-4">Privacy Policy for OneInfo.ai</h2>
            <p className="text-sm text-gray-600 mb-2">Effective Date: July 18, 2025</p>
            <p className="text-sm text-gray-600 mb-4">Last Updated: July 18, 2025</p>
<p>
  Welcome to OneInfo.ai (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;). We are committed to
  protecting your privacy and ensuring the security of your personal data...
</p>

            <h3 className="text-xl text-gray-700 mt-6">1. Information We Collect</h3>
            <ul className="list-disc ml-6">
              <li>a. Information You Provide to Us:
                <ul className="list-disc ml-6">
                  <li>Name, email address, phone number</li>
                  <li>Social media profiles and linked account details (Meta/Facebook/Instagram)</li>
                  <li>Payment details processed via third-party gateways (Stripe, Razorpay)</li>
                  <li>Messages, comments, and consultation details</li>
                </ul>
              </li>
              <li>b. Information Collected Automatically:
                <ul className="list-disc ml-6">
                  <li>Device and browser information</li>
                  <li>IP address, location data</li>
                  <li>Pages viewed, time spent, clickstream data</li>
                </ul>
              </li>
              <li>c. Information from Meta Platforms (after user consent):
                <ul className="list-disc ml-6">
                  <li>Instagram Graph API access tokens</li>
                  <li>Instagram Business Account details</li>
                  <li>Insights including reach, impressions, likes, comments, shares</li>
                  <li>Content metadata including captions and tags</li>
                  <li>Direct messages</li>
                  <li>Page engagement and audience demographics</li>
                </ul>
              </li>
            </ul>

            <h3 className="text-xl text-gray-700 mt-6">2. How We Use Your Information</h3>
            <ul className="list-disc ml-6">
              <li>Provide core app services including analytics, automation, and engagement tracking</li>
              <li>Automate replies to comments and DMs</li>
              <li>Personalize your dashboard experience</li>
              <li>Schedule and suggest content based on insights</li>
              <li>Notify you of potential brand opportunities</li>
              <li>Respond to user inquiries and support tickets</li>
              <li>Conduct research and improve our services</li>
            </ul>

            <h3 className="text-xl text-gray-700 mt-6">3. Legal Basis for Data Processing</h3>
            <ul className="list-disc ml-6">
              <li>Your consent (e.g., when linking your Meta accounts)</li>
              <li>Performance of a contract (e.g., Pro subscriptions)</li>
              <li>Legal compliance</li>
              <li>Legitimate interests (e.g., improving services and analytics)</li>
            </ul>

            <h3 className="text-xl text-gray-700 mt-6">4. Data Sharing and Disclosure</h3>
            <ul className="list-disc ml-6">
              <li>Meta (Facebook and Instagram) through secure APIs</li>
              <li>Cloud service providers (e.g., AWS, Firebase)</li>
              <li>Third-party tools (e.g., analytics, email services)</li>
              <li>Payment processors (Stripe, Razorpay)</li>
              <li>Legal authorities when required by law</li>
            </ul>

            <h3 className="text-xl text-gray-700 mt-6">5. Data Retention</h3>
            <ul className="list-disc ml-6">
              <li>Active user accounts: data retained until account deletion</li>
              <li>Inactive accounts: anonymized or deleted after 24 months</li>
              <li>API tokens: refreshed and expired regularly for security</li>
            </ul>

            <h3 className="text-xl text-gray-700 mt-6">6. Data Security</h3>
            <ul className="list-disc ml-6">
              <li>HTTPS, OAuth 2.0, encrypted storage</li>
              <li>Secure token/session management</li>
              <li>Periodic audits and access controls</li>
            </ul>

            <h3 className="text-xl text-gray-700 mt-6">7. Your Rights</h3>
            <ul className="list-disc ml-6">
              <li>Access your data</li>
              <li>Correct or update personal info</li>
              <li>Delete your account and data</li>
              <li>Withdraw any granted permissions from Meta</li>
              <li>Lodge a complaint with data protection authorities</li>
            </ul>

            <h3 className="text-xl text-gray-700 mt-6">8. Children’s Privacy</h3>
            <p>OneInfo.ai is not intended for children under the age of 13. We do not knowingly collect data from children.</p>

            <h3 className="text-xl text-gray-700 mt-6">9. Cross-Border Transfers</h3>
            <p>Your data may be processed outside your country of residence, including in the United States or India. We ensure appropriate safeguards are in place for such transfers.</p>

            <h3 className="text-xl text-gray-700 mt-6">10. Cookies and Tracking</h3>
            <p>We use cookies to enhance user experience, analyze traffic, and provide personalized features. You can control cookies through your browser settings.</p>

            <h3 className="text-xl text-gray-700 mt-6">11. Third-Party Links</h3>
            <p>Our services may contain links to external sites. We are not responsible for their content or privacy practices.</p>

            <h3 className="text-xl text-gray-700 mt-6">12. Updates to This Policy</h3>
            <p>We may revise this Privacy Policy from time to time. Changes will be communicated via email or app notification.</p>

            <h3 className="text-xl text-gray-700 mt-6">13. Contact Us</h3>
            <ul className="list-disc ml-6">
              <li>OneInfo.ai Privacy Team</li>
              <li>Email: support@oneinfo.ai</li>
              <li>Website: <a href="https://oneinfo.ai" className="text-primary underline">https://oneinfo.ai</a></li>
              <li>Address: Hyderabad, Telangana, India</li>
            </ul>
          </div>
        </div>
      </section>
    </StyledPrivacyPolicy>
  )
}

export default PrivacyPolicy
