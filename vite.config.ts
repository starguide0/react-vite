import { defineConfig } from 'vite'
/////////////////////////
// 해당 import 를 사용할 경우 jsx 파일마다 react 에 `import React from 'react'`
// jsx 에서 react 를 사용하지 않는 경우도 있으므로 `import react from 'vite-preset-react'`
// 로 바꿔 준다. `npm install --save-dev vite-preset-react`
//
// import react from '@vitejs/plugin-react'
import react from 'vite-preset-react'

////////////////////////
// 내가 만난 다른 문제는 SVG 파일에 관한 것이었습니다. CRA를 사용하면서 SVG 파일을 React 컴포넌트로 가져올 수 있었습니다
// import {ReactComponent as Pic from '../path'. 하지만 Vite의 경우는 그렇지 않으나 이를 극복할 수 있는 방법이 또 있다.
// vite-plugin-svgr 라는 플러그인을 하나 더 설치해야 합니다. `npm install --save-dev vite-plugin-svgr`명령 을 사용하여 설치하십시오.
// 그런 다음 다음과 같이 플러그인 배열 내에서 호출합니다.
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()]
})
