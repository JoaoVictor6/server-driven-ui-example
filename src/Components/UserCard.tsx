import React from 'react'

type Props = {
  name: string
  companyName: string
  role: string
  articles: string
  followers: string
  following: string
  profileImage: string
  profileBackground: string
}

export function UserCard({
  name,
  companyName,
  role,
  articles,
  followers,
  following,
  profileImage,
  profileBackground
}: Props) {
  return (
    <div className="shadow-lg rounded-2xl w-80 bg-white dark:bg-gray-800">
    <img alt="profil" src={profileBackground} className="rounded-t-lg h-28 w-full mb-4"/>
    <div className="flex flex-col items-center justify-center p-4 -mt-16">
        <a href="#" className="block relative">
            <img alt="profil" src={profileImage} className="mx-auto object-cover rounded-full h-16 w-16  border-2 border-white dark:border-gray-800"/>
        </a>
        <p className="text-gray-800 dark:text-white text-xl font-medium mt-2">
            {name}
        </p>
        <p className="text-gray-400 text-xs mb-4">
            {companyName}
        </p>
        <p className="text-xs p-2 bg-pink-500 text-white px-4 rounded-full">
            {role}
        </p>
        <div className="rounded-lg p-2 w-full mt-4">
            <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-200">
                <p className="flex flex-col">
                    Articles
                    <span className="text-black dark:text-white font-bold">
                        {articles}
                    </span>
                </p>
                <p className="flex flex-col">
                    Followers
                    <span className="text-black dark:text-white font-bold">
                        {followers}
                    </span>
                </p>
                <p className="flex flex-col">
                    Following
                    <span className="text-black dark:text-white font-bold">
                        {following}
                    </span>
                </p>
            </div>
        </div>
    </div>
</div>
  )
}
