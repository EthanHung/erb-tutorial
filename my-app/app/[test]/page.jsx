// `app/page.js` is the UI for the `/` URL
// export async function generateStaticParams() {
//   return {
// 		fallback: false,
//     paths: {}
//   }
// }

export default function Page({ params }) {
    console.log('params', params)
    return <h1 className="text-red-800">Hello, Home page!</h1>
  }