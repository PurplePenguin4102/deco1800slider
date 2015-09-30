<table>
  <?php
    $conn = mysql_connect("localhost", "root", "");
    $db = mysql_select_db("scores");

    $query = mysql_query("SELECT Nickname, Score FROM score_data");
    while ($row = mysql_fetch_array($query, MYSQL_ASSOC)) {
    ?>
    <tr>
        <td><?=$row['Nickname']; ?></td>
        <td><?=$row['Score']; ?></td>
    </tr>
    <?
    }
    mysql_free_result($query);
  ?>
</table>
