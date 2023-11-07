import { Authors, allAuthors } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import AuthorLayout from '@/layouts/AuthorLayout'
import { coreContent } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/seo'
import CalendlyWidget from '@/components/Calendly'

export const metadata = genPageMetadata({ title: 'About' })

export default function Page() {
  const author = allAuthors.find((p) => p.slug === 'default') as Authors
  const mainContent = coreContent(author)

  return (
    <>
      <AuthorLayout content={mainContent}>
        <MDXLayoutRenderer code={author.body.code} />
      </AuthorLayout>
      {/* Include the CalendlyWidget component with the Calendly URL as a prop */}
      <div className="mt-16 divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Lets Talk
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Schedule an online meeting with me.
          </p>
        </div>
        <CalendlyWidget url="https://calendly.com/amir-lavasani/online-meeting" />
      </div>
    </>
  )
}
