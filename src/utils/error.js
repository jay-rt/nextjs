const setError = async (res) => {
  const error = new Error();
  error.status = res.status;
  error.message = await res.text();
  throw error;
};

export default setError;
