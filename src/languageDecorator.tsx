import { Args, ReactRenderer, StoryContext } from "@storybook/react";
import { DecoratorFunction } from "@storybook/csf";
import { LanguageContext } from "./languageContext";

type DecoratorFunc<TArgs = Args> = DecoratorFunction<ReactRenderer, TArgs>;

const defaultLanguage = "ja";
/**
 * ContextからStoryに適用する言語を取得する
 **/
function getLanguageFromContext(ctx: StoryContext) {
  const params = ctx.parameters?.language;
  const selected = ctx.globals.language;

  /**
   * 言語の優先順位
   * 1. Toolbarで指定した言語
   * 2. parametersで指定した言語
   * 3. デフォルトの言語(ja)
   */
  return selected ?? params ?? defaultLanguage;
}

/**
 * LanguageContextをStoryに適用するDecorator
 */
export function languageProviderDecorator(): DecoratorFunc {
  return (Story, ctx) => {
    const language = getLanguageFromContext(ctx);
    return (
      <LanguageContext.Provider value={language}>
        <Story />
      </LanguageContext.Provider>
    );
  };
}
