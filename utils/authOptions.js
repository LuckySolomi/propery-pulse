import GoogleProvider from "next-auth/providers/google";
import connectDB from "@/config/database";
import User from "@/models/user";

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
      await connectDB();
      //2 Check if the user exists
      const userExists = await User.findOne({ email: profile.email });
      //3 If not, create a new user
      if (!userExists) {
        const username = profile.name.slice(0, 20);
        await User.create({
          email: profile.email,
          username,
          image: profile.image,
        });
      }
      //4 Return true to allow sign in
      return true;
    },
    //Session callback function that modifies the session object before it is returned to the client
    async session({ session }) {
      //1 Get the user from the database using the email from the session
      const user = await User.findOne({ email: session.user.email });
      //2 Assign user id from the session
      session.user.id = user._id.toString();
      // 3 Return session
      return session;
    },
  },
};
export default authOptions;
