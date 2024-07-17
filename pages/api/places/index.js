import dbConnect from "@/db/connect";
import Location from "@/db/models/Location";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const locations = await Location.find();
    return response.status(200).json(locations);
  }

  if (request.method === "POST") {
    try {
      const locationData = request.body;
      await Location.create(locationData);

      response.status(201).json({ status: "place added" });
    } catch (error) {
      console.log(error);
      response.status(400).json({ error: error.message });
    }
  }
}
