# reactnativeMiseWeather

react native로 실행 하는 방법 중 `React Native CLI`를 사용하였습니다.

## Installing dependencies

```shell script
brew install node
brew install watchman
brew tap AdoptOpenJDK/openjdk
brew cask install adoptopenjdk8
```

## Android development environment
`$HOME/.bash_profile`에 아래 내용 추가
```shell script
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

## Project 
### 생성
```shell script
npx react-native init reactnativeMiseWeather
```

### Android 실행
```shell script
npx react-native run-android
```
