import React, { useState, useEffect } from 'react'
import axios from '../../shared/axios'
import ErrorModal from '../../shared/components/UIElements/ErrorModal'
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner'

import { User } from '../userInterfaces'
import UsersList from '../components/UsersList'

const Users: React.FC = () => {
  const [users, setUsers] = useState<User[]>([])
  const [error, setError] = useState()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const sendRequest = async () => {
      setIsLoading(true)

      try {
        const res = await axios.get('/api/users')
        console.log(res)
        if (res.statusText !== 'OK') {
          throw new Error(res.statusText)
        }

        setUsers(res.data)
        setIsLoading(false)
      } catch (e) {
        setIsLoading(false)
        setError(e.message)
      }
    }
    sendRequest()
  }, [])

  const errorHandler = () => setError('')

  return (
    <>
      <ErrorModal error={error} onClear={errorHandler} />
      {isLoading ? (
        <div className="center">
          <LoadingSpinner />
        </div>
      ) : (
        <UsersList items={users} />
      )}
    </>
  )
}

export default Users
