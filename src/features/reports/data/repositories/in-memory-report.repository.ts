import { ReportEntity } from '@reports/domain/entities/report.entity'
import { CreateReportDTO } from '@reports/domain/dtos/create-report.dto'
import { ReportRepositoryInterface } from '@reports/domain/repositories/report.repository.interface'

export class InMemoryReportRepository implements ReportRepositoryInterface {
  private reports: ReportEntity[] = []

  async create(data: CreateReportDTO): Promise<ReportEntity> {
    const report: ReportEntity = {
      id: Math.random().toString(),
      ...data,
      createdAt: new Date(),
    }
    this.reports.push(report)
    return report
  }

  async findById(id: string): Promise<ReportEntity | null> {
    return this.reports.find((r) => r.id === id) || null
  }
}
