function nextStep(s) {
    document.querySelectorAll('.step').forEach(el => el.classList.remove('active'));
    document.getElementById('step' + s).classList.add('active');
}
