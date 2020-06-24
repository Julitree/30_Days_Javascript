const inputs = document.querySelectorAll('.controls input');
const hl = document.querySelector('.hl');

function handleUpdate(){
    const suffix = this.dataset.sizing || " ";
    document.documentElement.style.setProperty(`--${this.name}`, `${this.value}${suffix}`);
    
};

inputs.forEach(input => input.addEventListener('change', handleUpdate));
hl.addEventListener('change',handleUpdate);