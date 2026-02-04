import { CreateReportUseCase } from '@reports/domain/use-cases/create-report.use-case'
import { InMemoryReportRepository } from '@reports/data/repositories/in-memory-report.repository'

// Creates the use case with the chosen repository strategy (Factory function)
export function makeCreateReport() {
  const repository = new InMemoryReportRepository()
  return new CreateReportUseCase(repository)
}
