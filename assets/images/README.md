# Clearth site image guide

## Current Image Policy
- Brand images such as the top hero, forest scenery, mountains, and background visuals use AI / generated image assets.
- Business-detail images such as wood chips and wood waste use actual photos provided by Clearth where available.
- Heavy machinery is currently a commercial-use-free stock photo until Clearth's own equipment photos are ready.
- Source originals are kept in `work/user-photos/`, `work/stock-images/`, or the project generated-image folder; optimized JPG/WebP files are generated into `assets/images/`.
- `works/` images are still placeholders until real project photos are available, so the "image photo" badge remains visible.
- When real company photos are ready, replace files with the same names and rebuild the site.

## Directory
- `generated/`: トップページのヒーロー画像や背景画像。AI生成画像を使用できます。
- `services/`: 事業内容の説明画像。重機、破砕機、チップ製造設備などは実写真への差し替え推奨です。
- `works/`: 施工実績写真。AI生成画像を実績写真と誤解されないよう、仮画像には「イメージ画像」ラベルを表示しています。
- `company/`: ロゴ、マーク、会社ヤード、スタッフ写真など会社固有の画像を置きます。

## Image List
| 画像ID | 使用ページ | 現在の画像ファイル名 | 推奨サイズ | AI生成画像でよいか | 実写真推奨か | alt文 |
|---|---|---|---|---|---|---|
| hero-aerial | index.html | hero-aerial.jpg / hero-aerial.webp | 2400x1350px以上 / 16:9 | 可 | 任意 | 広島県の森林と街が調和するドローン空撮風景 |
| town-mountain | about.html、contact.html | town-mountain.jpg / town-mountain.webp | 2400x1350px以上 / 16:9 | 可 | 任意 | 山と街が近くにある地域の美しい風景 |
| forest | 未使用 | forest.jpg / forest.webp | 1800x1125px以上 / 16:10 | 仮利用可 | 推奨 | 森林整備のイメージ画像 |
| forestry-machinery | index.html、services.html、works.html、recruit.html、service-danger-tree.html、service-special-cutting.html | forestry-machinery.jpg / forestry-machinery.webp | 1800x1125px以上 / 16:10 | 仮利用可 | 推奨 | 重機による木材搬出作業のイメージ画像 |
| forest-maintenance-main | index.html、services.html、service-forest.html | forest-maintenance-main.jpg / forest-maintenance-main.webp | 1800x1125px以上 / 16:10 | 仮利用可 | 推奨 | チェンソーで森林整備を行う作業者の実写真 |
| standing-tree-assessment-main | index.html、services.html、service-standing-tree.html | standing-tree-assessment-main.jpg / standing-tree-assessment-main.webp | 1800x1125px以上 / 16:10 | 仮利用可 | 推奨 | 立木買取のため現地で立木の調査・査定を行う株式会社Clearthスタッフ |
| heavy-machinery-hauling-main | services.html、service-heavy-machinery.html | heavy-machinery-hauling-main.jpg / heavy-machinery-hauling-main.webp | 1800x1125px以上 / 16:10 | 仮利用可 | 推奨 | 森林内で重機と搬出車両を使い木材を搬出している作業風景 |
| wood-recycling | index.html、services.html | wood-recycling.jpg / wood-recycling.webp | 1800x1125px以上 / 16:10 | 仮利用可 | 推奨 | 木材リサイクル設備と破砕処理のイメージ画像 |
| wood-waste-green | index.html、services.html、service-wood-waste.html | wood-waste-green.jpg / wood-waste-green.webp | 1800x1125px以上 / 16:10 | 仮利用可 | 推奨 | 森林整備や伐採で発生した枝葉と木材廃棄物の実写真 |
| chip-production | index.html | chip-production.jpg / chip-production.webp | 1800x1125px以上 / 16:10 | 仮利用可 | 推奨 | 木質チップ製造設備のイメージ画像 |
| wood-chip-manufacturing-main | index.html、services.html、service-wood-chip.html | wood-chip-manufacturing-main.jpg / wood-chip-manufacturing-main.webp | 1800x1125px以上 / 16:10 | 仮利用可 | 推奨 | コンベアと設備で木質チップを製造している作業風景 |
| asahara-plant-main | access.html | asahara-plant-main.jpg / asahara-plant-main.webp | 2400x1350px以上 / 16:9 | 不可 | 推奨 | 浅原プラントで原木の受け入れから木質チップ製造、保管、出荷まで行う拠点全景 |
| biomass-supply-main | index.html、services.html、service-biomass.html | biomass-supply-main.jpg / biomass-supply-main.webp | 2400x1350px以上 / 16:9 | 仮利用可 | 推奨 | 木質チップの在庫ヤードで大型トラックへ積み込み出荷している作業風景 |
| biomass-shipping-detail | service-biomass.html | biomass-shipping-detail.jpg / biomass-shipping-detail.webp | 1600x1100px以上 / 16:11 | 仮利用可 | 推奨 | 木質チップを大型トラックへ積み込み出荷している作業風景 |
| wood-chip | faq.html、service-wood-chip.html | wood-chip.jpg / wood-chip.webp | 1800x1125px以上 / 16:10 | 仮利用可 | 推奨 | 木質チップとバイオマス燃料のイメージ画像 |
| chip-plant | index.html | chip-plant.jpg / chip-plant.webp | 1800x1125px以上 / 16:10 | 仮利用可 | 推奨 | 木質チップ製造プラントとチップヤードの実写真 |
| crusher | index.html、services.html、service-crushing.html | crusher.jpg / crusher.webp | 1800x1125px以上 / 16:10 | 仮利用可 | 推奨 | 一次破砕機で木材を前処理している株式会社Clearthの作業風景 |
| work-forest-before | index.html、works.html | work-forest-before.jpg / work-forest-before.webp | 1600x1200px以上 / 4:3 | 仮利用のみ可 | 強く推奨 | 山林整備の施工前イメージ画像 |
| work-forest-after | index.html、works.html | work-forest-after.jpg / work-forest-after.webp | 1600x1200px以上 / 4:3 | 仮利用のみ可 | 強く推奨 | 山林整備の施工後イメージ画像 |
| work-recycling-before | index.html、works.html | work-recycling-before.jpg / work-recycling-before.webp | 1600x1200px以上 / 4:3 | 仮利用のみ可 | 強く推奨 | 木材リサイクル作業前のイメージ画像 |
| work-recycling-after | index.html、works.html | work-recycling-after.jpg / work-recycling-after.webp | 1600x1200px以上 / 4:3 | 仮利用のみ可 | 強く推奨 | 木材リサイクル作業後のイメージ画像 |
| work-biomass-before | index.html、works.html | work-biomass-before.jpg / work-biomass-before.webp | 1600x1200px以上 / 4:3 | 仮利用のみ可 | 強く推奨 | バイオマス燃料供給前のイメージ画像 |
| work-biomass-after | index.html、works.html | work-biomass-after.jpg / work-biomass-after.webp | 1600x1200px以上 / 4:3 | 仮利用のみ可 | 強く推奨 | バイオマス燃料供給後のイメージ画像 |
| ogp | 全ページ共通 | ogp.jpg | 1200x630px / 1.91:1 | 可 | 任意 | 株式会社ClearthのOGP画像 |
| clearth-logo | 全ページ共通 | clearth-logo.png | 横長ロゴは幅1000px以上の透過PNG推奨 | 不可 | 正式ロゴ必須 | 株式会社Clearth ロゴ |
| clearth-mark | 全ページ共通 | clearth-mark.png | 512x512px以上の透過PNG推奨 | 不可 | 正式ロゴ必須 | 装飾画像 |

## Image Sources And Usage
The current images are split between AI brand visuals, Clearth-provided actual photos, and a commercial-use-free stock photo.
They are converted into optimized JPG/WebP files during the build. Keep this source list for license review and future replacement.

Official license pages:
- Pexels License: https://www.pexels.com/license/
- Pixabay Content License: https://pixabay.com/service/license-summary/

| Image ID | Type | Source site | License | Source URL | Local source file |
|---|---|---|---|---|---|
| hero-aerial | User-provided brand hero image | 株式会社Clearth provided image | Company-provided image |  | work/user-photos/hero-forest-aerial-actual.png |
| town-mountain | AI / brand image | Project generated image | Project-owned generated image |  | outputs/clearth-site/assets/town-mountain.png |
| forest | AI / brand image | Project generated image | Project-owned generated image |  | outputs/clearth-site/assets/hero-forest.png |
| forestry-machinery | Commercial-use-free stock photo | Pixabay | Pixabay Content License | https://pixabay.com/photos/machine-forest-mulcher-6812266/ | work/stock-images/forestry-machinery.jpg |
| forest-maintenance-main | User-provided actual photo | 株式会社Clearth provided image | Company-provided image |  | work/user-photos/forest-maintenance-main-actual.png |
| standing-tree-assessment-main | User-provided actual photo | 株式会社Clearth provided image | Company-provided image |  | work/user-photos/standing-tree-assessment-main-actual.png |
| heavy-machinery-hauling-main | User-provided actual photo | 株式会社Clearth provided image | Company-provided image |  | work/user-photos/heavy-machinery-hauling-main-actual.png |
| wood-recycling | User-provided actual photo | 株式会社Clearth provided photo | Company-provided actual image |  | work/user-photos/wood-waste-actual.png |
| wood-waste-green | User-provided actual photo | 株式会社Clearth provided photo | Company-provided actual image |  | work/user-photos/wood-waste-green-actual.png |
| chip-production | User-provided actual photo | 株式会社Clearth provided photo | Company-provided actual image |  | work/user-photos/wood-chip-pile-actual.png |
| wood-chip-manufacturing-main | User-provided actual photo | 株式会社Clearth provided image | Company-provided image |  | work/user-photos/wood-chip-manufacturing-main-actual.png |
| asahara-plant-main | User-provided actual photo | 株式会社Clearth provided image | Company-provided image |  | work/user-photos/asahara-plant-main-actual.png |
| biomass-supply-main | User-provided actual photo | 株式会社Clearth provided image | Company-provided image |  | work/user-photos/biomass-supply-main-actual.png |
| biomass-shipping-detail | Cropped user-provided actual photo | 株式会社Clearth provided image | Company-provided image |  | work/user-photos/biomass-shipping-detail-actual.png |
| wood-chip | User-provided actual photo | 株式会社Clearth provided photo | Company-provided actual image |  | work/user-photos/wood-chip-closeup-actual.png |
| chip-plant | User-provided actual photo | 株式会社Clearth provided photo | Company-provided actual image |  | work/user-photos/chip-plant-actual.png |
| crusher | User-provided actual photo | 株式会社Clearth provided photo | Company-provided actual image |  | work/user-photos/crusher-actual.png |
| work-forest-before | User-provided actual photo | 株式会社Clearth provided photo | Company-provided actual image |  | work/user-photos/forestry-work-actual.png |
| work-forest-after | User-provided actual photo | 株式会社Clearth provided photo | Company-provided actual image |  | work/user-photos/hauling-actual.png |
| work-recycling-before | User-provided actual photo | 株式会社Clearth provided photo | Company-provided actual image |  | work/user-photos/wood-waste-actual.png |
| work-recycling-after | User-provided actual photo | 株式会社Clearth provided photo | Company-provided actual image |  | work/user-photos/chip-plant-actual.png |
| work-biomass-before | User-provided actual photo | 株式会社Clearth provided photo | Company-provided actual image |  | work/user-photos/wood-chip-pile-actual.png |
| work-biomass-after | User-provided actual photo | 株式会社Clearth provided photo | Company-provided actual image |  | work/user-photos/shipping-actual.png |

## Replacement
- 画像は同じファイル名で差し替えると、HTML側の変更なしで更新できます。
- 実写真に差し替える場合も、同じ比率に近い画像を用意するとトリミングがきれいに保てます。
- 推奨サイズ、alt文、差し替えメモの機械可読版は `image-manifest.json` を確認してください。
- 施工実績の仮画像を実写真に差し替えた後は、`work/build_clearth_site.py` の `CONFIG["works"]["show_placeholder_badges"]` を `False` にして再ビルドすると、「イメージ画像」ラベルを一括で外せます。

## Production Checklist
- `work/build_clearth_site.py` の `CONFIG["site_url"]` を本番ドメインへ変更する。
- `CONFIG["company"]` の所在地、対応エリア、会社名表記を最終確認する。
- `CONFIG["company"]["locations"]` の本社、浅原プラント、友田プラントの住所とGoogleマップ表示を確認する。
- `CONFIG["contact"]` の電話番号、FAX、電話リンク、メールアドレス、受付時間を正式情報へ変更する。
- `CONFIG["form"]["action"]` を Formspree、Netlify Forms、PHPメールフォームなど本番送信先へ変更する。
- `assets/images/works/` の施工実績画像を実写真へ差し替え、必要に応じて「イメージ画像」ラベルを外す。
- `assets/images/services/` の重機、破砕機、木質チップ製造設備、会社ヤード写真を実写真へ差し替える。
- `sitemap.xml`、`robots.txt`、canonical、OGP、構造化データが本番URLを指しているか確認する。
- ドメイン設定とSSL設定を確認する。
- Google Analytics を設定する。
- Google Search Console に登録し、`sitemap.xml` を送信する。
- Google Business Profile の情報と公式サイト情報を確認する。
- Googleマップの本社、浅原プラント、友田プラントのリンクを確認する。
- お問い合わせフォームの送信テストを行う。
- スマートフォンで `tel:0829780022` の電話発信を確認する。
- `mailto:clearth.191@gmail.com` のメール送信リンクを確認する。
- PCとスマホで、ヘッダー、固定CTA、問い合わせボタン、フォーム項目、電話発信リンクを確認する。
- 画像の表示崩れ、alt文、遅延読み込み、コントラスト、見出し階層を確認する。
- 公開後にPageSpeed Insightsでモバイル/デスクトップの速度とアクセシビリティを確認する。
