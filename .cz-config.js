/*
 * @Author: Chengbotao
 * @Date: 2022-06-08 01:08:44
 */
module.exports = {
  types: [
    { value: "feat", name: "✨ Features | 新功能" },
    { value: "fix", name: "🐛 Bug Fixes | Bug 修复" },
    { value: "init", name: "🎉 Init | 初始化" },
    { value: "docs", name: "✏️ Documentation | 文档" },
    { value: "style", name: "💄 Styles | 风格" },
    { value: "refactor", name: "♻️ Code Refactoring | 代码重构" },
    { value: "perf", name: "⚡ Performance Improvements | 性能优化" },
    { value: "test", name: "✅ Tests | 测试" },
    { value: "revert", name: "⏪ Revert | 回退", hidden: true },
    { value: "build", name: "📦‍ Build System | 打包构建" },
    { value: "chore", name: "🚀 Chore | 构建/工程依赖/工具" },
    { value: "ci", name: "👷 Continuous Integration | CI 配置" }
  ],

  scopes: [{ name: 'accounts' }, { name: 'admin' }, { name: 'exampleScope' }, { name: 'changeMe' }],

  allowTicketNumber: false,
  isTicketNumberRequired: false,
  ticketNumberPrefix: 'TICKET-',
  ticketNumberRegExp: '\\d{1,5}',

  // it needs to match the value for field type. Eg.: 'fix'
  /*
  scopeOverrides: {
    fix: [
      {name: 'merge'},
      {name: 'style'},
      {name: 'e2eTest'},
      {name: 'unitTest'}
    ]
  },
  */
  // override the messages, defaults are as follows
  messages: {
    type: "选择要提交的更改类型:",
    scope: '\n表示此更改的范围(可选):',
    // used if allowCustomScopes is true
    customScope: '表示此更改的范围(自定义):',
    subject: '写一个简短的，命令式的时态描述变化:\n',
    body: '提供更改的较长描述(可选)。使用"|"换行:\n',
    breaking: '列出任何重大更改(可选):\n',
    footer: '列出此更改关闭的任何问题(可选). E.g.: #31, #34:\n',
    confirmCommit: '您确定要继续上面的提交吗?',
  },

  allowCustomScopes: true,
  allowBreakingChanges: ['feat', 'fix'],
  // skip any questions you want
  skipQuestions: ['body'],

  // limit subject length
  subjectLimit: 100,
  // breaklineChar: '|', // It is supported for fields body and footer.
  // footerPrefix : 'ISSUES CLOSED:'
  // askForBreakingChangeFirst : true, // default is false
};