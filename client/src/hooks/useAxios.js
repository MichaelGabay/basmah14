import { useState, useCallback, useLayoutEffect } from "react"
import { unstable_batchedUpdates as batch } from "react-dom"
import axios from "axios"

const useAxios = ({
  manual,
  onSuccess: initialOnSuccess,
  onError: initialOnError,
  ...initialAxiosOptions
}) => {
  const [status, setStatus] = useState()
  const [error, setError] = useState()
  const [data, setData] = useState()
  const [loading, setLoading] = useState(!manual && !data)

  useLayoutEffect(() => {
    if (!manual && !data) fetchData()
  }, [manual])

  const fetchData = async ({
    onSuccess = initialOnSuccess,
    onError = initialOnError,
    ...axiosOptions
  } = {}) => {
    setLoading(true)
    setStatus(undefined)
    setError(undefined)
    try {
      let { status, data } = await axios({
        ...initialAxiosOptions,
        ...axiosOptions,
      })
      onSuccess?.({ status, data })
      batch(() => {
        setLoading(false)
        setStatus(status)
        setData(data)
      })
      return { status, data: data }
    } catch (error) {
      const status = error.response?.status

      onError?.({ status, error })

      batch(() => {
        setLoading(false)
        setStatus(status)
        setError(error)
      })

      return { status, error }
    }
  }

  return { loading, status, error, data, activate: fetchData }
}

export { useAxios, axios }
