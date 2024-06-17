import { redirect } from 'next/dist/server/api-utils';
import Image from "next/image";

export default function Home() {
  redirect("302", "dashboard/home");
}
