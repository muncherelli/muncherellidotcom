module.exports = {
    content: ['./layouts/**/*.html'],
    darkMode: 'class',
    theme: {
        fontFamily: {
            'sans': ['Ubuntu'],
        },
        extend: {
            typography: {
                DEFAULT: {
                    css: {
                        "code::before": {content: ''},
                        "code::after": {content: ''}
                    }
                }
            }
        }
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}