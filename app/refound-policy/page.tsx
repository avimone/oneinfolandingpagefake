'use client'
import TitleHeaderBanner from '@/components/TitleBanner'
import { Container, styled } from '@mui/material'
import React from 'react'

const StyledRefundPolicy = styled(Container)(({ theme }) => ({
  '& h6': {
    fontWeight: 800,
    color: `${theme.palette.grey[900]} !important`,
    marginTop: 10,
  },
  '& p': {
    color: `${theme.palette.grey[700]} !important`,
  },
}))

const RefundPolicy = () => {
  return (
    <StyledRefundPolicy disableGutters maxWidth="xl">
      <TitleHeaderBanner title="Oneinfo Refund Policy" />
      <section className="px-6 spx-6 relative overflow-hidden bg-gradient-to-br from-primary/5 to-transparent">
        <div className="container mx-auto">
          <div className="py-6">&nbsp;</div>
          <div className="mb-4 fade-in pb-16 visible">
            <h2 className="text-4xl font-bold mb-4">Oneinfo Refund Policy</h2>
            <h3 className="text-xl text-gray-600">Oneinfo by Nirbhvai tech innovations pvt ltd</h3>
            <h3 className="text-xl text-gray-600 pt-6">Introduction</h3>
            <p>
              Welcome to Oneinfo. We appreciate your decision to use our platform for engaging with
              digital content and interactive services. This Refund Policy outlines the
              circumstances under which refunds may be granted for transactions made on the Oneinfo
              platform, which specializes in digital products and services.
            </p>
            <h3 className="text-xl text-gray-600 pt-6">Scope</h3>
            <p>
              This policy covers all digital products and services purchased on the Oneinfo
              platform, including premium content, video calls, audio calls, and chat services.
            </p>
            <h3 className="text-xl text-gray-600 pt-6">Refund Eligibility</h3>
            <ol className="mx-6" style={{ listStyle: 'decimal' }}>
              <li>
                Digital Content and Interactive Services:
                <ul className="mx-6" style={{ listStyle: 'disc' }}>
                  <li>
                    <h4 className="text-xl text-gray-600">No Refunds:</h4> Due to the instantaneity
                    of content delivery and the nature of digital consumption, all purchases related
                    to digital content, video calls, audio calls, and chats are generally
                    non-refundable once accessed or consumed.
                  </li>
                  <li>
                    <h4 className="text-xl text-gray-600">Exceptions:</h4> Refunds may be considered
                    in specific cases where the content or service did not function as advertised,
                    was inaccessible or defective, or if there was an unauthorized transaction
                    (subject to investigation and adequate proof).
                  </li>
                </ul>
              </li>
              <li>
                Subscription Services:
                <ul className="mx-6" style={{ listStyle: 'disc' }}>
                  <li>
                    <h4 className="text-xl text-gray-600">Cancellation and Refunds:</h4> Subscribers
                    may cancel future charges at any time. However, the current subscription period
                    remains active until its expiration, and refunds for the current subscription
                    period are not typically provided unless the service fails to meet the stated
                    standards or is misrepresented.
                  </li>
                </ul>
              </li>
              <li>
                You have the authority to enter into these Terms of Service personally or on behalf
                of the company you have named as the user, and to bind that entity to these Terms.
              </li>
            </ol>
            <h3 className="text-xl text-gray-600 pt-6">Refund Process</h3>
            <ul className="mx-6" style={{ listStyle: 'disc' }}>
              <li>
                Request Submission:
                <ul className="mx-6" style={{ listStyle: 'disc' }}>
                  <li>
                    To request a refund, please contact Oneinfo Support via our website or directly
                    at help@oneinfo.com within 24 hours of the purchase or occurrence of the service
                    issue.
                  </li>
                  <li>
                    Provide details including your order number, description of the problem, and any
                    other relevant information to support your refund request.
                  </li>
                </ul>
              </li>
              <li>
                Review and Communication:
                <ul className="mx-6" style={{ listStyle: 'disc' }}>
                  <li>
                    We will review each request on a case-by-case basis. You will be notified of the
                    approval or rejection of your refund request. If approved, the refund process
                    will be initiated.
                  </li>
                </ul>
              </li>
            </ul>
            <h3 className="text-xl text-gray-600 pt-6">Refund Timing</h3>
            <ul className="mx-6" style={{ listStyle: 'disc' }}>
              <li>
                Refunds, when approved, are processed within 7-10 business days and issued to the
                original method of payment.
              </li>
              <li>
                Please note that the time for the refund to reflect in your account may vary based
                on your bank or payment provider&apos;s policies.
              </li>
            </ul>
            <h3 className="text-xl text-gray-600 pt-6">Limitations and Exclusions</h3>
            <ul className="mx-6" style={{ listStyle: 'disc' }}>
              <li>
                Non-refundable Circumstances:
                <ul className="mx-6" style={{ listStyle: 'disc' }}>
                  <li>
                    Charges for services that have been used or accessed, where no fault on our part
                    is evident, are not eligible for refunds.
                  </li>
                  <li>
                    Refund requests made beyond 24 hours after purchase without a valid reason for
                    the service&apos;s non-performance or misrepresentation are not typically honored.
                  </li>
                </ul>
              </li>
            </ul>
            <h3 className="text-xl text-gray-600 pt-6">Limitations and Exclusions</h3>
            <ul className="mx-6" style={{ listStyle: 'disc' }}>
              <li>
                We reserve the right to modify this Refund Policy at any time. Notice of any changes
                will be communicated on this page and effective immediately upon posting.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </StyledRefundPolicy>
  )
}

export default RefundPolicy
