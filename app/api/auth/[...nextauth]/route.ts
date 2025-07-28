// /app/api/auth/[...nextauth]/route.ts

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
    async signIn({ user, account, profile }) {
      // This callback is triggered when a user tries to sign in.
      if (account?.provider === "google") {
        // Check if the user's email ends with the required domain.
        if (user.email && user.email.endsWith("@ietdavv.edu.in")) {
          return true; // Allow the sign-in
        } else {
          // You can redirect to an error page or return false to deny access.
          console.log(`Denied access for email: ${user.email}`);
          return '/unauthorized'; // Redirect to a custom 'unauthorized' page
        }
      }
      return false; // Deny sign-in for any other case
    },
  },
  pages: {
    // Optional: Define a custom error page.
    error: '/auth/error', 
  }
});

export { handler as GET, handler as POST };