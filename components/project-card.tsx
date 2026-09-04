export function ProjectCard({
  title,
  meta,
  large = false,
  kind,
}: {
  title: string;
  meta: string;
  large?: boolean;
  kind: "browser" | "phone" | "wordmark";
}) {
  return (
    <article className={`project ${large ? "project-large" : ""}`}>
      {" "}
      <div className={`project-visual visual-${kind}`}>
        {kind === "browser" && (
          <>
            <div className="mock-browser">
              <span />
              <span />
              <span />
            </div>
            <div className="mock-panel panel-purple" />
            <div className="mock-panel panel-mint" />
          </>
        )}
        {kind === "phone" && (
          <div className="phone">
            <div className="phone-screen" />
          </div>
        )}
        {kind === "wordmark" && (
          <div className="wordmark">
            MOVE
            <br />
            FAST.
          </div>
        )}
      </div>
      <div className="project-meta">
        <div>
          <h3>{title}</h3>
          <p>{meta}</p>
        </div>
        <span className="arrow">↗</span>
      </div>
    </article>
  );
}
