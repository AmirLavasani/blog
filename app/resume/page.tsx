import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Resume' })

export default function Resume() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-10 md:text-3xl md:leading-14">
            My Resume
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Here is my resume in PDF format.
          </p>
          <div className="container py-12">
            <div className="-my-4 flex flex-wrap">
              <div>
                <a
                  href="/static/resume/Amir_Lavasani_Resume_2023_v1.0_FS.pdf"
                  download="Amir_Lavasani_Resume.pdf"
                  className="inline-block rounded bg-sky-400 px-4 py-2 font-bold text-white hover:bg-sky-500"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-10 md:text-3xl md:leading-14">
            My Master Thesis
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Here is my master thesis in english in PDF format.
          </p>
          <div className="container py-12">
            <div className="-my-4 flex flex-wrap">
              <div>
                <a
                  href="/static/files/2018_Amir_Lavasani_Master_Thesis_Persian_Large_Vocabulary_Continuous_Speech_Recognition_Using_Deep_Neural_Networks.pdf"
                  download="Amir_Lavasani_Resume.pdf"
                  className="inline-block rounded bg-sky-400 px-4 py-2 font-bold text-white hover:bg-sky-500"
                  target="_blank"
                >
                  Download Thesis
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
