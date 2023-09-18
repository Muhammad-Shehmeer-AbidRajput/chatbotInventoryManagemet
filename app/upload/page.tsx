import React from 'react'
import Link from 'next/link'
function page() {
    return (
        <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
            <a
                href="/dashboard"
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                target="_blank"
                rel="noopener noreferrer"
            >

                <h2 className={`mb-3 text-2xl font-semibold`}>
                    Upload{' '}
                    <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                        -&gt;
                    </span>
                </h2>
                <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                    find the insights on the website
                </p>
            </a>
            <Link href="/api/index"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
                    <code className="font-mono font-bold">api/index.py</code>
                </Link>
            <br />
            <br />

            <Link href="/api/welcome"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
                    <code className="font-mono font-bold">api/welcome page using flask python routes</code>
                </Link>
            <br />
            <br />

            1
            <h1>Adding file upload functionality</h1>
            <form action="" method='post' encType='multipart/form-data'>
                <input type="file" name='file' accept='application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel'/>
                <input type="submit" value='Upload' />

            </form>
        </div>


    )
}

export default page