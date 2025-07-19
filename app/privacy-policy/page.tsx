'use client'
import TitleHeaderBanner from '@/components/TitleBanner'
import {  Container, styled } from '@mui/material'
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
            <h2 className="text-4xl font-bold mb-4">Privacy Policy</h2>
            <h3 className="text-xl text-gray-600 mb-4">
              Oneinfo by Nirbhvai tech innovations pvt ltd
            </h3>
            <p>
              This Privacy Policy outlines our practices concerning the handling of
              your personal data when you visit
              <a className="text-primary font-bold" href="https://oneinfo.ai/">
                www.oneinfo.io
              </a>
              , engage with our related sites, services, goods, or any
              Oneinfo-operated sites linking to this policy (collectively,
              &quot;Services&quot;). This document clarifies what data we collect, the methods
              of its collection, usage, and sharing, and details your rights regarding
              your personal data.
            </p>
            <p>
              Please read this Privacy Policy thoroughly to ensure you understand how
              we handle your personal data before using our Services.
            </p>
            <h3 className="text-xl text-gray-600 my-4">Contents</h3>
            <ol className="mx-6" style={{ listStyle: "decimal" }}>
              <li>Data We Collect</li>
              <li>Usage of Your Data</li>
              <li>Sharing Your Data</li>
              <li>User Choices and Rights</li>
              <li>Links to Other Sites</li>
              <li>Data Retention Period</li>
              <li>Data Security</li>
              <li>International Data Transfer</li>
              <li>Policy on Children</li>
              <li>Amendments to This Policy</li>
              <li>Contact Information</li>
            </ol>
            <h3 className="text-xl text-gray-600 my-4">Data Collection</h3>
            <h4 className="text-l text-gray-600">Information You Provide:</h4>
            <ul className="mx-6" style={{ listStyle: "disc" }}>
              <li>
                Contact Information: Names, email addresses, phone numbers, billing,
                and mailing addresses.
              </li>
              <li>
                Profile Information: Usernames, passwords, photographs, biography,
                social media profiles, digital wallet addresses, etc.
              </li>
              <li>
                Communications: Interactions with us via our services or social media.
              </li>
              <li>
                Financial Transactions: Payment card details, transaction data,
                digital wallet information, and purchase history.
              </li>
              <li>
                Government IDs: Social security numbers, tax IDs, driver’s license
                numbers, and other relevant identification for KYC (Know Your
                Customer) checks.
              </li>
              <li>
                Other Information: Any other details provided by you or associated
                with your account.
              </li>
            </ul>
            <h4 className="text-l text-gray-600 mt-4">
              Information from Third Parties:
            </h4>
            <ul className="mx-6" style={{ listStyle: "disc" }}>
              <li>
                Public and Commercial Data Sources: Demographic information and other
                data from public databases and commercial data providers.
              </li>
              <li>
                Social Media and Other Platforms: Data from platforms like Facebook,
                Google, or Twitter, if connected to our Services.
              </li>
            </ul>
            <h4 className="text-l text-gray-600 mt-4">Automatic Data Collection:</h4>
            <ul className="mx-6" style={{ listStyle: "disc" }}>
              <li>
                Device Information: OS type, browser type, screen resolution, IP
                address, general location data, etc.
              </li>
              <li>
                Usage Data: Activity on our services, such as page views, navigation
                patterns, and interaction times.
              </li>
              <li>
                Cookies and Tracking Technologies: We use these technologies to
                enhance user experience, analyze service performance, and tailor
                marketing efforts.
              </li>
            </ul>
            <h4 className="text-l text-gray-600 mt-4">Usage of Your Data</h4>
            <ul className="mx-6" style={{ listStyle: "disc" }}>
              <li>
                Service Provision: Managing your account, processing transactions,
                verifying identity, and
              </li>
              <li>ensuring security.</li>
              <li>
                Communication: Sending updates, security alerts, and other
                service-related messages.
              </li>
              <li>
                Personalization and Development: Enhancing services, understanding
                user preferences, and
              </li>
              <li>developing new features.</li>
              <li>
                Marketing: Direct marketing and targeted advertising based on your
                preferences and
              </li>
              <li>interactions.</li>
              <li>
                Legal and Compliance: Adhering to legal requirements and defending
                against legal claims.
              </li>
            </ul>
            <h4 className="text-l text-gray-600 mt-4">Sharing Your Data</h4>
            <ul className="mx-6" style={{ listStyle: "disc" }}>
              <li>Within Oneinfo: Among our affiliates for operational purposes.</li>
              <li>
                Service Providers: Third parties that assist in service operation like
                payment processing and fraud detection.
              </li>
              <li>Advertising Partners: For deploying interest-based advertising.</li>
              <li>
                Legal Obligations: When required by law or to protect rights and
                safety.
              </li>
              <li>
                Business Transfers: In cases of merger, acquisition, or sale of
                assets.
              </li>
            </ul>
            <h4 className="text-l text-gray-600 mt-4">User Choices and Rights</h4>
            <ul className="mx-6" style={{ listStyle: "disc" }}>
              <li>
                Access and Control: You can review and modify your personal data
                through your account settings.
              </li>
              <li>
                Opt-Outs: You may unsubscribe from marketing communications or adjust
                settings to decline cookies and tracking technologies.
              </li>
              <li>
                Data Deletion: You can request the deletion of your data or close your
                account through your account settings.
              </li>
            </ul>
            <h4 className="text-l text-gray-600 mt-4">Links to Other Sites</h4>
            <p>
              Our Services may link to third-party sites, which are not governed by
              this Privacy Policy. We recommend reviewing the privacy policies of
              these third-party sites.
            </p>
            <h4 className="text-l text-gray-600 mt-4">Data Retention</h4>
            <p>
              We retain personal data as long as necessary to fulfill the purposes
              outlined in this policy, subject to legal requirements.
            </p>
            <h4 className="text-l text-gray-600 mt-4">Data Security</h4>
            <p>
              We implement measures to protect your data from unauthorized access,
              loss, or misuse. However, no internet-based service is completely
              secure.
            </p>
            <h4 className="text-l text-gray-600 mt-4">International Data Transfer</h4>
            <p>
              Your data may be processed in countries other than your own, potentially
              with different and less stringent privacy laws.
            </p>
            <h4 className="text-l text-gray-600 mt-4">Policy on Children</h4>
            <p>
              Our Services are not directed at children under the age of 18, and we do
              not knowingly collect data from them.
            </p>
            <h4 className="text-l text-gray-600 mt-4">
              Changes to This Privacy Policy
            </h4>
            <p>
              We may update this policy periodically. Significant changes will be
              communicated through our Services or other means.
            </p>
          </div>
        </div>
      </section>

    </StyledPrivacyPolicy>
  )
}

export default PrivacyPolicy
