# 阅读订阅源备份仓（reader-backup）

本仓存放影视仓阅读订阅源（Legado / 阅读 3.0 / Sigma 通用 JSON 格式），作为 gitee 即时 451 时的 GitHub 兜底。

## 一键整合包（推荐）

`all.json` = 全部 21 个阅读源的合集，**一次网络导入全部源**：

```
https://raw.githubusercontent.com/ericxiaox/reader-backup/main/all.json
```

导入方式：阅读 App（Legado / 阅读 3.0 / Sigma）→「我的」→「订阅源管理」→「右上角 +」→「网络导入」→ 粘贴上面的链接 → 确定。

合集内容（按此顺序）：

  1. h55e抖音.json（📱沉浸·抖音菜单）
  2. 抖阴18.json（🎬换源·抖阴18）
  3. 色花堂.json（🏛社区·色花堂）
  4. 黄果短剧.json（🏛社区·黄果短剧）
  5. 集芳阁.json（🏛社区·集芳阁）
  6. 黑料不打烊.json（🍉黑料·不打烊）
  7. 黑料网.json（🍉黑料·黑料网）
  8. 51吃瓜.json（🍉黑料·51吃瓜）
  9. 51暗网.json（🍉黑料·51暗网）
  10. 91爆料.json（🍉黑料·91爆料）
  11. 91蚪阴.json（📱沉浸·91蚪阴）
  12. 抖阴.json（🎬换源·抖阴）
  13. 无限臀山.json（🎬换源·无限臀山）
  14. 每日大赛.json（🍉黑料·每日大赛）
  15. 玉羞园.json（🎬换源·玉羞园）
  16. 绿色小导航.json（🏛社区·绿色小导航）
  17. onlyscroll.json（📱沉浸·OnlyScroll）
  18. shortsxxx.json（📱沉浸·Shorts）
  19. douyin18one.json（📱沉浸·抖音）
  20. 写真馆.json（📷图集·写真馆）
  21. 91热爆短视频.json（📱沉浸·热爆短视频）

## 单源链接（每个源一个文件）

本仓同时存放全部 21 个源的**单文件**，可直接粘贴发送给别人、或在阅读 App 里网络导入：

```
https://raw.githubusercontent.com/ericxiaox/reader-backup/main/<文件名>.json
```

⚠ 文件名含中文时**必须 percent-encode**，直接粘中文名 GitHub raw 会回 400 Bad request。
下面的链接已经编码好，**直接复制整条**即可：

  1. h55e抖音.json
     https://raw.githubusercontent.com/ericxiaox/reader-backup/main/h55e%E6%8A%96%E9%9F%B3.json
  2. 抖阴18.json
     https://raw.githubusercontent.com/ericxiaox/reader-backup/main/%E6%8A%96%E9%98%B418.json
  3. 色花堂.json
     https://raw.githubusercontent.com/ericxiaox/reader-backup/main/%E8%89%B2%E8%8A%B1%E5%A0%82.json
  4. 黄果短剧.json
     https://raw.githubusercontent.com/ericxiaox/reader-backup/main/%E9%BB%84%E6%9E%9C%E7%9F%AD%E5%89%A7.json
  5. 集芳阁.json
     https://raw.githubusercontent.com/ericxiaox/reader-backup/main/%E9%9B%86%E8%8A%B3%E9%98%81.json
  6. 黑料不打烊.json
     https://raw.githubusercontent.com/ericxiaox/reader-backup/main/%E9%BB%91%E6%96%99%E4%B8%8D%E6%89%93%E7%83%8A.json
  7. 黑料网.json
     https://raw.githubusercontent.com/ericxiaox/reader-backup/main/%E9%BB%91%E6%96%99%E7%BD%91.json
  8. 51吃瓜.json
     https://raw.githubusercontent.com/ericxiaox/reader-backup/main/51%E5%90%83%E7%93%9C.json
  9. 51暗网.json
     https://raw.githubusercontent.com/ericxiaox/reader-backup/main/51%E6%9A%97%E7%BD%91.json
  10. 91爆料.json
     https://raw.githubusercontent.com/ericxiaox/reader-backup/main/91%E7%88%86%E6%96%99.json
  11. 91蚪阴.json
     https://raw.githubusercontent.com/ericxiaox/reader-backup/main/91%E8%9A%AA%E9%98%B4.json
  12. 抖阴.json
     https://raw.githubusercontent.com/ericxiaox/reader-backup/main/%E6%8A%96%E9%98%B4.json
  13. 无限臀山.json
     https://raw.githubusercontent.com/ericxiaox/reader-backup/main/%E6%97%A0%E9%99%90%E8%87%80%E5%B1%B1.json
  14. 每日大赛.json
     https://raw.githubusercontent.com/ericxiaox/reader-backup/main/%E6%AF%8F%E6%97%A5%E5%A4%A7%E8%B5%9B.json
  15. 玉羞园.json
     https://raw.githubusercontent.com/ericxiaox/reader-backup/main/%E7%8E%89%E7%BE%9E%E5%9B%AD.json
  16. 绿色小导航.json
     https://raw.githubusercontent.com/ericxiaox/reader-backup/main/%E7%BB%BF%E8%89%B2%E5%B0%8F%E5%AF%BC%E8%88%AA.json
  17. onlyscroll.json
     https://raw.githubusercontent.com/ericxiaox/reader-backup/main/onlyscroll.json
  18. shortsxxx.json
     https://raw.githubusercontent.com/ericxiaox/reader-backup/main/shortsxxx.json
  19. douyin18one.json
     https://raw.githubusercontent.com/ericxiaox/reader-backup/main/douyin18one.json
  20. 写真馆.json
     https://raw.githubusercontent.com/ericxiaox/reader-backup/main/%E5%86%99%E7%9C%9F%E9%A6%86.json
  21. 91热爆短视频.json
     https://raw.githubusercontent.com/ericxiaox/reader-backup/main/91%E7%83%AD%E7%88%86%E7%9F%AD%E8%A7%86%E9%A2%91.json

## 说明

- 本仓为纯 CDN 备份，GitHub 不扫描订阅源内容（gitee 的合集 all.json 实测会被合规扫描拦成 451，故合集只放这里）。
- 更新流程：改完本地编辑点（`源文件和本地包/阅读订阅源/`）后，跑 `python tools/make_github_all.py --push` 一键重生成并推送合集与全部单源。
- 换域只需改各源 `sourceUrl` 一处（规则已加固为 baseUrl 派生），然后重跑上述脚本。
- 本站三件套（发布页 / 邮箱 / 梯子网址）与判活逻辑见影视仓技能书 `references/共用/02`、`共用/03`。
