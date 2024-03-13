import { Column, Model, Table, DataType } from 'sequelize-typescript';

@Table({
    timestamps: true,
    tableName: 'jobs',
    modelName: 'Jobs',
})
export class Jobs extends Model {
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
    url: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
        field: 'jobTitle',
    })
    jobTitle: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
        field: 'companyName',
    })
    companyName: string;

    @Column({
        type: DataType.STRING,
        allowNull: true,
        field: 'companyLogo',
    })
    companyLogo: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
        field: 'jobIndustry',
    })
    jobIndustry: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
        field: 'jobType',
    })
    jobType: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
        field: 'jobGeo',
    })
    jobGeo: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
        field: 'jobLevel',
    })
    jobLevel: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
        field: 'jobExcerpt',
    })
    jobExcerpt: string;

    @Column({
        type: DataType.TEXT,
        allowNull: false,
        field: 'jobDescription',
    })
    jobDescription: string;

    @Column({
        type: DataType.DATE,
        allowNull: false,
        field: 'pubDate',
    })
    pubDate: Date;

    @Column({
        type: DataType.DATE,
        allowNull: false,
        field: 'createdAt',
    })
    createdAt: Date;

    @Column({
        type: DataType.DATE,
        allowNull: false,
        field: 'updatedAt',
    })
    updatedAt: Date;
}
