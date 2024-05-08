module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "noto-sans": "Noto+Sans+KR",
      },
      backgroundImage: {
        // about me
        "who-am-i": "url('./assets/about-me/who-am-i.png')",

        // header
        github: "url('./assets/general/github.png')",
        linkedin: "url('./assets/general/linkedin.png')",

        // work
        coverage: "url('./assets/work/coverage.png')",
        diary: "url('./assets/work/diary.png')",
        diff: "url('./assets/work/diff.png')",
        evolution: "url('./assets/work/evolution.png')",
        "framework-detail": "url('./assets/work/framework-detail.png')",
        "incident-response": "url('./assets/work/incident-response.png')",
        "info-panel": "url('./assets/work/info-panel.png')",
        "investigation-landing":
          "url('./assets/work/investigation-landing.png')",
        "knowledge-graph": "url('./assets/work/knowledge-graph.png')",
        "respond-to-questions": "url('./assets/work/respond-to-questions.png')",
        "vr-risk": "url('./assets/work/vr-risk.png')",

        // tools
        "html-logo": "url('./assets/projects/html-logo.svg')",
        "javascript-logo": "url('./assets/projects/javascript-logo.png')",
        "react-logo": "url('./assets/projects/react-logo.svg')",
        "next-logo": "url('./assets/projects/next-logo.svg')",
        "tailwind-logo": "url('./assets/projects/tailwind-logo.svg')",
        "typescript-logo": "url('./assets/projects/typescript-logo.svg')",
        "framer-motion-logo": "url('./assets/projects/framer-motion.jpeg')",

        // projects
        "audiophile-homepage":
          "url('./assets/projects/audiophile-homepage.png')",
        "feedback-homepage": "url('./assets/projects/feedback-homepage.png')",
        "trello-clone-homepage":
          "url('./assets/projects/trello-clone-homepage.png')",
        "designo-homepage": "url('./assets/projects/designo-homepage.png')",
      },
    },
  },
  variants: {
    fill: ["hover"],
    stroke: ["hover"],
  },
  plugins: [],
};
