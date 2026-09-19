import ArrowRound from "./icons/ArrowRound";
import Link from "next/link";

export function ProjectCard({
  title,
  description,
  meta,
  tags,
  src,
  alt_image_src,
  size,
  url,
  url_label,
  button_url,
  button_label,
}: {
  title: string;
  description?: string;
  meta: string;
  tags?: string[];
  src?: string;
  alt_image_src?: string;
  size: "small" | "medium" | "large";
  url?: string;
  url_label?: string;
  button_url?: string;
  button_label?: string;
}) {
  return (
    <article className={`project relative project-${size}`}>
      <div className="project-meta">
        <div className="flex flex-col justify-between h-full">
          <div>
            <p className="eyebrow mb-2! uppercase text-purple">{meta}</p>
            <h3
              className={`font-bebas text-purple-900 ${size == "large" ? "text-[80px]" : "text-[60px] mb-2"} leading-none`}
            >
              {title}
            </h3>
            {size === "large" && (
              <>
                {description && <p className="mt-4">{description}</p>}

                {tags && (
                  <div className="flex gap-2 mt-6">
                    {tags.map((tag) => (
                      <div
                        className="relative cursor-default overflow-hidden px-2 py-1 rounded-lg border border-mint text-[12px] 
                                  hover:text-white transition-colors duration-500
                                  before:absolute before:inset-y-0 before:left-0 before:w-full
                                  before:bg-mint before:origin-left before:scale-x-0
                                  before:transition-transform before:duration-500
                                  hover:before:scale-x-100"
                        key={tag}
                      >
                        <span className="relative z-10">{tag}</span>
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
          {size === "large" && (
            <>
              <div className="mt-11 flex gap-3">
                {button_url && (
                  <Link
                    className="button max-h-10 button-small hover:shadow-none! transition! hover:bg-white! hover:text-purple! border hover:border-purple!"
                    href={button_url}
                  >
                    {button_label}
                  </Link>
                )}

                {url && (
                  <Link
                    className="button max-h-10 button-transparent text-mint! transition! border border-mint hover:shadow-none! hover:bg-mint! hover:text-white!"
                    href={url}
                  >
                    {url_label}
                  </Link>
                )}
              </div>
            </>
          )}
        </div>
      </div>
      <div className={`project-visual`}>
        <img src={src} className="h-full object-cover" />
      </div>
      {size != "large" && (
        <a
          href={url}
          aria-label={`Link to ${title}`}
          className="arrow rounded-full transition absolute top-6 right-6 hover:bg-mint-400 "
        >
          <ArrowRound className="text-mint-400 hover:text-white" />
        </a>
      )}
      {alt_image_src && (
        <img
          src={alt_image_src}
          alt={title}
          className={`alt-image absolute bottom-3 right-10 ${size == "large" ? "max-w-[15%]" : "max-w-[25%]"}`}
        />
      )}
    </article>
  );
}
