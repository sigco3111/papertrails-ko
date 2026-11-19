import { defineConfig } from 'vite';

// 한국어판: src/game/atlasmap.js 의 지도 라벨 3개를 빌드 시 치환한다(원본 파일은 그대로 둔다).
const KO_LABELS = [
  ["label: 'Scraps'", "label: '수집품'"],
  ["label: 'Lanterns'", "label: '랜턴'"],
  ["label: 'Explored'", "label: '탐험'"],
];
function koLabels() {
  return {
    name: 'ko-labels',
    enforce: 'pre',
    transform(code, id) {
      if (!id.replace(/\\/g, '/').endsWith('src/game/atlasmap.js')) return null;
      let out = code;
      for (const [from, to] of KO_LABELS) {
        if (!out.includes(from)) this.warn('ko-labels: not found: ' + from);
        out = out.split(from).join(to);
      }
      return { code: out, map: null };
    },
  };
}

export default defineConfig({
  base: '/papertrails-ko/',
  plugins: [koLabels()],
  server: { port: 5273, host: '127.0.0.1', open: false },
  preview: { port: 4273, host: '127.0.0.1', open: false },
  build: { target: 'es2022', outDir: 'dist', assetsInlineLimit: 0, chunkSizeWarningLimit: 1500 },
});
