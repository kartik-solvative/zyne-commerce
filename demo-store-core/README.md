# Commerce Layer Demo Store `core`

This Demo Store is a completely static ecommerce solution (with SSR capability) powered by Commerce Layer. The store is full-featured and fully operational, with no third-party services required. You can easily tailor your own with different levels of customization. Keep reading to learn more.

> The Demo Store project consists of [two repositories](#how-it-works), this one contains the source code.

## What is Commerce Layer?

[Commerce Layer](https://commercelayer.io/) is a multi-market commerce API and order management system that lets you add global shopping capabilities to any website, mobile app, chatbot, wearable, voice, or IoT device, with ease. Compose your stack with the best-of-breed tools you already mastered and love. Make any experience shoppable, anywhere, through a blazing-fast, enterprise-grade, and secure API.

## Table of contents

- [How it works](#how-it-works)
- [Getting started](#getting-started)
- [Need help?](#need-help)
- [License](#license)

## How it works

The Demo Store project consists of two repositories that you can leverage to build your own store, based on the amount of customization you need to add:

- [`demo-store`](https://github.com/commercelayer/demo-store)

  This is a **GitHub template** that uses the below-mentioned `demo-store-core` as a [git submodule](https://git-scm.com/book/en/v2/Git-Tools-Submodules). If you're happy with the features and the look and feel of the Commerce Layer Demo Store we suggest you follow this path. You won't have to care about the whole source code and you'll be free to focus just on [your data and content](#customization). On top of that, you'll get free updates with almost no risk just by running:

  ```sh
  git submodule update --remote
  npm install
  ```

- [`demo-store-core`](https://github.com/commercelayer/demo-store-core)

  This repository contains the source code. If you need to fully customize your store (behavior, UI, UX, etc.) you just have to fork this repo and create your own. **This is also the way to contribute.**

  > :warning: Please note that if you follow this path and start diverging too much from the original source code the risk is to lose all future updates or not be able to replicate them.

## Getting started

To get started please refer to the [documentation](https://github.com/commercelayer/demo-store) located at `demo-store` repository.

## Need help?

- Join [Commerce Layer's Slack community](https://slack.commercelayer.app).
- Open a new [Q&A discussion](https://github.com/commercelayer/demo-store-core/discussions/categories/q-a)
- Ping us [on Twitter](https://twitter.com/commercelayer).
- Is there a bug? Create an [issue](https://github.com/commercelayer/demo-store-core/issues) in this repository.

## License

This repository is published under the [MIT](LICENSE) license.
