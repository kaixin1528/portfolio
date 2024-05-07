export const sections = [
  {
    section_name: "Knowledge Graph",
    section_description:
      "Visualize and search cloud nodes in the form of graph",
    section_images: [
      "knowledge_graph.png",
      "info-panel.png",
      "evolution.png",
      "diff.png",
    ],
    features: [
      {
        feature_name: "Snapshots",
        feature_description:
          "The timeline at the bottom allows you to view every graph and the info of every graph node captured at that snapshot.",
      },
      {
        feature_name: "Evolution",
        feature_description:
          "Click through the bar chart to drill down and view the graph difference between the previous and the currrent hour.",
      },
      {
        feature_name: "Search",
        feature_description:
          "Type in our self-constructed query language or natural language to render the search result in the format of graph, table, or metadadta.",
      },
    ],
  },
  {
    section_name: "Summaries",
    section_description: "Visualize data through simple charts and tables",
    section_images: ["vr-risk.png", "incident_response.png"],
    features: [
      {
        feature_name: "Charts",
        feature_description:
          "Using the Recharts library, stacked area, stacked bar, multi-line, and donut charts have been rendered.",
      },
      {
        feature_name: "Tables",
        feature_description:
          "Often in the format of cards and traditional tables.",
      },
    ],
  },
  {
    section_name: "Investigation",
    section_description:
      "Record graph queries and alert analysis in the format of evidence",
    section_images: ["investigation_landing.png", "diary.png"],
    features: [
      {
        feature_name: "Diary",
        feature_description:
          "Includes many features such as adding graph queries or alert analysis as evidence, enabling links to the knowledge graph, marking the status of the diary, and inviting collaborators.",
      },
      {
        feature_name: "Unorderly",
        feature_description:
          "A conversational agent that outputs a list of possible queries to add as evidence.",
      },
    ],
  },
  {
    section_name: "GRC Copilot",
    section_description:
      "Visualize coverage of documents and upload questionnaire.",
    section_images: [
      "coverage.png",
      "framework-detail.png",
      "respond_to_questions.png",
    ],
    features: [
      {
        feature_name: "Coverage",
        feature_description:
          "A simple donut chart renders the mapped sections of selected frameworks and policies.",
      },
      {
        feature_name: "Questionnaire",
        feature_description:
          "After uploading a questionnaire and submitting the draft questions, a list of Q&A will be output.",
      },
      {
        feature_name: "Export",
        feature_description: "Export the response list as docx file.",
      },
    ],
  },
];
