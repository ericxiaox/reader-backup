# 阅读订阅源备份仓（reader-backup）

本仓存放影视仓阅读订阅源（Legado / 阅读 3.0 / Sigma 通用 JSON 格式），作为 gitee 即时 451 时的 GitHub 兜底。

## 当前内容

- `色花堂.json` —— 色花堂阅读源。换域时只需在 App 里改订阅源的 `sourceUrl` 一处即可（规则内置 `_heal()` 自愈，会自动从地址推导域名、`_safe` 现场提取）。

## 导入方式

1. 复制本仓 `色花堂.json` 的 raw 链接：
   `https://raw.githubusercontent.com/ericxiaox/reader-backup/main/色花堂.json`
2. 在阅读 App（Legado / 阅读 3.0 / Sigma）里：
   「我的」→「订阅源管理」→「右上角 +」→「网络导入」→ 粘贴上面的 raw 链接 → 确定。
3. 手机端无本地保存入口时，可用 WorkBuddy 分享 / 导出该 JSON 文件后再导入。

## 说明

- 此仓为纯 CDN 备份，GitHub 不扫描订阅源内容；若日后担心明文域名暴露，可改为全 `\u` 转义版（App 仍能正常解析）。
- 本站三件套（发布页 / 邮箱 / 梯子网址）与判活逻辑见影视仓技能书 `references/共用/02`、`共用/03`。
