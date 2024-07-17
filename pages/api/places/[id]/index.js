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
}
