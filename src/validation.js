import * as yup from "yup";

export const stepOneSchema = yup.object({
  InputOne: yup
    .number()
    .positive()
    .integer()
    .min(1)
    .max(250)
    .typeError("Whoops, please provide a valid value!")
    .required(),
  InputTwo: yup
    .number()
    .positive()
    .integer()
    .min(1)
    .max(10)
    .typeError("Whoops, please provide a valid value!")
    .required()
});

export const stepTwoSchema = yup.object({
  InputThree: yup
    .number()
    .positive()
    .integer()
    .min(1)
    .max(250)
    .typeError("Whoops, please provide a valid value!")
    .required()
});

export const stepThreeSchema = yup.object({
  InputFour: yup
    .number()
    .positive()
    .integer()
    .min(1)
    .max(250)
    .typeError("Whoops, please provide a valid value!")
    .required()
});
