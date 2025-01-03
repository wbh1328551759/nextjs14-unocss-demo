/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: true,
  transpilePackages: [
    'rc-util',
    '@ant-design',
    'kitchen-flow-editor',
    '@ant-design/pro-editor',
    'zustand', 'leva', 'antd',
    'rc-pagination',
    'rc-picker'
  ],
  webpack: (config, { nextRuntime = 'edge'}) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            typescript: true,
            dimensions: false,
            exportType: 'named',  // 添加这行
          }
        }
      ],
    })
    config.module.rules.push({
      test: /\.(mp3|wav|ogg)$/,
      type: 'asset/resource'  // 使用新的 asset 模块
    });

    return config
  },
};

export default nextConfig;
