---
layout: post
title:  "HTML Importsで楽をする方法"
date:   2015-02-11 05:52
categories: blog
---
# **HTML Imports**

HTML ImportsはHTML,javascript,CSSをまとめてテンプート化する仕組みです。  
今までもbootstrapのようにjavascriptやCSSを外出ししjavascriptでHTMLを操作することで実現はできていました。  
ただ一式を制御するために決まった形を毎回コピーペーストするのが一般的だと思います。  
HTML Importsを使用するとjavascriptやCSSを個別定義することなく下記のようにlinkひとつで定義できます。

{% highlight html %}
<link rel="import" href="html-imports.html">
{% endhighlight %}

# **Bootstrapをテンプレート化**

HTML Importsを使用してBootstrapを簡略化しています。  
テンプレート部分を見ると大変そうに見えますが実際の実装は少ないことがわかります。  
これらの簡略化をサーバ側の処理を通さずにできることがすごいことだと思います。

- テンプレート

{% highlight html %}
<link rel="stylesheet" href="http://getbootstrap.com/dist/css/bootstrap.min.css">
<style>
  body {
    padding-top: 50px;
  }
  .starter-template {
    padding: 40px 15px;
    text-align: center;
  }
</style>
<!--[if lt IE 9]>
<script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
<script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
<![endif]-->

<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
<script src="http://getbootstrap.com/dist/js/bootstrap.min.js"></script>

<template>
  <nav class="navbar navbar-inverse navbar-fixed-top">
    <div class="container">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="#">Project name</a>
      </div>
      <div id="navbar" class="collapse navbar-collapse">
        <ul class="nav navbar-nav">
          <li class="active"><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div><!--/.nav-collapse -->
    </div>
  </nav>
</template>

<script>
$(function () {
  var proto = Object.create(HTMLElement.prototype);
  proto.createdCallback = function() {
    var link = document.querySelector('link[rel="import"]');
    var template = link.import.querySelector('template');
    this.innerHTML = template.innerHTML;
  };
  document.registerElement('x-bootstrap-header', {prototype: proto});
});
</script>
{% endhighlight %}

- 実装

{% highlight html %}
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <script src="/js/webcomponents.min.js"></script>
    <link rel="import" href="bootstrap.html">
  </head>
  <body>

    <x-bootstrap-header></x-bootstrap-header>
    
    <div class="container">
      <div class="starter-template">
        <h1>Header</h1>
        <p class="lead">Contents</p>
      </div>
    </div>
    
  </body>
</html>
{% endhighlight %}

- 実行結果

<iframe src="bootstrap-view.html" style="width: 100%; height: 300px;"></iframe>

# **まとめ**

通常HTMLをテンプレート化するためにはサーバで行うかjavascriptでがりがりDOMを作り込んでやるのが一般的でした。  
HTML Importsを使うことでサーバを通さずにHTML,javascript,CSSを一式テンプレート化するこができ、決まった形式を使い回すのにもとても便利に感じました。

# **参考**
- HTML Imports
    - [http://www.html5rocks.com/ja/tutorials/webcomponents/imports/](http://www.html5rocks.com/ja/tutorials/webcomponents/imports/)
