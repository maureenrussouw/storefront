// Grit Framework Configuration
export default {
  name: "storefront",
  style: "default",
  api: {
    port: 8080,
    prefix: "/api",
  },
  web: {
    port: 3000,
  },
  admin: {
    port: 3001,
  },
  expo: {
    scheme: "storefront",
  },
  desktop: {
    framework: "wails",
    port: 5174,
  },
  docs: {
    port: 3002,
  },
};
