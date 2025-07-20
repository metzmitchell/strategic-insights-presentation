type AppConfigType = {
    name: string,
    github: {
        title: string,
        url: string
    },
    author: {
        name: string,
        url: string
    },
}

export const appConfig: AppConfigType = {
    name: "Presentation Generator",
    github: {
        title: "GitHub",
        url: "https://github.com",
    },
    author: {
        name: "Your Name",
        url: "https://github.com",
    },
}

export const baseUrl = import.meta.env.VITE_BASE_URL ?? ""
