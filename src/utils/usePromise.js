const promiseWrapper = (promise) => {
  let loading = true;
  let result = null;
  
  console.log(promise);

  const process = promise.then((res) => {
    result = res;
    loading = false;
  }).catch(err => {
    result = err;
    loading = false;
  })

  return {
    read(){
      if( loading ){
        throw process;
      }else {
        return result;
      }
    }
  }
}

export default promiseWrapper;