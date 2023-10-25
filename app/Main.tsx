import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'
import Image from '@/components/Image'

const MAX_DISPLAY = 5

export default function Home({ posts }) {
  return (
    <>
      <div className="mt-7 flex flex-col-reverse items-center justify-between gap-4 space-y-4 md:flex-row">
        <div className="space-y-4 text-center md:text-left">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            <span className="wave">👋🏻</span>, <span>I'm </span>
            <span className="text-sky-500 dark:text-sky-500">Amir Lavasani</span>
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Startup Builder | Full-Stack ML Engineer | AI SAAS Lover
          </p>
          <div className="flex flex-row justify-center gap-x-6 md:justify-normal">
            <Link
              href="/about"
              className="mt-4 inline-block rounded bg-sky-400 px-4 py-2 font-bold text-white hover:bg-sky-500"
            >
              About Me
            </Link>
            <Link
              href="/projects"
              className="mt-4 inline-block rounded border-2 border-sky-300 bg-transparent px-4 py-2 font-bold text-gray-400 hover:border-sky-500 hover:text-gray-600 dark:text-white"
            >
              What I'v Done 💯
            </Link>
          </div>
        </div>
        <Image
          src="/static/images/amirlavasani.jpg"
          alt="avatar"
          width={288}
          height={288}
          className="h-48 w-48 rounded-full md:h-72 md:w-72"
        />
      </div>
      <br />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Latest
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {siteMetadata.description}
          </p>
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((post) => {
            const { slug, date, title, summary, tags, image } = post
            return (
              <li key={slug} className="py-12">
                <article>
                  <div className="flex flex-col gap-8 space-y-2 lg:flex-row xl:flex-row">
                    <div className="hidden basis-1/4 self-center lg:block">
                      <Link href={`/blog/${slug}`}>
                        <Image
                          alt={title}
                          src={image}
                          className="mx-auto rounded"
                          width={200}
                          height={200}
                        />
                      </Link>
                    </div>
                    <div className="basis-3/4 space-y-5 self-center">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl font-bold leading-8 tracking-tight">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-gray-900 dark:text-gray-100"
                            >
                              {title}
                            </Link>
                          </h2>
                          <div className="flex flex-wrap">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                          <dl>
                            <dt className="sr-only">Published on</dt>
                            <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                              <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                            </dd>
                          </dl>
                        </div>
                        <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                          {summary}
                        </div>
                      </div>
                      <div className="text-base font-medium leading-6">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          aria-label={`Read "${title}"`}
                        >
                          Read more &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="All posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
      {siteMetadata.newsletter?.provider && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm title="Lets Stay Connected 💭"/>
        </div>
      )}
    </>
  )
}
