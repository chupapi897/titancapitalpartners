export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false });
  }

  const reference = "TC-" + Math.floor(100000 + Math.random() * 900000);

  res.status(200).json({
    success: true,
    reference
  });
}
