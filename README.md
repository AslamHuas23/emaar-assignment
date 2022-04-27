# Emaar Assignment

## Getting Started

1. Clone this repo, `git clone https://github.com/handi-dev/react-native-boilerplate.git <your project name>`
2. Go to project's root directory, `cd <your project name>`
3. Run `npm install` to install dependencies
4. Run `npx pod-install` from root of your project.

   If you got error like: `The version of CocoaPods used to generate the lockfile (x.x.x) is higher than the version of the current executable (x.x.x)`, then you can upgrade your cocoapods version.

   If you install cocoapods using homebrew, you can using this command: `brew upgrade cocoapods` if that does not work, try `brew install cocoapods`.

   If you previously install using `gem`, then use this command and run on your terminal: `sudo gem install cocoapods`.

   make sure your cocoapods version is updated after run that command.

   To check your current version of cocoapods, run `pod --version`.

   After that, don't forget to execute in your terminal `pod repo update`

   And, finally, run `npx pod-install`. Those methods must be solved that problem.

   Last method: If All the above steps not work, remove `Podfile.lock` in folder `ios` , and then run `npx pod-install`.

5. Start the packager with `npm start`
6. Connect your device or use emulator that's installed in your pc
7. Run the test application:

- On Android:
  - Run `npx react-native run-android`
- On iOS:
  - Open `npx react-native run-ios`


