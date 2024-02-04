import type { Schema, Attribute } from '@strapi/strapi';

export interface ComponetsNewsletter extends Schema.Component {
  collectionName: 'components_componets_newsletters';
  info: {
    displayName: 'newsletter';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    button: Attribute.Component<'links.button'> & Attribute.Required;
    email: Attribute.Email & Attribute.Required;
  };
}

export interface CustomAniationCardGlsl extends Schema.Component {
  collectionName: 'components_custom_aniation_card_glsls';
  info: {
    displayName: 'aniation card GLSL';
  };
  attributes: {
    title: Attribute.String;
    image: Attribute.Media;
  };
}

export interface CustomCustomAbout extends Schema.Component {
  collectionName: 'components_custom_custom_abouts';
  info: {
    displayName: 'custom-about';
    description: '';
  };
  attributes: {
    title: Attribute.Text & Attribute.Required;
    section: Attribute.String & Attribute.Required;
    animation: Attribute.Boolean;
    count: Attribute.Component<'elements.card-count', true>;
  };
}

export interface CustomCustomAcross extends Schema.Component {
  collectionName: 'components_custom_custom_acrosses';
  info: {
    displayName: 'custom_across';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    card_acrosses: Attribute.Relation<
      'custom.custom-across',
      'oneToMany',
      'api::cord-across.cord-across'
    >;
  };
}

export interface CustomCustomChoose extends Schema.Component {
  collectionName: 'components_custom_custom_chooses';
  info: {
    displayName: 'custom_choose';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    card_list: Attribute.Component<'elements.custom-card-choose', true>;
  };
}

export interface CustomCustomContact extends Schema.Component {
  collectionName: 'components_custom_custom_contacts';
  info: {
    displayName: 'custom_contact';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    span: Attribute.String;
    image: Attribute.Component<'elements.image'>;
    button: Attribute.Component<'links.button'>;
    politics: Attribute.Text;
    description: Attribute.Text;
  };
}

export interface CustomCustomGallery extends Schema.Component {
  collectionName: 'components_custom_custom_galleries';
  info: {
    displayName: 'custom_gallery';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    cards: Attribute.Component<'elements.custom-image-card', true>;
  };
}

export interface CustomCustomHeader extends Schema.Component {
  collectionName: 'components_custom_custom_headers';
  info: {
    displayName: 'custom_header';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    animation: Attribute.Component<'elements.custom-animation'>;
    about_us: Attribute.Component<'elements.custom-about-us'>;
    image: Attribute.Component<'elements.image'> & Attribute.Required;
    button: Attribute.Component<'links.button-link'> & Attribute.Required;
  };
}

export interface CustomCustomQuestions extends Schema.Component {
  collectionName: 'components_custom_custom_questions';
  info: {
    displayName: 'custom_questions';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    asked_questions: Attribute.Component<'elements.question', true>;
  };
}

export interface CustomCustomWork extends Schema.Component {
  collectionName: 'components_custom_custom_works';
  info: {
    displayName: 'custom-work';
    icon: 'apps';
  };
  attributes: {
    title: Attribute.String;
    section: Attribute.String;
    animation: Attribute.Boolean;
    crad: Attribute.Component<'custom.aniation-card-glsl', true>;
  };
}

export interface CustomTestimonial extends Schema.Component {
  collectionName: 'components_custom_testimonials';
  info: {
    displayName: 'testimonial';
    icon: 'thumbUp';
  };
  attributes: {
    title: Attribute.String;
    testimonials: Attribute.Relation<
      'custom.testimonial',
      'oneToMany',
      'api::testimonial.testimonial'
    >;
  };
}

export interface ElementsCardCount extends Schema.Component {
  collectionName: 'components_elements_card_counts';
  info: {
    displayName: 'card-count';
    description: '';
  };
  attributes: {
    start: Attribute.Integer & Attribute.Required & Attribute.DefaultTo<0>;
    end: Attribute.BigInteger & Attribute.Required & Attribute.DefaultTo<'100'>;
    delay: Attribute.BigInteger & Attribute.DefaultTo<'0'>;
    leftText: Attribute.String;
    rightText: Attribute.String;
    name: Attribute.String & Attribute.Required;
  };
}

export interface ElementsCustomAboutUs extends Schema.Component {
  collectionName: 'components_elements_custom_about_uses';
  info: {
    displayName: 'custom about us';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    left: Attribute.String;
    right: Attribute.String;
  };
}

export interface ElementsCustomAnimation extends Schema.Component {
  collectionName: 'components_elements_custom_animations';
  info: {
    displayName: 'Custom-animation';
    description: '';
  };
  attributes: {
    image: Attribute.Media;
    base_velocity: Attribute.BigInteger;
    view: Attribute.Boolean;
  };
}

export interface ElementsCustomCardChoose extends Schema.Component {
  collectionName: 'components_elements_custom_card_chooses';
  info: {
    displayName: 'custom card choose';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
  };
}

export interface ElementsCustomImageCard extends Schema.Component {
  collectionName: 'components_elements_custom_image_cards';
  info: {
    displayName: 'custom image card';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.String;
    image: Attribute.Media;
    alt: Attribute.String;
  };
}

export interface ElementsFooterLink extends Schema.Component {
  collectionName: 'components_elements_footer_links';
  info: {
    displayName: 'Footer link';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    link: Attribute.Relation<
      'elements.footer-link',
      'oneToMany',
      'api::link.link'
    >;
    categorie: Attribute.Relation<
      'elements.footer-link',
      'oneToMany',
      'api::category.category'
    >;
  };
}

export interface ElementsImage extends Schema.Component {
  collectionName: 'components_elements_images';
  info: {
    displayName: 'image';
  };
  attributes: {
    image: Attribute.Media;
    alt: Attribute.String;
  };
}

export interface ElementsQuestion extends Schema.Component {
  collectionName: 'components_elements_questions';
  info: {
    displayName: 'question';
  };
  attributes: {
    title_question: Attribute.String & Attribute.Required;
    Reply: Attribute.Text & Attribute.Required;
  };
}

export interface ErrorErrors extends Schema.Component {
  collectionName: 'components_error_errors';
  info: {
    displayName: 'errors';
    description: '';
  };
  attributes: {
    messageNotFound: Attribute.String;
    messageNotFoundBlog: Attribute.String;
    returnMessageBlog: Attribute.String;
    returnMessageHome: Attribute.String;
  };
}

export interface LinksButtonLink extends Schema.Component {
  collectionName: 'components_links_button_links';
  info: {
    displayName: 'Button link';
    description: '';
  };
  attributes: {
    url: Attribute.String;
    newTab: Attribute.Boolean;
    text: Attribute.String;
    type: Attribute.Enumeration<['primary', 'secondary']>;
  };
}

export interface LinksButton extends Schema.Component {
  collectionName: 'components_links_buttons';
  info: {
    displayName: 'button';
    description: '';
  };
  attributes: {
    text: Attribute.String;
    type: Attribute.Enumeration<['primary', 'secondary']>;
  };
}

export interface LinksLinkNavigation extends Schema.Component {
  collectionName: 'components_links_link_navigations';
  info: {
    displayName: 'link Navigation';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    link: Attribute.String;
    newTab: Attribute.Boolean;
    links: Attribute.Component<'links.link', true>;
  };
}

export interface LinksLink extends Schema.Component {
  collectionName: 'components_links_links';
  info: {
    displayName: 'link';
    description: '';
  };
  attributes: {
    newTab: Attribute.Boolean;
    title: Attribute.String;
    link: Attribute.String;
  };
}

export interface LinksSocialLink extends Schema.Component {
  collectionName: 'components_links_social_links';
  info: {
    displayName: 'Social Link';
    description: '';
  };
  attributes: {
    url: Attribute.String;
    newTab: Attribute.Boolean;
    social: Attribute.Enumeration<
      ['YOUTUBE', 'TWITTER', 'DISCORD', 'INSTAGRAM', 'LINKEDIN', 'FACEBOOK']
    >;
  };
}

export interface SharedColectionLinks extends Schema.Component {
  collectionName: 'components_shared_colection_links';
  info: {
    displayName: 'Colection Links';
    description: '';
  };
  attributes: {};
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
    description: '';
  };
  attributes: {
    metaTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaDescription: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 50;
        maxLength: 160;
      }>;
    shareImage: Attribute.Media;
    keywords: Attribute.Text;
    metaRobots: Attribute.String;
    structuredData: Attribute.JSON;
    metaViewport: Attribute.String;
    canonicalURL: Attribute.String;
  };
}

export interface TestButton extends Schema.Component {
  collectionName: 'components_test_buttons';
  info: {
    displayName: 'button';
    icon: 'command';
    description: '';
  };
  attributes: {
    compoment: Attribute.String &
      Attribute.CustomField<
        'plugin::componentpreview.preview',
        {
          url: 'uploads/video_6cc3a0f516.mp4';
        }
      >;
  };
}

export interface TestGridGalery extends Schema.Component {
  collectionName: 'components_test_grid_galeries';
  info: {
    displayName: 'gridGalery';
  };
  attributes: {
    image: Attribute.Media;
  };
}

export interface TestHeaderTitle1 extends Schema.Component {
  collectionName: 'components_test_header_title_1s';
  info: {
    displayName: 'header title 1';
  };
  attributes: {
    title: Attribute.String;
    nameSection: Attribute.String;
    animation: Attribute.Boolean;
  };
}

export interface TestMedia extends Schema.Component {
  collectionName: 'components_test_media';
  info: {
    displayName: 'Media';
  };
  attributes: {
    file: Attribute.Media;
  };
}

export interface TestRichText extends Schema.Component {
  collectionName: 'components_test_rich_texts';
  info: {
    displayName: 'rich text';
    description: '';
  };
  attributes: {
    body: Attribute.RichText;
  };
}

export interface TestSlider extends Schema.Component {
  collectionName: 'components_test_sliders';
  info: {
    displayName: 'slider';
  };
  attributes: {
    files: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'componets.newsletter': ComponetsNewsletter;
      'custom.aniation-card-glsl': CustomAniationCardGlsl;
      'custom.custom-about': CustomCustomAbout;
      'custom.custom-across': CustomCustomAcross;
      'custom.custom-choose': CustomCustomChoose;
      'custom.custom-contact': CustomCustomContact;
      'custom.custom-gallery': CustomCustomGallery;
      'custom.custom-header': CustomCustomHeader;
      'custom.custom-questions': CustomCustomQuestions;
      'custom.custom-work': CustomCustomWork;
      'custom.testimonial': CustomTestimonial;
      'elements.card-count': ElementsCardCount;
      'elements.custom-about-us': ElementsCustomAboutUs;
      'elements.custom-animation': ElementsCustomAnimation;
      'elements.custom-card-choose': ElementsCustomCardChoose;
      'elements.custom-image-card': ElementsCustomImageCard;
      'elements.footer-link': ElementsFooterLink;
      'elements.image': ElementsImage;
      'elements.question': ElementsQuestion;
      'error.errors': ErrorErrors;
      'links.button-link': LinksButtonLink;
      'links.button': LinksButton;
      'links.link-navigation': LinksLinkNavigation;
      'links.link': LinksLink;
      'links.social-link': LinksSocialLink;
      'shared.colection-links': SharedColectionLinks;
      'shared.seo': SharedSeo;
      'test.button': TestButton;
      'test.grid-galery': TestGridGalery;
      'test.header-title-1': TestHeaderTitle1;
      'test.media': TestMedia;
      'test.rich-text': TestRichText;
      'test.slider': TestSlider;
    }
  }
}
