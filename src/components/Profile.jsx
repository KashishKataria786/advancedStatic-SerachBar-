import React from "react";
import { FaGithub, FaLinkedin, FaCode } from "react-icons/fa";

const Profile = () => {
  return (
    <div className=" bg-white rounded-2xl shadow-md p-6 text-left  ">
      {/* Name */}
      <h1 className="text-2xl font-bold text-gray-800">Kashish Kataria</h1>

      {/* Summary */}
      <h2 className="text-gray-600 mt-2">
        Driven and passionate developer with a strong foundation in full-stack
        development and application security. I’ve solved 360+ problems on
        LeetCode, sharpening my skills in Data Structures & Algorithms and
        consistently pushing the boundaries of what I can build and secure.
      </h2>
      <ul>
        <h2 className="text-xl ">💻 Tech Stack & Expertise:</h2>
        {[
          "Frontend: React.js, React Native, HTML, CSS, JavaScript, Nextjs",
          "Backend: Node.js, Express.js, MongoDB",
          "Languages: C++, JavaScript, python",
          "Design & Prototyping: Figma",
          "Security: OWASP Top 10, API Security, Burp Suite,Nessus, Email Security",
        ].map((item) => (
          <li className="my-1">{item}</li>
        ))}
      </ul>

      <h2>
        I’m particularly passionate about building secure, scalable applications
        and enjoy applying security-first thinking from the ground up. Whether
        it's crafting intuitive UI/UX or ensuring robust backend and API
        defenses, I aim to deliver high-quality and secure digital products.
      </h2>
      <h2>Let’s connect and collaborate on building something impactful!</h2>

      {/* Skills */}
      <div className="mt-4 flex flex-wrap justify-start gap-2">
        {[
          "React.js",
          "Node.js",
          "Express",
          "MongoDB",
          "Javascript",
          "TailwindCSS",
          "DSA",
          "Next.js",
        ].map((skill, idx) => (
          <span
            key={idx}
            className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="mt-6 flex justify-left gap-6 text-left">
        <a
          href="https://leetcode.com/kashishkataria"
          target="_blank"
          rel="noopener noreferrer"
          className="text-yellow-600 hover:scale-110 transition text-xl"
        >
          <FaCode />
        </a>
        <a
          href="https://linkedin.com/in/kashishkatariaofficial"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:scale-110 transition text-xl"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/kashishkataria786"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 hover:scale-110 transition text-xl"
        >
          <FaGithub />
        </a>
      </div>
    </div>
  );
};

export default Profile;
