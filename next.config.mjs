// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.dummyjson.com','codeswear.nyc3.cdn.digitaloceanspaces.com'],
  },
  env:{
    mongodb_username:'ankitkhenwar17',
    mongodb_password:'JVvFsJXfOPqUj5Eo',
    mongodb_clustername:'cluster0',
    mongodb_database:'tshirtsdb'
  }
};

export default nextConfig;
