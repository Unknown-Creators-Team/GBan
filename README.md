# GBan
マインクラフト統合版の既知のハッカーをリストしたリポジトリです。

## 使い方
[example1.js](/examples/example1.js)と[example2.js](/examples/example2.js)を参考にしてデータを取得してください。

## データの形式
```json
[
    {
        "name": "ハッカーの名前",
        "reason": "理由",
        "xuid": "XUID",
        "deviceSessionId": "DID",
        "uuid": "UUID",
        "source": "banのソース",
        "proof": "証拠"
    },
]
```

## データの追加方法
[Issues](https://github.com/Unknown-Creators-Team/GBan/issues/)にて`add player`ラベルをつけて申請してください。
### 申請時に必要なデータ
- ハッカーの名前
- BANされた理由
- ハッカーがチートを使用した動画やスクリーンショット
- デバイスセッションID(オプション)
- UUID(オプション)
- XUID(オプション)

## データの削除方法
[サポートサーバー](https://discord.gg/QF3n85dr4P)の[#サポート](https://discord.com/channels/848856541456105483/1081971937183547492)から異議申し立てを行ってください。
異議申し立ては必ず本人が行ってください。調査や検証を行うために、DIDやUUIDの提供をお願いする場合があります。

## データの更新方法
[Issues](https://github.com/Unknown-Creators-Team/GBan/issues/)にて`update player`ラベルをつけて申請してください。
### 申請時に必要なデータ
- ハッカーの名前
- 更新後のデータ