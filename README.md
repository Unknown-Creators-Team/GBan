# GBan
マインクラフト統合版の既知のハッカーをリストしたリポジトリです。

## 使い方
[example1.js](/example1.js)と[example2.js](/example2.js)を参考にしてデータを取得してください。

## データの形式
```json
[
    {
        "name": "ハッカーの名前",
        "reason": "BANされた理由",
        "deviceSessionId": "デバイスセッションID",
        "uuid": "UUID",
        "xuid": "XUID"
    }
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
[Issues](https://github.com/Unknown-Creators-Team/GBan/issues/)にて`remove player`ラベルをつけて申請してください。
### 申請時に必要なデータ
- ハッカーの名前

## データの更新方法
[Issues](https://github.com/Unknown-Creators-Team/GBan/issues/)にて`update player`ラベルをつけて申請してください。
### 申請時に必要なデータ
- ハッカーの名前
- 更新後のデータ