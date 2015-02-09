---
layout: post
title:  "WebComponentsをはじめてみる"
date:   2015-02-07 06:21:33
categories: blog
---
# **WebComponentsの機能**

WebComponentsはHTML,javascript,CSSをまとめて部品化するための標準仕様です。  
まだChrome以外では未実装なブラウザが多いですがpolyfillを使用することにより実装可能です。  
今回はWebComponentsで何ができるんだ！というところで触ってみた結果をまとめてみました。  

WebComponentsは大きく４つの機能が存在します。

- Custom Elements
- HTML Imports
- Templates
- Shadow DOM

[※各種ブラウザのサポート状況はこちら](http://caniuse.com/#search=components)

これらの４つの機能をそれぞれ検証してみようと思います。

