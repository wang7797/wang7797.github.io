import{_ as e,c as l,o as t,a as i}from"./app.0c9aa2df.js";const T='{"title":"\u6027\u80FD\u4F18\u5316","description":"","frontmatter":{},"headers":[{"level":2,"title":"DOM \u4E3A\u4EC0\u4E48\u8FD9\u4E48\u6162?","slug":"dom-\u4E3A\u4EC0\u4E48\u8FD9\u4E48\u6162"},{"level":2,"title":"\u8F93\u5165 URL \u5230\u9875\u9762\u5C55\u793A\u53D1\u751F\u4E86\u4EC0\u4E48\uFF1F","slug":"\u8F93\u5165-url-\u5230\u9875\u9762\u5C55\u793A\u53D1\u751F\u4E86\u4EC0\u4E48\uFF1F"},{"level":2,"title":"\u5982\u4F55\u8FDB\u884C\u4F18\u5316\uFF1F","slug":"\u5982\u4F55\u8FDB\u884C\u4F18\u5316\uFF1F"},{"level":2,"title":"\u4F18\u5316\u9700\u8981\u6CE8\u610F\u4EC0\u4E48\uFF1F","slug":"\u4F18\u5316\u9700\u8981\u6CE8\u610F\u4EC0\u4E48\uFF1F"},{"level":2,"title":"\u8C08\u8C08\u6D4F\u89C8\u5668\u7F13\u5B58\uFF1F","slug":"\u8C08\u8C08\u6D4F\u89C8\u5668\u7F13\u5B58\uFF1F"},{"level":2,"title":"\u5982\u4F55\u5BF9\u56FE\u7247\u4F18\u5316\uFF1F","slug":"\u5982\u4F55\u5BF9\u56FE\u7247\u4F18\u5316\uFF1F"},{"level":2,"title":"\u4E8B\u4EF6\u7684\u8282\u6D41\uFF08throttle\uFF09\u4E0E\u9632\u6296\uFF08debounce\uFF09","slug":"\u4E8B\u4EF6\u7684\u8282\u6D41\uFF08throttle\uFF09\u4E0E\u9632\u6296\uFF08debounce\uFF09"},{"level":2,"title":"\u4EC0\u4E48\u662F\u9884\u52A0\u8F7D\uFF1F","slug":"\u4EC0\u4E48\u662F\u9884\u52A0\u8F7D\uFF1F"},{"level":2,"title":"\u4EC0\u4E48\u662F\u61D2\u52A0\u8F7D\uFF1F","slug":"\u4EC0\u4E48\u662F\u61D2\u52A0\u8F7D\uFF1F"},{"level":2,"title":"\u4E3A\u4F55\u9700\u8981\u670D\u52A1\u7AEF\u6E32\u67D3\uFF1F","slug":"\u4E3A\u4F55\u9700\u8981\u670D\u52A1\u7AEF\u6E32\u67D3\uFF1F"},{"level":2,"title":"CDN \u7684\u7F13\u5B58\u4E0E\u56DE\u6E90\u673A\u5236\uFF1F","slug":"cdn-\u7684\u7F13\u5B58\u4E0E\u56DE\u6E90\u673A\u5236\uFF1F"},{"level":2,"title":"\u5C0F\u7ED3","slug":"\u5C0F\u7ED3"}],"relativePath":"job/interview/7.md","lastUpdated":1646127957060}',n={},a=i(`<h1 id="\u6027\u80FD\u4F18\u5316" tabindex="-1">\u6027\u80FD\u4F18\u5316 <a class="header-anchor" href="#\u6027\u80FD\u4F18\u5316" aria-hidden="true">#</a></h1><p>\u6700\u8FD1\u51E0\u5E74\u6211\u51FA\u53BB\u770B\u673A\u4F1A\uFF0C\u57FA\u672C\u4E0A\u6BCF\u6B21\u9762\u8BD5\u90FD\u4F1A\u95EE\u5230\u6B64\u95EE\u9898\uFF0C\u672C\u6587\u603B\u7ED3\u4E00\u4E0B\u5E38\u95EE\u7684\u4E00\u4E9B\u70B9\u3002</p><h2 id="dom-\u4E3A\u4EC0\u4E48\u8FD9\u4E48\u6162" tabindex="-1">DOM \u4E3A\u4EC0\u4E48\u8FD9\u4E48\u6162? <a class="header-anchor" href="#dom-\u4E3A\u4EC0\u4E48\u8FD9\u4E48\u6162" aria-hidden="true">#</a></h2><p>JS \u5F15\u64CE\u548C\u6E32\u67D3\u5F15\u64CE\uFF08\u6D4F\u89C8\u5668\u5185\u6838\uFF09\u662F\u72EC\u7ACB\u5B9E\u73B0\u7684\u3002\u5F53\u6211\u4EEC\u7528 JS \u53BB\u64CD\u4F5C DOM \u65F6\uFF0C\u672C\u8D28\u4E0A\u662F JS \u5F15\u64CE\u548C\u6E32\u67D3\u5F15\u64CE\u4E4B\u95F4\u8FDB\u884C\u4E86\u201C\u8DE8\u754C\u4EA4\u6D41\u201D\u3002</p><p>\u5F88\u591A\u65F6\u5019\uFF0C\u6211\u4EEC\u5BF9 DOM \u7684\u64CD\u4F5C\u90FD\u4E0D\u4F1A\u5C40\u9650\u4E8E\u8BBF\u95EE\uFF0C\u800C\u662F\u4E3A\u4E86\u4FEE\u6539\u5B83\u3002\u5F53\u6211\u4EEC\u5BF9 DOM \u7684\u4FEE\u6539\u4F1A\u5F15\u53D1\u5B83\u5916\u89C2\uFF08\u6837\u5F0F\uFF09\u4E0A\u7684\u6539\u53D8\u65F6\uFF0C\u5C31\u4F1A\u89E6\u53D1\u56DE\u6D41\u6216\u91CD\u7ED8\uFF0C\u8FD9\u4E24\u4E2A\u90FD\u662F\u5F88\u5403\u6027\u80FD\u7684\u3002</p><p>\u5F53\u4E00\u4E2ADOM\u5143\u7D20\u7684\u51E0\u4F55\u5C5E\u6027\u53D1\u751F\u53D8\u5316\u65F6\uFF0C\u6240\u6709\u548C\u5B83\u76F8\u5173\u7684\u8282\u70B9\uFF08\u6BD4\u5982\u7236\u5B50\u8282\u70B9\u3001\u5144\u5F1F\u8282\u70B9\u7B49\uFF09\u7684\u51E0\u4F55\u5C5E\u6027\u90FD\u9700\u8981\u8FDB\u884C\u91CD\u65B0\u8BA1\u7B97\uFF0C\u5B83\u4F1A\u5E26\u6765\u5DE8\u5927\u7684\u8BA1\u7B97\u91CF\u3002</p><p>\u8003\u8651JS \u7684\u8FD0\u884C\u901F\u5EA6\uFF0C\u6BD4 DOM \u5FEB\u5F97\u591A\u8FD9\u4E2A\u7279\u6027\u3002\u6211\u4EEC\u51CF\u5C11 DOM \u64CD\u4F5C\u7684\u6838\u5FC3\u601D\u8DEF\uFF0C\u5C31\u662F\u8BA9 JS \u53BB\u7ED9 DOM \u5206\u538B\uFF0C\u4E5F\u662F\u865A\u62DFDOM\u8FD1\u51E0\u5E74\u6D41\u884C\u4E86\u8D77\u6765\u3002</p><h2 id="\u8F93\u5165-url-\u5230\u9875\u9762\u5C55\u793A\u53D1\u751F\u4E86\u4EC0\u4E48\uFF1F" tabindex="-1">\u8F93\u5165 URL \u5230\u9875\u9762\u5C55\u793A\u53D1\u751F\u4E86\u4EC0\u4E48\uFF1F <a class="header-anchor" href="#\u8F93\u5165-url-\u5230\u9875\u9762\u5C55\u793A\u53D1\u751F\u4E86\u4EC0\u4E48\uFF1F" aria-hidden="true">#</a></h2><ul><li><p>\u6570\u636E\u8BF7\u6C42\u7684\u901A\b\u4FE1</p><ul><li>\u8F93\u5165url\uFF1A\u5982http://www.baidu.com\u3002\u5176\u4E2Dhttp\u4E3A\u534F\u8BAE\uFF0Cwww.baidu.com\u4E3A\u7F51\u7EDC\u5730\u5740\uFF0C\u4E00\u822C\u7F51\u7EDC\u5730\u5740\u53EF\u4EE5\u4E3A\u57DF\u540D\u6216IP\u5730\u5740\uFF0C\u6B64\u5904\u4E3A\u57DF\u540D\u3002\u4F7F\u7528\u57DF\u540D\u662F\u4E3A\u4E86\u65B9\u4FBF\u8BB0\u5FC6\uFF0C\u4F46\u662F\u4E3A\u4E86\u8BA9\u8BA1\u7B97\u673A\u7406\u89E3\u8FD9\u4E2A\u5730\u5740\u8FD8\u9700\u8981\u628A\u5B83\u89E3\u6790\u4E3AIP\u5730\u5740\u3002</li><li>\u5E94\u7528\u5C42DNS\u89E3\u6790\u57DF\u540D\uFF1A\u5BA2\u6237\u7AEF\u5148\u68C0\u67E5\u672C\u5730\u662F\u5426\u6709\u5BF9\u5E94\u7684IP\u5730\u5740\uFF0C\u82E5\u627E\u5230\u5219\u8FD4\u56DE\u54CD\u5E94\u7684IP\u5730\u5740\u3002\u82E5\u6CA1\u627E\u5230\u5219\u8BF7\u6C42\u4E0A\u7EA7DNS\u670D\u52A1\u5668\uFF0C\u76F4\u81F3\u627E\u5230\u6216\u5230\u6839\u8282\u70B9\u3002</li><li>\u5E94\u7528\u5C42\u53D1\u9001HTTP\u8BF7\u6C42\uFF1AHTTP\u8BF7\u6C42\u5305\u62EC\u8BF7\u6C42\u62A5\u5934\u548C\u8BF7\u6C42\u4E3B\u4F53\u4E24\u4E2A\u90E8\u5206\uFF0C\u5176\u4E2D\u8BF7\u6C42\u62A5\u5934\u5305\u542B\u4E86\u81F3\u5173\u91CD\u8981\u7684\u4FE1\u606F\uFF0C\u5305\u62EC\u8BF7\u6C42\u7684\u65B9\u6CD5\uFF08GET / POST\uFF09\u3001\u76EE\u6807url\u3001\u9075\u5FAA\u7684\u534F\u8BAE\uFF08http / https / ftp\u2026\uFF09\uFF0C\u8FD4\u56DE\u7684\u4FE1\u606F\u662F\u5426\u9700\u8981\u7F13\u5B58\uFF0C\u4EE5\u53CA\u5BA2\u6237\u7AEF\u662F\u5426\u53D1\u9001cookie\u7B49\u3002</li><li>\u4F20\u8F93\u5C42TCP\u4F20\u8F93\u62A5\u6587\uFF1ATCP\u534F\u8BAE\u4E3A\u4F20\u8F93\u62A5\u6587\u63D0\u4F9B\u53EF\u9760\u7684\u5B57\u8282\u6D41\u670D\u52A1\uFF0C\u5B83\u4E3A\u4E86\u65B9\u4FBF\u4F20\u8F93\uFF0C\u5C06\u5927\u5757\u7684\u6570\u636E\u5206\u5272\u6210\u4EE5\u62A5\u6587\u6BB5\u4E3A\u5355\u4F4D\u7684\u6570\u636E\u5305\u8FDB\u884C\u7BA1\u7406\uFF0C\u5E76\u4E3A\u5B83\u4EEC\u7F16\u53F7\uFF0C\u65B9\u4FBF\u670D\u52A1\u5668\u63A5\u6536\u65F6\u80FD\u51C6\u786E\u5730\u8FD8\u539F\u62A5\u6587\u4FE1\u606F\uFF0CTCP\u534F\u8BAE\u901A\u8FC7\u201C\u4E09\u6B21\u63E1\u624B\u201D\u7B49\u65B9\u6CD5\u4FDD\u8BC1\u4F20\u8F93\u7684\u5B89\u5168\u53EF\u9760\u3002</li><li>\u7F51\u7EDC\u5C42IP\u534F\u8BAE\u67E5\u8BE2MAC\u5730\u5740: IP\u534F\u8BAE\u7684\u4F5C\u7528\u662F\u628ATCP\u5206\u5272\u597D\u7684\u5404\u79CD\u6570\u636E\u5305\u4F20\u9001\u7ED9\u63A5\u6536\u65B9\u3002\u800C\u8981\u4FDD\u8BC1\u786E\u5B9E\u80FD\u4F20\u5230\u63A5\u6536\u65B9\u8FD8\u9700\u8981\u63A5\u6536\u65B9\u7684MAC\u5730\u5740\uFF0C\u4E5F\u5C31\u662F\u7269\u7406\u5730\u5740\u3002IP\u5730\u5740\u548CMAC\u5730\u5740\u662F\u4E00\u4E00\u5BF9\u5E94\u7684\u5173\u7CFB\uFF0C\u4E00\u4E2A\u7F51\u7EDC\u8BBE\u5907\u7684IP\u5730\u5740\u53EF\u4EE5\u66F4\u6362\uFF0C\u4F46\u662FMAC\u5730\u5740\u4E00\u822C\u662F\u56FA\u5B9A\u4E0D\u53D8\u7684\u3002ARP\u534F\u8BAE\u53EF\u4EE5\u5C06IP\u5730\u5740\u89E3\u6790\u6210\u5BF9\u5E94\u7684MAC\u5730\u5740\u3002</li><li>\u6570\u636E\u5230\u8FBE\u6570\u636E\u94FE\u8DEF\u5C42: \u5728\u627E\u5230\u5BF9\u65B9\u7684MAC\u5730\u5740\u540E\uFF0C\u5C31\u5C06\u6570\u636E\u53D1\u9001\u5230\u6570\u636E\u94FE\u8DEF\u5C42\u4F20\u8F93\u3002</li><li>\u670D\u52A1\u5668\u63A5\u6536\u6570\u636E: \u63A5\u6536\u7AEF\u7684\u670D\u52A1\u5668\u5728\u94FE\u8DEF\u5C42\u63A5\u6536\u5230\u6570\u636E\u5305\uFF0C\u518D\u5C42\u5C42\u5411\u4E0A\u76F4\u5230\u5E94\u7528\u5C42, \u8FD9\u8FC7\u7A0B\u4E2D\u5305\u62EC\u5728\u8FD0\u8F93\u5C42\u901A\u8FC7TCP\u534F\u8BAE\u8BB2\u5206\u6BB5\u7684\u6570\u636E\u5305\u91CD\u65B0\u7EC4\u6210\u539F\u6765\u7684HTTP\u8BF7\u6C42\u62A5\u6587\u3002</li><li>\u670D\u52A1\u5668\u54CD\u5E94\u8BF7\u6C42: \u670D\u52A1\u63A5\u6536\u5230\u5BA2\u6237\u7AEF\u53D1\u9001\u7684HTTP\u8BF7\u6C42\u540E\uFF0C\u67E5\u627E\u5BA2\u6237\u7AEF\u8BF7\u6C42\u7684\u8D44\u6E90\uFF0C\u5E76\u8FD4\u56DE\u54CD\u5E94\u62A5\u6587\uFF0C\u54CD\u5E94\u62A5\u6587\u4E2D\u5305\u62EC\u4E00\u4E2A\u91CD\u8981\u7684\u4FE1\u606F\u2014\u2014\u72B6\u6001\u7801\u3002\u72B6\u6001\u7801\u7531\u4E09\u4F4D\u6570\u5B57\u7EC4\u6210\uFF0C\u5176\u4E2D\u6BD4\u8F83\u5E38\u89C1\u7684\u662F200 OK\u8868\u793A\u8BF7\u6C42\u6210\u529F\u3002301\u8868\u793A\u6C38\u4E45\u91CD\u5B9A\u5411\uFF0C\u5373\u8BF7\u6C42\u7684\u8D44\u6E90\u5DF2\u7ECF\u6C38\u4E45\u8F6C\u79FB\u5230\u65B0\u7684\u4F4D\u7F6E\u3002\u5728\u8FD4\u56DE301\u72B6\u6001\u7801\u7684\u540C\u65F6\uFF0C\u54CD\u5E94\u62A5\u6587\u4E5F\u4F1A\u9644\u5E26\u91CD\u5B9A\u5411\u7684url\uFF0C\u5BA2\u6237\u7AEF\u63A5\u6536\u5230\u540E\u5C06http\u8BF7\u6C42\u7684url\u505A\u76F8\u5E94\u7684\u6539\u53D8\u518D\u91CD\u65B0\u53D1\u9001\u3002404 not found \u8868\u793A\u5BA2\u6237\u7AEF\u8BF7\u6C42\u7684\u8D44\u6E90\u627E\u4E0D\u5230\u3002</li><li>\u670D\u52A1\u5668\u8FD4\u56DE\u76F8\u5E94\u6587\u4EF6\uFF1A\u8BF7\u6C42\u6210\u529F\u540E\uFF0C\u670D\u52A1\u5668\u4F1A\u8FD4\u56DE\u76F8\u5E94\u7684HTML\u6587\u4EF6\u3002\u63A5\u4E0B\u6765\u5C31\u5230\u4E86\u9875\u9762\u7684\u6E32\u67D3\u9636\u6BB5\u4E86\u3002</li></ul></li><li><p>\u6D4F\u89C8\u5668\u6E32\u67D3</p><ul><li>\u89E3\u6790HTML\u4EE5\u6784\u5EFADOM\u6811 \u2013&gt; \u6784\u5EFA\u6E32\u67D3\u6811 \u2013&gt; \u5E03\u5C40\u6E32\u67D3\u6811 \u2013&gt; \u7ED8\u5236\u6E32\u67D3\u6811\u3002</li><li>DOM\u6811\u662F\u7531HTML\u6587\u4EF6\u4E2D\u7684\u6807\u7B7E\u6392\u5217\u7EC4\u6210\uFF0C\u6E32\u67D3\u6811\u662F\u5728DOM\u6811\u4E2D\u52A0\u5165CSS\u6216HTML\u4E2D\u7684style\u6837\u5F0F\u800C\u5F62\u6210\u3002\u6E32\u67D3\u6811\u53EA\u5305\u542B\u9700\u8981\u663E\u793A\u5728\u9875\u9762\u4E2D\u7684DOM\u5143\u7D20\uFF0C\u50CF head \u5143\u7D20\u6216display\u5C5E\u6027\u503C\u4E3Anone\u7684\u5143\u7D20\u90FD\u4E0D\u5728\u6E32\u67D3\u6811\u4E2D\u3002</li><li>\u5728\u6D4F\u89C8\u5668\u8FD8\u6CA1\u63A5\u6536\u5230\u5B8C\u6574\u7684HTML\u6587\u4EF6\u65F6\uFF0C\u5B83\u5C31\u5F00\u59CB\u6E32\u67D3\u9875\u9762\u4E86\uFF0C\u5728\u9047\u5230\u5916\u90E8\u94FE\u5165\u7684\u811A\u672C\u6807\u7B7E\u6216\u6837\u5F0F\u6807\u7B7E\u6216\u56FE\u7247\u65F6\uFF0C\u4F1A\u518D\u6B21\u53D1\u9001HTTP\u8BF7\u6C42\u91CD\u590D\u4E0A\u8FF0\u7684\u6B65\u9AA4\u3002\u5728\u6536\u5230CSS\u6587\u4EF6\u540E\u4F1A\u5BF9\u5DF2\u7ECF\u6E32\u67D3\u7684\u9875\u9762\u91CD\u65B0\u6E32\u67D3\uFF0C\u52A0\u5165\u5B83\u4EEC\u5E94\u6709\u7684\u6837\u5F0F\uFF0C\u56FE\u7247\u6587\u4EF6\u52A0\u8F7D\u5B8C\u7ACB\u523B\u663E\u793A\u5728\u76F8\u5E94\u4F4D\u7F6E\u3002\u5728\u8FD9\u4E00\u8FC7\u7A0B\u4E2D\u53EF\u80FD\u4F1A\u89E6\u53D1\u9875\u9762\u7684\u91CD\u7ED8\u6216\u91CD\u6392\u3002</li></ul></li></ul><h2 id="\u5982\u4F55\u8FDB\u884C\u4F18\u5316\uFF1F" tabindex="-1">\u5982\u4F55\u8FDB\u884C\u4F18\u5316\uFF1F <a class="header-anchor" href="#\u5982\u4F55\u8FDB\u884C\u4F18\u5316\uFF1F" aria-hidden="true">#</a></h2><p>\u5BF9\u4E8Eweb\u5E94\u7528\uFF0C\u4EC5\u4EC5\u4ECE\u63D0\u5347\u9996\u5C4F\u6E32\u67D3\u901F\u5EA6\u548C\u9996\u6B21\u53EF\u4EA4\u4E92\u65F6\u95F4\u6765\u770B\uFF0C\u53EF\u4EE5\u4ECE\u4EE5\u4E0B\u516D\u4E2A\u65B9\u9762\u7740\u624B\uFF1A</p><ul><li>\u51CF\u5C11\u6587\u4EF6\u5927\u5C0F\uFF1A\u5F00\u542F\u6253\u5305\u538B\u7F29\uFF0C\u53BB\u6389\u5197\u4F59\u4EE3\u7801\uFF0C\u8FDB\u884C\u5408\u7406\u6587\u4EF6\u62C6\u5206\uFF0C\u907F\u514D\u5355\u4E2A\u6587\u4EF6\u8FC7\u5927\u7B49\uFF1B</li><li>\u51CF\u5C11\u8BF7\u6C42\u6570\u91CF\uFF1A\u8FDB\u884C\u9002\u5F53\u7684\u6587\u4EF6\u5408\u5E76\uFF0C\u5C3D\u91CF\u907F\u514D\u4F7F\u7528\u91CD\u5B9A\u5411\uFF0C\u5982\u679C\u4E00\u5B9A\u8981\u4F7F\u7528\u91CD\u5B9A\u5411\uFF0C\u5982http\u91CD\u5B9A\u5411\u5230https\uFF0C\u8981\u4F7F\u7528301\u6C38\u4E45\u91CD\u5B9A\u5411\uFF0C\u5C06\u56FE\u7247\u7684\u5185\u5BB9\u4EE5Base64\u683C\u5F0F\u5185\u5D4C\u5230HTML\u4E2D\u548C\u4F7F\u7528\u5B57\u4F53\u56FE\u6807\u6765\u4EE3\u66FF\u56FE\u7247\u7B49\uFF1B</li><li>\u4F18\u5316\u7F51\u7EDC\u8FDE\u63A5\uFF1A\u4F7F\u7528CDN\uFF0C\u4F7F\u7528DNS\u9884\u89E3\u6790\uFF0C\u4F7F\u7528\u591A\u4E2A\u57DF\u540D\u5E76\u884C\u8FDE\u63A5\uFF08\u5728HTTP1.1\u534F\u8BAE\u4E0B\uFF0Cchrome\u6BCF\u4E2A\u57DF\u540D\u7684\u6700\u5927\u5E76\u53D1\u6570\u662F6\u4E2A\uFF09\uFF0C\u5728HTTP2\u534F\u8BAE\u4E2D\uFF0C\u53EF\u4EE5\u5F00\u542F\u7BA1\u9053\u5316\u8FDE\u63A5\uFF1B</li><li>\u4F18\u5316\u8D44\u6E90\u52A0\u8F7D\uFF1AJS\u6587\u4EF6\u653E\u5728body\u5E95\u90E8\u548CCSS\u6587\u4EF6\u653E\u5728head\u4E2D\uFF0C\u5148\u5916\u94FE\uFF0C\u540E\u672C\u9875\uFF0C\u5F02\u6B65script\u6807\u7B7E\u548C\u6A21\u5757\u6309\u9700\u52A0\u8F7D\uFF0C\u4F7F\u7528\u8D44\u6E90\u61D2\u52A0\u8F7D\u3001\u8D44\u6E90\u9884\u52A0\u8F7Dpreload\u548C\u8D44\u6E90\u9884\u8BFB\u53D6prefetch\uFF1B</li><li>\u51CF\u5C11\u91CD\u7ED8\u56DE\u6D41\uFF1A\u907F\u514D\u4F7F\u7528\u5C42\u7EA7\u8F83\u6DF1\u7684\u9009\u62E9\u5668\u548CCSS\u8868\u8FBE\u5F0F\uFF0C\u7ED9\u56FE\u7247\u8BBE\u7F6E\u5C3A\u5BF8\uFF0C\u7D20\u9002\u5F53\u5730\u5B9A\u4E49\u9AD8\u5EA6\u6216\u6700\u5C0F\u9AD8\u5EA6\uFF0C\u7F13\u5B58DOM\uFF0C\u9632\u6296\u548C\u8282\u6D41\uFF0C\u53CA\u65F6\u6E05\u7406\u73AF\u5883\uFF0C\u7279\u522B\u662F\u5B9A\u65F6\u5668\u548C\u5168\u5C40\u53D8\u91CF\uFF1B</li><li>\u7528\u597D\u6253\u5305\u5DE5\u5177\uFF1A\u9009\u62E9\u6027\u80FD\u66F4\u597D\u7684\u6253\u5305\u5DE5\u5177\uFF0C\u53CA\u65F6\u66F4\u65B0\u6253\u5305\u5DE5\u5177\uFF0C\u9009\u7528\u5408\u9002\u7684\u63D2\u4EF6\u62D3\u5C55\u529F\u80FD\uFF0C\u5408\u9002\u7684loader\u89E3\u6790\u6587\u4EF6\uFF1B</li></ul><h2 id="\u4F18\u5316\u9700\u8981\u6CE8\u610F\u4EC0\u4E48\uFF1F" tabindex="-1">\u4F18\u5316\u9700\u8981\u6CE8\u610F\u4EC0\u4E48\uFF1F <a class="header-anchor" href="#\u4F18\u5316\u9700\u8981\u6CE8\u610F\u4EC0\u4E48\uFF1F" aria-hidden="true">#</a></h2><p>\u6027\u80FD\u4F18\u5316\u5F88\u91CD\u8981\uFF0C\u4F46\u4E5F\u6709\u5F88\u591A\u9700\u8981\u6CE8\u610F\u7684\u5730\u65B9\uFF0C\u628A\u63E1\u4E0D\u597D\uFF0C\u53CD\u800C\u8FBE\u4E0D\u5230\u9884\u671F\uFF0C\u751A\u81F3\u5F71\u54CD\u5927\u5C40\u3002\u7ED3\u5408\u6211\u4E2A\u4EBA\u7684\u7ECF\u9A8C\uFF0C\u4E3B\u8981\u7531\u4EE5\u4E0B\u9700\u8981\u6CE8\u610F\u7684\uFF1A</p><ul><li>\u5728\u505A\u4EFB\u4F55\u4F18\u5316\u4E4B\u524D\uFF0C\u90FD\u8981\u505A\u5145\u5206\u7684\u8C03\u7814\u548C\u6280\u672F\u9A8C\u8BC1\uFF0C\u7136\u540E\u548C\u6709\u5173\u4EBA\u5458\u8FDB\u884C\u5FC5\u8981\u7684\u6C9F\u901A\uFF1B</li><li>\u5C3D\u91CF\u5C06\u4F18\u5316\u4E0E\u4E1A\u52A1\u8FED\u4EE3\u5265\u79BB\u5F00\uFF0C\u5728\u6B64\u57FA\u7840\u4E0A\u8FD8\u8981\u628A\u4F18\u5316\u8FDB\u4E00\u6B65\u533A\u5206\u4E3A\u6027\u80FD\u4F18\u5316\u548C\u4EE3\u7801\u91CD\u6784\uFF0C\u4E00\u822C\u6027\u80FD\u4F18\u5316\u6D89\u53CA\u9762\u5C11\uFF0C\u6D4B\u8BD5\u5BB9\u6613\u9A8C\u8BC1\uFF0C\u6709\u65F6\u53EF\u4EE5\u8BFE\u9700\u6C42\u8FED\u4EE3\u4E00\u8D77\u4E0A\u7EBF\uFF0C\u800C\u4EE3\u7801\u91CD\u6784\u5219\u4E00\u5B9A\u8981\u548C\u6027\u80FD\u4F18\u5316\u548C\u9700\u6C42\u4EE3\u7801\u5206\u79BB\u5F00\uFF0C\u62C9\u65B0\u5206\u652F\uFF0C\u5355\u72EC\u6392\u671F\uFF1B</li><li>\u6027\u80FD\u4F18\u5316\u662F\u4E00\u9879\u957F\u671F\u5DE5\u7A0B\uFF0C\u4E0D\u8981\u4E00\u6B21\u505A\u592A\u591A\u4F18\u5316\uFF0C\u5426\u5219\u4E0D\u5229\u4E8E\u56DE\u6EDA\uFF0C\u5BB9\u6613\u8BA9\u4F18\u5316\u592D\u6298\uFF1B</li><li>\u5728\u4F18\u5316\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u5BF9\u4E8E\u7248\u672C\u5347\u7EA7\u4E00\u5B9A\u8981\u614E\u91CD\uFF0C\u5728\u8C03\u7814\u4E2D\uFF0C\u8981\u5145\u5206\u8003\u8651\u5230\u517C\u5BB9\u6027\uFF0C\u4E0D\u4EC5\u8981\u770B\u5B98\u65B9\u66F4\u65B0\u65E5\u5FD7\uFF0C\u66F4\u8981\u770B\u5B98\u65B9\u4ED3\u5E93\u4E2D\u67E5\u770Bissues\u3002</li></ul><h2 id="\u8C08\u8C08\u6D4F\u89C8\u5668\u7F13\u5B58\uFF1F" tabindex="-1">\u8C08\u8C08\u6D4F\u89C8\u5668\u7F13\u5B58\uFF1F <a class="header-anchor" href="#\u8C08\u8C08\u6D4F\u89C8\u5668\u7F13\u5B58\uFF1F" aria-hidden="true">#</a></h2><p>\u7F13\u5B58\u53EF\u4EE5\u51CF\u5C11\u7F51\u7EDC IO \u6D88\u8017\uFF0C\u63D0\u9AD8\u8BBF\u95EE\u901F\u5EA6\u3002\u6D4F\u89C8\u5668\u7F13\u5B58\u662F\u4E00\u79CD\u64CD\u4F5C\u7B80\u5355\u3001\u6548\u679C\u663E\u8457\u7684\u524D\u7AEF\u6027\u80FD\u4F18\u5316\u624B\u6BB5\u3002</p><p>\u5BF9\u4E8E\u4E00\u4E2A\u6570\u636E\u8BF7\u6C42\u6765\u8BF4\uFF0C\u53EF\u4EE5\u5206\u4E3A\u53D1\u8D77\u7F51\u7EDC\u8BF7\u6C42\u3001\u540E\u7AEF\u5904\u7406\u3001\u6D4F\u89C8\u5668\u54CD\u5E94\u4E09\u4E2A\u6B65\u9AA4\u3002\u6D4F\u89C8\u5668\u7F13\u5B58\u53EF\u4EE5\u5E2E\u52A9\u6211\u4EEC\u5728\u7B2C\u4E00\u548C\u7B2C\u4E09\u6B65\u9AA4\u4E2D\u4F18\u5316\u6027\u80FD\u3002</p><p>\u6D4F\u89C8\u5668\u7F13\u5B58\u673A\u5236\u6709\u56DB\u4E2A\u65B9\u9762\uFF0C\u5B83\u4EEC\u6309\u7167\u83B7\u53D6\u8D44\u6E90\u65F6\u8BF7\u6C42\u7684\u4F18\u5148\u7EA7\u4F9D\u6B21\u6392\u5217\u5982\u4E0B\uFF1A</p><ul><li>Memory Cache\uFF1A\u5B58\u5728\u5185\u5B58\u4E2D\u7684\u7F13\u5B58\uFF0C\u5B83\u662F\u6D4F\u89C8\u5668\u6700\u5148\u5C1D\u8BD5\u53BB\u547D\u4E2D\u7684\u4E00\u79CD\u7F13\u5B58\u662F\u54CD\u5E94\u901F\u5EA6\u6700\u5FEB\u7684\u4E00\u79CD\u7F13\u5B58\uFF1B</li><li>Service Worker Cache\uFF1A\u81EA\u7531\u63A7\u5236\u7F13\u5B58\u54EA\u4E9B\u6587\u4EF6\u3001\u5982\u4F55\u5339\u914D\u7F13\u5B58\u3001\u5982\u4F55\u8BFB\u53D6\u7F13\u5B58\uFF0C\u5E76\u4E14\u7F13\u5B58\u662F\u6301\u7EED\u6027\u7684\uFF1B</li><li>HTTP Cache\uFF1A\u6700\u4E3B\u8981\u3001\u6700\u5177\u6709\u4EE3\u8868\u6027\u7684\u7F13\u5B58\u7B56\u7565\uFF0C\u5206\u4E3A\u5F3A\u7F13\u5B58\u548C\u534F\u5546\u7F13\u5B58\uFF0C\u901A\u8FC7\u8BBE\u7F6E HTTP Header \u6765\u5B9E\u73B0\u7684\u3002</li><li>Push Cache\uFF1AHTTP/2 \u4E2D\u7684\u5185\u5BB9\uFF0C\u5F53\u4EE5\u4E0A\u4E09\u79CD\u7F13\u5B58\u90FD\u6CA1\u6709\u547D\u4E2D\u65F6\uFF0C\u5B83\u624D\u4F1A\u88AB\u4F7F\u7528\u3002\u5E76\u4E14\u7F13\u5B58\u65F6\u95F4\u4E5F\u5F88\u77ED\u6682\uFF0C\u53EA\u5728\u4F1A\u8BDD\uFF08Session\uFF09\u4E2D\u5B58\u5728\uFF0C\u4E00\u65E6\u4F1A\u8BDD\u7ED3\u675F\u5C31\u88AB\u91CA\u653E\u3002</li></ul><h2 id="\u5982\u4F55\u5BF9\u56FE\u7247\u4F18\u5316\uFF1F" tabindex="-1">\u5982\u4F55\u5BF9\u56FE\u7247\u4F18\u5316\uFF1F <a class="header-anchor" href="#\u5982\u4F55\u5BF9\u56FE\u7247\u4F18\u5316\uFF1F" aria-hidden="true">#</a></h2><p>\u96C5\u864E\u519B\u89C4\u548C Google \u5B98\u65B9\u7684\u6700\u4F73\u5B9E\u8DF5\u4E5F\u90FD\u5C06\u56FE\u7247\u4F18\u5316\u5217\u4E3A\u524D\u7AEF\u6027\u80FD\u4F18\u5316\u5FC5\u4E0D\u53EF\u5C11\u7684\u73AF\u8282\u2014\u2014\u56FE\u7247\u4F18\u5316\u7684\u4F18\u5148\u7EA7\u53EF\u89C1\u4E00\u6591\u3002</p><p>\u5C31\u56FE\u7247\u8FD9\u5757\u6765\u8BF4\uFF0C\u4E0E\u5176\u8BF4\u6211\u4EEC\u662F\u5728\u505A\u201C\u4F18\u5316\u201D\uFF0C\u4E0D\u5982\u8BF4\u6211\u4EEC\u662F\u5728\u505A\u201C\u6743\u8861\u201D\u3002\u56E0\u4E3A\u6211\u4EEC\u8981\u505A\u7684\u4E8B\u60C5\uFF0C\u5C31\u662F\u53BB\u538B\u7F29\u56FE\u7247\u7684\u4F53\u79EF\u3002</p><p>\u4F46\u8FD9\u4E2A\u4F18\u5316\u64CD\u4F5C\uFF0C\u662F\u4EE5\u727A\u7272\u4E00\u90E8\u5206\u6210\u50CF\u8D28\u91CF\u4E3A\u4EE3\u4EF7\u7684\u3002\u56E0\u6B64\u6211\u4EEC\u7684\u4E3B\u8981\u4EFB\u52A1\uFF0C\u662F\u5C3D\u53EF\u80FD\u5730\u53BB\u5BFB\u6C42\u4E00\u4E2A\u8D28\u91CF\u4E0E\u6027\u80FD\u4E4B\u95F4\u7684\u5E73\u8861\u70B9\u3002</p><p>\u65F6\u4E0B\u5E94\u7528\u8F83\u4E3A\u5E7F\u6CDB\u7684 Web \u56FE\u7247\u683C\u5F0F\u6709 JPEG/JPG\u3001PNG\u3001WebP\u3001Base64\u3001SVG \u7B49\u3002</p><ul><li>JPEG/JPG\uFF1A\u6709\u635F\u538B\u7F29\u3001\u4F53\u79EF\u5C0F\u3001\u52A0\u8F7D\u5FEB\u3001\u4E0D\u652F\u6301\u900F\u660E\uFF0C\u9002\u7528\u4E8E\u5448\u73B0\u8272\u5F69\u4E30\u5BCC\u7684\u56FE\u7247\uFF0C\u7ECF\u5E38\u4F5C\u4E3A\u5927\u7684\u80CC\u666F\u56FE\u3001\u8F6E\u64AD\u56FE\u6216 Banner \u56FE\u51FA\u73B0\u3002</li><li>PNG-8 \u4E0E PNG-24\uFF1A\u65E0\u635F\u538B\u7F29\u3001\u8D28\u91CF\u9AD8\u3001\u4F53\u79EF\u5927\u3001\u652F\u6301\u900F\u660E\uFF0C\u7528\u5B83\u6765\u5448\u73B0\u5C0F\u7684 Logo\u3001\u989C\u8272\u7B80\u5355\u4E14\u5BF9\u6BD4\u5F3A\u70C8\u7684\u56FE\u7247\u6216\u80CC\u666F\u7B49\u3002</li><li>SVG\uFF1A\u6587\u672C\u6587\u4EF6\u3001\u4F53\u79EF\u5C0F\u3001\u4E0D\u5931\u771F\u3001\u517C\u5BB9\u6027\u597D\uFF0C\u53EF\u4EE5\u50CF\u5199\u4EE3\u7801\u4E00\u6837\u5B9A\u4E49 SVG\uFF0C\u628A\u5B83\u5199\u5728 HTML \u91CC\u3001\u6210\u4E3A DOM \u7684\u4E00\u90E8\u5206\uFF0C\u4E5F\u53EF\u4EE5\u628A\u5BF9\u56FE\u5F62\u7684\u63CF\u8FF0\u5199\u5165\u4EE5 .svg \u4E3A\u540E\u7F00\u7684\u72EC\u7ACB\u6587\u4EF6\uFF1B</li><li>Base64\uFF1A\u6587\u672C\u6587\u4EF6\u3001\u4F9D\u8D56\u7F16\u7801\u3001\u5C0F\u56FE\u6807\u89E3\u51B3\u65B9\u6848\uFF0C\u4F5C\u4E3A\u96EA\u78A7\u56FE\u7684\u8865\u5145\u800C\u5B58\u5728\u7684\uFF0C\u9002\u7528\u4E8E\u56FE\u7247\u7684\u5B9E\u9645\u5C3A\u5BF8\u5F88\u5C0F\uFF0C\u65E0\u6CD5\u4EE5\u96EA\u78A7\u56FE\u7684\u5F62\u5F0F\u4E0E\u5176\u5B83\u5C0F\u56FE\u7ED3\u5408\uFF0C\u4E14\u56FE\u7247\u7684\u66F4\u65B0\u9891\u7387\u975E\u5E38\u4F4E\uFF1B</li><li>WebP\uFF1A\u5E74\u8F7B\u7684\u5168\u80FD\u578B\u9009\u624B\uFF0C\u5B58\u5728\u517C\u5BB9\u6027\u95EE\u9898\uFF0C\u4E8E 2010 \u5E74\u88AB\u63D0\u51FA\uFF0C \u662F Google \u4E13\u4E3A Web \u5F00\u53D1\u7684\u4E00\u79CD\u65E8\u5728\u52A0\u5FEB\u56FE\u7247\u52A0\u8F7D\u901F\u5EA6\u7684\u56FE\u7247\u683C\u5F0F\uFF0C\u5B83\u652F\u6301\u6709\u635F\u538B\u7F29\u548C\u65E0\u635F\u538B\u7F29\u3002</li></ul><p>\u603B\u7ED3\u6765\u770B\uFF1A</p><ul><li>\u80FD\u4E0D\u7528\u56FE\u7247\u5C31\u5C3D\u91CF\u4E0D\u7528\uFF0C\u6BD4\u5982\u9002\u7528\u5B57\u4F53\u56FE\u6807\u7B49\uFF1B</li><li>\u9009\u62E9\u6B63\u786E\u7684\u56FE\u7247\u683C\u5F0F\uFF1B</li><li>\u5C0F\u56FE\u4F7F\u7528 base64 \u683C\u5F0F\uFF1B</li><li>\u5C06\u591A\u4E2A\u56FE\u6807\u6587\u4EF6\u6574\u5408\u5230\u4E00\u5F20\u56FE\u7247\u4E2D\uFF08\u96EA\u78A7\u56FE\uFF1B</li></ul><h2 id="\u4E8B\u4EF6\u7684\u8282\u6D41\uFF08throttle\uFF09\u4E0E\u9632\u6296\uFF08debounce\uFF09" tabindex="-1">\u4E8B\u4EF6\u7684\u8282\u6D41\uFF08throttle\uFF09\u4E0E\u9632\u6296\uFF08debounce\uFF09 <a class="header-anchor" href="#\u4E8B\u4EF6\u7684\u8282\u6D41\uFF08throttle\uFF09\u4E0E\u9632\u6296\uFF08debounce\uFF09" aria-hidden="true">#</a></h2><p>\u9891\u7E41\u89E6\u53D1\u56DE\u8C03\u5BFC\u81F4\u7684\u5927\u91CF\u8BA1\u7B97\u4F1A\u5F15\u53D1\u9875\u9762\u7684\u6296\u52A8\u751A\u81F3\u5361\u987F\u3002\u4E3A\u4E86\u89C4\u907F\u8FD9\u79CD\u60C5\u51B5\uFF0C\u6211\u4EEC\u9700\u8981\u4E00\u4E9B\u624B\u6BB5\u6765\u63A7\u5236\u4E8B\u4EF6\u88AB\u89E6\u53D1\u7684\u9891\u7387\u3002\u5C31\u662F\u5728\u8FD9\u6837\u7684\u80CC\u666F\u4E0B\uFF0Cthrottle\uFF08\u4E8B\u4EF6\u8282\u6D41\uFF09\u548C debounce\uFF08\u4E8B\u4EF6\u9632\u6296\uFF09\u51FA\u73B0\u4E86\u3002</p><p>\u6EDA\u52A8\u4E8B\u4EF6\u4E2D\u4F1A\u53D1\u8D77\u7F51\u7EDC\u8BF7\u6C42\uFF0C\u4F46\u662F\u6211\u4EEC\u5E76\u4E0D\u5E0C\u671B\u7528\u6237\u5728\u6EDA\u52A8\u8FC7\u7A0B\u4E2D\u4E00\u76F4\u53D1\u8D77\u8BF7\u6C42\uFF0C\u800C\u662F\u9694\u4E00\u6BB5\u65F6\u95F4\u53D1\u8D77\u4E00\u6B21\uFF0C\u5BF9\u4E8E\u8FD9\u79CD\u60C5\u51B5\u6211\u4EEC\u5C31\u53EF\u4EE5\u4F7F\u7528\u8282\u6D41\u3002</p><p>throttle \u7684\u4E2D\u5FC3\u601D\u60F3\u5728\u4E8E\uFF1A\u5728\u67D0\u6BB5\u65F6\u95F4\u5185\uFF0C\u4E0D\u7BA1\u4F60\u89E6\u53D1\u4E86\u591A\u5C11\u6B21\u56DE\u8C03\uFF0C\u6211\u90FD\u53EA\u8BA4\u7B2C\u4E00\u6B21\uFF0C\u5E76\u5728\u8BA1\u65F6\u7ED3\u675F\u65F6\u7ED9\u4E88\u54CD\u5E94\uFF1A</p><div class="language-"><pre><code>// fn\u662F\u6211\u4EEC\u9700\u8981\u5305\u88C5\u7684\u4E8B\u4EF6\u56DE\u8C03, interval\u662F\u65F6\u95F4\u95F4\u9694\u7684\u9608\u503C
function throttle(fn, interval) {
  // last\u4E3A\u4E0A\u4E00\u6B21\u89E6\u53D1\u56DE\u8C03\u7684\u65F6\u95F4
  let last = 0
  
  // \u5C06throttle\u5904\u7406\u7ED3\u679C\u5F53\u4F5C\u51FD\u6570\u8FD4\u56DE
  return function () {
      // \u4FDD\u7559\u8C03\u7528\u65F6\u7684this\u4E0A\u4E0B\u6587
      let context = this
      // \u4FDD\u7559\u8C03\u7528\u65F6\u4F20\u5165\u7684\u53C2\u6570
      let args = arguments
      // \u8BB0\u5F55\u672C\u6B21\u89E6\u53D1\u56DE\u8C03\u7684\u65F6\u95F4
      let now = +new Date()
      
      // \u5224\u65AD\u4E0A\u6B21\u89E6\u53D1\u7684\u65F6\u95F4\u548C\u672C\u6B21\u89E6\u53D1\u7684\u65F6\u95F4\u5DEE\u662F\u5426\u5C0F\u4E8E\u65F6\u95F4\u95F4\u9694\u7684\u9608\u503C
      if (now - last &gt;= interval) {
      // \u5982\u679C\u65F6\u95F4\u95F4\u9694\u5927\u4E8E\u6211\u4EEC\u8BBE\u5B9A\u7684\u65F6\u95F4\u95F4\u9694\u9608\u503C\uFF0C\u5219\u6267\u884C\u56DE\u8C03
          last = now;
          fn.apply(context, args);
      }
    }
}

// \u7528throttle\u6765\u5305\u88C5scroll\u7684\u56DE\u8C03
const better_scroll = throttle(() =&gt; console.log(&#39;\u89E6\u53D1\u4E86\u6EDA\u52A8\u4E8B\u4EF6&#39;), 1000)

document.addEventListener(&#39;scroll&#39;, better_scroll)
</code></pre></div><p>\u6709\u4E00\u4E2A\u6309\u94AE\u70B9\u51FB\u4F1A\u89E6\u53D1\u7F51\u7EDC\u8BF7\u6C42\uFF0C\u4F46\u662F\u6211\u4EEC\u5E76\u4E0D\u5E0C\u671B\u6BCF\u6B21\u70B9\u51FB\u90FD\u53D1\u8D77\u7F51\u7EDC\u8BF7\u6C42\uFF0C\u800C\u662F\u5F53\u7528\u6237\u70B9\u51FB\u6309\u94AE\u4E00\u6BB5\u65F6\u95F4\u540E\u6CA1\u6709\u518D\u6B21\u70B9\u51FB\u7684\u60C5\u51B5\u624D\u53BB\u53D1\u8D77\u7F51\u7EDC\u8BF7\u6C42\uFF0C\u5BF9\u4E8E\u8FD9\u79CD\u60C5\u51B5\u6211\u4EEC\u5C31\u53EF\u4EE5\u4F7F\u7528\u9632\u6296\u3002</p><p>\u9632\u6296\u7684\u4E2D\u5FC3\u601D\u60F3\u5728\u4E8E\uFF1A\u6211\u4F1A\u7B49\u4F60\u5230\u5E95\u3002\u5728\u67D0\u6BB5\u65F6\u95F4\u5185\uFF0C\u4E0D\u7BA1\u4F60\u89E6\u53D1\u4E86\u591A\u5C11\u6B21\u56DE\u8C03\uFF0C\u6211\u90FD\u53EA\u8BA4\u6700\u540E\u4E00\u6B21\u3002</p><div class="language-"><pre><code>// fn\u662F\u6211\u4EEC\u9700\u8981\u5305\u88C5\u7684\u4E8B\u4EF6\u56DE\u8C03, delay\u662F\u6BCF\u6B21\u63A8\u8FDF\u6267\u884C\u7684\u7B49\u5F85\u65F6\u95F4
function debounce(fn, delay) {
  // \u5B9A\u65F6\u5668
  let timer = null
  
  // \u5C06debounce\u5904\u7406\u7ED3\u679C\u5F53\u4F5C\u51FD\u6570\u8FD4\u56DE
  return function () {
    // \u4FDD\u7559\u8C03\u7528\u65F6\u7684this\u4E0A\u4E0B\u6587
    let context = this
    // \u4FDD\u7559\u8C03\u7528\u65F6\u4F20\u5165\u7684\u53C2\u6570
    let args = arguments

    // \u6BCF\u6B21\u4E8B\u4EF6\u88AB\u89E6\u53D1\u65F6\uFF0C\u90FD\u53BB\u6E05\u9664\u4E4B\u524D\u7684\u65E7\u5B9A\u65F6\u5668
    if(timer) {
        clearTimeout(timer)
    }
    // \u8BBE\u7ACB\u65B0\u5B9A\u65F6\u5668
    timer = setTimeout(function () {
      fn.apply(context, args)
    }, delay)
  }
}

// \u7528debounce\u6765\u5305\u88C5scroll\u7684\u56DE\u8C03
const better_scroll = debounce(() =&gt; console.log(&#39;\u89E6\u53D1\u4E86\u6EDA\u52A8\u4E8B\u4EF6&#39;), 1000)

document.addEventListener(&#39;scroll&#39;, better_scroll)
</code></pre></div><h2 id="\u4EC0\u4E48\u662F\u9884\u52A0\u8F7D\uFF1F" tabindex="-1">\u4EC0\u4E48\u662F\u9884\u52A0\u8F7D\uFF1F <a class="header-anchor" href="#\u4EC0\u4E48\u662F\u9884\u52A0\u8F7D\uFF1F" aria-hidden="true">#</a></h2><p>\u6709\u4E9B\u8D44\u6E90\u4E0D\u9700\u8981\u9A6C\u4E0A\u7528\u5230\uFF0C\u4F46\u662F\u5E0C\u671B\u5C3D\u65E9\u83B7\u53D6\uFF0C\u8FD9\u65F6\u5019\u5C31\u53EF\u4EE5\u4F7F\u7528\u9884\u52A0\u8F7D\u3002</p><p>\u9884\u52A0\u8F7D\u5176\u5B9E\u662F\u58F0\u660E\u5F0F\u7684 fetch \uFF0C\u5F3A\u5236\u6D4F\u89C8\u5668\u8BF7\u6C42\u8D44\u6E90\uFF0C\u5E76\u4E14\u4E0D\u4F1A\u963B\u585E onload \u4E8B\u4EF6\uFF0C\u53EF\u4EE5\u4F7F\u7528\u4EE5\u4E0B\u4EE3\u7801\u5F00\u542F\u9884\u52A0\u8F7D\u3002</p><div class="language-"><pre><code>&lt;link rel=&quot;preload&quot; href=&quot;http://example.com&quot;&gt;
</code></pre></div><p>\u9884\u52A0\u8F7D\u53EF\u4EE5\u4E00\u5B9A\u7A0B\u5EA6\u4E0A\u964D\u4F4E\u9996\u5C4F\u7684\u52A0\u8F7D\u65F6\u95F4\uFF0C\u56E0\u4E3A\u53EF\u4EE5\u5C06\u4E00\u4E9B\u4E0D\u5F71\u54CD\u9996\u5C4F\u4F46\u91CD\u8981\u7684\u6587\u4EF6\u5EF6\u540E\u52A0\u8F7D\uFF0C\u552F\u4E00\u7F3A\u70B9\u5C31\u662F\u517C\u5BB9\u6027\u4E0D\u597D\u3002</p><h2 id="\u4EC0\u4E48\u662F\u61D2\u52A0\u8F7D\uFF1F" tabindex="-1">\u4EC0\u4E48\u662F\u61D2\u52A0\u8F7D\uFF1F <a class="header-anchor" href="#\u4EC0\u4E48\u662F\u61D2\u52A0\u8F7D\uFF1F" aria-hidden="true">#</a></h2><p>\u61D2\u52A0\u8F7D\u5C31\u662F\u5C06\u4E0D\u5173\u952E\u7684\u8D44\u6E90\u5EF6\u540E\u52A0\u8F7D\u3002</p><p>\u61D2\u52A0\u8F7D\u7684\u539F\u7406\u5C31\u662F\u53EA\u52A0\u8F7D\u81EA\u5B9A\u4E49\u533A\u57DF\uFF08\u901A\u5E38\u662F\u53EF\u89C6\u533A\u57DF\uFF0C\u4F46\u4E5F\u53EF\u4EE5\u662F\u5373\u5C06\u8FDB\u5165\u53EF\u89C6\u533A\u57DF\uFF09\u5185\u9700\u8981\u52A0\u8F7D\u7684\u4E1C\u897F\u3002</p><p>\u5BF9\u4E8E\u56FE\u7247\u6765\u8BF4\uFF0C\u5148\u8BBE\u7F6E\u56FE\u7247\u6807\u7B7E\u7684 src \u5C5E\u6027\u4E3A\u4E00\u5F20\u5360\u4F4D\u56FE\uFF0C\u5C06\u771F\u5B9E\u7684\u56FE\u7247\u8D44\u6E90\u653E\u5165\u4E00\u4E2A\u81EA\u5B9A\u4E49\u5C5E\u6027\u4E2D\uFF0C\u5F53\u8FDB\u5165\u81EA\u5B9A\u4E49\u533A\u57DF\u65F6\uFF0C\u5C31\u5C06\u81EA\u5B9A\u4E49\u5C5E\u6027\u66FF\u6362\u4E3A src \u5C5E\u6027\uFF0C\u8FD9\u6837\u56FE\u7247\u5C31\u4F1A\u53BB\u4E0B\u8F7D\u8D44\u6E90\uFF0C\u5B9E\u73B0\u4E86\u56FE\u7247\u61D2\u52A0\u8F7D\u3002</p><p>\u61D2\u52A0\u8F7D\u4E0D\u4EC5\u53EF\u4EE5\u7528\u4E8E\u56FE\u7247\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528\u5728\u522B\u7684\u8D44\u6E90\u4E0A\u3002\u6BD4\u5982\u8FDB\u5165\u53EF\u89C6\u533A\u57DF\u624D\u5F00\u59CB\u64AD\u653E\u89C6\u9891\u7B49\u7B49\u3002</p><p>\u5728\u61D2\u52A0\u8F7D\u7684\u5B9E\u73B0\u4E2D\uFF0C\u6709\u4E24\u4E2A\u5173\u952E\u7684\u6570\u503C\uFF1A\u4E00\u4E2A\u662F\u5F53\u524D\u53EF\u89C6\u533A\u57DF\u7684\u9AD8\u5EA6\uFF0C\u53E6\u4E00\u4E2A\u662F\u5143\u7D20\u8DDD\u79BB\u53EF\u89C6\u533A\u57DF\u9876\u90E8\u7684\u9AD8\u5EA6\u3002</p><p>\u624B\u52A8\u5B9E\u73B0\uFF1A</p><div class="language-"><pre><code>&lt;script&gt;
    // \u83B7\u53D6\u6240\u6709\u7684\u56FE\u7247\u6807\u7B7E
    const imgs = document.getElementsByTagName(&#39;img&#39;)
    // \u83B7\u53D6\u53EF\u89C6\u533A\u57DF\u7684\u9AD8\u5EA6
    const viewHeight = window.innerHeight || document.documentElement.clientHeight
    // num\u7528\u4E8E\u7EDF\u8BA1\u5F53\u524D\u663E\u793A\u5230\u4E86\u54EA\u4E00\u5F20\u56FE\u7247\uFF0C\u907F\u514D\u6BCF\u6B21\u90FD\u4ECE\u7B2C\u4E00\u5F20\u56FE\u7247\u5F00\u59CB\u68C0\u67E5\u662F\u5426\u9732\u51FA
    let num = 0
    function lazyload(){
        for(let i=num; i&lt;imgs.length; i++) {
            // \u7528\u53EF\u89C6\u533A\u57DF\u9AD8\u5EA6\u51CF\u53BB\u5143\u7D20\u9876\u90E8\u8DDD\u79BB\u53EF\u89C6\u533A\u57DF\u9876\u90E8\u7684\u9AD8\u5EA6
            let distance = viewHeight - imgs[i].getBoundingClientRect().top
            // \u5982\u679C\u53EF\u89C6\u533A\u57DF\u9AD8\u5EA6\u5927\u4E8E\u7B49\u4E8E\u5143\u7D20\u9876\u90E8\u8DDD\u79BB\u53EF\u89C6\u533A\u57DF\u9876\u90E8\u7684\u9AD8\u5EA6\uFF0C\u8BF4\u660E\u5143\u7D20\u9732\u51FA
            if(distance &gt;= 0 ){
                // \u7ED9\u5143\u7D20\u5199\u5165\u771F\u5B9E\u7684src\uFF0C\u5C55\u793A\u56FE\u7247
                imgs[i].src = imgs[i].getAttribute(&#39;data-src&#39;)
                // \u524Di\u5F20\u56FE\u7247\u5DF2\u7ECF\u52A0\u8F7D\u5B8C\u6BD5\uFF0C\u4E0B\u6B21\u4ECE\u7B2Ci+1\u5F20\u5F00\u59CB\u68C0\u67E5\u662F\u5426\u9732\u51FA
                num = i + 1
            }
        }
    }
    // \u76D1\u542CScroll\u4E8B\u4EF6
    window.addEventListener(&#39;scroll&#39;, lazyload, false);
&lt;/script&gt;
</code></pre></div><h2 id="\u4E3A\u4F55\u9700\u8981\u670D\u52A1\u7AEF\u6E32\u67D3\uFF1F" tabindex="-1">\u4E3A\u4F55\u9700\u8981\u670D\u52A1\u7AEF\u6E32\u67D3\uFF1F <a class="header-anchor" href="#\u4E3A\u4F55\u9700\u8981\u670D\u52A1\u7AEF\u6E32\u67D3\uFF1F" aria-hidden="true">#</a></h2><p>\u670D\u52A1\u7AEF\u6E32\u67D3\u662F\u4E00\u4E2A\u76F8\u5BF9\u7684\u6982\u5FF5\uFF0C\u5B83\u7684\u5BF9\u7ACB\u9762\u662F\u201C\u5BA2\u6237\u7AEF\u6E32\u67D3\u201D\uFF0C\u670D\u52A1\u7AEF\u6E32\u67D3\u7684\u5B9E\u8DF5\u5F80\u5F80\u4E0E\u5F53\u4E0B\u6D41\u884C\u7684\u524D\u7AEF\u6280\u672F\uFF08\u8B6C\u5982 Vue\uFF0CReact\uFF0CRedux \u7B49\uFF09\u7D27\u5BC6\u7ED3\u5408\u3002</p><p>\u5BA2\u6237\u7AEF\u6E32\u67D3\u6A21\u5F0F\u4E0B\uFF0C\u670D\u52A1\u7AEF\u4F1A\u628A\u6E32\u67D3\u9700\u8981\u7684\u9759\u6001\u6587\u4EF6\u53D1\u9001\u7ED9\u5BA2\u6237\u7AEF\uFF0C\u5BA2\u6237\u7AEF\u52A0\u8F7D\u8FC7\u6765\u4E4B\u540E\uFF0C\u81EA\u5DF1\u5728\u6D4F\u89C8\u5668\u91CC\u8DD1\u4E00\u904D JS\uFF0C\u6839\u636E JS \u7684\u8FD0\u884C\u7ED3\u679C\uFF0C\u751F\u6210\u76F8\u5E94\u7684 DOM\u3002</p><p>\u670D\u52A1\u7AEF\u6E32\u67D3\u7684\u6A21\u5F0F\u4E0B\uFF0C\u5F53\u7528\u6237\u7B2C\u4E00\u6B21\u8BF7\u6C42\u9875\u9762\u65F6\uFF0C\u7531\u670D\u52A1\u5668\u628A\u9700\u8981\u7684\u7EC4\u4EF6\u6216\u9875\u9762\u6E32\u67D3\u6210 HTML \u5B57\u7B26\u4E32\uFF0C\u7136\u540E\u628A\u5B83\u8FD4\u56DE\u7ED9\u5BA2\u6237\u7AEF\u3002\u5BA2\u6237\u7AEF\u62FF\u5230\u624B\u7684\uFF0C\u662F\u53EF\u4EE5\u76F4\u63A5\u6E32\u67D3\u7136\u540E\u5448\u73B0\u7ED9\u7528\u6237\u7684 HTML \u5185\u5BB9\uFF0C\u4E0D\u9700\u8981\u4E3A\u4E86\u751F\u6210 DOM \u5185\u5BB9\u81EA\u5DF1\u518D\u53BB\u8DD1\u4E00\u904D JS \u4EE3\u7801\u3002</p><p>\u670D\u52A1\u7AEF\u6E32\u67D3\u4E3B\u8981\u7528\u4E8E\u89E3\u51B3\u5355\u9875\u5E94\u7528\u9996\u5C4F\u6E32\u67D3\u6162\u4EE5\u53CASEO\u95EE\u9898\uFF0C\u4F46\u540C\u65F6\u4E5F\u63D0\u9AD8\u4E86\u670D\u52A1\u5668\u538B\u529B\uFF0C\u5403CPU\u3001\u5185\u5B58\u7B49\u8D44\u6E90\u3002</p><p>\u670D\u52A1\u7AEF\u6E32\u67D3\u4E3B\u8981\u5E72\u4E86\u4E24\u4EF6\u4E8B\uFF1A</p><ul><li>\u4E00\u662F renderToString() \u65B9\u6CD5\uFF1B</li><li>\u4E8C\u662F\u628A\u8F6C\u5316\u7ED3\u679C\u201C\u585E\u201D\u8FDB\u6A21\u677F\u91CC\u3002</li></ul><h2 id="cdn-\u7684\u7F13\u5B58\u4E0E\u56DE\u6E90\u673A\u5236\uFF1F" tabindex="-1">CDN \u7684\u7F13\u5B58\u4E0E\u56DE\u6E90\u673A\u5236\uFF1F <a class="header-anchor" href="#cdn-\u7684\u7F13\u5B58\u4E0E\u56DE\u6E90\u673A\u5236\uFF1F" aria-hidden="true">#</a></h2><p>CDN \uFF08Content Delivery Network\uFF0C\u5373\u5185\u5BB9\u5206\u53D1\u7F51\u7EDC\uFF09\u6307\u7684\u662F\u4E00\u7EC4\u5206\u5E03\u5728\u5404\u4E2A\u5730\u533A\u7684\u670D\u52A1\u5668\uFF0C\u539F\u7406\u662F\u5C3D\u53EF\u80FD\u7684\u5728\u5404\u4E2A\u5730\u65B9\u5206\u5E03\u673A\u623F\u7F13\u5B58\u6570\u636E\uFF0C\u8FD9\u4E9B\u670D\u52A1\u5668\u5B58\u50A8\u7740\u6570\u636E\u7684\u526F\u672C\uFF0C\u56E0\u6B64\u670D\u52A1\u5668\u53EF\u4EE5\u6839\u636E\u54EA\u4E9B\u670D\u52A1\u5668\u4E0E\u7528\u6237\u8DDD\u79BB\u6700\u8FD1\uFF0C\u6765\u6EE1\u8DB3\u6570\u636E\u7684\u8BF7\u6C42\u3002</p><p>CDN\u80FD\u5927\u5927\u63D0\u5347\u9996\u6B21\u8BF7\u6C42\u7684\u54CD\u5E94\u80FD\u529B\uFF0C\u6838\u5FC3\u70B9\u6709\u4E24\u4E2A\uFF0C\u4E00\u4E2A\u662F\u7F13\u5B58\uFF0C\u4E00\u4E2A\u662F\u56DE\u6E90\u3002</p><p>\u201C\u7F13\u5B58\u201D\u5C31\u662F\u8BF4\u6211\u4EEC\u628A\u8D44\u6E90 copy \u4E00\u4EFD\u5230 CDN \u670D\u52A1\u5668\u4E0A\u8FD9\u4E2A\u8FC7\u7A0B\uFF0C\u201C\u56DE\u6E90\u201D\u5C31\u662F\u8BF4 CDN \u53D1\u73B0\u81EA\u5DF1\u6CA1\u6709\u8FD9\u4E2A\u8D44\u6E90\uFF08\u4E00\u822C\u662F\u7F13\u5B58\u7684\u6570\u636E\u8FC7\u671F\u4E86\uFF09\uFF0C\u8F6C\u5934\u5411\u6839\u670D\u52A1\u5668\uFF08\u6216\u8005\u5B83\u7684\u4E0A\u5C42\u670D\u52A1\u5668\uFF09\u53BB\u8981\u8FD9\u4E2A\u8D44\u6E90\u7684\u8FC7\u7A0B\u3002</p><p>CDN \u5F80\u5F80\u88AB\u7528\u6765\u5B58\u653E\u9759\u6001\u8D44\u6E90\uFF0C \u9759\u6001\u8D44\u6E90\u672C\u8EAB\u5177\u6709\u8BBF\u95EE\u9891\u7387\u9AD8\u3001\u627F\u63A5\u6D41\u91CF\u5927\u7684\u7279\u70B9\uFF0C\u56E0\u6B64\u9759\u6001\u8D44\u6E90\u52A0\u8F7D\u901F\u5EA6\u59CB\u7EC8\u662F\u524D\u7AEF\u6027\u80FD\u7684\u4E00\u4E2A\u975E\u5E38\u5173\u952E\u7684\u6307\u6807\u3002</p><p>CDN \u662F\u9759\u6001\u8D44\u6E90\u63D0\u901F\u7684\u91CD\u8981\u624B\u6BB5\uFF0C\u5728\u8BB8\u591A\u4E00\u7EBF\u7684\u4E92\u8054\u7F51\u516C\u53F8\uFF0C\u201C\u9759\u6001\u8D44\u6E90\u8D70 CDN\u201D\u5E76\u4E0D\u662F\u4E00\u4E2A\u5EFA\u8BAE\uFF0C\u800C\u662F\u4E00\u4E2A\u89C4\u5B9A\u3002</p><h2 id="\u5C0F\u7ED3" tabindex="-1">\u5C0F\u7ED3 <a class="header-anchor" href="#\u5C0F\u7ED3" aria-hidden="true">#</a></h2><p>\u73B0\u5728\u5DF2\u7ECF\u8FDB\u5165\u4E86\u4E92\u8054\u7F51\u884C\u4E1A\u7684\u540E\u671F\u4E86\uFF0C\u5404\u4E2A\u65B9\u5411\u7684\u5934\u90E8\u516C\u53F8\u90FD\u5DF2\u7ECF\u7AD9\u7A33\u811A\u8DDF\u4E86\uFF0C\u6240\u4EE5\u63A5\u4E0B\u6765\u901A\u8FC7\u6027\u80FD\u4F18\u5316\u63D0\u5347\u7528\u6237\u4F53\u9A8C\u5C31\u6210\u4E86\u91CD\u4E2D\u4E4B\u91CD\uFF0C\u56E0\u6B64\u9762\u8BD5\u9700\u8981\u7740\u91CD\u51C6\u5907\u3002</p>`,64),r=[a];function d(o,s,c,p,h,u){return t(),l("div",null,r)}var f=e(n,[["render",d]]);export{T as __pageData,f as default};