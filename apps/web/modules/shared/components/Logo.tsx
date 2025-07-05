import { cn } from "@ui/lib";

export function Logo({
	withLabel = true,
	className,
}: {
	className?: string;
	withLabel?: boolean;
}) {
	return (
		<span
			className={cn(
				"flex items-center font-semibold text-foreground leading-none",
				className,
			)}
		>
			<svg className="size-8" viewBox="0 0 499 400" fill="none">
				<title>NetworkBuddy</title>
				<path
					d="M410.46 382C410.46 339.094 393.416 297.945 363.076 267.606C332.737 237.267 291.588 220.222 248.682 220.222C205.776 220.222 164.627 237.267 134.288 267.606C103.949 297.945 86.9045 339.094 86.9045 382"
					stroke="#6366F1"
					strokeWidth="34.232"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M248.682 220.222C304.524 220.222 349.793 174.953 349.793 119.111C349.793 63.269 304.524 18 248.682 18C192.84 18 147.571 63.269 147.571 119.111C147.571 174.953 192.84 220.222 248.682 220.222Z"
					stroke="#6366F1"
					strokeWidth="34.232"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M481.372 359.033C481.372 290.884 440.928 227.588 400.483 197.255C413.778 187.281 424.409 174.183 431.435 159.121C438.461 144.06 441.666 127.498 440.766 110.902C439.867 94.3064 434.89 78.1884 426.276 63.9745C417.663 49.7606 405.678 37.8891 391.383 29.4107"
					stroke="#34D399"
					strokeWidth="34.232"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M18 359.033C18 290.884 58.4444 227.588 98.8889 197.255C85.5944 187.281 74.9637 174.183 67.9374 159.121C60.9112 144.06 57.7061 127.498 58.6058 110.902C59.5056 94.3064 64.4824 78.1884 73.0959 63.9745C81.7094 49.7606 93.694 37.8891 107.989 29.4107"
					stroke="#34D399"
					strokeWidth="34.232"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
			{withLabel && (
				<span className="ml-2 text-lg text-primary">
					<span className="">Network</span>
					<span className="font-normal text-secondary">Buddy</span>
				</span>
			)}
		</span>
	);
}
