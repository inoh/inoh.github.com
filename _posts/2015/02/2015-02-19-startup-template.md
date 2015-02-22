---
layout: post
title:  "標準HTMLテンプレートの使い方"
date:   2015-02-19 05:45
categories: blog
---
<script src="/js/underscore-min.js"></script>
<script type="text/javascript" src="sample.html"></script>
# **Template**  

Templateはjavascriptから簡単にHTMLを作る仕組みです。  
有名どころではunderscore.jsのtemplateに近いところがあります。  
目新しい機能ではないですがTemplate使用有無と比較して気がついた点があったのでそのあたりを紹介します。

# **まずはTemplateを使ってみる**

ボタンをクリックするとhelloと表示するサンプルです。

- HTML

{% highlight html %}
<button onclick="message()">click me!</button>
<div id="message"></div>
<template>
  <div>say hello!</div>
  <script>alert("hello");</script>
</template>
{% endhighlight %}

- javascript

{% highlight javascript %}
function message() {
  var content = document.querySelector('template').content;
  document.querySelector('#message').appendChild(document.importNode(content, true));
}
{% endhighlight %}

- 結果

<div id="message"></div>
<button onclick="message()">click me!</button>
<template>
  <div>say hello!</div>
  <script>alert("hello");</script>
</template>

特に問題なく動きます。

# **次にTemplateなしで実現する**

- HTML

{% highlight html %}
<div id="vanilla"></div>
<button onclick="vanilla()">click me!</button>
<script id="hello-template" type="text/template">
  <div>say hello!</div>
  &lt;script&gt;alert("hello");&lt;/script&gt;
</script>
{% endhighlight %}

- javascript

{% highlight javascript %}
function vanilla() {
  var content = String(document.querySelector('#hello-template').innerHTML)
                  .replace(/&lt;/g, '<').replace(/&gt;/g, '>');
  document.querySelector('#vanilla').innerHTML = content;
}
{% endhighlight %}

- 結果

<div id="vanilla"></div><button onclick="vanilla()">click me!</button><script id="hello-template" type="text/template"><div>say hello!</div><script>alert("hello")</script></script>

say hello!の文字は表示されますがalertは実行されませんでした。  
Templateの場合は取得結果がDOMとして返されます。  
それに対してscriptタグを使用してテンプレート化した場合は取得結果がテキスト情報でしかないためDOMに変換する必要が有ります。

## まとめ

Template要素を使う意義

- テキストからDOMを生成せずにjavascriptを含めてテンプレート化できる
- scriptタグを使い回していないためかっこをエスケープする必要がない

Templateを使うことでjavascriptを含めてテンプレート化できるのは大きく感じました。  
従来の方法だとHTMLを流し込んだ後に必要に応じてイベントの登録を行っていました。  
javascriptを含めることでイベント登録もあわせてできます。  
使い手の不要な意識が減ることはよいですよね！

## 参考

- [http://www.html5rocks.com/ja/tutorials/webcomponents/template/](http://www.html5rocks.com/ja/tutorials/webcomponents/template/)