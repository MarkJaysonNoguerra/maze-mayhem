import { defineConfig } from "vite";
import tsconfigPaths from 'vite-tsconfig-paths';


export default defineConfig({
  base: "/maze-mayhem/",
  plugins: [tsconfigPaths()],  
  resolve: {
    alias: [],
  },
});