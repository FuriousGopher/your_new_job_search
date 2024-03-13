import { Column, Model, Table, DataType } from 'sequelize-typescript';

@Table({
  timestamps: true,
  tableName: 'users',
  modelName: 'Users',
})
export class Users extends Model {
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  email: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    field: 'password',
  })
  password: string;

  @Column({
    type: DataType.DATE,
    allowNull: false,
    field: 'date_created_at',
  })
  dateCreatedAt: Date;
}
