import { useState } from "react";
import { Play } from "lucide-react";

interface VideoEmbedProps {
  /** YouTube video ID, e.g. "dQw4w9WgXcQ". */
  youtubeId: string;
  /** Accessible title for the player. */
  title: string;
  /** Optional caption shown under the player. */
  caption?: string;
}

// Two-click embed. Nothing is requested from YouTube until the visitor presses
// play, so the page sets no third-party cookies and makes no transfer to Google
// without an action by the visitor (Art. 6(1)(a) GDPR, § 25 TDDDG). The poster
// frame is served from the site itself for the same reason: youtube.com/vi/...
// thumbnails would contact Google on load and defeat the point.
export function VideoEmbed({ youtubeId, title, caption }: VideoEmbedProps) {
  const [active, setActive] = useState(false);

  return (
    <figure className="w-full">
      <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-border bg-secondary/60">
        {active ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        ) : (
          <button
            type="button"
            onClick={() => setActive(true)}
            className="group absolute inset-0 w-full h-full flex flex-col items-center justify-center gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-inset"
          >
            <span className="w-16 h-16 rounded-full bg-accent/15 border border-accent/40 flex items-center justify-center transition-transform group-hover:scale-105">
              <Play className="w-7 h-7 text-accent fill-accent ml-1" />
            </span>
            <span className="text-sm font-semibold text-foreground px-6 text-center">{title}</span>
            <span className="text-xs text-muted-foreground px-6 text-center max-w-sm">
              Press play to load the video from YouTube. That connects you to Google and may set cookies. Nothing
              is sent before you do.
            </span>
          </button>
        )}
      </div>
      {caption && <figcaption className="mt-3 text-sm text-muted-foreground">{caption}</figcaption>}
    </figure>
  );
}
