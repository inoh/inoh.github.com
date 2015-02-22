---
layout: null
title: null
categories: blog
---
function message() {
  var content = document.querySelector('template').content;
  document.querySelector('#message').appendChild(document.importNode(content, true));
}
function vanilla() {
  var content = String(document.querySelector('#hello-template').innerHTML)
                  .replace(/&lt;/g, '<').replace(/&gt;/g, '>');
  document.querySelector('#vanilla').innerHTML = content;
}
