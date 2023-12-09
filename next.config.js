/** @type {import('next').NextConfig} */
const nextConfig = {
  //INFO: HOW TO USE EXTERNAL DOMAINS FOR IMAGES IN NEXT.JS!
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'www.bournemouth.ac.uk',
        port: '',
      },
    ]
  },
};

module.exports = nextConfig;
