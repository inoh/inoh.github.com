---
layout: post
title:  "react-native をとりあえずビルドして動かして見る"
date:   2017-10-03
categories: blog
---

React Native の公式サイト [Getting Started](http://facebook.github.io/react-native/docs/getting-started.html) をとりあえず読んでみます。

WebでReactを作るときには `create-react-app` というのがありますが Native なアプリでも同様なものがあるようです。  
とりあえずコマンドらしきものを写経してみます。

```
> npm install -g create-react-native-app
> ~/.ndenv/versions/v6.9.5/bin/create-react-native-app AwesomeProject
```

なぜか `create-react-native-app` のパスが通ってなかったのでフルパスを指定しました。  
初期プロジェクトを作成したらそのまま起動します。

```
> cd AwesomeProject
> npm start
```

実行すると `watchman` をインストールするか次のコマンドを実行しろとエラーになりました。  
調べて見るとオープンできるファイルの数が足りなかったのと、使用可能なファイル記述子を増やすコマンドらしいです。

```
> sudo sysctl -w kern.maxfiles=5242880
> sudo sysctl -w kern.maxfilesperproc=524288
```

このオプションを変更し再度 `npm start` を実行すると画面にQRコードが表示されます。  
あとは `Expo Client` というアプリを落としてきてアプリ経由でQRコードを読み込むと自動でアプリのビルドが走って `App.js` を編集してねって画面が表示されます。  
簡単すぎてこれでいいのかって気になってきます。

あとはReactの仕様とReactNative独自のコンポーネントを覚えながら粛々と作っていくだけかなと思います。  
これからいろいろと触って遊んでみよう！
