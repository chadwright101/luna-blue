import generalData from "@/data/general-data.json";

export default function handler(req, res) {
  const { email, phone } = generalData.contact;

  res.status(200).json({ phone, email });
}
