const tailwind = require("../tailwind")

module.exports = {
  pathPrefix: "/", // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: "Umair Ahmed - Product Developer Portfolio", // Navigation and Site Title
  siteTitleAlt: "Umair", // Alternative Site title for SEO
  siteTitleShort: "Portfolio", // short_name for manifest
  siteHeadline: "Creating marvelous art & blazginly fast websites", // Headline for schema.org JSONLD
  siteUrl: "https://www.umair.dev", // Domain of your site. No trailing slash!
  siteLanguage: "en", // Language Tag on <html> element
  siteLogo: "/logo.png", // Used for SEO and manifest
  siteDescription: "Playful & Colorful One-Page website with Parallax effect",
  author: "Umair Ahmed", // Author for schema.org JSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: "@umair170", // Twitter Username
  ogSiteName: "cara", // Facebook Site Name
  ogLanguage: "en_US", // Facebook Language
  googleAnalyticsID: "UA-",

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
}
