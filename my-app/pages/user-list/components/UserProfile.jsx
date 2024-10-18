import { ProductTable } from "./ProductTable";
import Image from 'next/image';

export function UserProfile({userProfileData}) {    
    return (
        <div className="user-container border-2 border-rose-600 grid grid-cols-4 gap-2">
            <Image
                className="user-icon"
                src={userProfileData.icon}
                alt={userProfileData.name}
                width={100}
                height={100}
            />
            <div className="user-name">{userProfileData.name}</div>
            <div className="user-login-id">{userProfileData.loginId}</div>
            <ProductTable products={userProfileData.products} />
        </div>
    );
}