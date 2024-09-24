import { useRouter } from 'next/router'
 
export default function Page() {
  const router = useRouter()
  console.log('test', router.query)
  return <p></p>
}