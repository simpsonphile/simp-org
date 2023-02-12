//@ts-check

const { withNx } = require('@nrwl/next/plugins/with-nx');

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  sassOptions: {
    prependData: `@import "/styles/_media-queries.scss";`,
  },
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  exportPathMap: async function () {
    const getAllDocs = await await (
      await import('./services/getAllDocs.js')
    ).default;

    const links = await getAllDocs();

    console.log({
      '/': { page: '/' },
      ...Object.fromEntries(links.map((link) => [link, { page: link }])),
    });

    return {
      '/': { page: '/' },
      ...Object.fromEntries(
        links.map((link) => ['/' + link, { page: '/[...slug]' }])
      ),
    };
  },
  images: {
    loader: 'akamai',
    path: '',
  },
};

module.exports = withNx(nextConfig);
