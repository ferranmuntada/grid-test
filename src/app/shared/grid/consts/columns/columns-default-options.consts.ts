export const COLUMNS_DEFAULT_OPTIONS = {

  requiredRule: {
    message: 'Required',
    trim: true
  },
  stringLengthRule: {
    ignoreEmptyValue: false,
    message: 'The length of the value is not correct',
    trim: true,
    min: 0,
    max: 500
  },
  asyncRule: {
    ignoreEmptyValue: false,
    message: 'Validation failed',
    reevaluate: true,
    validationCallback: ($data: any) => Promise<boolean>
  }
}

