import Image from 'next/image';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div className="font-sans">
      {/* Header */}
      

      {/* Main Section */}
      <main className="relative bg-teal-500 text-white text-center py-32">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-pink-200 -z-10"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-full bg-teal-500 -z-10"></div>

        <h1 className="text-4xl font-bold mb-4">
        The user expressed great satisfaction with the product and praised its quality.
        </h1>
        <div className="mt-6">
          <input
            type="text"
            placeholder="e.g. EC4R 3TE"
            className="px-4 py-3 w-1/3 max-w-md text-black rounded-l-lg border border-gray-300 focus:outline-none"
          />
          <button className="px-6 py-3 bg-green-600 rounded-r-lg text-white font-semibold hover:bg-green-700">
            Search
          </button>
        </div>
        <p className="mt-4">
          <Link href="/login">
            <span className="text-white underline">Log in</span>
          </Link>{' '}
          for your recent addresses.
        </p>
      </main>
    </div>
  );
};

export default HomePage;
