import * as React from 'react'
import { Link } from 'preact-router'
import Head from 'preact-head'
import 'isomorphic-fetch'

interface Data {
  info: object
  results: UserData[]
}

interface UserData {
  id: {
    value: string
  }
  name: {
    first: string
    last: string
  }
  picture: {
    large: string
  }
}

interface UserProps {
  user: UserData
  key: string
}

const User = ({ user }: UserProps): React.JSX.Element => {
  return (
    <li className="user-item">
      <img
        className="user-face"
        src={user.picture.large}
        alt={`${user.name.first} ${user.name.last}'s face`}
      />
      <p>
        {user.name.first} {user.name.last}
      </p>
    </li>
  )
}

const useFetchUsers = (initialValue: UserData[]): UserData[] => {
  const [users, setUsers] = React.useState<UserData[]>(initialValue)
  React.useEffect((): void => {
    fetch('https://randomuser.me/api/?results=3')
      .then(
        (res): Promise<Data> => {
          if (!res.ok) {
            throw new Error(res.statusText)
          }
          return res.json()
        }
      )
      .then((json): void => {
        setUsers(json.results)
      })
      .catch((err): void => console.error(err))
  }, [true])

  return users
}

interface Props {
  path: string
}

export const Users = (_props: Props): React.JSX.Element => {
  const users = useFetchUsers([])
  return (
    <>
      <Head>
        <title>Users</title>
      </Head>
      <ul className="user-list">
        {users.map(
          (user): React.JSX.Element => (
            <User key={user.id.value} user={user} />
          )
        )}
      </ul>
      <p>
        <Link href="/">back to home</Link>
      </p>
    </>
  )
}
