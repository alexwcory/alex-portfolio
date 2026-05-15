import Image from "next/image";

export default function SyncAiDatingAppPage() {
  return (
    <main className="min-h-screen px-8 py-16 max-w-4xl mx-auto text-gray-900 dark:text-gray-100">
      <article className="space-y-10">
        <header className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold">
            Sync — AI-Powered Date Planning App
          </h1>
          <p className="text-lg text-gray-800 dark:text-gray-200 leading-relaxed">
            A React Native / Expo mobile app that helps users generate and build
            personalized date plans through a questionnaire, swipe-based
            activity selection, and itinerary-building flow. Designed to reduce
            the time users spend searching across Google, Yelp, and other
            services by centralizing date discovery into one guided mobile
            experience.
          </p>
          <div className="rounded-2xl overflow-hidden border border-gray-300 dark:border-gray-600">
            <Image
              src="/sync-app-screenshot.png"
              alt="Sync app build screen and sync screen side by side, showing activity category selection and the itinerary builder with a Sync button"
              width={1024}
              height={600}
              className="w-full h-auto"
              priority
            />
          </div>
        </header>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Technical Implementation</h2>
          <p className="text-gray-800 dark:text-gray-200 leading-relaxed">
            Sync was built as a mobile-first prototype using React Native and
            Expo, chosen because they allowed fast iteration on UI, navigation,
            and mobile interactions without needing separate native iOS and
            Android codebases. This mattered because the core experience
            depended heavily on testing interaction patterns: swiping, selecting
            activities, moving through screens, and building a final plan.
          </p>
          <p className="text-gray-800 dark:text-gray-200 leading-relaxed">
            The app flow started with a preference questionnaire that collected
            user inputs such as activity preferences, location context, and
            budget. These inputs shaped the activity recommendations shown later
            in the app, making suggestions feel more personalized than a generic
            list of date ideas.
          </p>
          <p className="text-gray-800 dark:text-gray-200 leading-relaxed">
            After onboarding, users moved into a swipe-based recommendation
            interface. Activity cards represented possible date options, and
            users could swipe through them to accept or reject ideas. This
            interaction was chosen because it made planning feel quick and
            familiar, similar to discovery interfaces users already understand
            from mobile apps.
          </p>
          <p className="text-gray-800 dark:text-gray-200 leading-relaxed">
            Selected activities were passed into a build screen, where the app
            organized chosen options into a more complete date itinerary. This
            separated the discovery phase from the planning phase: users first
            explored possible activities, then reviewed the structure of their
            final date.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Why This Design</h2>
          <p className="text-gray-800 dark:text-gray-200 leading-relaxed">
            The product was built around the idea that date planning is not just
            a search problem — it is a decision-flow problem. Users do not only
            need more options; they need a faster way to narrow options down and
            turn them into a plan.
          </p>
          <div className="space-y-3">
            <div className="border border-gray-300 dark:border-gray-600 rounded-2xl p-5">
              <h3 className="text-xl font-semibold mb-2">
                Questionnaire → Collect user intent
              </h3>
              <p className="text-gray-800 dark:text-gray-200 leading-relaxed">
                Preference inputs for activity type, location, and budget
                informed downstream recommendations, reducing the cold-start
                problem of generic suggestion lists.
              </p>
            </div>
            <div className="border border-gray-300 dark:border-gray-600 rounded-2xl p-5">
              <h3 className="text-xl font-semibold mb-2">
                Swipe Cards → Make selection fast
              </h3>
              <p className="text-gray-800 dark:text-gray-200 leading-relaxed">
                A swipe-based card interface made activity selection feel like a
                familiar mobile interaction, lowering cognitive load compared to
                browsing a flat list.
              </p>
            </div>
            <div className="border border-gray-300 dark:border-gray-600 rounded-2xl p-5">
              <h3 className="text-xl font-semibold mb-2">
                Build Screen → Turn choices into an itinerary
              </h3>
              <p className="text-gray-800 dark:text-gray-200 leading-relaxed">
                Selected activities were assembled into a structured itinerary,
                bridging the gap between exploration and a concrete, shareable
                plan.
              </p>
            </div>
            <div className="border border-gray-300 dark:border-gray-600 rounded-2xl p-5">
              <h3 className="text-xl font-semibold mb-2">
                Sync / Share Flow → Send the plan
              </h3>
              <p className="text-gray-800 dark:text-gray-200 leading-relaxed">
                The final plan could be sent to another person. Based on user
                testing, the share mechanism was iterated from email-style
                sharing to formatted text messaging to match how people actually
                coordinate plans.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">MVP Features</h2>
          <ul className="list-disc pl-6 text-gray-800 dark:text-gray-200 space-y-2">
            <li>Preference questionnaire</li>
            <li>Personalized activity recommendation flow</li>
            <li>Swipe-based activity cards</li>
            <li>Itinerary build screen</li>
            <li>Activity information dropdown</li>
            <li>Sync / share button</li>
            <li>Mobile navigation flow</li>
          </ul>
          <p className="text-gray-800 dark:text-gray-200 leading-relaxed">
            The activity cards and build screen were the strongest parts of the
            prototype because they made the app feel interactive rather than a
            static recommendation list.
          </p>
        </section>

        <section className="space-y-4 pb-8">
          <h2 className="text-2xl font-semibold">Testing and Iteration</h2>
          <p className="text-gray-800 dark:text-gray-200 leading-relaxed">
            User testing confirmed that the core concept was useful, but some
            interactions needed clearer explanation. Swiping had high
            satisfaction once users understood the mechanic, but discoverability
            of the gesture was a friction point for first-time users. Users also
            wanted a clearer connection between their questionnaire answers, the
            recommendations shown, and the final itinerary.
          </p>
          <p className="text-gray-800 dark:text-gray-200 leading-relaxed">
            Based on testing, the next iteration focused on:
          </p>
          <ul className="list-disc pl-6 text-gray-800 dark:text-gray-200 space-y-2">
            <li>Adding visual prompts and microcopy for swiping</li>
            <li>Making questionnaire impact more visible in recommendations</li>
            <li>
              Improving continuity between activity cards and the build screen
            </li>
            <li>Making activity details easier to access in-card</li>
            <li>
              Replacing email-style sharing with formatted text messaging
            </li>
          </ul>
        </section>
      </article>
    </main>
  );
}
