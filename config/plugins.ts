module.exports = ({ env }) => ({
  // ...
  seo: {
    enabled: true,
  },
  "schemas-to-ts": {
    enabled: true,
  },
  "drag-drop-content-types": {
    enabled: true,
  },
  "wysiwyg-react-md-editor": {
    enabled: false,
    config: {
      toolbarCommands: [
        "title2",
        "title3",
        "title4",
        "title5",
        "title6",
        "divider",
        "bold",
        "codeBlock",
        "italic",
        "strikethrough",
        "hr",
        "group",
        "divider",
        "link",
        "quote",
        "code",
        "unorderedListCommand",
        "orderedListCommand",
        "checkedListCommand",
        "strapiMediaLibrary",
      ],
    },
  },

  "strapi-blurhash-plugin": {
    enabled: true,
    config: {
      regenerateOnUpdate: true,
    },
  },

  "protected-populate": {
    enabled: true,
  },

  // "image-color-palette": {
  //   enabled: false,
  //   config: {
  //       format: "rgb",
  //       paletteSize: 4,
  //   }
  // }

  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
  // ...
});
