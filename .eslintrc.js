module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],
  overrides: [],
  // 指定如何解析语法
  parser: 'vue-eslint-parser',
  // 解析 vue 文件中 <script> 标签中的代码
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    // vue (https://eslint.vuejs.org/rules)
    'vue/multi-word-component-names': 'off', // 自定义组件名称必须由多个单词组成
    '@typescript-eslint/no-explicit-any': 'off' // 禁止使用 any 类型
  },
  globals: {
    uni: true // 全局定义uni，防止提示 no-undef
  }
}
