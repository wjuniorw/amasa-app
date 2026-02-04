import { useCreateReportViewModel } from '../../view-models/useCreateReportViewModel'

import { CreateReportView } from './screen-view'

export default function CreateReportScreen() {
  const viewModel = useCreateReportViewModel()

  return (
    <CreateReportView
      title={viewModel.title}
      loading={viewModel.loading}
      setTitle={viewModel.setTitle}
      onSubmit={viewModel.createReport}
      description={viewModel.description}
      setDescription={viewModel.setDescription}
    />
  )
}
