import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  callbacks: {
    async signIn({ profile }) {
      //1 Connect to the database
      //2 Check if the user exists
      //3 If not, create a new user
      //4 Return true to allow sign in
      return true;
    },
    //Session callback function that modifies the session object before it is returned to the client
    async session({ session }) {
      //1 Get the user from the database using the email from the session
      //2 Assign user id from the session
      // 3 Return session
    },
  },
};
export default authOptions;
