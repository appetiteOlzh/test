"use client";
import Script from "next/script";
import { InputHTMLAttributes, useEffect, useRef } from "react";
import mergeRefs from "merge-refs";

declare global {
  interface Window {
    grecaptcha: {
      ready: (cb: () => void) => void;
      execute: (
        siteKey: string,
        options: { action: string }
      ) => Promise<string>;
    };
  }
}
const siteKey = "6LfGF2YrAAAAAK1ZNilk7TI2_DLlPII1BmnpWqVe";
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  refProps?: React.Ref<HTMLInputElement>;
  setTokenVal: (token: string) => void;
}

export function RecaptchaLoader({
  refProps,
  setTokenVal,
  ...props
}: InputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const loadRecaptcha = () => {
      if (!window.grecaptcha) return;

      window.grecaptcha.ready(() => {
        window.grecaptcha
          .execute(siteKey, { action: "submitForm" })
          .then((token) => {
            setTokenVal(token);

            const tokenInput = inputRef.current as HTMLInputElement;
            if (tokenInput) {
              tokenInput.value = token;
            }
          })
          .catch((error) => {
            console.error("Recaptcha execution failed:", error);
          });
      });
    };

    // в случае, если grecaptcha уже загружен
    if (window.grecaptcha) {
      loadRecaptcha();
    }
  }, []);

  return (
    <>
      <Script
        src={`https://www.google.com/recaptcha/api.js?render=${siteKey}`}
        strategy="afterInteractive"
        onLoad={() => {
          window.grecaptcha?.ready(() => {
            window.grecaptcha
              .execute(siteKey, { action: "submitForm" })
              .then((token) => {
                console.log(token);
                const tokenInput = document.getElementById(
                  "recaptcha-token"
                ) as HTMLInputElement;
                if (tokenInput) {
                  tokenInput.value = token;
                  setTokenVal(token);
                }
              })
              .catch((error) => {
                console.error("Recaptcha execution failed:", error);
              });
          });
        }}
      />
      <input
        type="hidden"
        id="recaptcha-token"
        {...props}
        ref={mergeRefs(refProps, inputRef)}
      />
    </>
  );
}
