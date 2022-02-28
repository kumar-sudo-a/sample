const labels = document.querySelectorAll('.form-control label')

labels.forEach(label => {
    label.innerHTML = label.innerText
        .split('') // Coverts String to Array
        .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
        //  Creating each letter to wrap with span around it, with a delay with 50 ms.
        .join('') //Turn bck to String
})