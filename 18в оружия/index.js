const weapons = [
    { img: 'браун.jpg', name: "Мушкет Браун Бесс", year: "1722", country: "Великобритания" },
    { img: 'Charleville.jpg', name: "Мушкет Charleville", year: "1717", country: "Франция" },
    { img: 'шашпар.jpg', name: "Шашпар", year: "18в.", country: "Индия" },
    { img: 'Dragoon.jpg', name: "Кольт Драгун", year: "1798", country: "Германия" },
    { img: 'Rifl.jpg', name: "Винтовка Кентукки", year: "1750", country: "США" },
  ];
  
  const weaponsList = document.getElementById('weapons-list');
  
  weapons.forEach(weapon => {
    const weaponCard = document.createElement('div');
    weaponCard.classList.add('weapon');
    weaponCard.innerHTML = `
      <img src = '${weapon.img}', width: 200px, height = 200px/>
      <h2>${weapon.name}</h2>
      <p><strong>Год:</strong> ${weapon.year}</p>
      <p><strong>Страна:</strong> ${weapon.country}</p>
    `;
    weaponsList.appendChild(weaponCard);
  });

  document.getElementById('theme-toggle').addEventListener('click', function () {
    document.body.classList.toggle('dark-theme');
  });