# 株式会社Clearth 公式サイト 公開前メモ

このサイトは `work/build_clearth_site.py` から生成しています。公開前の差し替えは、同ファイル上部の `CONFIG` を編集してから再ビルドしてください。

## 差し替え場所
| 内容 | 編集箇所 | 現在の値 | 反映先 |
|---|---|---|---|
| 本番URL | `CONFIG["site_url"]` | `https://clearth191-yyy.github.io/clearth-site` | canonical、OGP、構造化データ、sitemap、robots、フォーム完了URL |
| 会社名 | `CONFIG["company"]["name"]` | `株式会社Clearth` | 全ページの社名、構造化データ |
| 所在地 | `CONFIG["company"]["address"]` | `〒738-0222 広島県廿日市市津田5267-3` | 会社概要、問い合わせ、フッター、構造化データ |
| 対応エリア | `CONFIG["company"]["area_served"]` | `広島県全域を中心に対応` | 会社概要、問い合わせ、構造化データ |
| 電話番号表示 | `CONFIG["contact"]["phone_display"]` | `0829-78-0022` | フッター、問い合わせ、電話CTA |
| 電話リンク | `CONFIG["contact"]["phone_href"]` | `0829780022` | `tel:`リンク、スマホワンタップ発信 |
| FAX | `CONFIG["contact"]["fax_display"]` | `0829-78-2277` | 会社概要、お問い合わせ、フッター |
| メール表示 | `CONFIG["contact"]["email_display"]` | `clearth.191@gmail.com` | フッター、問い合わせ |
| メール送信先 | `CONFIG["contact"]["email_href"]` | `clearth.191@gmail.com` | `mailto:`リンク、構造化データ |
| 拠点情報 | `CONFIG["company"]["locations"]` | `本社 / 浅原プラント / 友田プラント` | 会社概要、お問い合わせ、アクセスページ、構造化データ |
| フォーム送信先 | `CONFIG["form"]["action"]` | `https://formspree.io/f/REPLACE_ME` | お問い合わせフォーム |
| 施工実績ラベル | `CONFIG["works"]["show_placeholder_badges"]` | `True` | 「イメージ画像」ラベルの一括表示/非表示 |

## フォーム設定
- Formspreeを使う場合: `CONFIG["form"]["action"]` を発行されたURLへ差し替えます。
- Netlify Formsを使う場合: `contact.html` には `data-netlify="true"` と `form-name` を入れています。必要に応じて `action` を `thanks.html` などに変更してください。
- PHPメールフォームを使う場合: `CONFIG["form"]["action"]` をPHPファイルのパスへ差し替えます。
- スパム対策用のhoneypotは `CONFIG["form"]["honeypot_name"]` で管理しています。

## 電話・メール確認
- 電話リンクは `tel:0829780022` です。スマートフォンでタップして発信画面が開くか確認してください。
- メールリンクは `mailto:clearth.191@gmail.com` です。メールソフトが開くか確認してください。

## 施工実績写真
- 実写真へ差し替えるまでは、`assets/images/works/` の画像に「イメージ画像」ラベルが表示されます。
- 実写真へ差し替えた後は、`CONFIG["works"]["show_placeholder_badges"]` を `False` にして再ビルドすると一括でラベルを外せます。
- 画像ごとの推奨サイズやalt文は `assets/images/README.md` と `assets/images/image-manifest.json` を確認してください。

## 公開前チェックリスト / Production Checklist
- ドメイン設定を完了し、本番URLを `CONFIG["site_url"]` に設定した。
- SSL設定を確認し、`https://` で表示できることを確認した。
- 電話番号、FAX、電話リンク、メールアドレス、所在地、受付時間を正式情報にした。
- 本社、浅原プラント、友田プラントの住所とGoogleマップを確認した。
- フォーム送信先を本番用に設定し、テスト送信した。
- 施工実績画像を実写真へ差し替えた場合、「イメージ画像」ラベルを非表示にした。
- OGP画像、ロゴ、favicon相当のアイコンを確認した。
- Google Analytics を設定した。
- Google Search Console に登録し、`sitemap.xml` を送信した。
- Google Business Profile の会社情報、電話番号、拠点情報と一致していることを確認した。
- Googleマップの本社、浅原プラント、友田プラントのリンクと埋め込み表示を確認した。
- `sitemap.xml` と `robots.txt` が本番URLを指していることを確認した。
- 電話発信、メール送信、お問い合わせフォーム送信を確認した。
- スマホで固定CTAが本文やフォーム操作を邪魔しないことを確認した。
- 全ページのリンク切れ、画像切れがないことを確認した。
- canonical、OGP、構造化データ、sitemap、robotsが本番URLを指していることを確認した。
- PageSpeed Insightsで画像サイズ、表示速度、アクセシビリティを確認した。
