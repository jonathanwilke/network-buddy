import { config } from "@repo/config";
import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: config.appName,
		short_name: config.appName,
		start_url: "/",
		display: "standalone",
		background_color: "#fafafe",
		theme_color: "#6366f1",
		icons: [
			{
				src: "/icon.png",
				sizes: "512x512",
				type: "image/png",
			},
		],
	};
}
