---
layout: post
title:  "HTMLをカプセル化する"
date:   2015-02-19 23:01
categories: blog
---

# **ShadowDOM**

ShadowDOMはstylesheetをカプセル化する仕組みです。  
ShadowDOMを使用する場合は下記のようにjavascriptでcreateShadowRoot()を使用します。

- HTML

{% highlight html %}
<div id="contents"></div>
<script>
var root = document.querySelector('div#contents').createShadowRoot();
root.innerHTML = "<style>div{color: red;}</style><div>Hello!</div>";
</script>
{% endhighlight %}

- 実行結果

<div id="contents"></div>
<script>
var root = document.querySelector('div#contents').createShadowRoot();
root.innerHTML = "<style>div{color: red;}</style><div>Hello!</div>";
</script>

div要素は他でも使用していますが赤くなるのはHello!のみです。  
ShadowDOMを使用すれば外部要因を気にせず部品の提供ができます。

# **参考**

- [http://www.html5rocks.com/ja/tutorials/webcomponents/shadowdom/](http://www.html5rocks.com/ja/tutorials/webcomponents/shadowdom/)
