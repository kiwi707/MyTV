var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && (typeof from === "object" || typeof from === "function")) {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, {
          get: () => from[key],
          enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
        });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.config.js
var index_config_exports = {};
__export(index_config_exports, {
  default: () => index_config_default
});
module.exports = __toCommonJS(index_config_exports);

var index_config_default = {
  // 网盘配置（如需观看网盘资源，请在此填入你的 Token）
  ali: { token: "", token280: "" },
  quark: { cookie: "" },
  uc: { cookie: "", token: "", ut: "" },
  
  // 解析接口：解决“获取播放地址失败”的关键
  parses: [
    { name: "智能解析", type: 1, url: "https://jx.jsonplayer.com/player/?url=" },
    { name: "稳定解析", type: 1, url: "https://jx.777jiexi.com/player/?url=" },
    { name: "备用解析", type: 0, url: "https://jx.aidouer.net/?url=" }
  ],

  // 资源站点列表
  sites: [
    // 增加几个稳定大站作为保底测试
    {
      key: "wolong",
      name: "卧龙资源(稳)",
      type: 1,
      api: "https://collect.wolongzyw.com/api.php/provide/vod",
      searchable: 1,
      quickSearch: 1
    },
    {
      key: "liangzi",
      name: "量子资源(稳)",
      type: 1,
      api: "https://cj.lziapi.com/api.php/provide/vod",
      searchable: 1,
      quickSearch: 1
    },
    // 你原有的采集站接口
    {
      key: "ddapi",
      name: "滴滴资源🔞",
      type: 1,
      api: "https://api.ddapi.cc/api.php/provide/vod",
      searchable: 1
    },
    {
      key: "jkun",
      name: "鸡坤资源🔞",
      type: 1,
      api: "https://api.jkunzy.net/api.php/provide/vod",
      searchable: 1
    },
    {
      key: "tg",
      name: "TG资源🔞",
      type: 1,
      api: "https://tiankongzy.com/api.php/provide/vod",
      searchable: 1
    }
  ],

  // UI 界面配置（保留你原有的绿色风格）
  theme: {
    light: {
      primary: "0xFF2B6C00",
      onPrimary: "0xFFFFFFFF",
      primaryContainer: "0xFFA6F779",
      onPrimaryContainer: "0xFF082100",
      secondary: "0xFF56624B",
      onSecondary: "0xFFFFFFFF",
      secondaryContainer: "0xFFD9E7CA",
      onSecondaryContainer: "0xFF131F0C"
    },
    dark: {
      bg: "https://i2.100024.xyz/2024/01/13/qrc37o.webp",
      primary: "0xFF8CDA60",
      onPrimary: "0xFF133800"
    }
  }
};
