export default function Home() {
  return (
    <div className="Home">
      <div className="home-text">
        <h3>Welcome to Nike</h3>
        <p>
          Less talk, more action. Let's start buying branded Nike clothing at
          very good prices.
        </p>
        <button className="home-btn">let's GO</button>
      </div>
      <div className="video">
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/PZIqV7wNyyU"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
