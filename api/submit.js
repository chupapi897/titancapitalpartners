export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false });
  }

  const data = req.body;

  const reference = "TC-" + Math.floor(100000 + Math.random() * 900000);

  const message = `
const message = `
📩 *NEW FUNDING APPLICATION*

👤 Name: ${data.name}
📧 Email: ${data.email}
📞 Phone: ${data.phone}

💰 Amount: $${data.amount}
📝 Purpose: ${data.purpose}

🚀 *Short Pitch*
${data.pitch}

📊 Revenue: ${data.revenue || "N/A"}
📈 Credit: ${data.credit || "N/A"}

🆔 Reference: ${reference}
`;

  const telegramURL = `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`;

  await fetch(telegramURL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: process.env.TELEGRAM_CHAT_ID,
      text: message,
      parse_mode: "Markdown"
    })
  });

  res.status(200).json({
    success: true,
    reference
  });
}
