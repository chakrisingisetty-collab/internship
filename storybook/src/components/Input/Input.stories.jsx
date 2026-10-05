import Input from "./Input";

const meta = {
  title: "SnapBook/Input",
  component: Input,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Reusable SnapBook input field with default, focus, filled, error, and disabled states.",
      },
    },
  },
  argTypes: {
    state: {
      control: "select",
      options: ["default", "focus", "filled", "error", "disabled"],
    },
    label: {
      control: "text",
    },
    placeholder: {
      control: "text",
    },
    value: {
      control: "text",
    },
    errorMessage: {
      control: "text",
    },
    disabled: {
      control: "boolean",
    },
  },
};

export default meta;

export const Default = {
  args: {
    label: "Name",
    placeholder: "Enter your name",
    state: "default",
  },
};

export const Focus = {
  args: {
    label: "Name",
    placeholder: "Enter your name",
    state: "focus",
  },
};

export const Filled = {
  args: {
    label: "Name",
    placeholder: "Enter your name",
    value: "Chakri Singisetty",
    state: "filled",
  },
};

export const Error = {
  args: {
    label: "Name",
    placeholder: "Enter your name",
    state: "error",
    errorMessage: "Please enter your name.",
  },
};

export const Disabled = {
  args: {
    label: "Name",
    placeholder: "Enter your name",
    state: "disabled",
    disabled: true,
  },
};