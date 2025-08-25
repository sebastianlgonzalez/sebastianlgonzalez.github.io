import { useRouter } from "next/router";
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  const router = useRouter();
  if (router.pathname !== "/robotic_arm") {
    require("@/styles/global-default.css");
  }
  return <Component {...pageProps} />
}
