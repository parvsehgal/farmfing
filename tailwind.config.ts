import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				farmfing: {
					primary: "#3B82F6",
					secondary: "#34D399",
					tertiary: "#8B5CF6",
					light: "#F9FAFB",
					dark: "#1F2937",
					muted: "#9CA3AF",
				},
			},
		},
	},
	plugins: [],
};

export default config;
