import CallToAction from "../components/CallToAction";

export default function Projects() {
  return (
    <div className="min-h-screen max-w-2xl mx-auto flex justify-center flex-col gap-6 p-3">
      <h1 className="text-3xl font-semibold">Projects</h1>
      <p className="text-md text-gray-500">
        In the realm of your project page, every pixel holds the promise of
        innovation and progress. From the initial spark of inspiration to the
        meticulous execution, your project is a testament to creativity and
        determination. As lines of code intertwine with artistic design, and
        data flows seamlessly through intricate algorithms, a masterpiece takes
        shape. Each element, meticulously crafted, serves as a building block in
        the edifice of your vision, poised to leave an indelible mark on the
        landscape of possibility. With every click, tap, or swipe, your project
        invites users into a world of discovery, where boundaries blur, and
        imagination knows no limits. Embrace the journey, for within these
        digital corridors lies the potential to redefine what is possible and
        shape the future that awaits.
      </p>
      <CallToAction />
    </div>
  );
}
