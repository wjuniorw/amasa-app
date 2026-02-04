import { Text, YStack } from 'tamagui'

import { AmasaInput } from '../../../../../core/ui/AmasaInput'
import { AmasaButton } from '../../../../../core/ui/AmasaButton'
import { ReportMapPreview } from '../../components/ReportMapPreview'

// Interface for props if detailed view needs them (e.g. from ViewModel)
interface CreateReportViewProps {
  title: string
  setTitle: (t: string) => void
  description: string
  setDescription: (d: string) => void
  onSubmit: () => void
  loading: boolean
}

export function CreateReportView({
  title,
  setTitle,
  description,
  setDescription,
  onSubmit,
  loading,
}: CreateReportViewProps) {
  return (
    <YStack flex={1} space="$4" padding="$4" backgroundColor="$background">
      <Text fontSize="$6" fontWeight="bold">
        Create New Report
      </Text>

      <AmasaInput value={title} placeholder="Title" onChangeText={setTitle} />

      <AmasaInput
        multiline
        numberOfLines={3}
        value={description}
        placeholder="Description"
        onChangeText={setDescription}
      />

      <ReportMapPreview />

      <AmasaButton onPress={onSubmit} disabled={loading}>
        {loading ? 'Sending...' : 'Submit Report'}
      </AmasaButton>
    </YStack>
  )
}
