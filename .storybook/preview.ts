import type { Preview } from "@storybook/react";
import { languageProviderDecorator } from "../src/languageDecorator";

const preview: Preview = {
  decorators: [languageProviderDecorator()],
  globalTypes: {
    // Toolbarの設定
    language: {
      description: "表示する言語",
      toolbar: {
        icon: "globe",
        dynamicTitle: true,
        items: [
          { value: "ja", title: "Ja" },
          { value: "en", title: "En" },
          { value: undefined, title: "Default" },
        ],
      },
    },
  },
};

export default preview;
