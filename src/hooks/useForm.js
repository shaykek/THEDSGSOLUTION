import { useState, useEffect } from "react";

const useForm = (initialValues, onSubmit, validate) => {
  const [formState, setFormState] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [wasSubmitted, setWasSubmitted] = useState(false);

  useEffect(() => {
    if (
      Object.entries(errors).every(([_, val]) => val === "") &&
      isSubmitting
    ) {
      onSubmit(formState);
      setIsSubmitting(false);
      wasSubmitted && setFormState(initialValues);
    } else {
      setIsSubmitting(false);
    }
  }, [errors, onSubmit, isSubmitting, formState, initialValues, wasSubmitted]);

  const handleSubmit = event => {
    event.preventDefault();

    setIsSubmitting(true);
    Object.entries(formState).forEach(([name, value]) => {
      setErrors(errors => ({
        ...errors,
        ...validate({ [name]: value }, errors, name)
      }));
    });
  };

  const handleChange = event => {
    const {
      target: { name, value }
    } = event;

    event.persist();
    event.preventDefault();

    setFormState(formState => ({
      ...formState,
      [name]: value
    }));

    setErrors(errors => ({
      ...errors,
      ...validate({ [name]: value }, errors, name)
    }));
  };

  return {
    formState,
    handleChange,
    handleSubmit,
    errors,
    wasSubmitted,
    setWasSubmitted
  };
};

export default useForm;
