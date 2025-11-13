import React, { useMemo } from "react";
import { Github, GitBranch, Users, Heart, Star, GitPullRequest, Linkedin } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const OpenSource = React.memo(() => {
  const { isDark } = useTheme();
  const [titleRef, titleVisible] = useScrollAnimation();
  const [contentRef, contentVisible] = useScrollAnimation();

  // Open source contributions and interests
  const openSourceData = useMemo(
    () => [
      {
        icon: <Github className="w-8 h-8" />,
        title: "GitHub Profile",
        description: "Active GitHub user with experience in version control and collaborative development",
        link: "https://github.com/DivyanshJain907",
        stats: "6+ repositories",
      },
      {
        icon: <GitBranch className="w-8 h-8" />,
        title: "Team Leadership",
        description: "Founded and managed the Placement Committee for 3000+ Computer Science students, ensuring smooth coordination and communication.",
        link: "#",
        stats: "Batch 2028 • 3000+ Students",
      },
      {
        icon: <Users className="w-8 h-8" />,
        title: "Event Management",
        description: "Successfully organized and executed 20+ university and placement events, handling logistics, PR, and on-ground operations.",
        link: "#",
        stats: "6+ Events • 20+ Drives",
      },
      {
        icon: <GitPullRequest className="w-8 h-8" />,
        title: "Open Source Interest",
        description: "Passionate about contributing to open source projects and learning from the community",
        link: "#",
        stats: "Ready to Contribute",
      },
    ],
    []
  );

  return (
    <section id="open-source" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-500 ${
            titleVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <h2
            className={`text-4xl sm:text-5xl font-extrabold font-heading mb-4 tracking-tight ${
              isDark ? "text-heading-dark" : "text-heading-light"
            }`}
          >
            Open Source & Collaboration
          </h2>
          <p
            className={`text-lg max-w-2xl mx-auto ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Passionate about contributing to open source projects and collaborating with the developer community
          </p>
        </div>

        {/* Main Content */}
        <div
          ref={contentRef}
          className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-700 ${
            contentVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          {/* Left Side - Description */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3
                className={`text-2xl font-semibold ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                Contributing to the Open Source Community
              </h3>
              <p
                className={`leading-relaxed ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                I'm excited about contributing to open source projects and being part of the global developer community. 
                My experience with <strong className={isDark ? "text-white" : "text-gray-900"}>Git/GitHub</strong> and 
                team collaboration has prepared me well for open source contributions.
                <br /><br />
                I believe in the power of teamwork and effective communication to make every event a success. Whether it’s planning, coordinating volunteers, or managing on-ground operations, I strive to create smooth, impactful experiences that bring people together and deliver real results.
                <br /><br />
                My skills in <strong className={isDark ? "text-white" : "text-gray-900"}>HTML, CSS, JavaScript, and Figma</strong> 
                allow me to contribute to frontend projects, UI/UX improvements, and design systems.
              </p>
            </div>

            {/* Call to Action */}
            <div className="flex flex-wrap gap-4">
              <a
                href="https://github.com/DivyanshJain907"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-200 font-medium ${
                  isDark
                    ? "bg-white text-black hover:bg-gray-100"
                    : "bg-gray-900 text-white hover:bg-gray-800"
                }`}
              >
                <Github size={20} />
                <span>View GitHub Profile</span>
              </a>
              <a
                href="https://www.linkedin.com/in/DivyanshJain0907"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-200 font-medium border ${
                  isDark
                    ? "border-white/20 text-white hover:bg-white/10"
                    : "border-gray-300 text-gray-700 hover:bg-gray-50"
                }`}
              >
                <Linkedin size={20} />
                <span>Connect on LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Right Side - Cards Grid */}
          <div className="grid grid-cols-2 gap-4">
            {openSourceData.map((item, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 ${
                  isDark
                    ? "bg-white/5 border border-white/10 hover:bg-white/10"
                    : "bg-gray-50 border border-gray-200 hover:bg-white"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-center space-y-4">
                  <div
                    className={`inline-flex p-3 rounded-full ${
                      isDark ? "bg-white/10" : "bg-gray-100"
                    }`}
                  >
                    <div
                      className={`${
                        isDark ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {item.icon}
                    </div>
                  </div>
                  <div>
                    <h4
                      className={`font-semibold mb-2 ${
                        isDark ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {item.title}
                    </h4>
                    <p
                      className={`text-sm mb-3 ${
                        isDark ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      {item.description}
                    </p>
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                        isDark
                          ? "bg-white/10 text-gray-300"
                          : "bg-gray-200 text-gray-700"
                      }`}
                    >
                      {item.stats}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section - Why Open Source */}
        <div
          className={`mt-16 p-8 rounded-2xl transition-all duration-500 ${
            contentVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          } ${
            isDark
              ? "bg-white/5 border border-white/10"
              : "bg-gray-50 border border-gray-200"
          }`}
        >
          <div className="text-center space-y-4">
            <h3
              className={`text-2xl font-semibold ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Why I'm Interested in Event Management
            </h3>
            <p
              className={`max-w-3xl mx-auto leading-relaxed ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Event management offers incredible opportunities to learn from people, build strong networks, and create impactful experiences. I’m particularly interested in organizing placement drives, alumni meets, and professional sessions that help students connect with industry experts and grow. My experience in leading teams, managing large-scale events, and coordinating with corporate professionals has strengthened my ability to handle pressure, communicate effectively, and deliver successful outcomes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
});

OpenSource.displayName = "OpenSource";

export default OpenSource; 