import { AnalyticsScript } from "@analytics";
import { config } from "@repo/config";
import { ApiClientProvider } from "@shared/components/ApiClientProvider";
import { ConsentBanner } from "@shared/components/ConsentBanner";
import { ConsentProvider } from "@shared/components/ConsentProvider";
import { Toaster } from "@ui/components/toast";
import { cn } from "@ui/lib";
import { Provider as JotaiProvider } from "jotai";
import { Sora } from "next/font/google";
import { cookies } from "next/headers";
import { ThemeProvider } from "next-themes";
import NextTopLoader from "nextjs-toploader";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import type { PropsWithChildren } from "react";

const SansFont = Sora({
	subsets: ["latin"],
	variable: "--font-sans",
});

export async function Document({
	children,
	locale,
}: PropsWithChildren<{ locale: string }>) {
	const cookieStore = await cookies();
	const consentCookie = cookieStore.get("consent");

	return (
		<html
			lang={locale}
			suppressHydrationWarning
			className={SansFont.variable}
		>
			<body
				className={cn(
					"min-h-screen bg-background text-foreground antialiased",
				)}
			>
				<NuqsAdapter>
					<ConsentProvider
						initialConsent={consentCookie?.value === "true"}
					>
						<NextTopLoader color="var(--color-primary)" />
						<ThemeProvider
							attribute="class"
							disableTransitionOnChange
							enableSystem
							defaultTheme={config.ui.defaultTheme}
							themes={config.ui.enabledThemes}
						>
							<ApiClientProvider>
								<JotaiProvider>{children}</JotaiProvider>
							</ApiClientProvider>
						</ThemeProvider>
						<Toaster position="top-right" />
						<ConsentBanner />
						<AnalyticsScript />
					</ConsentProvider>
				</NuqsAdapter>
			</body>
		</html>
	);
}
