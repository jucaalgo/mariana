import { notFound } from "next/navigation";
import { mockModules } from "@/lib/data";
import { ModuleContent } from "@/components/ModuleContent";

export default async function ModuleViewer({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    // Server-side validation to trigger proper 404 if module doesn't exist
    const validModule = mockModules[id as string];

    if (!validModule) {
        notFound();
    }

    return <ModuleContent id={id} />;
}
