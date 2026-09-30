import Card from "./Card";

const meta = {
  title: "SnapBook/Card",
  component: Card,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Reusable SnapBook booking card for displaying photography booking details.",
      },
    },
  },
  argTypes: {
    name: {
      control: "text",
    },
    category: {
      control: "text",
    },
    date: {
      control: "text",
    },
    location: {
      control: "text",
    },
    price: {
      control: "text",
    },
    selected: {
      control: "boolean",
    },
  },
};

export default meta;

export const Default = {
  args: {
    name: "Rahul & Chandini",
    category: "Wedding",
    date: "30 Aug 2026",
    location: "Hyderabad",
    price: "₹1,75,000",
    selected: false,
  },
};

export const Hover = {
  args: {
    name: "Rahul & Chandini",
    category: "Wedding",
    date: "30 Aug 2026",
    location: "Hyderabad",
    price: "₹1,75,000",
    selected: false,
  },
};

export const Selected = {
  args: {
    name: "Rahul & Chandini",
    category: "Wedding",
    date: "30 Aug 2026",
    location: "Hyderabad",
    price: "₹1,75,000",
    selected: true,
  },
};