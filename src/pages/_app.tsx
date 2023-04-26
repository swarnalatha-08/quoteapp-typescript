import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import LoginLayout from "../Layouts/loginLayout";
import { LazyMotion, domAnimation, m } from "framer-motion";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <LazyMotion features={domAnimation}>
      <RecoilRoot>
        <LoginLayout>
          {/* The m component can be used in exactly the same way as motion, but it comes with no features preloaded. These are then provided by LazyMotion. */}
          <m.div>
            <Component {...pageProps} />
          </m.div>
        </LoginLayout>
      </RecoilRoot>
    </LazyMotion>
  );
}
