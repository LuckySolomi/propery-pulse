import PropertyEditForm from "@/components/PropertyEditForm";
import connectDB from "@/config/database";
import Property from "@/models/property";
import { convertToSerializableObject } from "@/utils/convertToObject";

const PropertyEditPage = async ({ params }) => {
  await connectDB();

  const propertyDoc = await Property.findById(params.id).lean();
  const property = convertToSerializableObject(propertyDoc);

  if (!property) {
    return (
      <h1 className="text-center text-2xl font-bold mt-10">
        Property not found
      </h1>
    );
  }

  return (
    <section className=" container mx-auto px-6 py-24">
      <div className="bg-white px-6 py-8 rounded-md shadow-md border m-4 md:m-0">
        <PropertyEditForm property={property} />
      </div>
    </section>
  );
};

export default PropertyEditPage;
