/** @type {import('next').NextConfig} */
const nextConfig = {
  //INFO: HOW TO USE EXTERNAL DOMAINS FOR IMAGES IN NEXT.JS!
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
        port: "",
      },
      {
        protocol: "https",
        hostname: "romefountains2016.files.wordpress.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "www.bournemouth.ac.uk",
        port: "",
      },
      {
        protocol: "https",
        hostname: "placekitten.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "www.salesforce.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "harreira.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "images2.minutemediacdn.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "images.theconversation.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
