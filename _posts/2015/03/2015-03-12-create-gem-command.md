---
layout: post
title:  "GEMで独自コマンドの作り方"
date:   2015-03-12 05:24
categories: blog
---
GEMを作成する際に独自のコマンドを作る際にはまったことの備忘録です。

**GEMの空プロジェクト作成**

{% highlight ruby %}
bundle gem slideparts
cd slideparts
{% endhighlight %}

**binフォルダ作成**

{% highlight ruby %}
mkdir bin
echo puts "test">bin/slide
{% endhighlight %}

**git管理**

{% highlight ruby %}
git init
git add .
git commit -m 'first commit'
{% endhighlight %}

**TODOを修正**

{% highlight ruby %}
vi slideparts.gemspec
# spec.summaryとspec.descriptionを修正する
{% endhighlight %}

**GEM作成**

{% highlight ruby %}
rake build
rake install
{% endhighlight %}

**動かしてみる**

{% highlight ruby %}
slide
# => test
{% endhighlight %}

**まとめ**

なぜ今回こんなブログを書いたかというと最初ネットたどりながらテスト的にGEMのコマンドを試そうとしていました。  
ネットで見るとrubygemsに登録することを前提に書かれていることが多いためgitの登録に触れずに解説してありました。  
そのためgit登録をしないとコマンドが作成されないことにはまってしましました。  
通常はまることはないと思いますがGEMコマンドにはgit必須ということで備忘録です。  
