import Button from "./Button";

const meta = {
  title: "SnapBook/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Reusable SnapBook button for booking and other primary actions.",
      },
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "ghost", "disabled"],
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
    },
    disabled: {
      control: "boolean",
    },
    loading: {
      control: "boolean",
    },
  },
};

export default meta;

export const Primary = {
  args: {
    label: "Book Now",
    variant: "primary",
  },
};

export const Secondary = {
  args: {
    label: "Book Now",
    variant: "secondary",
  },
};

export const Ghost = {
  args: {
    label: "Book Now",
    variant: "ghost",
  },
};

export const Disabled = {
  args: {
    label: "Book Now",
    variant: "disabled",
    disabled: true,
  },
};

export const Loading = {
  args: {
    label: "Book Now",
    variant: "primary",
    loading: true,
  },
};