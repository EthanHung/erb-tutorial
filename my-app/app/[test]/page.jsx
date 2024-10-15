// `app/page.js` is the UI for the `/` URL
// export async function generateStaticParams() {
//   return {
// 		fallback: false,
//     paths: {}
//   }
// }

import { loadEnvConfig } from '@next/env'
 
const projectDir = process.cwd()
loadEnvConfig(projectDir)

export default function Page({ params }) {
    console.log('process.env', process.env)
    console.log('params', params)
    return <h1 className="text-red-800">Hello, Home page!</h1>
  }