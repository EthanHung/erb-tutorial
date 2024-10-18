import { useRouter } from 'next/router'
import {useState, useEffect} from 'react'
import Image from 'next/image'

export default function LoginUser () {
    const profiles = [
        {
            "icon": "/test.png",
            "name": "Carmen Beline",
            "loginId": "Carmen.Bel",
            "products": [
                {
                    "productName": "Search",
                    "role": "Designer",
                    "status": "In Working",
                    "finalDate": new Date().toDateString(),
                }
            ]
        },
        {
            "icon": "https://placehold.co/600x400/000000/FFF?text=Sam",
            "name": "Sam E",
            "loginId": "sam.e",
            "products": [
                {
                    "productName": "Search",
                    "role": "Designer",
                    "status": "In Working",
                    "finalDate": new Date().toDateString(),
                },
                {
                    "productName": "Test",
                    "role": "Designer",
                    "status": "None",
                    "finalDate": new Date().toDateString(),
                },
                {
                    "productName": "Search",
                    "role": "Designer",
                    "status": "In Working",
                    "finalDate": new Date().toDateString(),
                }
            ]
        }
    ];
    const router = useRouter()
    const [loginUserId, setLoginUserId] = useState(null)
    const [loginUser, setLoginUser] = useState(null)

    useEffect(() => {
        console.log('router.query', router.query.loginId)
        setLoginUserId(router.query.loginId);
    }, [router, loginUserId])

    useEffect(() => {
        const user = profiles.find(profile => profile.loginId === loginUserId)
        console.log('user', user)
        setLoginUser(user)
    }, [loginUserId])

    return <>
    {loginUser && (
        <div>
            <Image src={loginUser.icon} width={120} height={120} alt={loginUser.name} />
            <div>{loginUser.name}</div>
        </div>
    )}
    </>
}