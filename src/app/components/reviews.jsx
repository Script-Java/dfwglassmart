"use client";

export default function TrustindexWidget() {
  return (
    <section className="my-6 px-4 max-w-7xl mx-auto">
      <div className="text-center mx-auto">

        <iframe
          src="https://cdn.trustindex.io/amp-widget.html#6c2db824734a580082760c160f4"
          style={{
            display: "block",
            width: "100%",
            height: "901px", // Match what Trustindex recommends
            border: "0",
            borderRadius: "12px",
            backgroundColor: "transparent",
            overflowX: "hidden",
          }}
          scrolling="no"
          loading="lazy"
          title="Trustindex Reviews"
        ></iframe>
      </div>
    </section>
  );
}

