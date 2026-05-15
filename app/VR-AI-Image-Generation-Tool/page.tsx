export default function VRAIImageGenerationToolPage() {
  return (
    <main className="min-h-screen px-8 py-16 max-w-4xl mx-auto text-gray-900 dark:text-gray-100">
      <article className="space-y-10 pb-8">
        <header className="space-y-5">
          <h1 className="text-4xl md:text-5xl font-bold">
            VR AI Image Generation Tool
          </h1>
          <p className="text-xl text-gray-800 dark:text-gray-200 leading-relaxed">
            AI-Powered Image Generation for Immersive VR Viewing
          </p>
          <div className="border border-gray-300 dark:border-gray-600 rounded-2xl p-4">
            <video
              className="w-full rounded-xl"
              controls
              preload="metadata"
              src="/entr390-final-project-video.mp4"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </header>

        <section className="space-y-4">
          <p className="text-gray-800 dark:text-gray-200 leading-relaxed">
            I built a prototype that connects AI image generation with an Unreal
            Engine VR environment, allowing users to create images from text
            prompts and view them at large scale in virtual reality.
          </p>
          <p className="text-gray-800 dark:text-gray-200 leading-relaxed">
            The project was designed around a simple problem: AI image tools
            are powerful, but most generated images are still viewed on a flat
            screen. For artists working on murals, landscapes, or large-format
            concepts, a small browser preview does not accurately show how the
            final work will feel at scale.
          </p>
          <p className="text-gray-800 dark:text-gray-200 leading-relaxed">
            This tool lets a user enter a prompt, generate an image, import it
            into Unreal Engine, and view it in VR with a headset. The user can
            stand in front of the image, move closer to inspect details, and
            experience the concept from a more realistic audience-like
            perspective.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">What I Built</h2>
          <ul className="list-disc pl-6 text-gray-800 dark:text-gray-200 space-y-2">
            <li>Created a Python workflow for generating images from prompts.</li>
            <li>
              Connected AI-generated images with an Unreal Engine VR environment.
            </li>
            <li>Built a large-scale VR viewing experience for generated images.</li>
            <li>
              Designed the prototype for artists, especially muralists and
              landscape artists.
            </li>
            <li>
              Explored prompt-based control over style, lighting, location, and
              composition.
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Problem</h2>
          <p className="text-gray-800 dark:text-gray-200 leading-relaxed">
            Most AI image generation tools are made for screen-based viewing.
            That works for casual use, but it is limiting for artists creating
            work meant to be viewed physically or at large scale.
          </p>
          <p className="text-gray-800 dark:text-gray-200 leading-relaxed">
            A mural concept, for example, can look very different on a laptop
            than it would on a wall. Scale, distance, and viewer perspective
            all affect how the final piece feels.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Solution</h2>
          <p className="text-gray-800 dark:text-gray-200 leading-relaxed">
            The tool connects AI-generated images to a VR scene, allowing users
            to preview visual concepts in a more immersive format.
          </p>
          <p className="text-gray-800 dark:text-gray-200 leading-relaxed">
            The workflow is:
          </p>
          <ol className="list-decimal pl-6 text-gray-800 dark:text-gray-200 space-y-2">
            <li>User enters a prompt.</li>
            <li>AI generates an image.</li>
            <li>Image is imported into Unreal Engine.</li>
            <li>User views the image in VR at large scale.</li>
          </ol>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Target User</h2>
          <p className="text-gray-800 dark:text-gray-200 leading-relaxed">
            The project was designed for artists who benefit from seeing
            concepts at scale, including:
          </p>
          <ul className="list-disc pl-6 text-gray-800 dark:text-gray-200 space-y-2">
            <li>Muralists</li>
            <li>Landscape artists</li>
            <li>Concept artists</li>
            <li>Installation artists</li>
            <li>Visual designers</li>
          </ul>
          <p className="text-gray-800 dark:text-gray-200 leading-relaxed">
            For these users, the value is not just generating an image. The
            value is quickly testing ideas and viewing them closer to how an
            audience would experience them.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Key Takeaways</h2>
          <p className="text-gray-800 dark:text-gray-200 leading-relaxed">
            This project taught me how AI tools become more useful when they are
            built into a specific creative workflow. The image generation itself
            was only one part of the product; the bigger idea was helping
            artists evaluate scale, composition, and visual impact faster.
          </p>
          <p className="text-gray-800 dark:text-gray-200 leading-relaxed">
            It also gave me experience connecting multiple technologies
            together, including Python, AI image generation, Unreal Engine, and
            VR. The project reinforced the importance of fast iteration,
            especially for creative tools where users need to test and compare
            ideas quickly.
          </p>
        </section>

      </article>
    </main>
  );
}
