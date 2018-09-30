
# react-native-component-kit

## Getting started

`$ npm install react-native-component-kit --save`

### Mostly automatic installation

`$ react-native link react-native-component-kit`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-component-kit` and add `RNComponentKit.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNComponentKit.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.reactlibrary.RNComponentKitPackage;` to the imports at the top of the file
  - Add `new RNComponentKitPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-component-kit'
  	project(':react-native-component-kit').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-component-kit/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-component-kit')
  	```

#### Windows
[Read it! :D](https://github.com/ReactWindows/react-native)

1. In Visual Studio add the `RNComponentKit.sln` in `node_modules/react-native-component-kit/windows/RNComponentKit.sln` folder to their solution, reference from their app.
2. Open up your `MainPage.cs` app
  - Add `using Component.Kit.RNComponentKit;` to the usings at the top of the file
  - Add `new RNComponentKitPackage()` to the `List<IReactPackage>` returned by the `Packages` method


## Usage
```javascript
import RNComponentKit from 'react-native-component-kit';

// TODO: What to do with the module?
RNComponentKit;
```
  