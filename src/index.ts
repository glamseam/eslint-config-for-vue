const index = {
    extends: [
        'plugin:vue/vue3-essential',
        'plugin:vue/vue3-strongly-recommended',
        'plugin:vue/vue3-recommended'
    ],
    globals: {
        'defineEmits': false,
        'defineExpose': false,
        'defineProps': false,
        'withDefaults': false
    },
    rules: {
        'vue/html-indent': [
            'error', 4,
            {
                'attribute': 1,
                'baseIndent': 1,
                'closeBracket': 0,
                'alignAttributesVertically': true,
                'ignores': []
            }
        ],
        'vue/html-self-closing': [
            'error',
            {
                'html': {
                    'void': 'never',
                    'normal': 'always',
                    'component': 'always'
                },
                'svg': 'always',
                'math': 'always'
            }
        ],
        'vue/return-in-computed-property': 'off',
        // Priority A
        'vue/multi-word-component-names': 'off',
        // Priority C
        'vue/component-tags-order': [
            'error',
            {
                'order': [
                    'template',
                    'script',
                    'style'
                ]
            }
        ],
        'vue/no-v-html': ['warn']
    }
}

export = index
