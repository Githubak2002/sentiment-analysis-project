"use client";

import { useState } from "react";

export default function HomePage() {
  const [inputText, setInputText] = useState("");
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [estimatedTime, setEstimatedTime] = useState(null);

  // Mock API response
  const mockResponse = [
    {
      label: "anger",
      score: 0.4598177671432495,
    },
    {
      label: "fear",
      score: 0.2572673261165619,
    },
    {
      label: "disgust",
      score: 0.24807099997997284,
    },
    {
      label: "neutral",
      score: 0.022549116984009743,
    },
    {
      label: "sadness",
      score: 0.007794627919793129,
    },
    {
      label: "surprise",
      score: 0.0032203877344727516,
    },
    {
      label: "joy",
      score: 0.0012796701630577445,
    },
  ];

  // Handle generating mock response
  const handleMockResponse = () => {
    setResponse(mockResponse); // Set mock response
    setEstimatedTime(null); // Clear any estimated time
  };

  // Handle API call
  const handleApiCall = async () => {
    setLoading(true); // Set loading state
    setResponse(null); // Reset previous response
    setEstimatedTime(null); // Reset estimated time

    try {
      const res = await fetch("/api/emotion", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ inputs: inputText }),
      });

      const data = await res.json();

      console.log("Api Result → ", data);

      // Handle model loading case
      if (data.error && data.error === "Model is loading, please wait...") {
        setEstimatedTime(data.estimated_time);
        setResponse({ error: data.error });
      } else {
        setResponse(data); // Set API response
      }
    } catch (error) {
      console.error("Error:", error);
      setResponse({ error: "Failed to fetch data from API" });
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-semibold text-center mb-6">Emotion Analysis</h1>

        {/* Form for text input */}
        <textarea
          className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="5"
          placeholder="Enter text for emotion analysis..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        ></textarea>

        {/* Buttons for Mock Response and API Call */}
        <div className="flex justify-between space-x-4 mt-4">
          <button
            onClick={handleMockResponse}
            className="flex-1 py-2 bg-gray-300 text-black rounded-lg hover:bg-gray-400 transition duration-300"
          >
            Generate Mock Data
          </button>
          <button
            onClick={handleApiCall}
            className="flex-1 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
            disabled={loading}
          >
            {loading ? "Calling API..." : "Call API"}
          </button>
        </div>

        {/* Displaying the response */}
        {response && (
          <div className="mt-6 p-4 bg-gray-100 rounded-lg">
            <h2 className="text-lg font-semibold">Result:</h2>
            {response.error ? (
              <div>
                <p className="text-red-600">{response.error}</p>
                {estimatedTime && (
                  <p className="text-yellow-600">
                    Estimated time to wait: {estimatedTime} seconds
                  </p>
                )}
              </div>
            ) : (
              <div>
                {/* Display results in a table */}
                <table className="w-full table-auto mt-4">
                  <thead className="bg-gray-200">
                    <tr>
                      <th className="py-2 px-4 text-left text-sm font-semibold">Emotion</th>
                      <th className="py-2 px-4 text-left text-sm font-semibold">Score</th>
                    </tr>
                  </thead>
                  <tbody>
                    {response.map((item, index) => (
                      <tr key={index} className="border-t">
                        <td className="py-2 px-4 text-sm">{item.label}</td>
                        <td className="py-2 px-4 text-sm">{item.score.toFixed(4)}</td>
                        </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
