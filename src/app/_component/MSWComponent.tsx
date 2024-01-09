"use client";
import { useEffect } from "react";

// 클라이언트 환경에서 mockServiceWorker가 요청을 가로채서 http.ts로 보내버림
export const MSWComponent = () => {
  useEffect(() => {
    // 브라우저에서만 돌아갈 수 있는 조건문
    if (typeof window !== 'undefined') {
      if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
        require("@/mocks/browser");
      }
    }
  }, []);

  return null;
};