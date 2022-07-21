/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "links.papareact.com",
      "platform-lookaside.fbsbx.com",
      "firebasestorage.googleapis.com",
      "randomuser.me",
      "reqres.in",
      "lh3.googleusercontent.com"
    ]
  }
}

module.exports = nextConfig
