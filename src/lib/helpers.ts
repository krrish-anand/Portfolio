import { Prisma } from "@prisma/client";

export async function handlePrismaError(error: unknown): Promise<string> {
  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    switch (error.code) {
      case "P2002":
        return "This record already exists";
      case "P2025":
        return "Record not found";
      case "P2003":
        return "Invalid relationship reference";
      default:
        return "Database error occurred";
    }
  }
  return "An unexpected error occurred";
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}
