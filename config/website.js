const tailwind = require("../tailwind");

module.exports = {
  pathPrefix: "/", // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: "Umair Ahmed - Product Developer Portfolio", // Navigation and Site Title
  siteTitleAlt: "Umair", // Alternative Site title for SEO
  siteTitleShort: "Umair's Portfolio", // short_name for manifest
  siteHeadline: "Creating marvelous art & blazginly fast websites", // Headline for schema.org JSONLD
  siteUrl: "https://www.umair.dev", // Domain of your site. No trailing slash!
  siteLanguage: "en", // Language Tag on <html> element
  siteLogo: "/logo.png", // Used for SEO and manifest
  siteDescription:
    "Umair Ahmed - A product developer portfolio website. Web developer working in a consultancy building software",
  author: "Umair Ahmed", // Author for schema.org JSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: "@umair170", // Twitter Username
  ogSiteName: "Umair - Portfolio", // Facebook Site Name
  ogLanguage: "en_US", // Facebook Language
  googleAnalyticsID: "UA-136010320-1",

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
};
