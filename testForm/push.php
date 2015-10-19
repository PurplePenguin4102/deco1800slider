<?php
      $conn = mysql_connect("localhost", "jiggly", "ggwp");
      $db = mysql_select_db("scores");

      $handle = $_POST['handle'];
      $score = $_POST['score'];
      $diff = $_POST['difficulty'];
      $time = $_POST['time'];

      if(mysql_query("INSERT INTO score_data VALUES('$handle', '$score', '$diff', '$time')"))
        echo '<script type="text/javascript">alert("Successfully Inserted!");</script>';
      else
        echo '<script type="text/javascript">alert("Insertion Failed!");</script>';
?>
