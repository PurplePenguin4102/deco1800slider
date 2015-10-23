<table id="tableHard" class="center">
  <tr>
      <td><h3>Ranking</h3></td>
      <td><h3>Nickname</h3></td>
      <td><h3>Score</h3></td>
  </tr>
  <?php
    $conn = mysql_connect("localhost", "jiggly", "ggwp");
    $db = mysql_select_db("scores");

    $num = 1;
    $query = mysql_query("SELECT Nickname, Score FROM score_data WHERE Difficulty='hard' ORDER BY Score DESC, Time ASC LIMIT 5");
    while ($row = mysql_fetch_assoc($query)){
      echo "<tr>";

      echo "<td>".$num."</td>";

      echo "<td>".$row['Nickname']."</td>";

      echo "<td>".$row['Score']."</td>";

      echo "</tr>";

      $num = $num + 1;
    }
    mysql_free_result($query);
    ?>
</table>
