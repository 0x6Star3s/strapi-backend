"use strict";

/**
 * `page-populate-middleware` middleware
 */

const populate = {
  contentSections: {
    populate: {
      animation: {
        populate: {
          fields: ["base_velocity", "view"],
          image: {
            populate: {
              image: {
                fields: [
                  "url",
                  "alternativeText",
                  "caption",
                  "width",
                  "height",
                ],
              },
            },
          },
        },
      },

      about_us: {
        populate: true,
      },
      button: {
        populate: true,
      },
      count:{
        populate: true
      },
      crad:{
        populate: {
          image: {
            fields: ["url", "alternativeText", "caption", "width", "height"],
          },
        }
      },
      image: {
        populate: {
          image: {
            fields: ["url", "alternativeText", "caption", "width", "height"],
          },
        },
        fields: ["alt"],
      },
      card_acrosses: {
        populate: {
          fields: ["card_across"],
          image: {
            populate: {
              image: {
                // popiulate: true,
                fields: [
                  "url",
                  // "alternativeText",
                  // "caption",
                  "width",
                  "height",
                  "blurHash"
                ],
              },
            },
            fields: ["alt"],
          },
        },
      },
      card_list: {
        populate: true,
      },
      cards: {
        populate: {
          fields: ["title", "description", "alt"],
          image: {
            populate: {
              image: {
                fields: [
                  "url",
                  "alternativeText",
                  "caption",
                  "width",
                  "height",
                ],
              },
            },
          },
        },
      },
      text_button:{
        populate: true
      },
      testimonials: {
        populate: {
          fields: ["testimonial"],
          logo: {
            populate: {
              image: {
                fields: [
                  "url",
                  "alternativeText",
                  "caption",
                  "width",
                  "height",
                ],
              },
            },
            fields: ["alt"],
          },
        },
      },
      asked_questions: {
        populate: true
      }












    },
  },
  seo: {
    fields: ["metaTitle", "metaDescription"],
    populate: { shareImage: true },
  },
};

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    ctx.query = {
      populate,
      filters: { slug: ctx.query.filters.slug },
      locale: ctx.query.locale,
    };

    console.log("page-populate-middleware.js: ctx.query = ", ctx.query);

    await next();
  };
};
