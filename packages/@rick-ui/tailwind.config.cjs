/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    '../../{projects,packages}/**/src/**/*.index.html',
    '../../{projects,packages}/**/src/**/*.{js,ts,jsx,tsx}',
    '!node_modules/**/*',
  ],
  theme: {
    extend: {
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            'code::before': {
              content: 'none',
            },
            'code::after': {
              content: 'none',
            },
            code: {
              color: theme('colors.slate.500'),
              backgroundColor: theme('colors.stone.100'),
              borderRadius: theme('borderRadius.DEFAULT'),
              paddingLeft: theme('spacing[1]'),
              paddingRight: theme('spacing[1]'),
              paddingTop: theme('spacing.1'),
              paddingBottom: theme('spacing.1'),
              marginLeft: theme('spacing[1]'),
              marginRight: theme('spacing[1]'),
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
  corePlugins: {
    preflight: true,
  },
};
