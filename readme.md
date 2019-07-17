# Plumage CLI

This is the command-line interface for [Plumage](https://github.com/ryangittings/plumage). It downloads and installs.

## Requirements

You'll need the following software installed to get started.

  * [Node.js](http://nodejs.org) 0.12+: Use the installer provided on the NodeJS website.
    * With Node installed, run `[sudo] npm install -g gulp`.
  * [Git](http://git-scm.com/downloads): Use the installer for your OS.
    * Windows users can also try [Git for Windows](http://git-for-windows.github.io/).

## Installing

The Plumage CLI is installed through npm/yarn.

```bash
yarn global add plumage-cli
```

This will add the `plumage` command to your system.

### Updating

The CLI periodically gets updates that add features or fix bugs. Use yarn to upgrade the CLI to the newest version.

```bash
yarn global add plumage-cli
```

To check what version you currently have, use `-v`.

```bash
plumage -v
```