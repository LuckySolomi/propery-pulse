"use server";
import connectDB from "@/config/database";
import User from "@/models/user";
import { getSessionUser } from "@/utils/getSessionUser";

async function checkBookmarkStatus(propertyId) {
  try {
    await connectDB();

    const sessionUser = await getSessionUser();

    if (!sessionUser || !sessionUser.userId) {
      return { error: "User not authenticated" };
    }

    const { userId } = sessionUser;

    const user = await User.findById(userId);

    let isBookmarked = user.bookmarks.includes(propertyId);

    return { isBookmarked };
  } catch (error) {
    return { error: error.message };
  }
}

export default checkBookmarkStatus;
