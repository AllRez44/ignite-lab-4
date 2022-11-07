/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    fontSize:{ // Padroniza os valores de font-size a estes tokens (xs, sm, md, lg, xl)
      xs: 14, 
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      '2xl': 32,
    },

    colors: { // Padroniza as opções de cores para os tokens abaixo. !OBS: Remove outras opões de cores, já que não utiliza o 'extend'.
      'black': '#000',
      'white': '#fff',
      'gray-900': '#121214',
      'gray-800': '#202024',
      'gray-400': '#7c7c8a',
      'gray-200': 'c4c4cc',
      'gray-100': '#e1e1e6',

      'cyan-500': '#81d8f7',
      'cyan-300': '#9ce1fb',
    },
    extend: { //Extend adiciona opções a mais em uma propriedades, ao invés de apenas limitar ao(s) valor(es) adicionado(s)
      fontFamily:{
        sans: 'Inter, Arial, sans-serif'
      }
    }
  },
  plugins: [],
}
