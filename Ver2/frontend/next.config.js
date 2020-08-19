//next가 기본적으로 바벨,웹팩 설정 제공하여 사용했지만, 커스터마이징으로 최적화 해주기
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
});

const webpack = require('webpack');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = withBundleAnalyzer({
    distDir: '.next', // 넥스트 빌드파일 경로 변경(default: .next)
    webpack(config){ // next의 웹팩 설정(중요)
        const prod =  process.env.NODE_ENV === 'production';
        const plugins = [
            ...config.plugins,
            new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /^\.\/ko$/), // 모멘트 트리셰이킹(모멘트 깃헙에 있음)
        ];
        if (prod) {
            // 배포일때만
            plugins.push(new CompressionPlugin()); // main.js.gz , 빌드 시 용량을 줄여줌(.gz 로 압축)
        }
        return {
            ...config, // 기존설정 먼저 적용 후 덮어씌워야함, 어떤 서비스를 하는지 분석해야 변경점을 찾을 수있음 -> next-bundle-analyzer
            mode: prod ? 'production' : 'development',
            // hidden-source-map: 소스코드 숨기고 에러시 소스맵 제공, eval: 빠르게 웹팩 적용
            devtool: prod ? 'hidden-source-map' : 'eval', 
            module: {
                ...config.module,
                rules: [
                  ...config.module.rules,
                  {
                    loader: 'webpack-ant-icon-loader',
                    enforce: 'pre',
                    include: [
                      require.resolve('@ant-design/icons/lib/dist'), //엔티디 아이콘 트리셰이킹
                    ],
                  },
                ],
            },
            plugins,
        };
    },
});