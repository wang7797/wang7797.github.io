# 关于前端基建的思考
如果说写代码是低头走路，那么学习不同团队的基建思路就是仰望星空，让我们在高速发展的前端的道路上不至于迷失方向。

## 一、基建工作都有哪些内容
基建的内容这个话题其实可大可小，不同的团队规模有不同理解，不同的公司规模也会有不同的要求。

### 代码层面
- 文件、文件夹、变量命名规范，大驼峰、小驼峰、下划线命名发、首位不能出现数字等等
- 文件拆分的基本要求，比如一个代码文件超过400行，必须要拆分成不同的包，抽离不同的类
- 项目中禁止出现冗余代码，禁止出现无效的变量和无意义的命名
- 禁止同样功能的包在一个项目中共存，如axios和jquery的ajax共存
- 超过4k的图片必须用外链形式引入
- eslint、tslint、prettier对代码规范的约束
- 单元测试、UI测试、全链路压测......
- 新技术调研和分析
- 代码规范其实是一个很大的话题，不同团队也有不同要求只要大家都能接受的就是适合自己团队的

### 发版规范
- git flow的相关规范，commit的规则
- 分支管理和命名规则
- 发版的整个流程设计，流程是否合规，是否能帮助大家规避一些长犯的错误
- 发版前是否要做自动化测试
- 测试环境、预生产环境、生产环境的发版和回归测试要求，比如：任何一次发版结束都要去对应的环境看页面是否能打开，接口是否能跑通。

### 开发规范
- 新建开发项目的项目仓库模板/基础开发框架/技术找是否统一，是否具备可视化搭建的必要
- 整个项目新建和发布流程是否完整顺滑
- 相应的调试工具是否高效
- 如果有自研或者第三方组件库，组件库是否有统一，有什么样的要求
- 编辑器插件是否统一，大家标准是否一致

### 工程化和组件化
- 工程代码规范，仓库、代码、发布、文档、测试、开源方面的规范
- 工程构建规范、针对不同技术栈和不同框架的jenkins打包发版一条龙构建、或者自研可视化的工程发布规范、gitlab CI/CD
- 内部自研的针对各个平台的打包脚本和部署脚本，实现自动化部署
- 适用于各个平台的组件化，PC/Mobile/RN/Flutter/小程序等等
- 不同技术栈/React/RN/Vue/小程序的前端基础框架，小团队尽量选单一的，大团队可以百花齐放
- 业务组件和UI组件结合使用，实现快速开发
- 可视化的组件拖拽实现页面快速开发，让非技术人员也具备基本的开发能力
- 组件和框架发布流程和管理流程
- node端的web框架
- 全栈路由监控

### 统计监控
- 部署过程监控
- 端行为数据监控
- 数据采集、埋点设计
- 前后端错误日志的抓取应用
- 性能分析,要匹配相应的性能分析工具
- 监控SDK

### 安全防控
- 代码安全监测
- 行为安全监测
- 端异常回溯指派
- 第三方安装包安全监测
- XSS/CSRF安全攻击

### 文档沉淀
- 编码规范、命名规范、Git规范、流程规范、性能规范、数据规范、埋点规范、安全规范
- 组件规范、工程规范、开源规范、文档规范、
- 业务文档、技术文档、分享沉淀文档、新人文档

### 可视化搭建
以上所有的功能有些做出来就是可视化的，有些用脚本就可以跑，当团队规模足够大的时候，是需要做可视化工具的，让大家可以更直观的使用所有的功能。

## 二、基建的意义何在---为了解决什么问题
不同的团队规模、不同的团队水平和不同的业务体量决定了基建在这个团队中的意义，脱离以上三点实际情况谈基建是没有任何意义的析。

### 解决业务问题（也是最核心最基础的问题）
- 把握当下，解决当下的业务问题，是业务的支撑
- 提高效率，基建可以提高单个人的工作产出和工作效率，可以从代码层面解决一些普遍性和常用性的业务问题
- 提高质量，基建可以提高整个团队的代码质量
- 合理架构，架构的抽象性和合理性是影响产出比的重要因素
- 流程制度，优异的流程制度必将带来正面的、积极的、有实效的业务支撑
- 活在未来，应对未来业务爆发的可能性

### 实现团队练兵
- 技术方案选型和调研能快速提高团队成员的技术水平扩宽技术视野
- 项目管理可以让小伙伴们有强烈的自我驱动意识，发挥主观能动性，提高团队活力
- 培养产品化思维，一个基建的点可能就是一个完整的项目，负责人从开始到落地整个过程都是自己主导，可以培养产品思维，对整个行业的链条会有更加深刻的认知能力

### 梯队建设
- 千人一面写业务代码，大家的水平最终会趋同，团队没有技术梯队
- 有人是业务的核心开发者，有人是组件的核心开发者，有人是工程化搭建的核心开发者，分门别类，大家技术栈不同，技术侧重点不同。从生物学角度来说，多样化也是生命力的表现，一个生态，多样化越明显，生命力越顽强

### 影响力建设
- 技术沉淀，技术沉底也是一个团队的技术底蕴，是实力的象征
- 技术分享，包括团队内部的分享和团队外部的分享
- 产品体验，沉淀一些优秀的交互，一些优秀的UI视觉，产品体验更友好
- 开源体验，让更多人人了解团队，使用你的技术，增加公司的影响力

## 三、不同团队的发展阶段以及基建的侧重点分析
前面说过脱离实际情况谈基建是没有任何意义的。基建需要从问题出发做事情，跟随团队一起成长。

### 上古时代
这个时期的团队规模一般都在1-3人左右，，具体数字完全靠自己估计，不要深究合理性。可能公司也是发展的早期，整个技术部或许也就20人以内。业务量来说，可能有一款核心的产品，两个粗糙的运营工具，三四个辅助的项目支撑业务。我通常会认为这个阶段是不需要一步到位做基建的。

首先要做的是代码层面的规范，能初步确保代码质量过硬就好了，需要leader经常抽出时间做代码review，帮助小伙伴们提高代码的质量，严把质量关。其次可以做一些简单的代码规范文档，项目中融入一些业务说明文档，没有能力构建可视化发版工具的可以考虑用脚本发版，毕竟脚本发版并不见得有多低级。可视化和工程化构建不也是建立在脚本之上么，这个无可厚非。

反过来说，你花了大量的人力资源，协调了多个部门终于做了可视化建设和工程建设，但是公司迟迟不做新项目，业务量迟迟不增加，其实有点大材小用了，对业务的提效并不明显，得不偿失。不过，对个人来说这个阶段做基建是提升个人能力的关键时期，个人能力必将会有大幅度提高，为以后应对公司腾飞打下坚实的基础。

### 工具时代
这个时期的团队一般会在4-8人左右吧，具体数字完全靠自己估计，不要深究合理性。公司业务也会以亿为规模计算，公司人数在100-500左右。涉及到的各种toB项目和toC项目会有几十个。这个阶段的团队应该已经在早期沉淀了一些东西，也算是有家底的团队了。

这个时候的团队为了支撑不算海量的业务，会去有意识的尝试使用不同的工具，助力业务开发。同时，大家也会发现不同技术栈带来的理解成本和开发成本剧增，是时候要进行技术栈的统一了，团队里应该会有一些大牛，积极推进工程化建设，组件建设初具规模，抽象出来的工具库初步具备体系，开始考虑搭建私有的npm仓库，开始考虑完善相关的的技术文档，甚至开始考虑做一个专门的网站承载一些文档，帮助团队成员开发速查，帮助新人尽快了解团队整体技术水平。

同时，开始用gitlab/CL/CD或者jenkins来做自动化建设，解放人力。项目越来越多，线上代码异常难以定位，总是花费大量人力维护老项目也力不从心，这时候你会想着去做一些监控的事情，帮助团队发现代码中的问题，提高代码的健壮性。leader会有意识的推动各种组件和工具的npm化，方便后期维护，同事也可以极大提高开发效率，保障代码质量。

罗马不是一天建成的，这个时期对团队转型来说，对喜欢的人来说充满了刺激，对不喜欢的人来说可能就是噩梦，在打破惯性思维的道路上，必定会遇到阻力，推进工具时代的发展必定会耗费大量的心力，但是收益也是巨大的。

### 工程时代
这个时期的团队一般会在10-30人左右，具体数字全靠自己估计，不要深究合理性。公司业务会以十亿规模计算，公司人数可能在500人-1000人左右。涉及的应用应该在上百个左右。当然也不乏提前布局的leader，在业务量没达到这个规模的时候就做了工程化的建设。

这个时候的团队应该会有一些资深大牛，他们对业务有深入的了解，能够左右业务的决策，能够把控项目的进度，同时避免一些雷区。团队的技术生态应该是百花齐放的，同时内部以小组为单位实现技术栈的统一。对于一些普适性和高频的业务逻辑应该可以实现api化，通过调相应的业务组件或者相应的功能性文件包实现快速开发。作为一线的程序员只需要去关注具体的业务逻辑，不需要去关注具体的技术细节。

在海量技术文档的帮助下，即使是新来的员工，也能快速完成开发。运营通过可视化的开发平台，可以实现组件的拼装，从而完成功能开发，通过一键发版，进行测试和上线，程序员在这里起到辅助的作用。这个时候的基础架构应该已经有很多的积累，大多数项目都可以实现拿来即用的程度。箱子里的工具多了，做什么都比较顺手。前端从造工具进入用工具的阶段。

### 智能时代
这个时期的前端团队规模应该在50人以上，具体数字全靠自己估计，不要深究合理性。公司业务会以千亿规模计算，公司人说会在1000-100000之间。涉及的应用可能没有一个人真正的去统计过，因为实在太多了。

这个阶段的一些leader或者资深技术可能需要进入深度的商业发现或者商业决策。基础设置除了上面的拿来即用，更多的是实现智能化，设计的东西能通过智能化迅速转化为代码。运营不需要再盯着前端写代码，因为他们通过可视化界面已经可以自己完成功能的开发和上线。

这个阶段的团队不仅有大量的工具，还有大量的物料，通过智能化的方法实现无感开发。这些技术实现不仅影响到公司的技术发展，而且影响到整个行业的生态。我们期待这个时代的到来。

## 四、如何建设基建团队
有的公司有专门做基建的团队，比如架构组，运维组之类的部门；有些公司的程序员是一边做基建一边开发业务代码。这是两种不同的组织形式，没有好坏之分，只有是否适合的区别，当然其中也会涉及到一些行政干预的力量。

不同的公司可以根据不同的情况进行设计。以上两种组织形式，归根到底都是为了解决一个问题：怎样找到合适的人去做合适的事？

### 需要做什么样的事
- 具体要做哪些事第一部分已有说明，此处不再展开论述
- 切记要综合评估人和事是否匹配
- 作为leader最重要的是实现资源和合理配置，发挥出最大作用
- 让合适的人做适合的事
- leader要借人成事，同事也要借事成人，实现整体的发展提高

### 需要什么样的人
- 所做之事和当前程序员的技术实力是匹配的，或者说踮起脚尖可以够得着的
- 能写出扩展性比较好的代码sdk
- 业务开发中善于总结和分享，看的代码多，知道哪些代码是好代码，
- 有一定抽象和归纳总结的能力
- 喜欢折腾，保持折腾的心态。（工作经验3年以上的，保持这种心态的人会越来越少）
- 能去了解痛点，深入了解业务，知道业务需要什么样的东西
- 沟通能力强，能把自己做的东西推广出去

### 什么性格的人
- 沟通能力强(沟通能力强不能用内向或者外向来判断)
- 技术上稍微激进一点，喜欢用新代码，喜欢研究新技术
- 有同理心，可以换位思考，能站在使用者的角度思考功能的合理性和便捷性，同时要思考如何让各个团队实现双赢
- 可以积极主动push一件事情推进
- 事必躬亲，既要乐于主动了解业务，又能分析出业务中的痛点，通过做事发现问题，杜绝闭门造车
- 奉献精神，要乐于奉献自己的时间和精力去做这些难啃的硬骨头

### 技术上的支持
- node的相关技能
- sh脚本的相关技能
- 可以熟练使用各种命令行和工具
- python、c++、go等等的技能
- webpack gulp的技能
- ios或者安卓的技能
- docker技能

以上根据基建的点选择不同技术栈的同学来做。

## 五、基建工作如何落地
基建工作的落地实施除了需要技术的热情，同样离不开公司CTO甚至是大Boss的支持，要多学会用数据说话，通过数据和收益来证明一件事情的必要性和可行性。这是前提，缺乏这个前提你做的事情可能并不会得到各方面的支持。

同时，基建工作的落地和选的人有密不可分的关系。如果在一开始做的时候就没选好人，那么基建的效果可能会大打折扣，甚至做出来的东西根本没人用，以至于后期没人维护没人管。

另外要做好数据统计工作，做出的东西在交付使用之前尽量做好使用量统计工作。比如，可以统计一个组件库在整个前端团队的引用次数有多少，一个工具的打开率有多高，节省了多少的人力成本，节省了多少的时间。

这些东西如果能有可视化的界面做支撑，下次再做基建立项的时候，被领导信任的概率就会大大增加。
