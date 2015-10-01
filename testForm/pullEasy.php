<table id="easy">
  <tr>
      <td><h3>Ranking</h3></td>
      <td><h3>Nickname</h3></td>
      <td><h3>Score</h3></td>
  </tr>
  <?php
    $conn = mysql_connect("localhost", "root", "");
    $db = mysql_select_db("scores");

    $num = 1;
    $query = mysql_query("SELECT Nickname, Score FROM score_data WHERE Difficulty='easy' ORDER BY Score DESC, Time ASC LIMIT 5");
    while ($row = mysql_fetch_array($query, MYSQL_ASSOC)) {
    ?>
    <tr>
        <td><?=$num;?></td>
        <td><?=$row['Nickname']; ?></td>
        <td><?=$row['Score']; ?></td>
    </tr>
    <?
    $num = $num + 1;
    }
    mysql_free_result($query);
  ?>
</table>
