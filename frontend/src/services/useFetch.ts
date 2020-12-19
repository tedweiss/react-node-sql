/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import {useState, useEffect} from 'react'
import axios from 'axios'

// custom hook for performing GET request
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useFetch = (url: string, initialValue?: any) => {
  const [data, setData] = useState(initialValue)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchData = async function () {
      try {
        setLoading(true)
        const response = await axios.get(url)
        if (response.status === 200) {
          setData(response.data)
        } else {
          setError(true)
        }
      } catch (e) {
        setError(true)
        console.log('error: ', e)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [url])
  return {data, error, loading}
}

export default useFetch
