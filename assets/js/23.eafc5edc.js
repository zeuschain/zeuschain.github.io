(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{190:function(_,v,t){"use strict";t.r(v);var d=t(0),a=Object(d.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("div",{staticClass:"content"},[t("h1",{attrs:{id:"_3-区块链系统的互操作-api"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-区块链系统的互操作-api","aria-hidden":"true"}},[_._v("#")]),_._v(" 3. 区块链系统的互操作 API")]),_._v(" "),t("h2",{attrs:{id:"_3-1-账户管理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-账户管理","aria-hidden":"true"}},[_._v("#")]),_._v(" 3.1 账户管理")]),_._v(" "),t("h3",{attrs:{id:"_3-1-1-账户注册"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-1-账户注册","aria-hidden":"true"}},[_._v("#")]),_._v(" 3.1.1 账户注册")]),_._v(" "),t("p",[_._v("方法:createAccountWithPassword")]),_._v(" "),t("p",[_._v("功能:账户注册")]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("参数")]),_._v(" "),t("th",[_._v("说明")]),_._v(" "),t("th",[_._v("类型")]),_._v(" "),t("th",[_._v("默认值")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[_._v("account")]),_._v(" "),t("td",[_._v("用户名")]),_._v(" "),t("td",[_._v("string")]),_._v(" "),t("td",[_._v("-")])]),_._v(" "),t("tr",[t("td",[_._v("password")]),_._v(" "),t("td",[_._v("密码")]),_._v(" "),t("td",[_._v("string")]),_._v(" "),t("td",[_._v("-")])]),_._v(" "),t("tr",[t("td",[_._v("autoLogin")]),_._v(" "),t("td",[_._v("指定是否自动登录")]),_._v(" "),t("td",[_._v("boolean")]),_._v(" "),t("td",[_._v("false")])]),_._v(" "),t("tr",[t("td",[_._v("callback")]),_._v(" "),t("td",[_._v("回调函数")]),_._v(" "),t("td",[_._v("string")]),_._v(" "),t("td",[_._v("-")])])])]),_._v(" "),t("h3",{attrs:{id:"_3-1-2-账户登录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-2-账户登录","aria-hidden":"true"}},[_._v("#")]),_._v(" 3.1.2 账户登录")]),_._v(" "),t("p",[_._v("方法:passwordLogin")]),_._v(" "),t("p",[_._v("功能:账户登录")]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("参数")]),_._v(" "),t("th",[_._v("说明")]),_._v(" "),t("th",[_._v("类型")]),_._v(" "),t("th",[_._v("默认值")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[_._v("account")]),_._v(" "),t("td",[_._v("用户名")]),_._v(" "),t("td",[_._v("string")]),_._v(" "),t("td",[_._v("-")])]),_._v(" "),t("tr",[t("td",[_._v("password")]),_._v(" "),t("td",[_._v("密码")]),_._v(" "),t("td",[_._v("string")]),_._v(" "),t("td",[_._v("-")])]),_._v(" "),t("tr",[t("td",[_._v("callback")]),_._v(" "),t("td",[_._v("见统一 API 说明")]),_._v(" "),t("td",[_._v("function")]),_._v(" "),t("td",[_._v("-")])])])]),_._v(" "),t("h3",{attrs:{id:"_3-1-3-私钥登录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-3-私钥登录","aria-hidden":"true"}},[_._v("#")]),_._v(" 3.1.3 私钥登录")]),_._v(" "),t("p",[_._v("方法:privateKeyLogin")]),_._v(" "),t("p",[_._v("功能:导入私钥。该方法将会使用临时密码对明文私钥进行双重加密，该密码每次导入私钥的时候可以设置不同的密码")]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("参数")]),_._v(" "),t("th",[_._v("说明")]),_._v(" "),t("th",[_._v("类型")]),_._v(" "),t("th",[_._v("默认值")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[_._v("privateKey")]),_._v(" "),t("td",[_._v("明文私钥")]),_._v(" "),t("td",[_._v("string")]),_._v(" "),t("td",[_._v("-")])]),_._v(" "),t("tr",[t("td",[_._v("password")]),_._v(" "),t("td",[_._v("临时密码,每次导入私钥时可以设置不同的密码")]),_._v(" "),t("td",[_._v("string")]),_._v(" "),t("td",[_._v("-")])]),_._v(" "),t("tr",[t("td",[_._v("callback")]),_._v(" "),t("td",[_._v("见统一 API 说明")]),_._v(" "),t("td",[_._v("function")]),_._v(" "),t("td",[_._v("-")])])])]),_._v(" "),t("h3",{attrs:{id:"_3-1-4-退出登录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-4-退出登录","aria-hidden":"true"}},[_._v("#")]),_._v(" 3.1.4 退出登录")]),_._v(" "),t("p",[_._v("方法:logout")]),_._v(" "),t("p",[_._v("功能:清除用户相关缓存信息,其中包括清除加密后的非明文 key")]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("参数")]),_._v(" "),t("th",[_._v("说明")]),_._v(" "),t("th",[_._v("类型")]),_._v(" "),t("th",[_._v("默认值")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[_._v("callback")]),_._v(" "),t("td",[_._v("见统一 API 说明")]),_._v(" "),t("td",[_._v("function")]),_._v(" "),t("td",[_._v("-")])])])]),_._v(" "),t("h3",{attrs:{id:"_3-1-5-修改密码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-5-修改密码","aria-hidden":"true"}},[_._v("#")]),_._v(" 3.1.5 修改密码")]),_._v(" "),t("p",[_._v("方法:changePassword")]),_._v(" "),t("p",[_._v("功能: 在以下两种情况能修改密码=>1 账户密码登录模式，旧密码即创建账户时的原始密码；2 ownerPrivateKey 导入登录模式，旧密码为导入时设置的临时密码。注：activePrivateKey 不能修改密码")]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("参数")]),_._v(" "),t("th",[_._v("说明")]),_._v(" "),t("th",[_._v("类型")]),_._v(" "),t("th",[_._v("默认值")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[_._v("oldPassword")]),_._v(" "),t("td",[_._v("原始密码/导入 ownerPrivateKey 设置的临时密码")]),_._v(" "),t("td",[_._v("string")]),_._v(" "),t("td",[_._v("-")])]),_._v(" "),t("tr",[t("td",[_._v("newPassword")]),_._v(" "),t("td",[_._v("新密码")]),_._v(" "),t("td",[_._v("string")]),_._v(" "),t("td",[_._v("-")])]),_._v(" "),t("tr",[t("td",[_._v("callback")]),_._v(" "),t("td",[_._v("修改密码成功后,API 将会自动调用退出登录。")]),_._v(" "),t("td",[_._v("function")]),_._v(" "),t("td",[_._v("-")])])])]),_._v(" "),t("h3",{attrs:{id:"_3-1-6-导出用户私钥"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-6-导出用户私钥","aria-hidden":"true"}},[_._v("#")]),_._v(" 3.1.6 导出用户私钥")]),_._v(" "),t("p",[_._v("方法:getPrivateKey")]),_._v(" "),t("p",[_._v("功能:获取用户 Active PrivateKey,本秘钥可用于为账户所有花费行为签名")]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("参数")]),_._v(" "),t("th",[_._v("说明")]),_._v(" "),t("th",[_._v("类型")]),_._v(" "),t("th",[_._v("默认值")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[_._v("callback")]),_._v(" "),t("td",[_._v("返回对象结构为： "),t("code",[_._v("{status:1,data:{activePrivateKey:”****\\*\\*\\*****”}}")]),_._v(", 其中:activePrivateKey 为私钥串")]),_._v(" "),t("td",[_._v("function")]),_._v(" "),t("td",[_._v("-")])])])]),_._v(" "),t("h3",{attrs:{id:"_3-1-7-解锁账户"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-7-解锁账户","aria-hidden":"true"}},[_._v("#")]),_._v(" 3.1.7 解锁账户")]),_._v(" "),t("p",[_._v("方法:unlockAccount")]),_._v(" "),t("p",[_._v("功能:导入私钥后才可以使用此方法解锁账户")]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("参数")]),_._v(" "),t("th",[_._v("说明")]),_._v(" "),t("th",[_._v("类型")]),_._v(" "),t("th",[_._v("默认值")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[_._v("password")]),_._v(" "),t("td",[_._v("导入私钥时设置的临时密码")]),_._v(" "),t("td",[_._v("string")]),_._v(" "),t("td",[_._v("空字符串")])]),_._v(" "),t("tr",[t("td",[_._v("callback")]),_._v(" "),t("td",[_._v("-")]),_._v(" "),t("td",[_._v("function")]),_._v(" "),t("td",[_._v("-")])])])]),_._v(" "),t("h3",{attrs:{id:"_3-1-8-锁定账户"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-8-锁定账户","aria-hidden":"true"}},[_._v("#")]),_._v(" 3.1.8 锁定账户")]),_._v(" "),t("p",[_._v("方法:lockAccount")]),_._v(" "),t("p",[_._v("功能:锁定账户")]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("参数")]),_._v(" "),t("th",[_._v("说明")]),_._v(" "),t("th",[_._v("类型")]),_._v(" "),t("th",[_._v("默认值")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[_._v("callback")]),_._v(" "),t("td",[_._v("-")]),_._v(" "),t("td",[_._v("function")]),_._v(" "),t("td",[_._v("-")])])])]),_._v(" "),t("h3",{attrs:{id:"_3-1-9-查询账户记录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-9-查询账户记录","aria-hidden":"true"}},[_._v("#")]),_._v(" 3.1.9 查询账户记录")]),_._v(" "),t("p",[_._v("方法:queryUserOperations")]),_._v(" "),t("p",[_._v("功能:查询用户近期操作记录")]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("参数")]),_._v(" "),t("th",[_._v("说明")]),_._v(" "),t("th",[_._v("类型")]),_._v(" "),t("th",[_._v("默认值")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[_._v("account")]),_._v(" "),t("td",[_._v("账户名")]),_._v(" "),t("td",[_._v("string")]),_._v(" "),t("td",[_._v("-")])]),_._v(" "),t("tr",[t("td",[_._v("limit")]),_._v(" "),t("td",[_._v("查询记录条数")]),_._v(" "),t("td",[_._v("number")]),_._v(" "),t("td",[_._v("-")])]),_._v(" "),t("tr",[t("td",[_._v("callback")]),_._v(" "),t("td",[_._v("-")]),_._v(" "),t("td",[_._v("function")]),_._v(" "),t("td",[_._v("-")])])])]),_._v(" "),t("h3",{attrs:{id:"_3-1-10-订阅用户操作记录变更"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-10-订阅用户操作记录变更","aria-hidden":"true"}},[_._v("#")]),_._v(" 3.1.10 订阅用户操作记录变更")]),_._v(" "),t("p",[_._v("方法:subscribeToUserOperations")]),_._v(" "),t("p",[_._v("功能:订阅用户操作记录变更")]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("参数")]),_._v(" "),t("th",[_._v("说明")]),_._v(" "),t("th",[_._v("类型")]),_._v(" "),t("th",[_._v("默认值")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[_._v("account")]),_._v(" "),t("td",[_._v("账户名")]),_._v(" "),t("td",[_._v("string")]),_._v(" "),t("td",[_._v("-")])]),_._v(" "),t("tr",[t("td",[_._v("callback")]),_._v(" "),t("td",[_._v("只要用户操作记录有变化，就调用此 callback")]),_._v(" "),t("td",[_._v("function")]),_._v(" "),t("td",[_._v("-")])])])]),_._v(" "),t("h3",{attrs:{id:"_3-1-11-查询账户信息"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-11-查询账户信息","aria-hidden":"true"}},[_._v("#")]),_._v(" 3.1.11 查询账户信息")]),_._v(" "),t("p",[_._v("方法:queryUserInfo")]),_._v(" "),t("p",[_._v("功能:账户信息中包含用户 id 用户名等信息")]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("参数")]),_._v(" "),t("th",[_._v("说明")]),_._v(" "),t("th",[_._v("类型")]),_._v(" "),t("th",[_._v("默认值")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[_._v("account")]),_._v(" "),t("td",[_._v("账户名")]),_._v(" "),t("td",[_._v("string")]),_._v(" "),t("td",[_._v("-")])]),_._v(" "),t("tr",[t("td",[_._v("callback")]),_._v(" "),t("td",[_._v("见统一 API 说明")]),_._v(" "),t("td",[_._v("function")]),_._v(" "),t("td",[_._v("-")])])])]),_._v(" "),t("h2",{attrs:{id:"_3-2-代币操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-代币操作","aria-hidden":"true"}},[_._v("#")]),_._v(" 3.2 代币操作")]),_._v(" "),t("h3",{attrs:{id:"_3-2-1-查询用户指定代币资产"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-1-查询用户指定代币资产","aria-hidden":"true"}},[_._v("#")]),_._v(" 3.2.1 查询用户指定代币资产")]),_._v(" "),t("p",[_._v("方法:queryAccountBalances")]),_._v(" "),t("p",[_._v("功能:获取用户对应的数字资产，如果 assetID_or_symbol 为空，则返回用户所有道具。")]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("参数")]),_._v(" "),t("th",[_._v("说明")]),_._v(" "),t("th",[_._v("类型")]),_._v(" "),t("th",[_._v("默认值")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[_._v("account")]),_._v(" "),t("td",[_._v("账户名")]),_._v(" "),t("td",[_._v("string")]),_._v(" "),t("td",[_._v("-")])]),_._v(" "),t("tr",[t("td",[_._v("assetId_or_symbol")]),_._v(" "),t("td",[_._v("资产 ID 或代币符号，资产 ID:数字代币的唯一代币标识 ID(如:”1.3.0”)，代币符号 (如:”MTN”), 如果 assetID_or_symbol 为空，则返回用户所有代币。")]),_._v(" "),t("td",[_._v("string")]),_._v(" "),t("td",[_._v("-")])]),_._v(" "),t("tr",[t("td",[_._v("callback")]),_._v(" "),t("td",[_._v("见统一 API 说明")]),_._v(" "),t("td",[_._v("function")]),_._v(" "),t("td",[_._v("-")])])])]),_._v(" "),t("h3",{attrs:{id:"_3-2-2-查询用户拥有的所有资产列表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-2-查询用户拥有的所有资产列表","aria-hidden":"true"}},[_._v("#")]),_._v(" 3.2.2 查询用户拥有的所有资产列表")]),_._v(" "),t("p",[_._v("方法:queryAccountAllBalances")]),_._v(" "),t("p",[_._v("功能:查询用户拥有的所有资产列表，列表中包含资产对记账单位的换算值")]),_._v(" "),t("p",[_._v("参数:")]),_._v(" "),t("ul",[t("li",[_._v("unit:记账单位，将会根据交易市场价格换算等价的该资产，资产 ID 或代币符号，资产 ID:数字代币的唯一代币 标识 ID(如:”1.3.0”)，代币符号(如:”MTN”)")]),_._v(" "),t("li",[_._v("account:用户名")]),_._v(" "),t("li",[_._v("callback:")])]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("参数")]),_._v(" "),t("th",[_._v("说明")]),_._v(" "),t("th",[_._v("类型")]),_._v(" "),t("th",[_._v("默认值")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[_._v("account")]),_._v(" "),t("td",[_._v("账户名")]),_._v(" "),t("td",[_._v("string")]),_._v(" "),t("td",[_._v("-")])]),_._v(" "),t("tr",[t("td",[_._v("unit")]),_._v(" "),t("td",[_._v("记账单位，将会根据交易市场价格换算等价的该资产，资产 ID 或代币符号，资产 ID：数字代币的唯一代币标识 ID（如：”1.3.0”），代币符号（如：”MTN”）")]),_._v(" "),t("td",[_._v("string")]),_._v(" "),t("td",[_._v("1.3.0（核心资产 ID）")])]),_._v(" "),t("tr",[t("td",[_._v("callback")]),_._v(" "),t("td",[_._v("见统一 API 说明")]),_._v(" "),t("td",[_._v("function")]),_._v(" "),t("td",[_._v("-")])])])]),_._v(" "),t("h3",{attrs:{id:"_3-2-3-代币资产转移"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-3-代币资产转移","aria-hidden":"true"}},[_._v("#")]),_._v(" 3.2.3 代币资产转移")]),_._v(" "),t("p",[_._v("方法:transferAsset")]),_._v(" "),t("p",[_._v("功能:向目标对象发送代币")]),_._v(" "),t("p",[_._v("参数:")]),_._v(" "),t("ul",[t("li",[_._v("to: 收款方账号名")]),_._v(" "),t("li",[_._v("amount:发送的代币数量")]),_._v(" "),t("li",[_._v("assetId :资产 ID (如:1.3.0)或 代币符号(如:MTN)")]),_._v(" "),t("li",[_._v("memo: 转账备注")]),_._v(" "),t("li",[_._v("callback: 设置转账后的回调函数")])]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("参数")]),_._v(" "),t("th",[_._v("说明")]),_._v(" "),t("th",[_._v("类型")]),_._v(" "),t("th",[_._v("默认值")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[_._v("to")]),_._v(" "),t("td",[_._v("收款方账号名")]),_._v(" "),t("td",[_._v("string")]),_._v(" "),t("td",[_._v("-")])]),_._v(" "),t("tr",[t("td",[_._v("amount")]),_._v(" "),t("td",[_._v("发送的代币数量")]),_._v(" "),t("td",[_._v("number")]),_._v(" "),t("td",[_._v("0")])]),_._v(" "),t("tr",[t("td",[_._v("assetId")]),_._v(" "),t("td",[_._v("发送的代币种类。资产 ID （如：1.3.0）或 代币符号（如：MTN）")]),_._v(" "),t("td",[_._v("string")]),_._v(" "),t("td",[_._v("1.3.0（核心资产 ID）")])]),_._v(" "),t("tr",[t("td",[_._v("memo")]),_._v(" "),t("td",[_._v("转账备注")]),_._v(" "),t("td",[_._v("string")]),_._v(" "),t("td",[_._v("-")])]),_._v(" "),t("tr",[t("td",[_._v("callback")]),_._v(" "),t("td",[_._v("见统一 API 说明")]),_._v(" "),t("td",[_._v("function")]),_._v(" "),t("td",[_._v("-")])])])]),_._v(" "),t("h2",{attrs:{id:"_3-3-游戏道具操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-游戏道具操作","aria-hidden":"true"}},[_._v("#")]),_._v(" 3.3 游戏道具操作")]),_._v(" "),t("h3",{attrs:{id:"_3-3-1-创建游戏版本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-1-创建游戏版本","aria-hidden":"true"}},[_._v("#")]),_._v(" 3.3.1 创建游戏版本")]),_._v(" "),t("p",[_._v("方法:createGameVersion")]),_._v(" "),t("p",[_._v("功能:创建游戏支持的道具版本，向区块链系统注册当前账号(通常为游戏的账号)支持的道具版本")]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("参数")]),_._v(" "),t("th",[_._v("说明")]),_._v(" "),t("th",[_._v("类型")]),_._v(" "),t("th",[_._v("默认值")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[_._v("versionName")]),_._v(" "),t("td",[_._v("版本名称")]),_._v(" "),t("td",[_._v("string")]),_._v(" "),t("td",[_._v("-")])]),_._v(" "),t("tr",[t("td",[_._v("callback")]),_._v(" "),t("td",[_._v("见统一 API 说明")]),_._v(" "),t("td",[_._v("function")]),_._v(" "),t("td",[_._v("-")])])])]),_._v(" "),t("h3",{attrs:{id:"_3-3-2-创造道具"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-2-创造道具","aria-hidden":"true"}},[_._v("#")]),_._v(" 3.3.2 创造道具")]),_._v(" "),t("p",[_._v("方法:createGameItem")]),_._v(" "),t("p",[_._v("功能:创建一个唯一的游戏道具，具有唯一性。本接口仅限道具制造商(铁匠铺)使用。")]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("参数")]),_._v(" "),t("th",[_._v("说明")]),_._v(" "),t("th",[_._v("类型")]),_._v(" "),t("th",[_._v("默认值")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[_._v("itemVER")]),_._v(" "),t("td",[_._v("道具版本(当 type 为 1 时不传该参数)")]),_._v(" "),t("td",[_._v("string")]),_._v(" "),t("td",[_._v("-")])]),_._v(" "),t("tr",[t("td",[_._v("道具版本(当 type 为 1 时不传该参数)")]),_._v(" "),t("td",[_._v("当前道具交易时，适用的资产 ID；(当 type 为 1 时不传该参数)")]),_._v(" "),t("td",[_._v("string")]),_._v(" "),t("td",[_._v("-")])]),_._v(" "),t("tr",[t("td",[_._v("itemData")]),_._v(" "),t("td",[_._v("当前道具的具体内容描述，由制造者定义;(当 type 为 1 时不传该参数)")]),_._v(" "),t("td",[_._v("string")]),_._v(" "),t("td",[_._v("-")])]),_._v(" "),t("tr",[t("td",[_._v("itemCount")]),_._v(" "),t("td",[_._v("创建道具的数量，为可选参数，只有在 type 为 0 的时候有用。(当 type 为 1 时不传该参数)")]),_._v(" "),t("td",[_._v("number")]),_._v(" "),t("td",[_._v("1")])]),_._v(" "),t("tr",[t("td",[_._v("type")]),_._v(" "),t("td",[_._v("创建道具方式：默认值为 0，0 是创建同一种道具，1 是创建不同道具")]),_._v(" "),t("td",[_._v("number")]),_._v(" "),t("td",[_._v("1")])]),_._v(" "),t("tr",[t("td",[_._v("items")]),_._v(" "),t("td",[_._v('当 type 为 1 时才传该参数,示例: [{"assetId":"1.3.0","itemVER":"LRS","itemData":"{name:"预言家"}"},{"assetId":"1.3.0","itemVER":"LRS","itemData":"{name:"女巫"}"},{"assetId":"1.3.0","itemVER":"LRS","itemData":"{name:"猎人"}"}]')]),_._v(" "),t("td",[_._v("array")]),_._v(" "),t("td",[_._v("长度为 0 的数组")])]),_._v(" "),t("tr",[t("td",[_._v("callback")]),_._v(" "),t("td",[_._v("见统一 API 说明")]),_._v(" "),t("td",[_._v("function")]),_._v(" "),t("td",[_._v("-")])])])]),_._v(" "),t("h3",{attrs:{id:"_3-3-3-删除游戏道具"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-3-删除游戏道具","aria-hidden":"true"}},[_._v("#")]),_._v(" 3.3.3 删除游戏道具")]),_._v(" "),t("p",[_._v("方法:deleteGameItem")]),_._v(" "),t("p",[_._v("功能:删除整条游戏道具数据记录,通常在商品销毁时使用(仅能由用户自己授权处理自己想要销毁的数据)。")]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("参数")]),_._v(" "),t("th",[_._v("说明")]),_._v(" "),t("th",[_._v("类型")]),_._v(" "),t("th",[_._v("默认值")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[_._v("itemIds")]),_._v(" "),t("td",[_._v("游戏道具实例的唯一标识 ID 的集合;示例：[3.2.195,3.2.194]")]),_._v(" "),t("td",[_._v("array")]),_._v(" "),t("td",[_._v("[]")])]),_._v(" "),t("tr",[t("td",[_._v("callback")]),_._v(" "),t("td",[_._v("见统一 API 说明")]),_._v(" "),t("td",[_._v("function")]),_._v(" "),t("td",[_._v("-")])])])]),_._v(" "),t("h3",{attrs:{id:"_3-3-4-更新游戏道具数据"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-4-更新游戏道具数据","aria-hidden":"true"}},[_._v("#")]),_._v(" 3.3.4 更新游戏道具数据")]),_._v(" "),t("p",[_._v("方法:updateGameItem")]),_._v(" "),t("p",[_._v("功能:更新游戏道具数据，写入一个新的 itemData")]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("参数")]),_._v(" "),t("th",[_._v("说明")]),_._v(" "),t("th",[_._v("类型")]),_._v(" "),t("th",[_._v("默认值")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[_._v("itemId")]),_._v(" "),t("td",[_._v("游戏道具实例的唯一标识 ID;")]),_._v(" "),t("td",[_._v("string")]),_._v(" "),t("td",[_._v("-")])]),_._v(" "),t("tr",[t("td",[_._v("newItemData")]),_._v(" "),t("td",[_._v("写入一个新的 itemData;(可传入空字符串)")]),_._v(" "),t("td",[_._v("string")]),_._v(" "),t("td",[_._v("空字符串")])]),_._v(" "),t("tr",[t("td",[_._v("callback")]),_._v(" "),t("td",[_._v("见统一 API 说明")]),_._v(" "),t("td",[_._v("function")]),_._v(" "),t("td",[_._v("-")])])])]),_._v(" "),t("h3",{attrs:{id:"_3-3-5-转移游戏道具"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-5-转移游戏道具","aria-hidden":"true"}},[_._v("#")]),_._v(" 3.3.5 转移游戏道具")]),_._v(" "),t("p",[_._v("方法:transferGameItem")]),_._v(" "),t("p",[_._v("功能:用户可以将自己的道具转移到另外一个用户")]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("参数")]),_._v(" "),t("th",[_._v("说明")]),_._v(" "),t("th",[_._v("类型")]),_._v(" "),t("th",[_._v("默认值")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[_._v("toAccount")]),_._v(" "),t("td",[_._v("转移道具的目标用户名")]),_._v(" "),t("td",[_._v("string")]),_._v(" "),t("td",[_._v("-")])]),_._v(" "),t("tr",[t("td",[_._v("itemId")]),_._v(" "),t("td",[_._v("游戏道具实例的唯一标识 ID")]),_._v(" "),t("td",[_._v("string")]),_._v(" "),t("td",[_._v("-")])]),_._v(" "),t("tr",[t("td",[_._v("type")]),_._v(" "),t("td",[_._v("默认为 0，当为 1 时表示批量转移")]),_._v(" "),t("td",[_._v("number")]),_._v(" "),t("td",[_._v("0")])]),_._v(" "),t("tr",[t("td",[_._v("itemIds")]),_._v(" "),t("td",[_._v("多个道具 id 组成的数组，示例:[3.2.332,3.2.333]。当 type 为 1 时传入该参数")]),_._v(" "),t("td",[_._v("array")]),_._v(" "),t("td",[_._v("[]")])]),_._v(" "),t("tr",[t("td",[_._v("callback")]),_._v(" "),t("td",[_._v("见统一 API 说明")]),_._v(" "),t("td",[_._v("function")]),_._v(" "),t("td",[_._v("-")])])])]),_._v(" "),t("h3",{attrs:{id:"_3-3-6-提议关联游戏版本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-6-提议关联游戏版本","aria-hidden":"true"}},[_._v("#")]),_._v(" 3.3.6 提议关联游戏版本")]),_._v(" "),t("p",[_._v("方法:proposeRelateGameVersion")]),_._v(" "),t("p",[_._v("功能:提议关联到某一个游戏版本，需要该版本的创建人审批")]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("参数")]),_._v(" "),t("th",[_._v("说明")]),_._v(" "),t("th",[_._v("类型")]),_._v(" "),t("th",[_._v("默认值")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[_._v("gameVersion")]),_._v(" "),t("td",[_._v("需要关联的版本名")]),_._v(" "),t("td",[_._v("string")]),_._v(" "),t("td",[_._v("-")])]),_._v(" "),t("tr",[t("td",[_._v("versionOwner")]),_._v(" "),t("td",[_._v("需要关联的版本的创建者")]),_._v(" "),t("td",[_._v("string")]),_._v(" "),t("td",[_._v("-")])]),_._v(" "),t("tr",[t("td",[_._v("callback")]),_._v(" "),t("td",[_._v("见统一 API 说明")]),_._v(" "),t("td",[_._v("function")]),_._v(" "),t("td",[_._v("-")])])])]),_._v(" "),t("h3",{attrs:{id:"_3-3-7-批准关联游戏版本的提议"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-7-批准关联游戏版本的提议","aria-hidden":"true"}},[_._v("#")]),_._v(" 3.3.7 批准关联游戏版本的提议")]),_._v(" "),t("p",[_._v("方法:submitProposal")]),_._v(" "),t("p",[_._v("功能:批准其他用户关联自己的版本的提议，如果不同意提议，无需进行该操作，提议会自动过期")]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("参数")]),_._v(" "),t("th",[_._v("说明")]),_._v(" "),t("th",[_._v("类型")]),_._v(" "),t("th",[_._v("默认值")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[_._v("proposalId")]),_._v(" "),t("td",[_._v("提议 Id")]),_._v(" "),t("td",[_._v("string")]),_._v(" "),t("td",[_._v("-")])]),_._v(" "),t("tr",[t("td",[_._v("callback")]),_._v(" "),t("td",[_._v("见统一 API 说明")]),_._v(" "),t("td",[_._v("function")]),_._v(" "),t("td",[_._v("-")])])])]),_._v(" "),t("h3",{attrs:{id:"_3-3-8-获取当前用户收到的提议"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-8-获取当前用户收到的提议","aria-hidden":"true"}},[_._v("#")]),_._v(" 3.3.8 获取当前用户收到的提议")]),_._v(" "),t("p",[_._v("方法:getAccountProposals")]),_._v(" "),t("p",[_._v("功能:获取当前操作用户收到的提议")]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("参数")]),_._v(" "),t("th",[_._v("说明")]),_._v(" "),t("th",[_._v("类型")]),_._v(" "),t("th",[_._v("默认值")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[_._v("callback")]),_._v(" "),t("td",[_._v("见统一 API 说明")]),_._v(" "),t("td",[_._v("function")]),_._v(" "),t("td",[_._v("-")])])])]),_._v(" "),t("h2",{attrs:{id:"_3-4-游戏道具买卖"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-游戏道具买卖","aria-hidden":"true"}},[_._v("#")]),_._v(" 3.4 游戏道具买卖")]),_._v(" "),t("h3",{attrs:{id:"_3-4-1-购买订单道具"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-1-购买订单道具","aria-hidden":"true"}},[_._v("#")]),_._v(" 3.4.1 购买订单道具")]),_._v(" "),t("p",[_._v("方法:fillGameItemOrder")]),_._v(" "),t("p",[_._v("功能:买入道具，支付购买游戏装备的代币费用，同时修改用户拥有的商品数据。")]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("参数")]),_._v(" "),t("th",[_._v("说明")]),_._v(" "),t("th",[_._v("类型")]),_._v(" "),t("th",[_._v("默认值")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[_._v("orderId")]),_._v(" "),t("td",[_._v("订单 ID")]),_._v(" "),t("td",[_._v("string")]),_._v(" "),t("td",[_._v("-")])]),_._v(" "),t("tr",[t("td",[_._v("seller")]),_._v(" "),t("td",[_._v("收款方")]),_._v(" "),t("td",[_._v("string")]),_._v(" "),t("td",[_._v("-")])]),_._v(" "),t("tr",[t("td",[_._v("itemId")]),_._v(" "),t("td",[_._v("游戏道具实例的唯一标识 ID")]),_._v(" "),t("td",[_._v("string")]),_._v(" "),t("td",[_._v("-")])]),_._v(" "),t("tr",[t("td",[_._v("priceAmount")]),_._v(" "),t("td",[_._v("接收代币数量，代币种类与商品要求的 assetId 一致")]),_._v(" "),t("td",[_._v("number")]),_._v(" "),t("td",[_._v("-")])]),_._v(" "),t("tr",[t("td",[_._v("priceAssetId")]),_._v(" "),t("td",[_._v("资产 ID，用于描述当前游戏道具交易时使用的代币种类")]),_._v(" "),t("td",[_._v("string")]),_._v(" "),t("td",[_._v("-")])]),_._v(" "),t("tr",[t("td",[_._v("priceAssetSymbol")]),_._v(" "),t("td",[_._v("资产符号即代币符号")]),_._v(" "),t("td",[_._v("string")]),_._v(" "),t("td",[_._v("-")])]),_._v(" "),t("tr",[t("td",[_._v("callback")]),_._v(" "),t("td",[_._v("见统一 API 说明")]),_._v(" "),t("td",[_._v("function")]),_._v(" "),t("td",[_._v("-")])])])]),_._v(" "),t("h3",{attrs:{id:"_3-4-2-创建道具出售单"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-2-创建道具出售单","aria-hidden":"true"}},[_._v("#")]),_._v(" 3.4.2 创建道具出售单")]),_._v(" "),t("p",[_._v("方法:creatGameItemOrder")]),_._v(" "),t("p",[_._v("功能:卖出道具(在交易前可调用 queryAccountGameItems 函数，列举用户道具，以便用户选着卖出)")]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("参数")]),_._v(" "),t("th",[_._v("说明")]),_._v(" "),t("th",[_._v("类型")]),_._v(" "),t("th",[_._v("默认值")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[_._v("otcAccount")]),_._v(" "),t("td",[_._v("OTC 交易平台账户，用于收取挂单费用；（OTC 平台填写）")]),_._v(" "),t("td",[_._v("string")]),_._v(" "),t("td",[_._v("-")])]),_._v(" "),t("tr",[t("td",[_._v("orderFee")]),_._v(" "),t("td",[_._v("挂单费用，用户向 OTC 平台账户支付的挂单费用；（OTC 平台填写）")]),_._v(" "),t("td",[_._v("string")]),_._v(" "),t("td",[_._v("-")])]),_._v(" "),t("tr",[t("td",[_._v("itemId")]),_._v(" "),t("td",[_._v("游戏道具实例的唯一标识 ID; （用户填写）")]),_._v(" "),t("td",[_._v("string")]),_._v(" "),t("td",[_._v("-")])]),_._v(" "),t("tr",[t("td",[_._v("price")]),_._v(" "),t("td",[_._v("商品挂单价格；（用户填写）")]),_._v(" "),t("td",[_._v("string")]),_._v(" "),t("td",[_._v("-")])]),_._v(" "),t("tr",[t("td",[_._v("expiration")]),_._v(" "),t("td",[_._v("挂单时间，如 60*60=3600(秒)，为 1 小时")]),_._v(" "),t("td",[_._v("number")]),_._v(" "),t("td",[_._v("-")])]),_._v(" "),t("tr",[t("td",[_._v("memo")]),_._v(" "),t("td",[_._v("挂单备注信息；可不填")]),_._v(" "),t("td",[_._v("string")]),_._v(" "),t("td",[_._v("-")])]),_._v(" "),t("tr",[t("td",[_._v("callback")]),_._v(" "),t("td",[_._v("见统一 API 说明")]),_._v(" "),t("td",[_._v("function")]),_._v(" "),t("td",[_._v("-")])])])]),_._v(" "),t("h3",{attrs:{id:"_3-4-3-取消道具出售单"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-3-取消道具出售单","aria-hidden":"true"}},[_._v("#")]),_._v(" 3.4.3 取消道具出售单")]),_._v(" "),t("p",[_._v("方法:cancelGameItemOrder")]),_._v(" "),t("p",[_._v("功能:取消道具挂卖订单(调用 queryGameItemOrders 函数，列举当前全网用户的挂卖道具订单，以便用户选着\n买入)")]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("参数")]),_._v(" "),t("th",[_._v("说明")]),_._v(" "),t("th",[_._v("类型")]),_._v(" "),t("th",[_._v("默认值")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[_._v("orderId")]),_._v(" "),t("td",[_._v("订单 ID")]),_._v(" "),t("td",[_._v("string")]),_._v(" "),t("td",[_._v("-")])]),_._v(" "),t("tr",[t("td",[_._v("callback")]),_._v(" "),t("td",[_._v("见统一 API 说明")]),_._v(" "),t("td",[_._v("function")]),_._v(" "),t("td",[_._v("-")])])])]),_._v(" "),t("h2",{attrs:{id:"_3-5-道具查询"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-5-道具查询","aria-hidden":"true"}},[_._v("#")]),_._v(" 3.5 道具查询")]),_._v(" "),t("h3",{attrs:{id:"_3-5-1-查询全网用户道具售卖订单"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-5-1-查询全网用户道具售卖订单","aria-hidden":"true"}},[_._v("#")]),_._v(" 3.5.1 查询全网用户道具售卖订单")]),_._v(" "),t("p",[_._v("方法:queryGameItemOrders")]),_._v(" "),t("p",[_._v("功能:查询全网用户道具的售卖订单")]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("参数")]),_._v(" "),t("th",[_._v("说明")]),_._v(" "),t("th",[_._v("类型")]),_._v(" "),t("th",[_._v("默认值")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[_._v("assetSymbolsOrIds")]),_._v(" "),t("td",[_._v("资产符号或 id 筛选条件，默认查询所有资产类型的道具")]),_._v(" "),t("td",[_._v("array")]),_._v(" "),t("td",[_._v("[]")])]),_._v(" "),t("tr",[t("td",[_._v("versionNameOrIds")]),_._v(" "),t("td",[_._v("版本名称筛选条件，默认查询所有版本")]),_._v(" "),t("td",[_._v("array")]),_._v(" "),t("td",[_._v("[]")])]),_._v(" "),t("tr",[t("td",[_._v("pageSize")]),_._v(" "),t("td",[_._v("页容量")]),_._v(" "),t("td",[_._v("number")]),_._v(" "),t("td",[_._v("10")])]),_._v(" "),t("tr",[t("td",[_._v("page")]),_._v(" "),t("td",[_._v("页数")]),_._v(" "),t("td",[_._v("number")]),_._v(" "),t("td",[_._v("1")])]),_._v(" "),t("tr",[t("td",[_._v("callback")]),_._v(" "),t("td",[_._v("见统一 API 说明")]),_._v(" "),t("td",[_._v("function")]),_._v(" "),t("td",[_._v("-")])])])]),_._v(" "),t("h3",{attrs:{id:"_3-5-2-查询账户下的游戏道具售卖订单"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-5-2-查询账户下的游戏道具售卖订单","aria-hidden":"true"}},[_._v("#")]),_._v(" 3.5.2 查询账户下的游戏道具售卖订单")]),_._v(" "),t("p",[_._v("方法:queryAccountGameItemOrders")]),_._v(" "),t("p",[_._v("功能:查询指定用户的道具售卖订单")]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("参数")]),_._v(" "),t("th",[_._v("说明")]),_._v(" "),t("th",[_._v("类型")]),_._v(" "),t("th",[_._v("默认值")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[_._v("account")]),_._v(" "),t("td",[_._v("查询账户名或账户 Id")]),_._v(" "),t("td",[_._v("string")]),_._v(" "),t("td",[_._v("-")])]),_._v(" "),t("tr",[t("td",[_._v("pageSize")]),_._v(" "),t("td",[_._v("页容量")]),_._v(" "),t("td",[_._v("number")]),_._v(" "),t("td",[_._v("10")])]),_._v(" "),t("tr",[t("td",[_._v("page")]),_._v(" "),t("td",[_._v("页数")]),_._v(" "),t("td",[_._v("number")]),_._v(" "),t("td",[_._v("1")])]),_._v(" "),t("tr",[t("td",[_._v("callback")]),_._v(" "),t("td",[_._v("见统一 API 说明")]),_._v(" "),t("td",[_._v("function")]),_._v(" "),t("td",[_._v("-")])])])]),_._v(" "),t("h3",{attrs:{id:"_3-5-3-查询账户下所拥有的道具"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-5-3-查询账户下所拥有的道具","aria-hidden":"true"}},[_._v("#")]),_._v(" 3.5.3 查询账户下所拥有的道具")]),_._v(" "),t("p",[_._v("方法:queryAccountGameItems")]),_._v(" "),t("p",[_._v("功能:读取当前用户账户下所有可在对应游戏中使用的道具")]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("参数")]),_._v(" "),t("th",[_._v("说明")]),_._v(" "),t("th",[_._v("类型")]),_._v(" "),t("th",[_._v("默认值")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[_._v("account")]),_._v(" "),t("td",[_._v("查询账户名或账户 Id")]),_._v(" "),t("td",[_._v("string")]),_._v(" "),t("td",[_._v("-")])]),_._v(" "),t("tr",[t("td",[_._v("versionNameOrIds")]),_._v(" "),t("td",[_._v("版本名称筛选条件，默认查询所有版本")]),_._v(" "),t("td",[_._v("string")]),_._v(" "),t("td",[_._v("-")])]),_._v(" "),t("tr",[t("td",[_._v("pageSize")]),_._v(" "),t("td",[_._v("页容量")]),_._v(" "),t("td",[_._v("number")]),_._v(" "),t("td",[_._v("10")])]),_._v(" "),t("tr",[t("td",[_._v("page")]),_._v(" "),t("td",[_._v("页数")]),_._v(" "),t("td",[_._v("number")]),_._v(" "),t("td",[_._v("1")])]),_._v(" "),t("tr",[t("td",[_._v("callback")]),_._v(" "),t("td",[_._v("见统一 API 说明")]),_._v(" "),t("td",[_._v("function")]),_._v(" "),t("td",[_._v("-")])])])]),_._v(" "),t("h3",{attrs:{id:"_3-5-4-查询游戏开发者所关联的游戏版本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-5-4-查询游戏开发者所关联的游戏版本","aria-hidden":"true"}},[_._v("#")]),_._v(" 3.5.4 查询游戏开发者所关联的游戏版本")]),_._v(" "),t("p",[_._v("方法:queryDeveloperGameVersions")]),_._v(" "),t("p",[_._v("功能:查询游戏开发者所关联的游戏版本")]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("参数")]),_._v(" "),t("th",[_._v("说明")]),_._v(" "),t("th",[_._v("类型")]),_._v(" "),t("th",[_._v("默认值")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[_._v("account")]),_._v(" "),t("td",[_._v("账户名或账户 ID")]),_._v(" "),t("td",[_._v("string")]),_._v(" "),t("td",[_._v("-")])]),_._v(" "),t("tr",[t("td",[_._v("callback")]),_._v(" "),t("td",[_._v("见统一 API 说明")]),_._v(" "),t("td",[_._v("function")]),_._v(" "),t("td",[_._v("-")])])])]),_._v(" "),t("h3",{attrs:{id:"_3-5-5-查询游戏开发者创建的道具"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-5-5-查询游戏开发者创建的道具","aria-hidden":"true"}},[_._v("#")]),_._v(" 3.5.5 查询游戏开发者创建的道具")]),_._v(" "),t("p",[_._v("方法:queryGameItemByDeveloper")]),_._v(" "),t("p",[_._v("功能:查询游戏开发者所创建的道具")]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("参数")]),_._v(" "),t("th",[_._v("说明")]),_._v(" "),t("th",[_._v("类型")]),_._v(" "),t("th",[_._v("默认值")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[_._v("account")]),_._v(" "),t("td",[_._v("查询账户名或账户 Id")]),_._v(" "),t("td",[_._v("string")]),_._v(" "),t("td",[_._v("-")])]),_._v(" "),t("tr",[t("td",[_._v("callback")]),_._v(" "),t("td",[_._v("见统一 API 说明")]),_._v(" "),t("td",[_._v("function")]),_._v(" "),t("td",[_._v("-")])])])]),_._v(" "),t("h2",{attrs:{id:"_3-6-节点投票"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-6-节点投票","aria-hidden":"true"}},[_._v("#")]),_._v(" 3.6 节点投票")]),_._v(" "),t("h3",{attrs:{id:"_3-6-1-查询节点投票信息数据"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-6-1-查询节点投票信息数据","aria-hidden":"true"}},[_._v("#")]),_._v(" 3.6.1 查询节点投票信息数据")]),_._v(" "),t("p",[_._v("方法:queryVotes")]),_._v(" "),t("p",[_._v("功能:加载节点投票信息数据")]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("参数")]),_._v(" "),t("th",[_._v("说明")]),_._v(" "),t("th",[_._v("类型")]),_._v(" "),t("th",[_._v("默认值")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[_._v("callback")]),_._v(" "),t("td",[_._v("见统一 API 说明")]),_._v(" "),t("td",[_._v("function")]),_._v(" "),t("td",[_._v("-")])])])]),_._v(" "),t("h3",{attrs:{id:"_3-6-2-账户投票"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-6-2-账户投票","aria-hidden":"true"}},[_._v("#")]),_._v(" 3.6.2 账户投票")]),_._v(" "),t("p",[_._v("方法:publishVotes")]),_._v(" "),t("p",[_._v("功能:保存的时候设置了代理账户，用户投票信息将统一跟随代理账户")]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("参数")]),_._v(" "),t("th",[_._v("说明")]),_._v(" "),t("th",[_._v("类型")]),_._v(" "),t("th",[_._v("默认值")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[_._v("witnessesIds")]),_._v(" "),t("td",[_._v("节点账户 id 集合,查询节点投票信息数据中会有每个节点的账户 ID")]),_._v(" "),t("td",[_._v("array")]),_._v(" "),t("td",[_._v("-")])]),_._v(" "),t("tr",[t("td",[_._v("proxyAccount")]),_._v(" "),t("td",[_._v("代理账户名，一旦设置代理账户，用户持有的票数将会计入代理账户投票中，此参数的优先级高于 witnessesIds")]),_._v(" "),t("td",[_._v("string")]),_._v(" "),t("td",[_._v("-")])]),_._v(" "),t("tr",[t("td",[_._v("callback")]),_._v(" "),t("td",[_._v("见统一 API 说明")]),_._v(" "),t("td",[_._v("function")]),_._v(" "),t("td",[_._v("-")])])])]),_._v(" "),t("h2",{attrs:{id:"_3-7-区块链浏览器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-7-区块链浏览器","aria-hidden":"true"}},[_._v("#")]),_._v(" 3.7 区块链浏览器")]),_._v(" "),t("h3",{attrs:{id:"_3-6-1-查询-block-txid"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-6-1-查询-block-txid","aria-hidden":"true"}},[_._v("#")]),_._v(" 3.6.1 查询 block/TXID")]),_._v(" "),t("p",[_._v("方法:queryBlockTXID")]),_._v(" "),t("p",[_._v("功能:查询区块/交易信息")]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("参数")]),_._v(" "),t("th",[_._v("说明")]),_._v(" "),t("th",[_._v("类型")]),_._v(" "),t("th",[_._v("默认值")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[_._v("blockOrTXID")]),_._v(" "),t("td",[_._v("区块高度或者交易 ID")]),_._v(" "),t("td",[_._v("string")]),_._v(" "),t("td",[_._v("-")])]),_._v(" "),t("tr",[t("td",[_._v("callback")]),_._v(" "),t("td",[_._v("见统一 API 说明")]),_._v(" "),t("td",[_._v("function")]),_._v(" "),t("td",[_._v("-")])])])]),_._v(" "),t("h2",{attrs:{id:"_3-8-api-服务器节点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-8-api-服务器节点","aria-hidden":"true"}},[_._v("#")]),_._v(" 3.8 API 服务器节点")]),_._v(" "),t("h3",{attrs:{id:"_3-8-1-监听与节点连接状态变化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-8-1-监听与节点连接状态变化","aria-hidden":"true"}},[_._v("#")]),_._v(" 3.8.1 监听与节点连接状态变化")]),_._v(" "),t("p",[_._v("方法:subscribeToRpcConnectionStatus")]),_._v(" "),t("p",[_._v("功能:监听 rpc 连接状态改变")]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("参数")]),_._v(" "),t("th",[_._v("说明")]),_._v(" "),t("th",[_._v("类型")]),_._v(" "),t("th",[_._v("默认值")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[_._v("callback")]),_._v(" "),t("td",[_._v("见统一 API 说明")]),_._v(" "),t("td",[_._v("function")]),_._v(" "),t("td",[_._v("-")])])])]),_._v(" "),t("h2",{attrs:{id:"_3-9-合约-仅限测试链"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-9-合约-仅限测试链","aria-hidden":"true"}},[_._v("#")]),_._v(" 3.9 合约(仅限测试链)")]),_._v(" "),t("h3",{attrs:{id:"_3-9-1-一键生成私钥-公钥（随机生成）"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-9-1-一键生成私钥-公钥（随机生成）","aria-hidden":"true"}},[_._v("#")]),_._v(" 3.9.1 一键生成私钥/公钥（随机生成）")]),_._v(" "),t("p",[_._v("方法:generateKeys")]),_._v(" "),t("p",[_._v("功能:随机生成一对公私钥，创建带有权限的合约会用到，没有回调，直接返回")]),_._v(" "),t("h3",{attrs:{id:"_3-9-2-创建合约"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-9-2-创建合约","aria-hidden":"true"}},[_._v("#")]),_._v(" 3.9.2 创建合约")]),_._v(" "),t("p",[_._v("方法:createContract")]),_._v(" "),t("p",[_._v("功能:创建智能合约")]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("参数")]),_._v(" "),t("th",[_._v("说明")]),_._v(" "),t("th",[_._v("类型")]),_._v(" "),t("th",[_._v("默认值")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[_._v("authority")]),_._v(" "),t("td",[_._v("合约权限(一对公私钥中的公钥 publicKey)，开发者在使用 API 初始化的时候，可以配置私钥，配置了过该公钥对应的私钥才可以调用合约")]),_._v(" "),t("td",[_._v("string")]),_._v(" "),t("td",[_._v("-")])]),_._v(" "),t("tr",[t("td",[_._v("name")]),_._v(" "),t("td",[_._v("合约名称,规则/^[a-z][a-z0-9.-]{4,}/")]),_._v(" "),t("td",[_._v("string")]),_._v(" "),t("td",[_._v("-")])]),_._v(" "),t("tr",[t("td",[_._v("data")]),_._v(" "),t("td",[_._v("合约 lua 代码")]),_._v(" "),t("td",[_._v("string")]),_._v(" "),t("td",[_._v("-")])]),_._v(" "),t("tr",[t("td",[_._v("onlyGetFee")]),_._v(" "),t("td",[_._v("设置只返回本次操作所需手续费")]),_._v(" "),t("td",[_._v("boolean")]),_._v(" "),t("td",[_._v("false")])]),_._v(" "),t("tr",[t("td",[_._v("callback")]),_._v(" "),t("td",[_._v("见统一 API 说明")]),_._v(" "),t("td",[_._v("function")]),_._v(" "),t("td",[_._v("-")])])])]),_._v(" "),t("h3",{attrs:{id:"_3-9-3-调用合约函数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-9-3-调用合约函数","aria-hidden":"true"}},[_._v("#")]),_._v(" 3.9.3 调用合约函数")]),_._v(" "),t("p",[_._v("方法:callContractFunction")]),_._v(" "),t("p",[_._v("功能:运行合约函数")]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("参数")]),_._v(" "),t("th",[_._v("说明")]),_._v(" "),t("th",[_._v("类型")]),_._v(" "),t("th",[_._v("默认值")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[_._v("nameOrId")]),_._v(" "),t("td",[_._v("合约名称或 Id")]),_._v(" "),t("td",[_._v("string")]),_._v(" "),t("td",[_._v("-")])]),_._v(" "),t("tr",[t("td",[_._v("functionName")]),_._v(" "),t("td",[_._v("合约里的函数名称")]),_._v(" "),t("td",[_._v("string")]),_._v(" "),t("td",[_._v("-")])]),_._v(" "),t("tr",[t("td",[_._v("valueList")]),_._v(" "),t("td",[_._v("调用合约函数的参数列表,示例："),t("a",{attrs:{href:"datatype%E4%B8%BA%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B,value%E4%B8%BA%E5%8F%82%E6%95%B0%E5%80%BC"}},[_._v('{"dataType":"number","value":1.1}')]),_._v("，数据类型有：int,number,string,bool。其中 number 可以传小数")]),_._v(" "),t("td",[_._v("array")]),_._v(" "),t("td",[_._v("-")])]),_._v(" "),t("tr",[t("td",[_._v("runTime")]),_._v(" "),t("td",[_._v("运行合约函数的时间(单位毫秒),默认为 5")]),_._v(" "),t("td",[_._v("number")]),_._v(" "),t("td",[_._v("5")])]),_._v(" "),t("tr",[t("td",[_._v("onlyGetFee")]),_._v(" "),t("td",[_._v("设置只返回本次调用合约所需手续费")]),_._v(" "),t("td",[_._v("boolean")]),_._v(" "),t("td",[_._v("false")])]),_._v(" "),t("tr",[t("td",[_._v("callback")]),_._v(" "),t("td",[_._v("见统一 API 说明")]),_._v(" "),t("td",[_._v("function")]),_._v(" "),t("td",[_._v("-")])])])]),_._v(" "),t("h3",{attrs:{id:"_3-9-4-查询合约信息"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-9-4-查询合约信息","aria-hidden":"true"}},[_._v("#")]),_._v(" 3.9.4 查询合约信息")]),_._v(" "),t("p",[_._v("方法:queryContract")]),_._v(" "),t("p",[_._v("功能:查询合约信息")]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("参数")]),_._v(" "),t("th",[_._v("说明")]),_._v(" "),t("th",[_._v("类型")]),_._v(" "),t("th",[_._v("默认值")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[_._v("nameOrId")]),_._v(" "),t("td",[_._v("合约名字或 Id")]),_._v(" "),t("td",[_._v("string")]),_._v(" "),t("td",[_._v("-")])]),_._v(" "),t("tr",[t("td",[_._v("callback")]),_._v(" "),t("td",[_._v("见统一 API 说明")]),_._v(" "),t("td",[_._v("function")]),_._v(" "),t("td",[_._v("-")])])])]),_._v(" "),t("h3",{attrs:{id:"_3-9-5-查询账户合约信息"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-9-5-查询账户合约信息","aria-hidden":"true"}},[_._v("#")]),_._v(" 3.9.5 查询账户合约信息")]),_._v(" "),t("p",[_._v("方法:queryAccountContractData")]),_._v(" "),t("p",[_._v("功能:查询账户的某个合约信息")]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("参数")]),_._v(" "),t("th",[_._v("说明")]),_._v(" "),t("th",[_._v("类型")]),_._v(" "),t("th",[_._v("默认值")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[_._v("userNameOrId")]),_._v(" "),t("td",[_._v("账户名或Id")]),_._v(" "),t("td",[_._v("string")]),_._v(" "),t("td",[_._v("-")])]),_._v(" "),t("tr",[t("td",[_._v("contractNameOrId")]),_._v(" "),t("td",[_._v("合约名字或 Id")]),_._v(" "),t("td",[_._v("string")]),_._v(" "),t("td",[_._v("-")])]),_._v(" "),t("tr",[t("td",[_._v("callback")]),_._v(" "),t("td",[_._v("见统一 API 说明")]),_._v(" "),t("td",[_._v("function")]),_._v(" "),t("td",[_._v("-")])])])])])}],!1,null,null,null);v.default=a.exports}}]);