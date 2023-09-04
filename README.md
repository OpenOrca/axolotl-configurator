# axolotl-configurator

An online configurator for building Axolotl Yaml files!

Roadmap:
1. Add support for passing your own HF API Key to view private repositories
2. Set up a database to save/share your configs.

## Running Locally:
Make sure you have the latest NodeJS installed
```
git clone https://github.com/OpenOrca/axolotl-configurator.git
cd axolotl-configurator
npm install
npm run dev
```


## Creating your own UI
Take a look at the examples directory https://github.com/OpenOrca/axolotl-configurator/tree/main/src/routes/example to get started.

Each section is created from a list of javascript objects. The currently supported input types are number,text, and selection.

Create a new folder, copying the example directory. the folder name will be the route of the page. Modify the ExampleComponent.svelte to have all of the fields you require.

config.ts defines the default settings for your config, and validation.ts can be used to define conditional settings. Look at the axolotl validation/config as an example.
