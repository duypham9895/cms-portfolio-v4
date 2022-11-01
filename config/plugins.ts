export default ({ env }) => ({
  graphql: {
    config: {
      endpoint: "/graphql",
      shadowCRUD: true,
      playgroundAlways: env.bool("ENABLE_GRAPHQL_PLAYGROUND", false),
      apolloServer: {
        tracing: false,
        introspection: env.bool("ENABLE_GRAPHQL_PLAYGROUND", false),
      },
      depthLimit: 7,
      amountLimit: 100,
    },
  },
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
      actionOptions: {
        uploadStream: {
          folder: env("CLOUDINARY_FOLDER"),
        },
        delete: {},
      },
    },
  },
});
