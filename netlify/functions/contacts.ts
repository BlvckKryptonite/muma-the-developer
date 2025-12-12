import { Handler } from "@netlify/functions";
import { insertContactSchema } from "../../shared/schema.js";
import { sendContactEmail } from "../../server/email.js";
import { storage } from "../../server/storage.js";
import { z } from "zod";

const handler: Handler = async (event, context) => {
  // Only allow POST requests
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  try {
    // Parse the request body
    if (!event.body) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Request body is required" }),
      };
    }

    const data = JSON.parse(event.body);

    // Validate the data using the schema
    const validatedData = insertContactSchema.parse(data);

    // Create the contact in storage
    const contact = await storage.createContact(validatedData);

    // Send email
    const emailSent = await sendContactEmail(
      validatedData.name,
      validatedData.email,
      validatedData.message
    );

    if (!emailSent) {
      console.warn("Email failed to send, but contact was created");
    }

    return {
      statusCode: 201,
      body: JSON.stringify(contact),
    };
  } catch (error) {
    console.error("Error processing contact form:", error);

    if (error instanceof z.ZodError) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          error: "Invalid data",
          details: error.errors,
        }),
      };
    }

    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to process contact" }),
    };
  }
};

export { handler };
