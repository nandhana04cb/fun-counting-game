let count = 0;
let temp=0;
let p=1;
document.getElementById('countButton1').addEventListener('click', function() {
    temp=count;
    count++;
    document.getElementById('count').textContent = count;
    document.getElementById('count+1').textContent = temp+'+'+p;
    displayObjects(count);
});

document.getElementById('countButton2').addEventListener('click', function() {
    count--;
    if(count<0)
    {
        count=0;
    }
    document.getElementById('count').textContent = count;
    displayObjects(count);
});

function displayObjects(number) {
    const objectDisplay = document.getElementById('objectDisplay');
    objectDisplay.innerHTML = ''; // Clear previous objects
    
    for (let i = 0; i < number; i++) {
        const img = document.createElement('img');
        img.src = 'https://via.placeholder.com/50'; // Placeholder image URL
        img.alt = 'Object ' +i;
        objectDisplay.appendChild(img);
    }

    for (let i = 0; i < number; i++) {
        const img = document.createElement('img');
        img.src = 'https://via.placeholder.com/50';// Placeholder image URL
        img.alt = 'Object ' + (i - 1);
        (this).children(img).remove();
    }
}
