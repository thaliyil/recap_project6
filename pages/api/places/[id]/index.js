import dbConnect from "@/db/connect";
import Location from "@/db/models/Location";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    const location = await Location.findById(id);

    if (!location) {
      return response.status(404).json({ status: "Not Found" });
    }

    response.status(200).json(location);
  }
  if (request.method === "PATCH") {
    try {
      const updatedData = request.body;
      await Location.findByIdAndUpdate(id, updatedData);
      response.status(200).json({ status: "updated" });
    } catch (error) {
      response.status(400).json({ error: error.message });
    }
  }
}
