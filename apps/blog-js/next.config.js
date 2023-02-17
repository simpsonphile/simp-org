//@ts-check

const { withNx } = require('@nrwl/next/plugins/with-nx');

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  sassOptions: {
    prependData: `@import "libs/blog-js-design-system/src/_breakpoints.scss";`,
  },
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  exportPathMap: async function (defaultPathMap, { dev }) {
    if (dev) return defaultPathMap;

    const getAllDocs = await await (
      await import('./services/getAllDocs.js')
    ).default;

    const links = await getAllDocs();

    return {
      '/': { page: '/' },
      ...Object.fromEntries(
        links.map(({ path }) => ['/' + path, { page: '/[...slug]' }])
      ),
    };
  },
  images: {
    unoptimized: true,
  },
};

module.exports = withNx(nextConfig);
