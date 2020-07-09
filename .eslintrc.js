module.exports = {
    root: true,
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: '@typescript-eslint/parser',
        project: ['./tsconfig.json'],
        tsconfigRootDir: __dirname,
        extraFileExtensions: ['.vue']
    },
    env: {
        browser: true,
        node: true,
        mocha: true
    },
    globals: {
        expect: true
    },
    extends: [
        // https://github.com/iamturns/eslint-config-airbnb-typescript
        'airbnb-typescript/base',
        // vue官方推荐lint
        // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
        'plugin:vue/recommended',
        // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin
        'prettier/@typescript-eslint'
    ],
    plugins: ['@typescript-eslint'],
    // 处理@、ts后缀等
    settings: {
        'import/resolver': {
            webpack: {
                config: './build/webpack.config.base.js'
            }
        }
    },
    rules: {
        'arrow-parens': 'off',
        'consistent-return': 'off',
        'prefer-template': 'off',
        'linebreak-style': 'off',
        'no-irregular-whitespace':'off',
        /*--------------------- js相关规则 ---------------------*/
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'comma-dangle': ['error', 'never'],
        semi: ['error', 'never'],
        indent: ['error', 2],
        // this必须使用到，因为vue模板中用到不会检查
        'class-methods-use-this': ['off'],
        // 禁止多行空格
        'no-multiple-empty-lines': ['error', { max: 1 }],
        'max-len': ['error', 180],
        // 单引号
        quotes: ['error', 'single'],
        // array
        'no-array-constructor': ['error'],
        // todo: vue/order-in-components, recomanded没生效
        // todo: vue/prop-name-casing ,同上
        // todo: vue/no-async-in-computed-properties ,同上
        // todo: vue/no-duplicate-attributes
        'vue/no-dupe-keys': [
            'error',
            {
                groups: []
            }
        ],
        // vue缩进，改4，不完全生效，配合prettier
        'vue/script-indent': [
            'error',
            2,
            {
                baseIndent: 0,
                switchCase: 0,
                ignores: []
            }
        ],
        /*--------------------- vue相关规则 ---------------------*/
        'lines-between-class-members': 'off',
        'vue/singleline-html-element-content-newline': 'off',
        'vue/max-attributes-per-line': ['error', {
            singleline: 3,
            multiline: {
              max: 1,
              allowFirstLine: false
            }
        }],
        // 强制自闭风格
        'vue/html-self-closing': ['warn'],
        // vue-indent
        'vue/html-indent': ['error', 2],
        // Vue组件属性命名，PascalCase：'MyComponent '，kebab-case：'my-component'
        'vue/name-property-casing': ['error', 'PascalCase'],
        // vue模板名称，PascalCase：<MyComponent></MyComponent>  kebab-case: '<my-component></my-component>'
        'vue/component-name-in-template-casing': ['error', 'kebab-case'],
        /*--------------------- ts相关规则 ---------------------*/
        '@typescript-eslint/no-unused-vars': ['error'],
        // 显式指定返回值
        '@typescript-eslint/explicit-function-return-type': 'off',
        // interface、成员变量之间空格
        '@typescript-eslint/member-delimiter-style': [
            'error',
            {
                multiline: {
                    delimiter: 'none'
                }
            }
        ],
        // interface都以I开头
        '@typescript-eslint/interface-name-prefix': ['error', 'always'],
        '@typescript-eslint/no-unused-expressions': ['off']
    },
    // 冲突的地方，使用覆盖
    overrides: [
        {
            files: ['*.vue'],
            rules: {
                // 'indent': 'off'
            }
        }
    ]
}
