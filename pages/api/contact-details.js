import generalData from "@/data/general-data.json";

export default function handler(req, res) {
  const { email, phone } = generalData.contact;

  res.setHeader("Cache-Control", "public, max-age=604800");

  res.status(200).json({ phone, email });
}
