module.exports = {
  purge: {
    options: {
      safelist: [
        'bg-indigo-500',
        'bg-blue-400',
        'bg-indigo-600',
        'bg-blue-500',
        'bg-yellow-500',
        'bg-pink-500',
        'bg-red-500',
        'bg-green-500',
      ],
    },
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {},
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
