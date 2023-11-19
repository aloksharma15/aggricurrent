function submitForm() {
    // Get form values
    const crop = document.getElementById('crop').value;
    const quantity = document.getElementById('quantity').value;
    const destination = document.getElementById('destination').value;

    // Display result
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<p>Transporting ${quantity} tons of ${crop} to ${destination}.</p>`;
}
