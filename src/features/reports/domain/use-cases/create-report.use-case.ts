import { ReportEntity } from '../entities/report.entity'
import { CreateReportDTO } from '../dtos/create-report.dto'
import { ReportRepositoryInterface } from '../repositories/report.repository.interface'

export class CreateReportUseCase {
  constructor(private reportRepository: ReportRepositoryInterface) {}

  async execute(data: CreateReportDTO): Promise<ReportEntity> {
    return this.reportRepository.create(data)
  }
}
