'use client'
import Contact from '@/components/Contact'
import FAQ from '@/components/FAQ'
import { ApolloProvider } from '@apollo/client'
import { clientApollo } from '@/apollo/apolloClient'
import Supercharge from '@/components/Supercharge'

const ContactUsPage = () => {
  return (
    <ApolloProvider client={clientApollo}>
      <Contact />
      <FAQ />
      <Supercharge />
    </ApolloProvider>
  )
}
export default ContactUsPage
