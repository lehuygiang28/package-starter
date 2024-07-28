# Package Starter 🚀

Kickstart your next Node.js package with this pre-configured TypeScript template. Get up and running in minutes!

## ✨ Features

- **[TypeScript](https://www.typescriptlang.org/):** Type-safe code with [@tsconfig/recommended](https://github.com/tsconfig/bases#recommended-tsconfigjson) settings.
- **[Jest](https://jestjs.io/):** Write comprehensive tests with ease.
- **[Biome](https://biomejs.dev/):** Maintain a consistent code style with automated linting and formatting.
- **[rimraf](https://www.npmjs.com/package/rimraf):** Easily clean your build directory.
- **[release-it](https://github.com/release-it/release-it):** Automatically generate release notes, tag ... and publish your release.
- Built and signed via [GitHub Actions](https://github.com/lehuygiang28/package-starter/actions): Create a GitHub release and your package will be published automatically.

## 🚀 Quick Start

You can quickly create a new repository from this template by clicking the **[Use this template](https://github.com/new?template_name=package-starter&template_owner=lehuygiang28)** button at the top of the repository page on GitHub.

Alternatively, you can use `npx degit` to scaffold a new project from this template:

1. **Scaffold the project:**

   ```bash
   npx degit lehuygiang28/package-starter my-package
   cd my-package
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

You can also clone the repository manually:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/lehuygiang28/package-starter.git my-package
   cd my-package
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

## 🧰 Scripts

- `build`: Builds the project
- `prepare`: Prepares the project for publishing
- `test`: Runs the tests
- `test:cov`: Runs the tests with coverage
- `lint`: Lints the code
- `lint:fix`: Lints the code and fixes any errors
- `format`: Formats the code
- `format:fix`: Formats the code and fixes any errors
- `release`: Releases the project
- `release:pre`: Pre-releases the project

## 🛠️ Development Recommendations

- Install the [Biome extension](https://biomejs.dev/guides/editors/first-party-plugins/) for a seamless development experience.

## 📖 Folder structures

### Top-level directories

============================

> Root directory of the package

```md
package-starter
├── .github                         # Github configurations
├── .vscode                         # Visual Studio Code configurations
├── example                         # Example usage of the package
├── lib                             # Compiled JavaScript code
├── node_modules                    # Node.js modules installed by npm or yarn
├── src                             # Source code of the package
├── test                            # Test files
├── .editorconfig                   # Configuration file for code editor settings
├── .gitignore                      # Files and folders to be ignored by Git
├── .npmignore                      # Files and folders to be ignored by npm
├── .release-it.json                # Configuration file for release-it, a tool for automating releases
├── biome.json                      # Configuration file for Biome, a code formatter and linter
├── jest.config.ts                  # Configuration file for Jest, a testing framework
├── LICENSE                         # License file for the project
├── package-lock.json               # Lockfile generated by npm, specifying the exact versions of installed packages
├── package.json                    # Manifest file for the package, containing metadata and dependencies
├── README.md                       # Readme file for the project
└── tsconfig.json                   # Configuration file for TypeScript
```

### Subdirectories

============================

> Subdirectories of the package

#### Github configurations

```md
.
├── ...
├── .github                         # Github configurations
│   ├── workflows                   # Github workflows
│   │   ├── build-and-test-pr.yml   # Workflow for building and testing pull requests
│   │   └── publish.yml             # Workflow for publishing the package
│   ├── CODE_OF_CONDUCT.md          # Code of conduct for the project
│   └── FUNDING.md                  # Information about funding the project
└── ...
```

#### Visual Studio Code configurations

```md
.
├── ...
├── .vscode                         # Visual Studio Code configurations
│   ├── extensions.json             # Recommended extensions for the project
│   └── settings.json               # Project-specific settings for VS Code
└── ...
```

#### Example usage of the package

```md
.
├── ...
├── example                         # Example usage of the package
│   └── index.ts                    # Example script
└── ...
```

#### Compiled JavaScript code

> Files compiled from TypeScript

```md
.
├── ...
├── lib                             # Compiled JavaScript code
│   ├── hello-world.d.ts            # TypeScript definition file for hello-world.js
│   ├── hello-world.js              # Compiled JavaScript code for hello-world.ts
│   ├── index.d.ts                  # TypeScript definition file for index.js
│   └── index.js                    # Compiled JavaScript code for index.ts
└── ...
```

#### Node.js modules installed by node packages manager

> All installed Node.js modules by run `npm install` or `yarn install`

```md
.
├── ...
├── node_modules                    # Node.js modules installed by npm or yarn
│   └── ...                         # All installed Node.js modules
└── ...
```

#### Source code of the package

> Write your TypeScript code here

```md
.
├── ...
├── src                             # Source code of the package
│   ├── hello-world.ts              # TypeScript code for a hello world function
│   └── index.ts                    # Main entry point of the package
└── ...
```

#### Test files

```md
.
├── ...
├── test                            # Test files
│   └── hello-world.test.ts         # Unit tests for hello-world.ts
└── ...
```

#### Configuration files

> Configuration files for the package

```md
.
├── ...
├── .editorconfig                   # Configuration file for code editor settings
├── .gitignore                      # Files and folders to be ignored by Git
├── .npmignore                      # Files and folders to be ignored by npm
├── .release-it.json                # Configuration file for release-it, a tool for automating releases
├── biome.json                      # Configuration file for Biome, a code formatter and linter
├── jest.config.ts                  # Configuration file for Jest, a testing framework
├── LICENSE                         # License file for the project
├── package-lock.json               # Lockfile generated by npm, specifying the exact versions of installed packages
├── package.json                    # Manifest file for the package, containing metadata and dependencies
├── README.md                       # Readme file for the project
└── tsconfig.json                   # Configuration file for TypeScript
```

## 🙌 Contributing

Contributions are welcome! Please open an issue or submit a pull request if you have any suggestions or improvements.

## License

**[MIT](LICENSE) © [Lê Huy Giang](https://github.com/lehuygiang28)**
