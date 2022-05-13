import type { NextApiRequest, NextApiResponse } from 'next';
import { faker } from '@faker-js/faker';

const userFactory = () => {
  const role = ['Junior', 'Pleno', 'Senior']

  const randomName = faker.name.findName();
  const randomProfileImage = faker.image.avatar();
  const randomProfileBackground = faker.image.abstract();
  const randomCompanyName = faker.company.companyName();
  const fakeRole = role[Math.floor(Math.random()*3)]
  const fakeArticles = Math.floor(Math.random()*300)
  const fakeFollowers = Math.floor(Math.random()*1000)
  const fakeFollowing = Math.floor(Math.random()*900)

  return {
    name: randomName,
    companyName: randomCompanyName,
    role: fakeRole,
    articles: fakeArticles,
    followers: fakeFollowers,
    following: fakeFollowing,
    profileImage: randomProfileImage,
    profileBackground: randomProfileBackground
  }
}

function getUsers(quantity: number){
  const arr = Array.from(Array(quantity), () => userFactory())
  return arr
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if(req.method !== 'GET'){
    return res.status(405).end()
  }
  const { quantity } = req.query

  res.status(200).json({
    component: 'UserCard',
    props: getUsers(Number(quantity) || 1)
  })
}