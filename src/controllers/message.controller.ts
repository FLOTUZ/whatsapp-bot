import { Request, Response } from "express";
import axios from "axios";
import { RECIPIENT_PHONE, VERIFY_TOKEN, ACCESS_TOKEN, URL } from "../config";

// Función para verificar el webhook
export const verifyWebhook = (req: Request, res: Response) => {
  const mode = req.query["hub.mode"];
  const token = req.query["hub.verify_token"];
  const challenge = req.query["hub.challenge"];

  console.log({
    mode,
    token,
    challenge,
    VERIFY_TOKEN,
  });

  if (mode === "subscribe" && token === VERIFY_TOKEN) {
    console.log("✅ Webhook verificado");
    res.status(200).send(challenge);
  } else {
    res.sendStatus(403);
  }
};

// Handle the incoming messages
export const handleIncomingMessage = async (req: Request, res: Response) => {
  const body = req.body;

  if (body.object === "whatsapp_business_account") {
    const message = body.entry[0]?.changes[0]?.value?.messages?.[0];

    if (message) {
      const from = message.from; // Sender of the message
      const text = message.text?.body; // Message content

      console.log(`📩 Mensaje recibido de ${from}: ${text}`);

      try {
        const response = await axios.post(
          URL,
          {
            messaging_product: "whatsapp",
            to: RECIPIENT_PHONE,
            type: "text",
            text: {
              body: text,
            },
          },
          {
            headers: {
              Authorization: `Bearer ${ACCESS_TOKEN}`,
              "Content-Type": "application/json",
            },
          }
        );

        if (response.status === 200) {
          console.log("✅ Mensaje enviado con éxito:", response.data);
          res.status(200).json(response.data);
        }
      } catch (error: any) {
        console.error(
          "❌ Error al enviar el mensaje:",
          error.response?.data || error.message
        );
        res.status(500).json({ error: "Error al enviar el mensaje" });
      }
    }
  }
};
