import { autoOptions } from "@/utils/autoOptions";
import NextAuth from "next-auth";

const handler = NextAuth(autoOptions);
export { handler as GET, handler as POST };
