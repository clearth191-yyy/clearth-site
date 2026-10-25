# 株式会社Clearth 公式サイト 公開前メモ

現行の最新版は、このフォルダ内のHTML・`assets/css/`・`assets/js/`です。`site-settings.json` は設定の控えで、変更はHTMLへ自動反映されません。旧 `work/build_clearth_site.py` で再生成する場合は別フォルダで出力し、現在の文章・画像・改行・デザインとの差分を確認してください。

## 差し替え場所
| 内容 | 編集箇所 | 現在の値 | 反映先 |
|---|---|---|---|
| 本番URL | `CONFIG["site_url"]` | `https://clearth191-yyy.github.io/clearth-site` | canonical、OGP、構造化データ、sitemap、robots、フォーム完了URL |
| 会社名 | `CONFIG["company"]["name"]` | `株式会社Clearth` | 全ページの社名、構造化データ |
| 所在地 | 各HTMLと `site-settings.json` の `company.address` | `〒738-0223 広島県廿日市市浅原962-3` | 会社概要、問い合わせ、フッター、構造化データ |
| 対応エリア | `CONFIG["company"]["area_served"]` | `広島県全域を中心に対応` | 会社概要、問い合わせ、構造化データ |
| 電話番号表示 | 各HTMLと `site-settings.json` の `contact.phone_display` | `0829-78-0222` | フッター、問い合わせ、電話CTA |
| 電話リンク | 各HTMLと `site-settings.json` の `contact.phone_href` | `0829780222` | `tel:`リンク、スマホワンタップ発信 |
| FAX | `CONFIG["contact"]["fax_display"]` | `0829-78-2277` | 会社概要、お問い合わせ、フッター |
| メール表示 | `CONFIG["contact"]["email_display"]` | `clearth.191@gmail.com` | フッター、問い合わせ |
| メール送信先 | `CONFIG["contact"]["email_href"]` | `clearth.191@gmail.com` | `mailto:`リンク、構造化データ |
| 拠点情報 | 各HTMLと `site-settings.json` の `company.locations` | `本社（浅原962-3）の1拠点` | 会社概要、お問い合わせ、アクセスページ、構造化データ |
| フォーム送信先 | `contact.html` の `form[action]` と `site-settings.json` の `form.action` | `https://formspree.io/f/xzeblrjd` | お問い合わせフォーム |
| お知らせの公開日 | `index.html` の `.home-news__list`、`news.html` の `#website-renewal` の一覧見出し・本文 | 表示：`2026.10.26`／`time[datetime]`：`2026-10-26` | 「ホームページをリニューアルしました」の3か所の日付をそろえて更新する |

## フォーム設定
- 現行フォームはFormspreeへPOSTし、`assets/js/main.js` で送信結果を同じページ内に表示します。現在は `thanks.html` へ自動遷移しません。
- 必須項目は、お名前・電話番号・ご相談内容の選択・お問い合わせ内容・プライバシーポリシーへの同意です。メールアドレスは任意ですが、入力された場合はブラウザの形式チェックがあります。
- honeypotの入力名は `_gotcha` です。
- Formspree管理画面の通知先・有効化・実メール受信は未確認です。外部への実送信テストは、公開前に別途実施してください。

## 電話・メール確認
- 電話リンクは `tel:0829780222` です。スマートフォンでタップして発信画面が開くか確認してください。
- メールリンクは `mailto:clearth.191@gmail.com` です。メールソフトが開くか確認してください。

## 施工実績写真
- 現在の施工実績には、開発コメントで生成・仮素材と記録されている画像があります。画面上のBEFORE／AFTERラベルや開発コメントだけを根拠に、実際の施工記録として公開できるとは判断しないでください。
- 公開前に写真の由来・同一現場の施工前後・説明内容を確認し、必要な実写真と記録に差し替えてください。現在のHTMLには「イメージ画像」のバッジを追加していません。
- トップの30秒動画、植林カード、森づくりストーリーの森林見学・年輪観察画像は試作用素材です。公開可否・利用条件を確認し、実際の開催実績や参加人数として説明しないでください。
- 画像ごとの推奨サイズやalt文は `assets/images/README.md` と `assets/images/image-manifest.json` を確認してください。

## 公開前チェックリスト / Production Checklist
- ドメイン設定を完了し、本番URLを `CONFIG["site_url"]` に設定した。
- SSL設定を確認し、`https://` で表示できることを確認した。
- 電話番号、FAX、電話リンク、メールアドレス、所在地、受付時間を正式情報にした。
- 浅原の本社1拠点の住所とGoogleマップを確認した。
- フォーム送信先を本番用に設定し、テスト送信した。
- 施工実績画像を実写真へ差し替えた場合、「イメージ画像」ラベルを非表示にした。
- OGP画像、ロゴ、favicon相当のアイコンを確認した。
- Google Analytics を設定した。
- Google Search Console に登録し、`sitemap.xml` を送信した。
- Google Business Profile の会社情報、電話番号、拠点情報と一致していることを確認した。
- Googleマップの浅原本社のリンクと埋め込み表示を確認した。
- `sitemap.xml` と `robots.txt` が本番URLを指していることを確認した。
- 電話発信、メール送信、お問い合わせフォーム送信を確認した。
- スマホで固定CTAが本文やフォーム操作を邪魔しないことを確認した。
- 全ページのリンク切れ、画像切れがないことを確認した。
- canonical、OGP、構造化データ、sitemap、robotsが本番URLを指していることを確認した。
- PageSpeed Insightsで画像サイズ、表示速度、アクセシビリティを確認した。
