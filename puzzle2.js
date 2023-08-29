<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>THE OFFICE - PUZZLE</title>
  <link rel="stylesheet" href="style.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
</head>

<body> 
  <section class="hero is-fullheight has-background-black">
  <br>
     <div class="hp">
        <button id="hint">
          <h2>Hint Button</h2>
          <div class="dropdown is-hidden">
            <div class="dropdown-content">
              <img src="https://i.ibb.co/581vxKR/30032426-34-FF-4-BC1-98-F9-97-AB4263551-D-1-201-a.jpg"
                alt="puzzle1hint" border="0"></img>
            </div>
          </div>
        </button>
      <div id="board" class=""></div>
    <h3>
      <button id="homepage" class="button"><a href="index.html">Homepage</a></button>
    </h3>
    </div>
  <h2 id="turnscounter" class="is-size-2 has-text-grey"><b>Turns: <span id="turns">0</span></b></h2>
  <div id="pieces" class=""></div>  
  <br>
  </section>
</body>
<script type="text/javascript" src="puzzle2.js"></script>

</html>
