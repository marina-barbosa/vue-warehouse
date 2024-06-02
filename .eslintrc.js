module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
    'node': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:vue/essential'
  ],
  'parserOptions': {
    'ecmaVersion': 12,
    'sourceType': 'module'
  },
  'plugins': [
    'vue'
  ],
  'rules': {
    'vue/multi-word-component-names': 'off',
    // semi: ['error', 'always'],
    // quotes: ['warn', 'single'],
    indent: ['error', 2],
    'comma-spacing': ['error', { before: false, after: true }],
  }
};
