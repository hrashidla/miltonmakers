import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  content:['./app/**/*.{js,ts,vue}'],
  theme: {
    extend: {
      fontFamily: {
        // lexend: ['Lexend', 'sans-serif']
      },
      colors: {
       //red: '#FF0'
      }
    }
  }
}
