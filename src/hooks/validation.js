const validation = (input, errors, name) => {
  if (name === "phone") {
    const error = !input["phone"]
      ? "שדה הטלפון נדרש"
      : !/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/.test(input[name])
      ? "שדה מספר הטלפון אינו חוקי"
      : "";

    return { [name]: error };
  }

  if (name === "name") {
    const error = !input["name"] ? "שדה נדרש" : "";

    return { [name]: error };
  }

  if (name === "code") {
    const error = !input["code"] ? "שדה קוד הטלפון נדרש" : "";

    return { [name]: error };
  }

  if (name === "email") {
    const error = !input["email"]
      ? "שדה נדרש"
      : !/^\s*([a-zA-Z]){2,20}[@]([a-zA-Z]){2,10}[.]([a-zA-Z]){2,5}\s*$/i.test(
          input[name]
        )
      ? 'שדה הדוא"ל אינו חוקי'
      : "";

    return { [name]: error };
  }

  return errors;
};

export default validation;
