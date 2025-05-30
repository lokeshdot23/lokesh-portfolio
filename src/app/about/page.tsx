import React from 'react'

// pages/about.tsx or app/about/page.tsx

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 px-6 py-12 flex items-center justify-center">
      <div className="max-w-3xl w-full bg-white shadow-xl rounded-2xl p-8 sm:p-12 space-y-6">
        <h1 className="text-4xl font-bold text-blue-600">About Lokesh Gupta</h1>
        <p className="text-lg leading-relaxed">
          Hi! I&apos;m <span className="font-semibold text-gray-900">Lokesh Gupta</span>, currently pursuing an internship at <span className="font-semibold text-purple-700">Kalvium</span>, where I&apos;m gaining hands-on experience building impactful software solutions. This journey is helping me grow both technically and professionally, and I&apos;m passionate about solving problems through clean, efficient, and scalable code.
        </p>
        <p className="text-lg leading-relaxed">
          I&apos;m deeply interested in <span className="text-blue-700">technology</span>, <span className="text-blue-700">innovation</span>, and <span className="text-blue-700">continuous learning</span>. At Kalvium, I&apos;ve collaborated with talented peers and mentors on projects that mirror real-world challenges—sharpening my skills in programming, teamwork, and agile development.
        </p>
        <p className="text-lg leading-relaxed">
          Outside of tech, I&apos;m a curious learner, always exploring new ideas—whether its through reading, experimenting with creative projects, or staying updated with the latest trends in software and entrepreneurship. I also enjoy contributing to open-source initiatives and building side projects that push my limits.
        </p>
      </div>
    </div>
  );
}

