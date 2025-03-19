const btn = document.querySelector('button');
const coin = document.querySelector('.coin');

btn.addEventListener('click', e => {
  const result = Math.random() < 0.5 ? 'Heads' : 'Tails';
  coin.textContent = result;
  console.log(result);
});
