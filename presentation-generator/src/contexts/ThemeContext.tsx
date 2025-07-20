import { createContext, ReactNode, use, useEffect, useState } from "react"

type ThemeType = {
    theme: string
    setTheme: (theme: string) => void
}

export const ThemeContext = createContext<ThemeType | null>(null)

export function ThemeProvider({
    children,
    defaultTheme = "light",
    storageKey = "shadcn-ui-theme",
}: {
    children: ReactNode
    defaultTheme?: string
    storageKey?: string
}) {
    const [theme, setTheme] = useState(
        () => "light" // Force light theme always
    )

    useEffect(() => {
        const root = window.document.documentElement

        root.classList.remove("light", "dark")
        
        // Always apply light theme
        root.classList.add("light")
    }, [theme])

    return (
        <ThemeContext
            value={{
                theme,
                setTheme: (theme: string) => {
                    // Always keep light theme - ignore theme changes
                    localStorage.setItem(storageKey, "light")
                    setTheme("light")
                },
            }}>
            {children}
        </ThemeContext>
    )
}

export function useTheme(): ThemeType {
    const context = use(ThemeContext)

    if (context === null) {
        throw new Error("useTheme must be used within a ThemeProvider")
    }

    return context
}
