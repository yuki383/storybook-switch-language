import { Meta, StoryObj } from "@storybook/react";
import { I18nComponent } from "./I18nComponent";

const meta = {
  title: "I18nComponent",
  component: I18nComponent,
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Japanese: Story = {
  parameters: {
    // Toolbarで言語を指定していないときは日本語で表示する
    language: "ja",
  },
};
export const English: Story = {
  parameters: {
    // Toolbarで言語を指定していないときは英語で表示する
    language: "en",
  },
};
