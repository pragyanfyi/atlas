import { EditOnGitHub, PageLastUpdate } from "fumadocs-ui/layouts/glass/page";
import { Flag } from "lucide-react";
import { gitConfig } from "@/lib/shared";

const repoUrl = `https://github.com/${gitConfig.user}/${gitConfig.repo}`;

/**
 * Footer row under every docs page: invites corrections and shows when the
 * page last changed.
 */
export function PageFeedback({
  path,
  url,
  lastModified,
}: {
  /** Source file path relative to content/docs, e.g. `foundations/threads.mdx` */
  path: string;
  /** Page URL, prefilled into the content issue template */
  url: string;
  lastModified?: Date;
}) {
  const editUrl = `${repoUrl}/edit/${gitConfig.branch}/content/docs/${path}`;
  const issueUrl = `${repoUrl}/issues/new?${new URLSearchParams({
    template: "content_issue.yml",
    page: url,
  })}`;

  return (
    <div className="mt-12 flex flex-col gap-3 border-t pt-6">
      <p className="text-fd-muted-foreground text-sm">
        Spotted something wrong or out of date? Open an issue or edit the page.
      </p>
      <div className="flex flex-wrap items-center gap-2">
        <EditOnGitHub href={issueUrl}>
          <Flag className="size-3.5" />
          Report an issue
        </EditOnGitHub>
        <EditOnGitHub href={editUrl} />
        {lastModified && (
          <PageLastUpdate date={lastModified} className="sm:ms-auto" />
        )}
      </div>
    </div>
  );
}
