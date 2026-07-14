import { RoutePlaceholder } from "@/components/RoutePlaceholder";
import { getPlaceholderCopy, getPlaceholderMetadata } from "@/lib/site-framework";

export const metadata = getPlaceholderMetadata("en", "contact", "request-a-quote");
export default function Page() { return <RoutePlaceholder copy={getPlaceholderCopy("en", "contact", "request-a-quote")!} />; }
