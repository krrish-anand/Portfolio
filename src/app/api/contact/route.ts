import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();

    // Validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Here you would typically:
    // 1. Save to database using Prisma
    // 2. Send email notification
    // For now, we'll just log it

    console.log("Contact form submission:", {
      name,
      email,
      subject,
      message,
      timestamp: new Date(),
    });

    // Example: Save to database (uncomment when DB is connected)
    // await prisma.contactMessage.create({
    //   data: { name, email, subject, message },
    // });

    return NextResponse.json(
      { success: true, message: "Message received successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}
