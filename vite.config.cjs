module.exports = async () => {
  const react = (await import("@vitejs/plugin-react")).default;

  return {
    resolve: {
      preserveSymlinks: true,
    },
    plugins: [react()],
  };
};
