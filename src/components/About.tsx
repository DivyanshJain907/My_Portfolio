import React, { useMemo } from "react";
import { Code, Palette, Zap, Users, GitBranch, Figma } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const About = React.memo(() => {
  const { isDark } = useTheme();
  const [titleRef, titleVisible] = useScrollAnimation();
  const [contentRef, contentVisible] = useScrollAnimation();
  const [imageRef, imageVisible] = useScrollAnimation();

  // Key highlights with icons and short descriptions
  const highlights = useMemo(
    () => [
      {
        icon: <Code className="w-6 h-6" />,
        title: "Frontend Development",
        description: "HTML, CSS, JavaScript expertise",
      },
      {
        icon: <Figma className="w-6 h-6" />,
        title: "UI/UX Design",
        description: "Creating beautiful Figma designs",
      },
      {
        icon: <Users className="w-6 h-6" />,
        title: "Event Management",
        description: "PR and team coordination experience",
      },
      {
        icon: <GitBranch  className="w-6 h-6" />,
        title: "Version Control",
        description: "Git/GitHub and team collaboration",
      },
    ],
    []
  );

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-700 ${
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
            About Me
          </h2>
          <p
            className={`text-lg sm:text-xl max-w-3xl mx-auto ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Passionate fullstack, frontend developer and UI/UX enthusiast creating meaningful digital experiences
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Profile Image Card */}
          <div
            ref={imageRef}
            className={`relative transition-all duration-700 ${
              imageVisible
                ? "opacity-100 -translate-x-0"
                : "opacity-0 -translate-x-12"
            }`}
          >
            <div
              className={`rounded-2xl p-8 h-96 flex items-center justify-center shadow-xl ${
                isDark
                  ? "bg-white/5 border border-white/10"
                  : "bg-gray-50 border border-gray-200"
              }`}
            >
              <div
                className={`w-64 h-64 rounded-full overflow-hidden border shadow-lg ${
                  isDark ? "border-white/20" : "border-gray-200"
                }`}
              >
                <img
                  src="/images/others/profile.jpg"
                  alt="Divyansh"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* About Text and Highlights */}
          <div
            ref={contentRef}
            className={`space-y-6 transition-all duration-700 ${
              contentVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-12"
            }`}
          >
            {/* Summary */}
            <div className="space-y-4">
              <h3
                className={`text-2xl font-semibold font-heading ${
                  isDark ? "text-heading-dark" : "text-heading-light"
                }`}
              >
                Computer Science Student & Frontend/UI-UX Enthusiast
              </h3>
              <p
                className={`leading-relaxed ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                I’m a Computer Science student focused on full-stack and frontend development with UI/UX design, building scalable and user-centric web applications. I work with Next.js to develop responsive interfaces and implement backend logic using modern web architectures, supported by relational databases for structured data management. Alongside development, I design intuitive interfaces in Figma, ensuring strong usability, performance, and clean system flow. Through hands-on projects, I continuously refine my skills across the stack while aiming to create digital products that are efficient, maintainable, and impactful.
              </p>
            </div>

            {/* Animated Highlights Grid */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg transition-all duration-500 group hover:shadow-md hover:-translate-y-2 ${
                    contentVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  } ${
                    isDark
                      ? "bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20"
                      : "bg-gray-50 hover:bg-gray-100 border border-gray-200 hover:border-gray-300"
                  }`}
                  style={{ transitionDelay: `${index * 60 + 150}ms` }} 
                >
                  <div className="flex items-center space-x-3 mb-2">
                    <div
                      className={`group-hover:scale-110 transition-transform duration-200 ${
                        isDark ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {highlight.icon}
                    </div>
                    <h4
                      className={`font-semibold font-heading ${
                        isDark ? "text-heading-dark" : "text-heading-light"
                      }`}
                    >
                      {highlight.title}
                    </h4>
                  </div>
                  <p
                    className={`text-sm ${
                      isDark ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {highlight.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

About.displayName = "About";

export default About;
