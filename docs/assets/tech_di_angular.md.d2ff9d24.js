import{_ as e,c as r,o as n,a}from"./app.0c9aa2df.js";const _='{"title":"Angular \u7684\u4F9D\u8D56\u6CE8\u5165","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u524D\u8A00","slug":"\u524D\u8A00"},{"level":3,"title":"\u63A7\u5236\u53CD\u8F6C\u548C\u4F9D\u8D56\u6CE8\u5165","slug":"\u63A7\u5236\u53CD\u8F6C\u548C\u4F9D\u8D56\u6CE8\u5165"},{"level":3,"title":"\u4E3A\u4EC0\u4E48 Angular \u6709\u4F9D\u8D56\u6CE8\u5165","slug":"\u4E3A\u4EC0\u4E48-angular-\u6709\u4F9D\u8D56\u6CE8\u5165"},{"level":2,"title":"\u53C2\u8003","slug":"\u53C2\u8003"}],"relativePath":"tech/di/angular.md","lastUpdated":1646127957063}',t={},l=a(`<h1 id="angular-\u7684\u4F9D\u8D56\u6CE8\u5165" tabindex="-1">Angular \u7684\u4F9D\u8D56\u6CE8\u5165 <a class="header-anchor" href="#angular-\u7684\u4F9D\u8D56\u6CE8\u5165" aria-hidden="true">#</a></h1><p>\u4F9D\u8D56\u6CE8\u5165\u662F\u524D\u7AEF\u5F00\u53D1\u8005\u4E5F\u662F Angular \u5F00\u53D1\u8005\u4E00\u9053\u5F88\u96BE\u8FC8\u8FC7\u53BB\u7684\u574E\uFF0CAngular \u5B98\u65B9\u6587\u6863\u5173\u4E8E\u4F9D\u8D56\u6CE8\u5165\u4ECB\u7ECD\u7684\u5176\u5B9E\u633A\u8BE6\u7EC6\u7684\uFF0C\u4F46\u662F\u7EC4\u7EC7\u7684\u8BED\u8A00\u8FC7\u4E8E\u5B98\u65B9\uFF0C\u4E0D\u6613\u7406\u89E3\uFF1B\u5176\u6B21\u5C31\u662F\u6587\u6863\u592A\u8FC7\u5206\u6563\uFF0C\u6CA1\u6709\u628A\u4F9D\u8D56\u6CE8\u5165\u805A\u5408\u5728\u4E00\u8D77\uFF0C\u6709\u4E9B\u6838\u5FC3\u7684\u6982\u5FF5\u53EF\u80FD\u5728\u793A\u4F8B\u4E2D\u51FA\u73B0\u4E86\u89E3\u8BFB\uFF0C\u4F60\u5F88\u96BE\u5728\u4E00\u4E2A\u5730\u65B9\u627E\u5230\u6240\u6709\u4F9D\u8D56\u6CE8\u5165\u7684\u8BB2\u89E3\u3002</p><h2 id="\u524D\u8A00" tabindex="-1">\u524D\u8A00 <a class="header-anchor" href="#\u524D\u8A00" aria-hidden="true">#</a></h2><h3 id="\u63A7\u5236\u53CD\u8F6C\u548C\u4F9D\u8D56\u6CE8\u5165" tabindex="-1">\u63A7\u5236\u53CD\u8F6C\u548C\u4F9D\u8D56\u6CE8\u5165 <a class="header-anchor" href="#\u63A7\u5236\u53CD\u8F6C\u548C\u4F9D\u8D56\u6CE8\u5165" aria-hidden="true">#</a></h3><p>\u8F6F\u4EF6\u53EA\u6709\u5230\u8FBE\u4E86\u4E00\u5B9A\u7684\u590D\u6742\u5EA6\u624D\u4F1A\u9700\u8981\u5404\u79CD\u8BBE\u8BA1\u539F\u5219\u548C\u6A21\u5F0F\uFF0C\u90A3\u4E48\u4F9D\u8D56\u5012\u7F6E\u539F\u5219\uFF08Dependency Inversion Principle \uFF09\u5C31\u662F\u4E3A\u4E86\u89E3\u51B3\u8F6F\u4EF6\u6A21\u5757\u4E4B\u95F4\u7684\u8026\u5408\u6027\u63D0\u51FA\u7684\u4E00\u79CD\u601D\u60F3\uFF0C\u8BA9\u5927\u578B\u8F6F\u4EF6\u53D8\u7684\u53EF\u7EF4\u62A4\uFF0C\u9AD8\u5C42\u6A21\u5757\u4E0D\u5E94\u8BE5\u4F9D\u8D56\u4F4E\u5C42\u6A21\u5757\uFF0C\u4E24\u8005\u90FD\u5E94\u8BE5\u4F9D\u8D56\u5176\u62BD\u8C61\uFF0C\u62BD\u8C61\u4E0D\u5E94\u8BE5\u4F9D\u8D56\u7EC6\u8282\uFF0C\u7EC6\u8282\u5E94\u8BE5\u4F9D\u8D56\u62BD\u8C61\u3002</p><p>\u90A3\u4E48\u63A7\u5236\u53CD\u8F6C\uFF08Inversion of Control\uFF09 \u5C31\u662F\u4F9D\u8D56\u5012\u7F6E\u539F\u5219\u7684\u4E00\u79CD\u4EE3\u7801\u8BBE\u8BA1\u601D\u8DEF\uFF0C\u5177\u4F53\u91C7\u7528\u7684\u65B9\u6CD5\u5C31\u662F\u6240\u8C13\u7684\u4F9D\u8D56\u6CE8\u5165\uFF08Dependency Injection\uFF09\uFF0C\u901A\u8FC7\u4F9D\u8D56\u6CE8\u5165\u5B9E\u73B0\u63A7\u5236\u6743\u7684\u53CD\u8F6C\uFF0C\u9664\u4E86\u4F9D\u8D56\u6CE8\u5165\u5916\uFF0C\u8FD8\u6709\u53EF\u4EE5\u901A\u8FC7\u6A21\u677F\u65B9\u6CD5\u6A21\u5F0F\u5B9E\u73B0\u63A7\u5236\u53CD\u8F6C\uFF0C\u90A3\u4E48\u6240\u8C13\u4F9D\u8D56\u6CE8\u5165\uFF0C\u5C31\u662F\u628A\u5E95\u5C42\u7C7B\u4F5C\u4E3A\u53C2\u6570\u4F20\u5165\u4E0A\u5C42\u7C7B\uFF0C\u5B9E\u73B0\u4E0A\u5C42\u7C7B\u5BF9\u4E0B\u5C42\u7C7B\u7684\u201C\u63A7\u5236\u201D\u3002</p><p><img src="https://atlas-rc.pingcode.com/files/public/61133376f6d53d77d25c5b02/origin-url" alt="\u5173\u7CFB"></p><p>\u4EE5\u4E0B\u662F\u4E00\u4E2A\u901A\u8FC7\u6784\u9020\u51FD\u6570\u6CE8\u5165\u7684\u793A\u4F8B\uFF0C\u90A3\u4E48\u9664\u4E86\u6784\u9020\u51FD\u6570\u6CE8\u5165\u5916\uFF0C\u8FD8\u4F1A\u6709 setter \u6CE8\u5165\u548C\u63A5\u53E3\u6CE8\u5165\u3002</p><div class="language-"><pre><code>class Logger {
    log(message: string) {}
}
class HeroesService {
    constructor(logger: Logger) {}
}

const logger = new Logger();
const heroesService = new HeroesService(logger);
</code></pre></div><p>\u901A\u8FC7\u4E0A\u8FF0\u793A\u4F8B\u53D1\u73B0\uFF0C HeroesService \u200B \u4E0D\u76F4\u63A5\u521B\u5EFA Logger \u200B \u7C7B\u7684\u5B9E\u4F8B\uFF0C\u7EDF\u4E00\u5728\u5916\u5C42\u521B\u5EFA\u540E\u901A\u8FC7\u6784\u9020\u51FD\u6570\u597D\u4F20\u5165 HeroesService \u200B\u5982\u679C\u6211\u4EEC\u7684\u7C7B\u6210\u5343\u4E0A\u4E07\uFF0C\u90A3\u4E48\u5B9E\u4F8B\u5316\u7C7B\u7684\u5DE5\u4F5C\u53D8\u5F97\u76F8\u5F53\u7E41\u7410\uFF0C\u4F1A\u6709\u4E00\u5927\u63A8\u6837\u677F\u4EE3\u7801\uFF0C\u4E3A\u4E86\u7BA1\u7406\u521B\u5EFA\u4F9D\u8D56\u5DE5\u4F5C\uFF0C\u4E00\u822C\u4F1A\u4F7F\u7528 **\u63A7\u5236\u53CD\u8F6C\u5BB9\u5668(IoC Container) ** \u8FDB\u884C\u7BA1\u7406\u3002\u53EA\u9700\u8981\u901A\u8FC7\u5982\u4E0B\u4E00\u884C\u4EE3\u7801\u5373\u53EF\u5B9E\u73B0 HeroesService \u200B \u7684\u521B\u5EFA\uFF0C IocContainer \u200B \u4F1A\u901A\u8FC7 HeroesService \u200B\u7684\u6784\u9020\u51FD\u6570\u5BFB\u627E Logger \u200B \u7684\u4F9D\u8D56\u5E76\u5B9E\u4F8B\u5316\u3002</p><div class="language-"><pre><code>const heroesService = IocContainer.get(HeroesService);
</code></pre></div><p>\u5982\u679C\u7C7B\u5F88\u591A\uFF0C\u4F9D\u8D56\u5C42\u7EA7\u6BD4\u8F83\u6DF1\uFF0C\u90A3\u4E48 IocContainer \u4F1A\u5E2E\u6211\u4EEC\u7EDF\u4E00\u7BA1\u7406\u4F9D\u8D56\uFF0C IocContainer \u200B \u5176\u5B9E\u4E5F\u53EB\u6CE8\u5165\u5668 Injector \u200B, \u8BF4\u7684\u5176\u5B9E\u5C31\u662F\u4E00\u56DE\u4E8B\uFF0CAngular \u6846\u67B6\u4E2D\u53EB Injector \u200B\u3002</p><p>\u4F9D\u8D56\u6CE8\u5165\u7684\u4F18\u52BF\uFF1A</p><ul><li>\u66F4\u5BB9\u6613\u7EF4\u62A4</li><li>\u534F\u540C\u5408\u4F5C</li><li>\u65B9\u4FBF\u5355\u5143\u6D4B\u8BD5</li><li>\u677E\u8026\u5408</li><li>\u51CF\u5C11\u4E86\u6837\u677F\u4EE3\uFF08Ioc\u5BB9\u5668/\u6CE8\u5165\u5668\u7EF4\u62A4\u7BA1\u7406\u4F9D\u8D56\uFF09</li><li>\u6269\u5C55\u5E94\u7528\u7A0B\u5E8F\u53D8\u5F97\u66F4\u52A0\u5BB9\u6613</li></ul><p>\u4F9D\u8D56\u6CE8\u5165\u7684\u7F3A\u70B9\uFF1A</p><ul><li>\u5B66\u4E60\u8D77\u6765\u6709\u70B9\u590D\u6742</li><li>\u9605\u8BFB\u4EE3\u7801\u53D8\u5F97\u62BD\u8C61</li><li>\u4F9D\u8D56\u6CE8\u5165\u6846\u67B6\u662F\u901A\u8FC7\u53CD\u5C04\u6216\u52A8\u6001\u7F16\u7A0B\u5B9E\u73B0\uFF0C\u5BFC\u81F4IDE\u5BF9\u201C\u67E5\u627E\u5F15\u7528\u201D\uFF0C\u201C\u663E\u793A\u8C03\u7528\u5C42\u6B21\u7ED3\u6784\u201D\u548C\u5B89\u5168\u91CD\u6784\u53D8\u5F97\u56F0\u96BE</li><li>\u7F16\u8BD1\u65F6\u9519\u8BEF\u88AB\u63A8\u9001\u5230\u8FD0\u884C\u65F6</li></ul><h3 id="\u4E3A\u4EC0\u4E48-angular-\u6709\u4F9D\u8D56\u6CE8\u5165" tabindex="-1">\u4E3A\u4EC0\u4E48 Angular \u6709\u4F9D\u8D56\u6CE8\u5165 <a class="header-anchor" href="#\u4E3A\u4EC0\u4E48-angular-\u6709\u4F9D\u8D56\u6CE8\u5165" aria-hidden="true">#</a></h3><p>\u524D\u9762\u6211\u5DF2\u7ECF\u8BF4\u8FC7\uFF0C\u53EA\u6709\u7A0B\u5E8F\u5230\u8FBE\u4E00\u5B9A\u7684\u590D\u6742\u5EA6\uFF0C\u624D\u4F1A\u9700\u8981\u5404\u79CD\u8BBE\u8BA1\u6A21\u5F0F\u548C\u539F\u5219\u7B49\u5DE5\u7A0B\u5316\u65B9\u6CD5\u63D0\u5347\u7A0B\u5E8F\u7684\u53EF\u7EF4\u62A4\u6027\uFF0C\u90A3\u4E48 Angular.js \u8D77\u521D\u662F\u4E3A\u4E86\u89E3\u51B3\u8C37\u6B4C\u5185\u90E8\u590D\u6742\u4E2D\u5927\u578B\u7684\u524D\u7AEF\u5E94\u7528\uFF0C\u540C\u65F6\u662F\u4E00\u6279 Java \u7A0B\u5E8F\u6253\u9020\u7684\uFF0C\u6240\u4EE5\u9996\u6B21\u5728\u524D\u7AEF\u4E2D\u5927\u80C6\u5F15\u5165\u4E86\u4F9D\u8D56\u6CE8\u5165\uFF0C\u90A3\u4E48 Angular \u662F\u57FA\u4E8E Angular.js \u6253\u9020\u7684\u65B0\u4E00\u4EE3\u524D\u7AEF\u6846\u67B6\uFF0C\u6240\u4EE5\u5EF6\u7EED\u4E86\u4F9D\u8D56\u6CE8\u5165\u7279\u6027\uFF0C\u5E76\u6539\u5584\u4E86\u5C42\u7EA7\u6CE8\u5165\u5668\uFF0C\u540C\u65F6\u91C7\u7528\u4E86\u66F4\u4F18\u96C5\u7684\u88C5\u9970\u5668 API \u5F62\u5F0F\u3002</p><p>\u670D\u52A1\u548C\u4F9D\u8D56\u6CE8\u5165\u7684\u5173\u7CFB \u53E6\u5916 Angular \u4E3A\u4E86\u89E3\u51B3\u6570\u636E\u5171\u4EAB\u548C\u903B\u8F91\u590D\u7528\u95EE\u9898\uFF0C\u5F15\u5165\u4E86\u670D\u52A1\u7684\u6982\u5FF5\uFF0C\u670D\u52A1\u7B80\u5355\u7406\u89E3\u5C31\u662F\u4E00\u4E2A\u5E26\u6709\u7279\u6027\u529F\u80FD\u7684\u7C7B\uFF0CAngular \u63D0\u5021\u628A\u4E0E\u89C6\u56FE\u65E0\u5173\u7684\u903B\u8F91\u62BD\u53D6\u5230\u670D\u52A1\u4E2D\uFF0C\u8FD9\u6837\u53EF\u4EE5\u8BA9\u7EC4\u4EF6\u7C7B\u66F4\u52A0\u7CBE\u7B80\u3001\u9AD8\u6548\uFF0C\u7EC4\u4EF6\u7684\u5DE5\u4F5C\u53EA\u7BA1\u7528\u6237\u4F53\u9A8C\uFF0C\u628A\u4E1A\u52A1\u903B\u8F91\u76F8\u5173\u529F\u80FD\uFF08\u6BD4\u5982\uFF1A\u4ECE\u670D\u52A1\u5668\u83B7\u53D6\u6570\u636E\uFF0C\u9A8C\u8BC1\u7528\u6237\u8F93\u5165\u6216\u76F4\u63A5\u5F80\u63A7\u5236\u53F0\u4E2D\u5199\u65E5\u5FD7\u7B49\uFF09\u59D4\u6258\u7ED9\u5404\u79CD\u670D\u52A1\uFF0C\u6700\u540E\u901A\u8FC7 Angular \u7684\u4F9D\u8D56\u6CE8\u5165\uFF0C\u8FD9\u4E9B\u5E26\u6709\u7279\u5B9A\u529F\u80FD\u7684\u670D\u52A1\u7C7B\u53EF\u4EE5\u88AB\u4EFB\u4F55\u7EC4\u4EF6\u6CE8\u5165\u5E76\u4F7F\u7528\u3002</p><p>Angular \u4F9D\u8D56\u6CE8\u5165\uFF1A \u8FDE\u63A5\u670D\u52A1\u7684\u6865\u6881\uFF0C\u5728\u9700\u8981\u7684\u5730\u65B9\uFF08\u7EC4\u4EF6/\u6307\u4EE4/\u5176\u4ED6\u670D\u52A1\uFF09\u901A\u8FC7\u6784\u9020\u51FD\u6570\u6CE8\u5165\u4F9D\u8D56\u7684\u670D\u52A1\uFF0C\u4F9D\u8D56\u6CE8\u5165 + \u670D\u52A1\u7684\u7EC4\u5408\u9020\u5C31\u4E86\u4F7F\u7528 Angular \u53EF\u4EE5\u8F7B\u677E\u7EC4\u7EC7\u590D\u6742\u5E94\u7528\u3002 \u90A3\u4E48\u5176\u4ED6\u6846\u67B6 React \u548C Vue \u6709\u4F9D\u8D56\u6CE8\u5165\u5417\uFF1F \u53EF\u4EE5\u8BF4\u6709\uFF0C\u4E5F\u53EF\u4EE5\u8BF4\u6CA1\u6709\uFF0CReact \u4E3A\u4E86\u89E3\u51B3\u5168\u5C40\u6570\u636E\u7684\u5171\u4EAB\u95EE\u9898\uFF0C\u63D0\u51FA\u4E86 Context\uFF0C\u90A3\u4E48\u521B\u5EFA\u597D Context \u540E\u9700\u8981\u5728\u4E0A\u5C42\u7EC4\u4EF6\u901A\u8FC7 <code>&lt;MyContext.Provider value={/* \u67D0\u4E2A\u503C */}&gt; </code> \u200B \u63D0\u4F9B\u4F9D\u8D56\u503C\uFF0C\u7136\u540E\u5728\u4EFB\u4F55\u7684\u5B50\u7EC4\u4EF6\u4E2D\u901A\u8FC7 <code>&lt;MyContext.Consumer&gt;</code> \u200B \u8FDB\u884C\u6D88\u8D39\uFF08Vue \u4E2D\u4E5F\u6709\u7C7B\u4F3C\u7684 provide \u200B\u548C inject \u200B\uFF09\uFF0C\u5176\u5B9E\u8FD9\u53EF\u4EE5\u72ED\u9698\u7684\u7406\u89E3\u6210\u6700\u7B80\u5355\u7684\u4F9D\u8D56\u6CE8\u5165\uFF0C\u53EA\u4E0D\u8FC7 Context \u53EA\u89E3\u51B3\u4E86\u6570\u636E\u5171\u4EAB\u7684\u95EE\u9898\uFF0C\u867D\u7136\u4E5F\u53EF\u4EE5\u4F5C\u4E3A\u903B\u8F91\u590D\u7528\uFF0C\u4F46\u662F\u5B98\u65B9\u4E0D\u63A8\u8350\uFF0CReact \u5B98\u65B9\u5148\u540E\u63A8\u51FA Mixin\u3001\u9AD8\u9636\u7EC4\u4EF6\u3001Render Props \u4EE5\u53CA\u6700\u65B0\u7684 Hooks \u7528\u6765\u89E3\u51B3\u903B\u8F91\u590D\u7528\u95EE\u9898\u3002</p><div class="language-"><pre><code>&lt;MyContext.Consumer&gt;
  {value =&gt; /* \u57FA\u4E8E context \u503C\u8FDB\u884C\u6E32\u67D3*/}
&lt;/MyContext.Consumer&gt;
</code></pre></div><p>\u90A3\u4E48\u56DE\u5230 Angular \u6846\u67B6\u6765\u8BF4\uFF0CAngular \u7684\u670D\u52A1 + \u4F9D\u8D56\u6CE8\u5165\u5B8C\u7F8E\u89E3\u51B3\u4E86\u6570\u636E\u5171\u4EAB\u548C\u903B\u8F91\u590D\u7528\u95EE\u9898\uFF0C\u670D\u52A1\u672C\u8D28\u4E0A\u548C React Hooks \u6CA1\u6709\u592A\u591A\u7684\u533A\u522B\uFF0C\u53EA\u662F API \u5F62\u6001\u4E0D\u4E00\u6837\uFF0C\u4E00\u4E2A\u662F\u901A\u8FC7\u51FD\u6570\u5F62\u5F0F\u4E00\u4E2A\u662F\u901A\u8FC7\u7C7B+\u4F9D\u8D56\u6CE8\u5165\uFF0C\u56E0\u4E3A\u8FD9\u4E24\u4E2A\u6846\u67B6\u7684\u5E95\u5C42\u673A\u5236\u548C\u601D\u60F3\u4E0D\u4E00\u6837\uFF0C\u5BFC\u81F4\u4E86 API \u8868\u73B0\u5F62\u5F0F\u7684\u4E0D\u540C\uFF0C\u4F46\u662F\u6700\u7EC8\u90FD\u662F\u5728\u89E3\u51B3\u6570\u636E\u5171\u4EAB\u548C\u903B\u8F91\u590D\u7528\u7684\u95EE\u9898\u3002</p><h2 id="\u53C2\u8003" tabindex="-1">\u53C2\u8003 <a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a></h2><ul><li><a href="https://juejin.cn/post/7012237021607362597" target="_blank" rel="noopener noreferrer">https://juejin.cn/post/7012237021607362597</a></li><li><a href="https://juejin.cn/post/7012492445506093092" target="_blank" rel="noopener noreferrer">https://juejin.cn/post/7012492445506093092</a></li><li><a href="https://juejin.cn/post/7019184783242559496" target="_blank" rel="noopener noreferrer">https://juejin.cn/post/7019184783242559496</a></li></ul>`,24),o=[l];function i(c,s,p,g,d,u){return n(),r("div",null,o)}var v=e(t,[["render",i]]);export{_ as __pageData,v as default};
