const validate = (form) => {
    let error = {};
    let validName = /^[a-zA-Z0-9\s]+$/; //expresion regular para validar nombres con letras numeros y espacios en blanco
    let validUrl = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png|jpeg)/; // expresion regular para validar url de una imagen
  
    //---------------------------------validaciones para el nombre-----------------------------------------------  
   
    if (!validName.test(form.name)) {
      error.name = "Special characters are not allowed.";
    }
    if (!form.name.length) {
      error.name = "The name cannot be empty";
    }
   
    //---------------------------------validacion para la URL de la imagen----------------------------------------
  
    if (form.image && !validUrl.test(form.image)) {
      error.image = "This is not a valid URL";
    }
  
    //---------------------------------validaciones para la descripcion---------------------------------------------
  
    if (!form.description.length) {
      error.description = "This field can not be blank";
    }
    if (form.description.length && form.description.length <= 10) {
      error.description = "This field must be at least 10 characters.";
    }
    //---------------------------------validaciones para fecha de lanzamiento----------------------------------------
  
    if (!form.released.length) {
      error.released = "This field can not be blank";
    }
    if (
      !/^\d{4}-(0?[1-9]|1[012])-(0?[1-9]|[12][0-9]|3[01])$/.test(form.released)
    ) {
      error.released = "Choose a valid date";
    }
    //---------------------------------validaciones para el rating----------------------------------------------------
  
  
    if (!form.rating.length) {
      error.rating = "This field can not be blank";
    }
    if (form.rating < 0 || form.rating > 5) {
      error.rating = "The rating must be between 0 and 5.";
    }
    return error;
  };

  export default validate;