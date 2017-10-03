---
layout: post
title:  "どうせならReact使ってスライド作る"
date:   2017-07-30
categories: blog
published: false
---

この度Reactの話をする必要性が出てきたため、SwiperとReactを併せてスライドが作れないかやってみました。

## やること

- スライドのパーツをReactのコンポーネント化して簡単にHTMLのスライドが作れないか試して見る
- できればコンポーネントを公開する

## React環境を作る

React初学者が最初にReactをやるために簡単に土台を作ってくれるパッケージがあるためそれを使用します。

```
> npm install -g create-react-app
> sudo create-create-app slide
```

少し時間はかかりますが最低限のReactの環境はこれで完成になります。
あとは

```
cd slide
npm start
```

で動作確認が行えます。

## Swiperを動かす

ReactでSwiperを動かします。
Swiperに対応したReactのライブラリが見つからなかったので自分で作り込んでみます。

```
> npm install -g swiper
```
