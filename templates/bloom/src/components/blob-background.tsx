import { cn } from "@notabhay-ui/ui";

interface BlobBackgroundProps {
  className?: string;
  variant?: "default" | "hero" | "subtle";
}

export function BlobBackground({
  className,
  variant = "default",
}: BlobBackgroundProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className
      )}
      aria-hidden="true"
    >
      {variant === "hero" && (
        <>
          <svg
            className="absolute -top-32 -right-32 w-[600px] h-[600px] opacity-[0.07]"
            viewBox="0 0 600 600"
            fill="none"
          >
            <path
              d="M300 50C380 50 480 100 520 180C560 260 550 340 520 400C490 460 420 520 340 540C260 560 180 540 120 490C60 440 30 360 30 280C30 200 60 130 120 90C180 50 220 50 300 50Z"
              fill="currentColor"
              className="text-primary"
            />
          </svg>
          <svg
            className="absolute -bottom-24 -left-24 w-[500px] h-[500px] opacity-[0.05]"
            viewBox="0 0 500 500"
            fill="none"
          >
            <path
              d="M250 30C330 20 400 70 440 140C480 210 490 290 450 360C410 430 340 470 260 480C180 490 100 460 60 400C20 340 10 260 40 190C70 120 170 40 250 30Z"
              fill="currentColor"
              className="text-secondary"
            />
          </svg>
          <svg
            className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[400px] h-[400px] opacity-[0.04]"
            viewBox="0 0 400 400"
            fill="none"
          >
            <path
              d="M200 20C260 10 320 50 360 110C400 170 400 240 370 300C340 360 280 390 210 400C140 410 80 380 40 320C0 260 0 180 30 120C60 60 140 30 200 20Z"
              fill="currentColor"
              className="text-primary"
            />
          </svg>
        </>
      )}
      {variant === "default" && (
        <>
          <svg
            className="absolute -top-16 -right-16 w-[400px] h-[400px] opacity-[0.05]"
            viewBox="0 0 400 400"
            fill="none"
          >
            <path
              d="M200 30C260 20 330 60 360 130C390 200 380 270 340 320C300 370 240 390 180 380C120 370 70 330 40 270C10 210 10 140 40 90C70 40 140 40 200 30Z"
              fill="currentColor"
              className="text-primary"
            />
          </svg>
          <svg
            className="absolute -bottom-16 -left-16 w-[350px] h-[350px] opacity-[0.04]"
            viewBox="0 0 350 350"
            fill="none"
          >
            <path
              d="M175 20C230 10 290 50 320 110C350 170 340 240 300 290C260 340 200 360 140 340C80 320 40 270 20 210C0 150 10 80 60 40C110 0 120 30 175 20Z"
              fill="currentColor"
              className="text-secondary"
            />
          </svg>
        </>
      )}
      {variant === "subtle" && (
        <svg
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] opacity-[0.03]"
          viewBox="0 0 500 500"
          fill="none"
        >
          <path
            d="M250 30C330 20 400 70 440 140C480 210 490 290 450 360C410 430 340 470 260 480C180 490 100 460 60 400C20 340 10 260 40 190C70 120 170 40 250 30Z"
            fill="currentColor"
            className="text-primary"
          />
        </svg>
      )}
    </div>
  );
}
