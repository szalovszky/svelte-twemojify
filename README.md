# svelte-twemojify

An updated, simple Svelte wrapper for twemoji. You can just drop the `twemojify` action into
your component and all emojis will become consistent across all platforms.

## Usage

```javascript
<script>
  import { twemojify } from 'svelte-twemojify';
</script>

<p use:twemojify>
  This emoji will be transformed into an image: ✨.
</p>
```

## Installation

```bash
npm install svelte-twemojify
```

## Credits

- [twemoji](https://github.com/twitter/twemoji)
- [@discordapp/twemoji](https://github.com/discordapp/twemoji)
- [svelte-twemoji](https://github.com/jankiel7410/svelte-twemoji)

## License

svelte-twemojify is licensed under the MIT license - see the [LICENSE](LICENSE) file for details.

## Support and Contributions

For bug reports, feature requests, or contributions, please open an issue or submit a pull request on the [GitHub repository](https://github.com/szalovszky/svelte-twemojify).