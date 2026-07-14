import { RoutePlaceholder } from "@/components/RoutePlaceholder";
import { getPlaceholderCopy, getPlaceholderMetadata } from "@/lib/site-framework";

export const metadata = getPlaceholderMetadata("zh", "contact", "request-a-quote");
export default function Page() { return <RoutePlaceholder copy={getPlaceholderCopy("zh", "contact", "request-a-quote")!} />; }
