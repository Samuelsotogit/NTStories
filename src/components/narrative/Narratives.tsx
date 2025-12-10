import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import narratives from "../../data/narratives.json";
import "./NarrativePage.css";

// ...existing code...
export default function NarrativePage() {
  const { slug } = useParams(); // e.g. "commission" or "pentecost"
  const item = narratives.find((n) => n.slug && n.slug === slug);

  useEffect(() => {
    if (slug) document.body.dataset.page = slug;
    return () => {
      // optional cleanup
      document.body.removeAttribute("data-page");
    };
  }, [slug]);

  if (!item) {
    return (
      <div className="narrative not-found">
        <h2>Not found</h2>
        <p>No narrative matches "{slug}"</p>
        <Link to="/">Back home</Link>
      </div>
    );
  }

  // image file should live in public/images and referenced by item.image (recommended)
  const importedImages = import.meta.glob("../../assets/images/*", {
    eager: true,
    query: "?url",
    import: "default",
  }) as Record<string, string>;
  const importKey = `../../assets/images/${item.image}`;
  const importedUrl = importedImages[importKey];
  const publicUrl = `${import.meta.env.BASE_URL}images/${item.image}`;
  const imageUrl = importedUrl ?? publicUrl;
  
  return (
    <div className="narrative-page">
      <div className="narrative-overlay">
        <article className="narrative-card">
          <h1>{item.title}</h1>
          <p className="reference">{item.reference}</p>
          <p>{item.narrative}</p>
          <div className="verse">
            {item.verse.split("\n").map((line: string, i: number) => (
              <span key={i}>
                {line}
                <br />
              </span>
            ))}
          </div>
        </article>
      </div>
      <div>
        <img className="narrative-image" src={imageUrl} alt={item.title} />
      </div>
    </div>
  );
}
