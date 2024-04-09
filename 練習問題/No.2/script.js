<script>
    let message;
    if (animal === 'dog') {
        message = 'あなたはわんこが好きなんですね。';
        } else if (animal === 'cat') {
        message = 'あなたはにゃんこが好きなんですね。';
        } else {
        message = ('あなたは' + animal + 'が好きなんですね');
        }
    document.getElementById('animal').textContent = message;

</script>