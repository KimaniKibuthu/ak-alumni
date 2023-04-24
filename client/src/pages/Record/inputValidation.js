// Check if the input value is not starting with a numerical value
export const validateName = (value) => {
    const regex = /^[a-zA-Z][a-zA-Z\s]*$/;
    return regex.test(value);
  };
  
  // Check if the input value is a valid email
  export const validateEmail = (value) => {
    const regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    return regex.test(value);
  };
  
  // Check if the password has at least 10 characters, at least one capital letter, and at least one numeric value
  export const validatePassword = (value) => {
    const regex = /^(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{10,}$/;
    return regex.test(value);
  };
  
  // Check if the two password inputs match
  export const passwordsMatch = (password, confirmPassword) => {
    return password === confirmPassword;
  };
  
  // Sanitize input to prevent code or SQL injection
  export const sanitizeInput = (value) => {
    return value.replace(/(<([^>]+)>)/gi, "").replace(/'/g, "&#39;").replace(/"/g, "&quot;");
  };
  