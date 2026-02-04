export enum UserRole {
  ADMIN = 'admin',
  RESIDENT = 'resident',
}

export enum ResidentCategory {
  MORADOR = 'Morador', // Taxa padrão
  VERANEIO = 'Veraneio',
  COMERCIO = 'Comércio',
  POUSADA = 'Pousada',
}

export interface UserProps {
  id: string
  name: string
  email: string
  phone?: string
  address: string // Ex: "Rua Beira Rio, Lote 12"
  role: UserRole
  category: ResidentCategory
  avatarUrl?: string
}

export class User {
  constructor(public readonly props: UserProps) {}

  get id() {
    return this.props.id
  }
  get name() {
    return this.props.name
  }
  get email() {
    return this.props.email
  }
  get role() {
    return this.props.role
  }

  get address() {
    return this.props.address
  }

  get phone() {
    return this.props.phone
  }

  get category() {
    return this.props.category
  }

  // Helper para UI
  get firstName() {
    return this.props.name.split(' ')[0]
  }
}
