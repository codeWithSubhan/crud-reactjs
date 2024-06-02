export function setData(newObj) {
  let data;
  if (window.localStorage.getItem('data')) {
    data = JSON.parse(window.localStorage.getItem('data'));
    data = [...data, newObj];
    window.localStorage.setItem('data', JSON.stringify(data));
  } else {
    data = [newObj];
    window.localStorage.setItem('data', JSON.stringify([newObj]));
  }
}

export function setDelete(item1) {
  let data;
  data = JSON.parse(window.localStorage.getItem('data'));
  data = data.filter((item) => item.id !== item1.id);
  window.localStorage.setItem('data', JSON.stringify(data));
}

export function setEdit(item1) {
  let data;
  data = JSON.parse(window.localStorage.getItem('data'));
  data = data.filter((item) => item.id !== item1.id);
  window.localStorage.setItem('data', JSON.stringify([...data, { ...item1 }]));
}

export function setDuplcate(item1) {
  let data;
  data = JSON.parse(window.localStorage.getItem('data'));
  data = [...data, { ...item1, id: Date.now() }];
  window.localStorage.setItem('data', JSON.stringify(data));
}
