const validation = (input, errors, name) => {
  if (name === "phone") {
    const error = !input["phone"]
      ? "שדה נדרש"
      : !/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/.test(input[name])
      ? "שדה מספר הטלפון אינו חוקי"
      : "";

    return { [name]: error };
  }

  if (name === "name") {
    const error = !input["name"] ? "שדה נדרש" : "";

    return { [name]: error };
  }

  return errors;
};

export default validation;
