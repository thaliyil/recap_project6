import dbConnect from "@/db/connect";
import Location from "@/db/models/Location";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const locations = await Location.find();
    return response.status(200).json(locations);
  }

  /* if (request.method === "POST") {
    try {
      const productData = request.body;
      const product = new Product(productData);
      await product.save();
      return response.status(201).json({ status: "Product created." });
    } catch (error) {
      console.error(error);
      return response.status(400).json({ error: error.message });
    }
  } */
}
