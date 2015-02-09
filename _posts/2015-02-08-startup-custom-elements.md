---
layout: post
title:  "Custom Elements で独自要素を作成する"
date:   2015-02-08 06:21:33
categories: blog
---
# **Custom Elements**

Custome Elements では標準タグとは別に`<my-tag></my-tag>`のような独自のタグを作成することができます。  
独自のタグを定義するためには`document.registerElement()`を使用します。

{% highlight javascript %}
var MyTag = document.registerElement('my-tag');
{% endhighlight %}

Chrome以外のブラウザではまだまだ未実装なのでpolyfillを実装しておきましょう。  

{% highlight html %}
<script src="bower_components/webcomponentsjs/webcomponents.min.js"></script>
{% endhighlight %}

# 命名規約

Custom Elements では標準タグと切り分けるために命名規約が存在します。  
独自に作成したタグには必ず'`-`'を含める必要があります。  

#### OK

- my-tag
- my-original-tag

#### NG

- mytag
- my_tag
- MyTag

# とりあえず使ってみる

最初は単純に使ったタグを流し込んでみます。

- javascript

{% highlight javascript %}
var MyTag = document.registerElement('my-tag');
/* ↑ HTMLElementを継承したものと同じらしい
var MyTag = document.registerElement('my-tag', {
  prototype: Object.create(HTMLElement.prototype)
});
*/
var myTag = new MyTag();
myTag.innerHTML = "demo";
document.querySelector("#components").appendChild(myTag);
{% endhighlight %}

- HTML

{% highlight html %}
<div id="components"></div>
{% endhighlight %}

- 実行結果

<pre><div id="demo01"></div></pre>
<script>
var MyTag = document.registerElement('my-tag');
var myTag = new MyTag();
myTag.innerHTML = "demo";
document.querySelector("#demo01").appendChild(myTag);
</script>

# 応用編

単純にタグを流し込むだけでは面白くないので独自のボタンを作ってみます。

- javascript

{% highlight javascript %}
var MyButtonProto = Object.create(HTMLButtonElement.prototype);
MyButtonProto.createdCallback = function () {
  this.innerHTML = "MyButton";
  this.addEventListener('click', function(e) {
    alert('click!');
  });
};
MyButton = document.registerElement('my-button', {prototype: MyButtonProto});
{% endhighlight %}

- HTML

{% highlight html %}
<my-button></my-button>
{% endhighlight %}

- 実行結果

「MyButton」をクリックしてみてください。

<script>
var MyButtonProto = Object.create(HTMLButtonElement.prototype);
MyButtonProto.createdCallback = function () {
  this.innerHTML = "MyButton";
  this.addEventListener('click', function(e) {
    alert('click!');
  });
};
MyButton = document.registerElement('my-button', {prototype: MyButtonProto});
</script>

<pre><my-button></my-button></pre>

# まとめ

Custom Elements を使うことで要素の種類を明確化できます。  
プログラムを作る際に特定のクラス名やカスタム属性を拾う必要もなくイベントの登録やスタイルの制御ができます。  
また独自の属性も追加し放題なのでより柔軟に業務独自の処理が実装できると思います。

# **参考**
- polyfill
    - [http://webcomponents.org/](http://webcomponents.org/)
- Custome Elements
    - [http://webcomponents.org/articles/introduction-to-custom-elements/](http://webcomponents.org/articles/introduction-to-custom-elements/)
    - [http://www.html5rocks.com/ja/tutorials/webcomponents/customelements/](http://www.html5rocks.com/ja/tutorials/webcomponents/customelements/)
- リファレンス
    - [https://developer.mozilla.org/ja/docs/Web/API/HTMLButtonElement](https://developer.mozilla.org/ja/docs/Web/API/HTMLButtonElement)