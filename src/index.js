import twemoji from '@discordapp/twemoji';

const twemojify = function (node) {
  twemoji.parse(node);
  return {
    update() {
      twemoji.parse(node);
    },
  };
};

export { twemojify };