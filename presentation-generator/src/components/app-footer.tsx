import { appConfig } from "@/config/app"

export function AppFooter() {
  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Source code available on{" "}
            <a href={appConfig.github.url} target="_blank" rel="noreferrer" className="font-medium underline underline-offset-4">
              {appConfig.github.title}
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  )
}