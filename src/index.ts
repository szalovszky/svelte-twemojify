import twemoji, { ParseCallback, TwemojiOptions } from '@discordapp/twemoji';

const twemojify = function (node: HTMLElement, options?: TwemojiOptions | ParseCallback) {
  twemoji.parse(node, options);
  return {
    update() {
      twemoji.parse(node, options);
    },
  };
};

export { twemojify };