import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],

  callbacks: {
    async signIn({ profile }) {
      /**
       * profile.email -> user email
       * profile.hd    -> hosted domain (Workspace only)
       */

      if (profile?.email?.endsWith("@ethmumbai.in")) {
        console.log(profile);
        return true;
      }

      // ❌ Reject non-org users
      throw new Error("Access denied: Use your ethmumbai.in email");
    },
  },
  pages: {
    signIn: "/",
  },
});

export { handler as GET, handler as POST };
