const ul = document.getElementById('listTabs');
const ulLi = ul.getElementsByTagName('li');
ul.addEventListener('click', (event) => {
  const _target = event.target.parentElement;
  for (let li in ulLi) {
    if (ulLi[li].className === 'current') {
      ulLi[li].classList.remove('current');
    }
  }
  _target.classList.add('current');
  const curElemData = _target.children[0].getAttribute('data-title');
  const singleTabs = document.getElementById('listTab').children;
  for (const single of singleTabs) {
    console.log(curElemData, single.getAttribute('data-title'));
    if (curElemData === single.getAttribute('data-title')) {
      single.style.display = 'flex';
    } else {
      single.style.display = 'none';
    }
    6000;
  }
});

function myFunction(x) {
  x.classList.toggle('change');
}
