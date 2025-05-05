import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/specialties/general-physician-internal-medicine");
  }, [router]);

  return null;
}