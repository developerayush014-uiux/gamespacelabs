// app/actions/submitContact.ts
"use server";

export async function submitToSpreadsheet(data: any) {
  const webhookUrl = process.env.SPREADSHEET_WEBHOOK_URL;

  if (!webhookUrl) {
    console.error("Missing SPREADSHEET_WEBHOOK_URL in environment variables");
    return { success: false, error: "Server configuration error" };
  }

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // This sends all your form fields to the spreadsheet
      body: JSON.stringify(data), 
    });

    if (!response.ok) {
      throw new Error("Failed to submit to spreadsheet");
    }

    return { success: true };
  } catch (error) {
    console.error("Spreadsheet submission error:", error);
    return { success: false, error: "Failed to send message" };
  }
}