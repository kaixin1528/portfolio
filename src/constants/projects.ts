const react = "bg-react-logo";
const next = "bg-next-logo";
const tailwind = "bg-tailwind-logo";
const typescript = "bg-typescript-logo";
const framerMotion = "bg-framer-motion-logo";

const audioPhile = "bg-audiophile-homepage";
const feedback = "bg-feedback-homepage";
const trello = "bg-trello-clone-homepage";
const designo = "bg-designo-homepage";

export const projects = {
  "/projects/audiophile/": {
    name: "Audiophile",
    description:
      "Audiophile is a responsive, multipage e-commerce website selling imaginary audio products. Using React's state management, a user can add/remove items to the cart and checkout accordingly.",
    demo: "https://kaixin-audiophile.netlify.app",
    code: "https://github.com/kaixin1528/audiophile-e-commerce",
    tools: [react, tailwind, framerMotion],
    screenshot: audioPhile,
  },

  "/projects/feedback/": {
    name: "Product Feedback",
    description:
      "Product Feedback is a responsive, multipage CRUD website. Using Next's built-in API routes, a user can add, delete, update, and read feedback for the product and interact with the comment section.",
    demo: "https://kaixin-product-feedback.netlify.app",
    code: "https://github.com/kaixin1528/product-feedback",
    tools: [next, tailwind, typescript, framerMotion],
    screenshot: feedback,
  },
  "/projects/trello/": {
    name: "Trello Clone",
    description:
      "Trello Clone is a responsive CRUD website. Using Next's built-in API, a user can add a new board and within each board add/remove/edit new lists and cards, card descriptions, and comments.",
    code: "https://github.com/kaixin1528/trello-clone",
    tools: [next, tailwind, typescript],
    screenshot: trello,
  },
  "/projects/designo/": {
    name: "Designo",
    description:
      "Designo is a responsive, multipage website for a design agency focused on creating imaginary responsive, web, and app designs. The layout is CSS-Grid-based for individual preview designs and company information pages.",
    demo: "https://kaixin-designo.netlify.app",
    code: "https://github.com/kaixin1528/designo",
    tools: [react, tailwind, framerMotion],
    screenshot: designo,
  },
};
