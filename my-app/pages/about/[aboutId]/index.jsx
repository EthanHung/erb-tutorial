import { useRouter } from 'next/router'
import {useState, useEffect} from 'react'
import '../../../app/globals.css';
 
export default function Page() {
  const router = useRouter()
  const [data, setData] = useState(null)
  useEffect(() => {
    console.log('test', router.query)
    setData(router.query);
  }, [router])

  return <p className='text-red-800'>{data ? data.aboutId : ''}</p>
}