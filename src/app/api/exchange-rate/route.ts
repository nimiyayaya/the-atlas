import { NextResponse } from "next/server";

export const revalidate = 3600;

export async function GET(request: Request) {
  const currency = new URL(request.url).searchParams.get("currency")?.toUpperCase();

  if (!currency || !/^[A-Z]{3}$/.test(currency) || currency === "INR") {
    return NextResponse.json({ error: "Unsupported currency" }, { status: 400 });
  }

  try {
    const response = await fetch(`https://api.frankfurter.dev/v2/rate/inr/${currency.toLowerCase()}`, {
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      return NextResponse.json({ error: "Rate unavailable" }, { status: response.status });
    }

    return NextResponse.json(await response.json());
  } catch {
    return NextResponse.json({ error: "Rate unavailable" }, { status: 502 });
  }
}
