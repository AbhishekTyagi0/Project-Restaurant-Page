export function initialPage() {
  const container = document.getElementById("content");
  const content = document.createElement('div');
  const name = document.createElement('h1');
  const para = document.createElement('p');
  
  
  content.classList.add('initialPageDiv');
  name.classList.add('name');
  para.classList.add('name-para');
  
  name.textContent = 'The Flavorful Valhalla';
  para.textContent = `Come for the food, stay for the laughs, and leave with a full belly and a happy heart. \n Our food is so good, you'll want to eat it every day.
  Dine with us, and taste the difference.`
  
  container.appendChild(content);
  content.appendChild(name);
  content.appendChild(para);
}

export function footer(){
  
  const container = document.getElementById("content");
  const footers = document.createElement('div');
  footers.classList.add('footer');
  footers.textContent = `Copyright: All rights reserved`

  container.appendChild(footers);
};