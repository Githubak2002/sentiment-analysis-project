// app/api/emotion/route.js
export async function POST(request) {
  try {
    const { inputs } = await request.json();

    const response = await fetch(
      "https://api-inference.huggingface.co/models/j-hartmann/emotion-english-distilroberta-base",
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_HUGGING_FACE_API_KEY}`,
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({ inputs }),
      }
    );

    const result = await response.json();

    // Check if the model is loading and return the estimated time
    if (result.error && result.error.includes("currently loading")) {
      return new Response(
        JSON.stringify({
          error: "Model is loading, please wait...",
          estimated_time: result.estimated_time,
        }),
        { status: 503 } // 503 Service Unavailable: model is loading
      );
    }

    // Transform the response into an array of objects
    const formattedResult = Array.isArray(result)
      ? result[0].map((item) => ({
          label: item.label || "Unknown",
          score: item.score || 0,
        }))
      : [];

    return new Response(JSON.stringify(formattedResult), { status: 200 });
  } catch (error) {
    console.error("API error:", error);
    return new Response(
      JSON.stringify({ error: "Error calling the API" }),
      { status: 500 }
    );
  }
}
