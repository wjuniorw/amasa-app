import { ReportEntity } from '@reports/domain/entities/report.entity'
import { CreateReportDTO } from '@reports/domain/dtos/create-report.dto'
import { ReportRepositoryInterface } from '@reports/domain/repositories/report.repository.interface'

export class ApiReportRepository implements ReportRepositoryInterface {
  async create(data: CreateReportDTO): Promise<ReportEntity> {
    // Implement API call
    throw new Error('Method not implemented.')
  }

  async findById(id: string): Promise<ReportEntity | null> {
    // Implement API call
    throw new Error('Method not implemented.')
  }
}
