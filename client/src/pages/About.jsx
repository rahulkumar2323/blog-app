export default function About() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-2xl mx-auto p-3 text-center">
        <div>
          <h1 className="text-3xl font-semibold text-center my-7">
            About Flash Blog
          </h1>
          <div className="text-md text-gray-500 flex flex-col gap-6">
            <p>
              Beyond your personal journey, outline the mission and values that
              guide your blog. Whether you aim to educate, entertain, inspire,
              or provoke thought, articulate the purpose behind your content.
              Highlight any unique perspectives or approaches you bring to your
              niche, offering readers a compelling reason to engage with your
              blog over others.
            </p>
            <p>
              Lastly, invite your readers to join you on your blogging journey.
              Encourage them to subscribe, follow your social media channels,
              and engage with your content through comments and shares. By
              fostering a sense of community, you not only deepen the connection
              with your audience but also create a platform where meaningful
              conversations can thrive.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
