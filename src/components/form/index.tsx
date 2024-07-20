import { useFormik } from "formik";
import { useTranslation } from "react-i18next";
import * as yup from "yup";

interface FormProps {
  onSubmit: () => void;
}

export function Form({ onSubmit }: FormProps) {
  const { t } = useTranslation();

  const validationSchema = yup.object().shape({
    name: yup.string().required(t("userNameValidationMessage")),
    email: yup
      .string()
      .required(t("emailValidationMessage"))
      .test("email", t("wrongEmail"), (value) => {
        return !value || /^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/.test(value);
      }),
    subject: yup.string().min(4, t("subjectShouldContain")).required(t("subjectValidationMessage")),
    message: yup.string().min(4, t("messageShouldContain")).required(t("messageValidation"))
  });

  const { values, errors, handleSubmit, resetForm, handleChange, touched } = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: ""
    },
    validationSchema,
    onSubmit: () => {
      onSubmit();
      resetForm();
    }
  });

  return (
    <form action="" onSubmit={handleSubmit}>
      <div className="min-h-24">
        <label className="text-sm font-medium text-gray-900" htmlFor="name">
          {t("userName")}
          <span className="text-red-500 pl-0.5">*</span>
        </label>
        <input
          type="text"
          placeholder={t("userName")}
          id="name"
          value={values.name}
          onChange={handleChange}
          className={`border ${errors.name && touched.name ? "border-red-500" : "border-gray-300"} bg-gray-50 text-gray-900 text-sm rounded-lg outline-none my-1 w-full p-2.5`}
        />
        {errors.name && touched.name && (
          <div className="text-red-500 text-sm mt-0.5">{errors.name}</div>
        )}
      </div>
      <div className="my-0.5 min-h-24">
        <label className="text-sm font-medium text-gray-900" htmlFor="email">
          {t("email")}
          <span className="text-red-500 pl-0.5">*</span>
        </label>
        <input
          placeholder={t("email")}
          type="text"
          id="email"
          value={values.email}
          onChange={handleChange}
          className={`border ${errors.email && touched.email ? "border-red-500" : "border-gray-300"} bg-gray-50 text-gray-900 text-sm rounded-lg outline-none my-1 w-full p-2.5`}
        />
        {errors.email && touched.email && (
          <div className="text-red-500 text-sm mt-0.5">{errors.email}</div>
        )}
      </div>
      <div className="min-h-24">
        <label className="text-sm font-medium text-gray-900" htmlFor="subject">
          {t("subject")}
          <span className="text-red-500 pl-0.5">*</span>
        </label>
        <input
          placeholder={t("subject")}
          type="text"
          id="subject"
          value={values.subject}
          onChange={handleChange}
          className={`border ${errors.subject && touched.subject ? "border-red-500" : "border-gray-300"} bg-gray-50 text-gray-900 text-sm rounded-lg outline-none my-1 w-full p-2.5`}
        />
        {errors.subject && touched.subject && (
          <div className="text-red-500 text-sm mt-0.5">{errors.subject}</div>
        )}
      </div>
      <div className="my-0.5 min-h-44">
        <label className="text-sm font-medium text-gray-900" htmlFor="message">
          {t("message")}
          <span className="text-red-500 pl-0.5">*</span>
        </label>
        <textarea
          placeholder={t("message")}
          id="message"
          value={values.message}
          onChange={handleChange}
          className={`border ${errors.message && touched.message ? "border-red-500" : "border-gray-300"} bg-gray-50 text-gray-900 text-sm rounded-lg outline-none my-1 w-full p-2.5`}
          cols={30}
          rows={5}
        ></textarea>
        {errors.message && touched.message && (
          <div className="text-red-500 text-sm">{errors.message}</div>
        )}
      </div>
      <div>
        <button
          type="submit"
          className="flex ml-auto justify-center text-center bg-blue-700 hover:bg-blue-800 text-white px-10 py-2.5 mt-2 md:mt-0 rounded-lg uppercase w-full md:w-auto"
        >
          {t("send")}
        </button>
      </div>
    </form>
  );
}
