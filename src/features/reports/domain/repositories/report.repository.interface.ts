import { ReportEntity } from '../entities/report.entity'
import { CreateReportDTO } from '../dtos/create-report.dto'

export interface ReportRepositoryInterface {
  create(data: CreateReportDTO): Promise<ReportEntity>
  findById(id: string): Promise<ReportEntity | null>
}
