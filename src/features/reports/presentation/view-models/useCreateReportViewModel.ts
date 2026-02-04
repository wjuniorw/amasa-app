import { useState } from 'react'

import { makeCreateReport } from '../../../../main/factories/reports/makeCreateReport'

export function useCreateReportViewModel() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [loading, setLoading] = useState(false)

  const createReport = async () => {
    setLoading(true)
    try {
      const useCase = makeCreateReport()
      await useCase.execute({ title, description })
      console.log('Report created!')
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return {
    title,
    setTitle,
    description,
    setDescription,
    createReport,
    loading,
  }
}
