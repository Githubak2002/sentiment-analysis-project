"use client";

import { useState } from "react";

export default function SocialPage() {
  const [username, setUsername] = useState("");
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!username) return;

    setLoading(true);
    try {
      const response = await fetch(`/api/linkedin?username=${username}`);
      const data = await response.json();

      // Get only the 5 most recent posts
      const recentPosts = data.data.slice(0, 5);
      setPosts(recentPosts);
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-8">
          LinkedIn Posts
        </h1>

        {/* Search Section */}
        <div className="flex gap-4 mb-8">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter LinkedIn username"
            className="flex-1 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <button
            onClick={handleSearch}
            disabled={loading}
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors disabled:opacity-50"
          >
            {loading ? "Searching..." : "Search"}
          </button>
        </div>

        {/* Posts Section */}
        <div className="space-y-6">
          {posts.map((post, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="prose dark:prose-invert max-w-none">
                {post.text.split("\n").map((line, i) => (
                  <p key={i} className="mb-4 text-gray-700 dark:text-gray-300">
                    {line}
                  </p>
                ))}
              </div>

              {/* Post Metrics */}
              <div className="mt-4 flex gap-4 text-sm text-gray-600 dark:text-gray-400">
                {post.totalReactionCount && (
                  <span>👍 {post.totalReactionCount} reactions</span>
                )}
                {post.commentsCount && (
                  <span>💬 {post.commentsCount} comments</span>
                )}
              </div>

              {/* Post Link */}
              {post.postUrl && (
                <a
                  href={post.postUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-blue-600 dark:text-blue-400 hover:underline"
                >
                  View on LinkedIn
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
