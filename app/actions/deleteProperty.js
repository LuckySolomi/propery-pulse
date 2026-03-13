"use server";
import clodinary from "@/config/cloudinary";
import connectDB from "@/config/database";
import Property from "@/models/property";
import { getSessionUser } from "@/utils/getSessionUser";
import { revalidatePath } from "next/cache";

async function deleteProperty(propertyId) {
  await connectDB();
  const sessionUser = await getSessionUser();
  if (!sessionUser || !sessionUser.userId) {
    throw new Error("User ID is required");
  }

  const { userId } = sessionUser;

  const property = await Property.findById(propertyId);
  if (!property) throw new Error("Property not found");

  if (property.owner.toString() !== userId) {
    throw new Error("You are not the owner of this property");
  }

  //Extract public ID from the image URL
  const publicIds = property.images.map((imageUrl) => {
    const parts = imageUrl.split("/");
    return parts.at(-1).split(".")[0]; // Get the last part of the URL and remove the file extension
  });

  //Delete images from Cloudinary
  if (publicIds.length > 0) {
    await clodinary.uploader.destroy("propertypluse/" + publicIds);
  }

  await property.deleteOne();

  revalidatePath("/", "layout");
}

export default deleteProperty;
