export const capitalize = value => {
    const string = value.toString();
  
    return `${string[0].toUpperCase()}${string.slice(1)}`;
  };
  