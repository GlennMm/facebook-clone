import NextAuth from "next-auth"
import FBProviders from 'next-auth/providers/facebook'

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    FBProviders({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],
})
