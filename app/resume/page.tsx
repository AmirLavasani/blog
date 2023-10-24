import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Resume' })

export default function Resume() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            My Resume
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Here is my resume in PDF format.
          </p>
        </div>
        <div className="container py-12">
          <div className="-my-4 flex flex-wrap">
            <div>
              <a
                href="/static/resume/Amir_Lavasani_Resume_2023_v1.0_FS.pdf"
                download="Amir_Lavasani_Resume.pdf"
                className="mt-4 inline-block rounded bg-sky-400 px-4 py-2 font-bold text-white hover:bg-sky-500"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
