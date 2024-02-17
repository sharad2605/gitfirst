
const mainheading =document.querySelector('#main-heading');
mainheading.style.textAlign='right';

const fruits =document.querySelector('.fruits');
fruits.style.backgroundColor='grey';
fruits.style.padding='30px';
fruits.style.margin='30px';
fruits.style.width='50%';
fruits.style.borderRadius='5px'
fruits.style.listStyleType='none';

const basketheading=document.querySelector('h2');
basketheading.style.color='brown';
basketheading.style.maringLeft='30px';

const fruitItems=document.querySelectorAll('.fruit');
for(let i=0;i<fruitItems.length;i++)
  {
    fruitItems[i].style.backgroundColor='white';
    fruitItems[i].style.padding='10px'
    fruitItems[i].style.margin='10px'
    fruitItems[i].style.borderRadius='5px'
  }

const offFruitsItems=document.querySelectorAll('.fruit:nth-child(even)');
for(let i=0;i<offFruitsItems.length;i++)
  {
    offFruitsItems[i].style.backgroundColor='brown';
    offFruitsItems[i].style.color='white';
}