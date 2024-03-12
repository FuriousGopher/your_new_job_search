import { Column, Model, Table, DataType } from 'sequelize-typescript';

@Table({
  timestamps: true,
  tableName: 'dogs',
  modelName: 'Dogs',
})
export class Dogs extends Model {
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
    type: DataType.INTEGER,
    allowNull: false,
  })
  age: number;

  @Column({
    type: DataType.DATE,
    allowNull: false,
    field: 'date_created_at',
  })
  dateCreatedAt: Date;

  @Column({
    type: DataType.STRING,
    allowNull: true,
    field: 'fav_food',
  })
  favFood: string | null;
}
