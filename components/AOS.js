import { useEffect } from "react";
import { useRouter } from "next/router";
import "aos/dist/aos.css";
import AOS from "aos";

function AOSComponent({ children }) {
  const router = useRouter();

  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out", delay: 100 });

    const handleRouteChange = () => {
      AOS.refresh();
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);

  return <>{children}</>;
}

export default AOSComponent;
