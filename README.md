# ⚠️ DEPRECATED ⚠️

Use: https://www.npmjs.com/package/lint-staged

# Lint Changed Files

![npm](https://img.shields.io/npm/v/lint-changed-files.svg)

A small CLI tool which lints all files that changed compared to the current git branchs upstream.

This is especially useful when combined with `pre-commit` git hooks, for example with [husky](https://github.com/typicode/husky).

## ☁️ Setup

### 1. Install dependencies

```sh
npm i -D lint-changed-files husky
```

### 2. Add pre-commit hook:

```js
// package.json
{
  ...
  "husky": {
    "hooks": {
      "pre-commit": "lint-changed-files"
    }
  }
  ...
}
```

### 3. Enable pre-commit hook in your current repository.

Fresh installations of your project will automatically set up the git hooks. To force husky to create the hooks in your current directory, just run `npm install` in your repository again.

## 🤚 Manual usage

This CLI works fine globally aswell. Just install it as ususal:

```sh
npm install -g lint-changed-files
```

Go to your project directory and execute:

```sh
lint-changed-files
```

## ⚙️ Options

You may use the `--ext` parameter to specify which file extensions should be passed to eslint. You may set it multiple times to enable multiple extensions. This works exactly like the [eslint --ext option](https://eslint.org/docs/user-guide/command-line-interface#--ext).

## ✍️ Contributing

Pull requests and stars are always welcome. For bugs and feature requests, please [create an issue](https://github.com/axe312ger/lint-changed-files/issues).
