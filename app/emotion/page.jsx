"use client";

import React, { useState } from "react";
import Chart from "react-apexcharts";
import { Brain, Loader2, RefreshCw, Send } from "lucide-react";

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

export default function page() {
  const [inputText, setInputText] = useState("");
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [estimatedTime, setEstimatedTime] = useState(null);

  const mockResponse = [
    { label: "anger", score: 0.4598 },
    { label: "fear", score: 0.2572 },
    { label: "disgust", score: 0.2480 },
    { label: "neutral", score: 0.0225 },
    { label: "sadness", score: 0.0077 },
    { label: "surprise", score: 0.0032 },
    { label: "joy", score: 0.0012 },
  ];

  const handleMockResponse = () => {
    setResponse(mockResponse);
    setEstimatedTime(null);
  };

  const handleApiCall = async () => {
    if (!inputText.trim()) {
      alert("Please enter some text to analyze");
      return;
    }

    setLoading(true);
    setResponse(null);
    setEstimatedTime(null);

    try {
      const res = await fetch("/api/emotion", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ inputs: inputText }),
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
      categories: response?.map(
        (item) => `${getEmotionEmoji(item.label)} ${item.label.charAt(0).toUpperCase() + item.label.slice(1)}`
      ) || [],
      position: "bottom",
      labels: { style: { fontSize: "12px", fontFamily: "Inter, sans-serif" } },
    },
    yaxis: {
      max: 1,
      labels: { formatter: (val) => val.toFixed(2) },
    },
    colors: ["#ef4444", "#3b82f6", "#10b981", "#6366f1", "#f59e0b", "#8b5cf6", "#14b8a6"],
    theme: { mode: "light" },
    title: {
      text: "Emotion Analysis Results",
      align: "center",
      style: { fontSize: "20px", fontFamily: "Inter, sans-serif", fontWeight: 600 },
    },
  };

  const series = [{ name: "Score", data: response?.map((item) => item.score) || [] }];

  return (
    <section className=" ">
      <div className="min-h-screen bg-gradient-to-br from-slate-50  to-[#0e1a35d3] p-4 sm:p-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden animate-fade-in">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 flex items-center gap-3">
              <Brain className="w-8 h-8 text-white" />
              <h1 className="text-2xl font-bold text-white">Emotion Analysis</h1>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
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
                    onClick={handleApiCall}
                    className="flex-1 py-3 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl font-medium flex items-center justify-center gap-2 transition-all disabled:opacity-50"
                    disabled={loading}
                  >
                    {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
                    {loading ? "Analyzing..." : "Analyze Text"}
                  </button>
                </div>
              </div>

              {estimatedTime && (
                <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl">
                  <p className="text-amber-800">Model is loading, please wait approximately {estimatedTime} seconds...</p>
                </div>
              )}

              {response && (
                <div className="space-y-6">
                  <div className="bg-white p-4 rounded-xl shadow-sm">
                    <Chart options={chartOptions} series={series} type="bar" height={400} />
                  </div>

                  {/* <div className="overflow-x-auto bg-white rounded-xl shadow-sm">
                    <table className="w-full">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Emotion</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Score</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Percentage</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {response.map((item, index) => (
                          <tr key={index} className="hover:bg-gray-50 transition-colors">
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 flex items-center gap-2">
                              {getEmotionEmoji(item.label)} {item.label.charAt(0).toUpperCase() + item.label.slice(1)}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.score.toFixed(4)}</td>
                            <td className="px-6 py-4 whitespace-nowrap bg-gradient-to-r from-blue-600 to-indigo-600 h-2.5 rounded-full transition-all duration-500"></td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div> */}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>

  );
};