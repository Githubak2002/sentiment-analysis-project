Project Operational Manual
Project: Sentiment Analysis Platform
A comprehensive sentiment analysis platform that analyzes emotions and sentiments from various sources including social media and text input. The platform features real-time emotion analysis, social media sentiment tracking, and interactive data visualization.

Live Website
The website is live at: [Your deployment URL]

Prerequisites
Ensure the following tools and services are set up before running the project:
- Node.js (v18 or later)
- npm or yarn
- Next.js 14.1.0
- Hugging Face API Key
- RapidAPI Key (for LinkedIn API)

Project Folder Structure

```text
sentiment-analysis/
├── app/
│   ├── api/
│   ├── components/
│   ├── data/
│   ├── emotion/
│   ├── emotion-analysis/
│   ├── social/
│   ├── about/
│   ├── page.js
│   └── layout.js
├── components/
├── public/
├── .env
├── package.json
├── next.config.mjs
└── tailwind.config.js
```


Steps to Run the Project Code
Step 1: Clone the Repository
git clone [your-repository-url]
cd sentiment-analysis

Step 2: Install Dependencies
npm install
# OR
yarn install

Step 3: Set Up Environment Variables
Create a .env file in the root directory with the following:
NEXT_PUBLIC_HUGGING_FACE_API_KEY=your_hugging_face_api_key
RAPIDAPI_KEY=your_rapidapi_key
RAPIDAPI_HOST=linkedin-api8.p.rapidapi.com

Note: These API keys are required for sentiment analysis and social media data fetching.

Step 4: Run Development Server
npm run dev
Visit: http://localhost:3000

💡 Feature Modules Overview
Feature                    Tech Used                    File Location
Emotion Analysis          Hugging Face API             app/emotion/
Social Media Analysis     RapidAPI, LinkedIn API       app/social/
Data Visualization        ApexCharts, React            app/components/
Interactive UI            Next.js, Tailwind CSS        app/page.js
API Integration           Next.js API Routes           app/api/

Testing & Debugging
- Test routes manually (e.g., /emotion, /social, /about)
- Use browser dev tools for debugging (F12)
- Check API responses in Network tab
- Monitor console for any errors

Build for Production
npm run build
npm run start

🛠️ Troubleshooting
Issue                          Solution
API not working               Check .env for correct API keys
Social media data not loading Verify RapidAPI credentials
Emotion analysis failing      Ensure Hugging Face API key is valid
Charts not rendering          Check ApexCharts configuration
Build errors                  Clear .next folder and node_modules, then reinstall

Deployment Suggestions
- Frontend Hosting: Vercel (recommended for Next.js)
- Alternative: Netlify / AWS Amplify
- Security: Keep API keys hidden using environment variables
- Performance: Enable Next.js caching and optimization
- Monitoring: Set up error tracking (e.g., Sentry)

Additional Notes
- The project uses Tailwind CSS for styling
- Framer Motion is used for animations
- React Icons and Heroicons for UI elements
- The platform is built with a mobile-first approach
