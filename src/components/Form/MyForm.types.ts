export interface IPassport {
    seriesNumber: string
    dateOfIssue: Date
    issueBy: string
    devisionCode: string
}

export interface IDriverLicense {
    seriesNumber: string
    dateOfIssue: Date
}

export interface IShippingFields {
    nameLastnamePatronymic: string
    birthdayDate: Date
    email: string
    telephone: string
    passport: IPassport
    driverLicense: IDriverLicense
    passsword: string
}