import { QueryClient } from "react-query"

let medusaUrl = "https://clever-torte-c56cee.netlify.app"

// deprecated
if (process.env.GATSBY_STORE_URL) {
  medusaUrl = process.env.GATSBY_STORE_URL
}

// takes precedence over GATSBY_STORE_URL
if (process.env.GATSBY_MEDUSA_BACKEND_URL) {
  medusaUrl = process.env.GATSBY_MEDUSA_BACKEND_URL
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 90000,
      retry: 1,
    },
  },
})

export { medusaUrl, queryClient }
