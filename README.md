![Build & Test](https://github.com/DannyHinshaw/paw-array-kba/workflows/Build%20&%20Test/badge.svg)
![Create Artifact](https://github.com/DannyHinshaw/paw-array-kba/workflows/Create%20Artifact/badge.svg)

# paw-array-kba

TODO: Proper archiving for zipped releases

[Paw][paw] extension to handle KBA validation questions automatically for the user.

Built up from [Paw-TicketEvolutionXSignature](https://github.com/bryanjswift/Paw-TicketEvolutionXSignature).

[tevo-api]: https://ticketevolution.atlassian.net/wiki/spaces/API/pages/983115/Signing+requests+with+X-Signature

[paw]: https://paw.cloud

## Install the Extension

1. Download the [`.zip` archive of the latest version][releases]
1. Open the [Paw][paw] application
1. Open preferences for the Paw application
1. Click on "Extensions" in Paw's preferences
1. Click on the "Open Extensions Directory" button at the bottom of the
   "Extensions" preference pane
   ![Click "Open Extensions Directory"](docs/install-05-open-extensions-directory.png)
1. Copy the `.zip` archive of the latest version to the `Extensions` directory
1. Unzip the `.zip` archive which should create a folder named
   `com.dannyhinshaw.PawExtensions.ArrayKBA`

[releases]: https://github.com/dannyhinshaw/ArrayKBA/releases/latest

## Use the Extension

Insert the extension as a dynamic value in a field.

![Insert extension as dynamic value](docs/use-the-force.png)

## Development

### Prerequisites

```shell
npm install
```

### Build

Compiles the source files into the JavaScript which can be used by the Paw application.

```shell
npm run build
```

### Install

Moves the built files into the local "Application Support" directory for
`com.array.Paw`.

```shell
cp dist/ArrayKBA.js $HOME/Library/Containers/com.luckymarmot.Paw/Data/Library/Application\ Support/com.luckymarmot.Paw/Extensions/com.dannyhinshaw.PawExtensions.ArrayKBA
```

### Test

```shell
npm test
```

## License

This Paw Extension is released under the [MIT License](LICENSE). Feel free to fork, and modify!

Copyright © 2021 Danny Hinshaw
