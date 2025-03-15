import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const username = searchParams.get("username");

  if (!username) {
    return NextResponse.json(
      { error: "Username is required" },
      { status: 400 }
    );
  }

  const url = `https://linkedin-api8.p.rapidapi.com/get-profile-posts?username=${username}`;

  try {
    const response = await fetch(url, {
      headers: {
        "x-rapidapi-key": process.env.RAPIDAPI_KEY,
        "x-rapidapi-host": process.env.RAPIDAPI_HOST,
      },
    });

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching LinkedIn posts:", error);
    return NextResponse.json(
      { error: "Failed to fetch LinkedIn posts" },
      { status: 500 }
    );
  }
}
