"use client";

import React, { useState, useEffect } from "react";
import { Brain, Loader2, RefreshCw, Send } from "lucide-react";
import dynamic from "next/dynamic";
import { emotionalStories } from "../data/emotionalStories";

// Import Chart component dynamically with SSR disabled
const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
  loading: () => (
    <div className="h-[400px] flex items-center justify-center bg-gray-50 rounded-xl">
      <Loader2 className="w-8 h-8 text-blue-500 animate-spin" />
    </div>
  ),
});

const getEmotionEmoji = (emotion) => {
  const emotionMap = {
    anger: "😠",
    fear: "😨",
    disgust: "🤢",
    neutral: "😐",
    sadness: "😢",
    surprise: "😮",
    joy: "😊",
  };
  return emotionMap[emotion] || "❓";
};

export default function Page() {
  const [inputText, setInputText] = useState("");
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [estimatedTime, setEstimatedTime] = useState(null);
  const [isBrowser, setIsBrowser] = useState(false);
  const [selectedStory, setSelectedStory] = useState(null);

  // Set isBrowser to true when component mounts (client-side only)
  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const mockResponse = [
    { label: "anger", score: 0.4598 },
    { label: "fear", score: 0.2572 },
    { label: "disgust", score: 0.248 },
    { label: "neutral", score: 0.0225 },
    { label: "sadness", score: 0.0077 },
    { label: "surprise", score: 0.0032 },
    { label: "joy", score: 0.0012 },
  ];

  const handleMockResponse = () => {
    setResponse(mockResponse);
    setEstimatedTime(null);
  };

  const handleApiCall = async (text) => {
    setLoading(true);
    setResponse(null);
    setEstimatedTime(null);

    try {
      const res = await fetch("/api/emotion", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ inputs: text }),
      });

      const data = await res.json();

      if (data.error && data.error === "Model is loading, please wait...") {
        setEstimatedTime(data.estimated_time);
        setResponse(null);
      } else {
        setResponse(data);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to fetch data from API");
    } finally {
      setLoading(false);
    }
  };

  const handleStoryClick = (story) => {
    setSelectedStory(story);
    setInputText(story.content);
    handleApiCall(story.content);
  };

  const chartOptions = {
    chart: {
      type: "bar",
      height: 350,
      toolbar: { show: false },
      background: "transparent",
    },
    plotOptions: {
      bar: {
        borderRadius: 8,
        distributed: true,
        dataLabels: { position: "top" },
      },
    },
    dataLabels: {
      enabled: true,
      formatter: (val) => val.toFixed(3),
      offsetY: -20,
      style: { fontSize: "12px", colors: ["#1e293b"] },
    },
    xaxis: {
      categories:
        response?.map(
          (item) =>
            `${getEmotionEmoji(item.label)} ${
              item.label.charAt(0).toUpperCase() + item.label.slice(1)
            }`
        ) || [],
      position: "bottom",
      labels: { style: { fontSize: "12px", fontFamily: "Inter, sans-serif" } },
    },
    yaxis: {
      max: 1,
      labels: { formatter: (val) => val.toFixed(2) },
    },
    colors: [
      "#ef4444",
      "#3b82f6",
      "#10b981",
      "#6366f1",
      "#f59e0b",
      "#8b5cf6",
      "#14b8a6",
    ],
    theme: { mode: "light" },
    title: {
      text: "Emotion Analysis Results",
      align: "center",
      style: {
        fontSize: "20px",
        fontFamily: "Inter, sans-serif",
        fontWeight: 600,
      },
    },
  };

  const series = [
    { name: "Score", data: response?.map((item) => item.score) || [] },
  ];

  return (
    <section className=" ">
      <div className="min-h-screen bg-gradient-to-br from-slate-50  to-[#0e1a35d3] p-4 sm:p-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden animate-fade-in">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 flex items-center gap-3">
              <Brain className="w-8 h-8 text-white" />
              <h1 className="text-2xl font-bold text-white">
                Emotion Analysis
              </h1>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              {/* Stories Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                {emotionalStories.map((story, index) => (
                  <div
                    key={index}
                    onClick={() => handleStoryClick(story)}
                    className={`p-4 rounded-xl cursor-pointer transition-all duration-300 ${
                      selectedStory?.title === story.title
                        ? "bg-blue-50 border-2 border-blue-500"
                        : "bg-gray-50 hover:bg-gray-100 border border-gray-200"
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl">{story.emoji}</span>
                      <h3 className="font-semibold text-gray-800">
                        {story.title}
                      </h3>
                    </div>
                    <p className="text-sm text-gray-600 line-clamp-3">
                      {story.content}
                    </p>
                  </div>
                ))}
              </div>

              {/* Manual Input Section */}
              <div className="space-y-4">
                <textarea
                  className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 transition-all min-h-[120px] text-gray-700 hover:border-blue-300"
                  placeholder="Enter text for emotion analysis..."
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                />

                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={handleMockResponse}
                    className="flex-1 py-3 px-4 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl font-medium flex items-center justify-center gap-2 transition-all"
                    disabled={loading}
                  >
                    <RefreshCw className="w-5 h-5" />
                    Generate Mock Data
                  </button>
                  <button
                    onClick={() => handleApiCall(inputText)}
                    className="flex-1 py-3 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl font-medium flex items-center justify-center gap-2 transition-all disabled:opacity-50"
                    disabled={loading}
                  >
                    {loading ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      <Send className="w-5 h-5" />
                    )}
                    {loading ? "Analyzing..." : "Analyze Text"}
                  </button>
                </div>
              </div>

              {estimatedTime && (
                <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl">
                  <p className="text-amber-800">
                    Model is loading, please wait approximately {estimatedTime}{" "}
                    seconds...
                  </p>
                </div>
              )}

              {isBrowser && response && (
                <div className="space-y-6">
                  <div className="bg-white p-4 rounded-xl shadow-sm">
                    <Chart
                      options={chartOptions}
                      series={series}
                      type="bar"
                      height={400}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}




