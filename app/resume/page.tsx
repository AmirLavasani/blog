import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Resume' })

export default function Resume() {
  return (
    <>
      <div className="mt-7 flex items-center justify-between space-y-4">
        <div className="space-y-4">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            <span className="text-sky-500 dark:text-sky-500">Here is my resume</span>
          </h1>
          <div className="flex flex-row gap-x-6">
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
