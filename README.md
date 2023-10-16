<h1 align="center">StarWarsFans</h1>

StarWarsFans is the mobile application based on React Native CLI for iOS & Android platforms that gives the ability to indicate the total amount of male/female/other favourite characters across the Star Wars Universe. 

This is a [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

Go to next step only if you are completed with ENVIRONMENT!


## Install node_modules

To install node_modules, run the following command in your terminal:

```bash
# npm
npm install

# OR using Yarn
yarn install
```

## Android

First, go to android folder and configure gradlew:

```bash
cd android/
./gradlew clean
```

Then go back and start Metro using npm or yarn:

```bash
cd ../

# npm
npm start

# OR using Yarn
yarn start

```

Then open new terminal and run app on android emulator:

```bash
# npm
npm run android

# OR using Yarn
yarn android

```

## iOS

First, go to ios folder and install pods:

```bash
cd ios/
pod install
```

Then go back and start Metro using npm or yarn:

```bash
cd ../

# npm
npm start

# OR using Yarn
yarn start

```

Then open new terminal and run app on ios emulator:

```bash
# npm
npm run ios

# OR using Yarn
yarn ios

```

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
