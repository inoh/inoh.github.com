---
layout: post
title:  "AWS IoT にデバイスを登録してテストする"
date:   2017-02-04
categories: blog
---

## AWS IoT に接続

Pythonを使って AWS IoT に接続してみます。  
リファレンスは下記のリンクになります。

[>> リファレンス](https://ap-northeast-1.console.aws.amazon.com/iotv2/home?region=ap-northeast-1#/connectdevice/)

接続するため、以下の流れで作業を行います。

- デバイスの登録
- SDKをダウンロード
- デバイスの設定とテスト

#### デバイス登録

まずはAWS IoT にデバイスを登録します。

![デバイス登録の画面](/images/2017-02-04-connect-step1.png)

#### SDKをダウンロード

PythonのSDKダウンロード確認画面が表示されます。  
その他には先ほど登録したデバイス名とポリシーが表示されています。

![SDKをダウンロード](/images/2017-02-04-connect-step2.png)

ダウンロードしたファイルの中身を確認するとこのファイルが入っています。  
SDKといっても接続用のシェルと証明書が入っているだけみたいです。

- start.sh
- TemperatureSensor.cert.pem
- TemperatureSensor.private.key
- TemperatureSensor.public.key

#### デバイスの設定とテスト

最後にダウンロードしたSDKの使用手順が表示れます。

![デバイスの設定とテスト](/images/2017-02-04-connect-step3.png)

接続したデバイスにSDKを入れ、手順に従い実行します。  
単純にラズパイ３上で実行するとこんなエラーが発生しました。

```
error: could not create '/usr/local/lib/python2.7/dist-packages/AWSIoTPythonSDK': Permission denied
```

権限が足りないようなので `./start.sh` で実行していたところを `sudo ./start.sh` に変えてもう１回実行。  
そしたらこんなエラーに変わりました。

```
ImportError: No module named AWSIoTPythonSDK.MQTTLib
```

何かモジュールが足りてないようですね。。。  
これを入れてみます。

[>> 追加するモジュール](https://pypi.python.org/pypi/AWSIoTPythonSDK/1.0.0)

下記のコマンド手順で不足しているモジュールをインストールします。

 ```
 > wget https://pypi.python.org/packages/b8/41/ec9d0786b4ae9f6d205a68cf96ade89414337ebaabb88740f02477d840fa/AWSIoTPythonSDK-1.0.0.tar.gz
 > tar xfvz AWSIoTPythonSDK-1.0.0.tar.gz
 > cd AWSIoTPythonSDK-1.0.0
 > chmod +x setup.py
 > sudo python ./setup.py install
 ```

これでもう一回 `sudo ./start.sh` を実行します。  
次にブラウザに戻って確認するとなにやらログが流れているのが確認できます。

![登録確認](/images/2017-02-04-connect-send-message.png)

そして `Send message` ボタンでメッセージを送信し、最後にコンソールを確認するとブラウザで入力した内容が表示されます。

```
ew Message 104
from topic:
sdk/test/Python
--------------


Received a new message:
test
from topic:
sdk/test/Python
--------------


2017-02-03 21:30:39,547 - AWSIoTPythonSDK.core.protocol.mqttCore - DEBUG - Try to put a publish request 107 in the TCP stack.
2017-02-03 21:30:39,548 - AWSIoTPythonSDK.core.protocol.mqttCore - DEBUG - Publish request 107 succeeded.
```

## まとめ

デバイスの登録に関しては画面の指示に従いそのまま入力するばほぼ完了できます。  
この登録が完了すると次のチュートリアルが表示されるのでこのあたりを次はやってみようかなと思います。

![次のチュートリアル](/images/2017-02-04-connect-next.png)
