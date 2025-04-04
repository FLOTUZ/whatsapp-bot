import axios from "axios";

import { URL, ACCESS_TOKEN, RECIPIENT_PHONE } from "config/enviroment";

// To send a message
export const sendMessage = async (messageText: string): Promise<any> => {
  try {
    const response = await axios.post(
      URL,
      {
        messaging_product: "whatsapp",
        to: RECIPIENT_PHONE,
        type: "text",
        text: {
          body: messageText,
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
      return response.data;
    } else {
      throw new Error("Error al enviar el mensaje");
    }
  } catch (error: any) {
    console.error(
      "❌ Error al enviar el mensaje:",
      error.response?.data || error.message
    );
    throw error;
  }
};
