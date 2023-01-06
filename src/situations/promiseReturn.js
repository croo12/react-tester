const promise = new Promise((resolve, reject) => {
  let random = Math.random()
  console.log(random);
  if(random)
    setTimeout(() => resolve(123), 5000);
  else
    setTimeout(() => reject(), 5000);
})

const loadingMan = () => {
  let status = 'pending';
  let result = null;

  promise.then((res) => {
    status = 'success';
    result = res;
  }).catch((err) => {
    status = 'error';
    result = err;
  })

  return {
    read() {
      console.log(status);
      switch (status) {
        case 'pending':
          throw promise;
        default:
          return result;
      }
    }
  }
}

export default loadingMan;