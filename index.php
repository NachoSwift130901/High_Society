<?php
// Dinero que se reparte a los jugadores
$cards = array(1, 2, 3, 4, 6, 8, 10, 12, 15, 20, 25);
$numPlayers = 3;

for ($i = 0; $i < $numPlayers; $i++) {
  $players[] = $cards;
}
?>


<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>High Society</title>
  
  <!-- CSS -->
  <link rel="stylesheet" type="text/css" href="index.css?v1">

</head>




<body>
  <h1>High Society</h1>
  <button onclick="showCard()">Repartir Carta</button>



  <p>Carta repartida: <span id="showedCard"></span></p>
  <p>Cartas ending:<span id='endingCards'></span></p>


  

  <h1>Cartas de los Jugadores</h1>
  <p id="total">Total: 0</p>

    <?php for ($i = 0; $i < $numPlayers; $i++): ?>
        <h2>Jugador <?php echo $i + 1; ?></h2>
        <?php foreach ($players[$i] as $card): ?>
            <button class="card-button" onclick="selectCard(<?php echo $card; ?>)"><?php echo $card; ?></button>
        <?php endforeach; ?>
    <?php endfor; ?>

    <button onclick="endRound()">Terminar Ronda</button>


  
<button onclick='siguiente()'>




</body>
<script src="cards.js?V1">
    
</script>
</html> 

