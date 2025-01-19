import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

// Importando os plugins de maneira compatível com ESM
import eslintPluginReact from "eslint-plugin-react";
import eslintPluginTypescript from "@typescript-eslint/eslint-plugin";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    ignores: ["node_modules"], // Ignora a pasta node_modules
  },
  {
    files: ["**/*.js", "**/*.ts", "**/*.jsx", "**/*.tsx"],
    languageOptions: {
      ecmaVersion: "latest", // Suporte ao ES mais recente
      sourceType: "module", // Para ES Modules
    },
    plugins: {
      react: eslintPluginReact,
      "@typescript-eslint": eslintPluginTypescript,
    },
    rules: {
      "@typescript-eslint/no-require-import":"off",
      "semi": ["off"], // Desativa a exigência de ponto e vírgula
      "quotes": ["error", "double"], // Exige aspas duplas
    },
  },
];

export default eslintConfig;
