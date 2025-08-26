const { FusesPlugin } = require('@electron-forge/plugin-fuses');
const { FuseV1Options, FuseVersion } = require('@electron/fuses');
const { VitePlugin } = require('@electron-forge/plugin-vite');

module.exports = {
  packagerConfig: {
    asar: true,
  },
  rebuildConfig: {},
  publishers: [
    {
      name: '@electron-forge/publisher-github',
      config: {
        repository: {
          owner: 'TeuDoongieJjang',
          name: 'TestElectronApp',
        },
        prerelease: true,
        draftRelease: true,
      },
    },
  ],
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {},
    },
    {
      name: '@electron-forge/maker-zip',
      platforms: ['darwin'],
    },
    {
      name: '@electron-forge/maker-deb',
      config: {},
    },
    {
      name: '@electron-forge/maker-rpm',
      config: {},
    },
  ],
  plugins: [
    new VitePlugin({
      build: [
        {
          // 👇 Main process
          entry: 'src/main.js',
          config: 'vite.main.config.mjs',
          target: 'main',
        },
        {
          // 👇 Preload script (if you need it)
          entry: 'src/preload.js',
          config: 'vite.preload.config.mjs',
          target: 'preload',
        },
      ],
      renderer: [
        {
          name: 'main_window',
          config: 'vite.renderer.config.mjs',
        },
      ],
    }),

    // 👇 Keep your fuses
    new FusesPlugin({
      version: FuseVersion.V1,
      [FuseV1Options.RunAsNode]: false,
      [FuseV1Options.EnableCookieEncryption]: true,
      [FuseV1Options.EnableNodeOptionsEnvironmentVariable]: false,
      [FuseV1Options.EnableNodeCliInspectArguments]: false,
      [FuseV1Options.EnableEmbeddedAsarIntegrityValidation]: true,
      [FuseV1Options.OnlyLoadAppFromAsar]: true,
    }),
  ],
};
