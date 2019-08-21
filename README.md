# Matter dashboard

[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![peerDependencies Status](https://img.shields.io/david/peer/alexandonie/matter-dashboard.svg)](https://david-dm.org/alexandonie/matter-dashboard?type=peer)
[![devDependency Status](https://img.shields.io/david/dev/alexandonie/matter-dashboard.svg)](https://david-dm.org/alexandonie/matter-dashboard?type=dev)

Matter is a material design system built on top of the latest version of bootstrap. It's released under [MIT](LICENSE) which means you can do whatever you want with it, you can use it for your personal projects, client projects or you can sell it, there are no limitations.

![Website Preview](https://stupefied-euler-a72577.netlify.com/aj13hf4hj5a3sdf7akp.jpg "Matter dashboard")


**Story:** Matter is a part of a failed side project. Long story short, I lost my interest in the project and everything fell apart. To pursue the initial idea of the project (which was to help other developers ship things faster) and to keep the project alive, I decided to refactor Matter and release it for free. The version you're currently viewing is a stripped down version. More components will be added as they get refactored.


## Installation

Before anything else, make sure nodejs and npm are installed on your machine. If not, follow [these instructions](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) and then proceed with the next steps:

```bash
git clone https://github.com/alexandonie/matter-dashboard
```

```bash
cd matter-dashboard
```

```bash
npm run install
```

## Running

The project is now on your machine and all the dependencies should be installed. All that's left to do is to fire up the project. You can do that my running the command:

```bash
npm run dev
```

This will run the project in development mode. It will start a local dev server, it will generate source maps and everything that's required for a modern front-end development environment.

If you want to get the project production ready, then all you have to do is to run:

```bash
npm run build
```

This will bundle up and optimize all of your code, it will rename all of your assets for cache busting (among other things) and will place everything in a `dist` directory at the root level of the project.

## File structure
```
matter-dashboard
├── config
├── dist
├── src
│   ├── images
│   ├── scripts
│   ├── styles
│   ├── views
│   └── index.js
├── .babelrc
├── .eslintrc
├── .gitignore
├── LICENSE
├── package-lock.json
├── package.json
├── postcss.config.js
└── README.md
```

## Contributing

Everyone is welcome to contribute. If you want to add, change or fix something, please submit a PR. All the good stuff will get merged ASAP.


## Author

Designed and coded by me 😁

-   Website: <https://alexandonie.com/>
-   Github: <https://github.com/alexandonie/>

## License

The code is available under the [MIT license](LICENSE).
