# 阅读订阅源备份仓（reader-backup）

本仓存放影视仓阅读订阅源（Legado / 阅读 3.0 / Sigma 通用 JSON 格式），作为 gitee 即时 451 时的 GitHub 兜底。

## 一键整合包（推荐）

`all.json` = 全部 18 个阅读源的合集，**一次网络导入全部源**：

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
  18. swipefap.json（📱沉浸·SwipeFap）

## 单源备份（兜底）

- `h55e抖音.json` / `抖阴18.json` / `色花堂.json` —— 个别源的单独备份，合集导入失败时可逐源导入。
- 全部源的主下发区在 gitee：`https://gitee.com/mallox/source/raw/master/reader/<名>.json`

## 说明

- 本仓为纯 CDN 备份，GitHub 不扫描订阅源内容（gitee 的合集 all.json 实测会被合规扫描拦成 451，故合集只放这里）。
- 更新流程：改完本地编辑点（`源文件和本地包/阅读订阅源/`）后，跑 `python tools/make_github_all.py --push` 一键重生成并推送合集。
- 换域只需改各源 `sourceUrl` 一处（规则已加固为 baseUrl 派生），然后重跑上述脚本。
- 本站三件套（发布页 / 邮箱 / 梯子网址）与判活逻辑见影视仓技能书 `references/共用/02`、`共用/03`。
