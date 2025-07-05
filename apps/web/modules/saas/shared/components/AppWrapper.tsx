import { config } from "@repo/config";
import { NavBar } from "@saas/shared/components/NavBar";
import { cn } from "@ui/lib";
import type { PropsWithChildren } from "react";

export function AppWrapper({ children }: PropsWithChildren) {
	return (
		<div
			className={cn(
				"bg-[radial-gradient(farthest-corner_at_0%_0%,color-mix(in_oklch,var(--color-primary),transparent_95%)_0%,color-mix(in_oklch,var(--color-secondary),transparent_95%)_100%)] dark:bg-[radial-gradient(farthest-corner_at_0%_0%,color-mix(in_oklch,var(--color-secondary),transparent_95%)_0%,var(--color-background)_50%,color-mix(in_oklch,var(--color-primary),transparent_95%)_100%)]",
				{
					"min-h-[calc(100vh)]": !config.ui.saas.useSidebarLayout,
				},
			)}
		>
			<NavBar />
			<div
				className={cn("py-4 flex", [
					config.ui.saas.useSidebarLayout
						? "min-h-[calc(100vh)] md:ml-[280px] md:pr-4"
						: "container",
				])}
			>
				<main className={cn("py-6 w-full")}>
					<div className="">{children}</div>
				</main>
			</div>
		</div>
	);
}
