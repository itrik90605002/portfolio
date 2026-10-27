/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export: deploy the `out/` folder to Vercel, Netlify or GitHub Pages.
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
