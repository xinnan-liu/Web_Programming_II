<?php
$data = array(
    'message' => "<div><input type='submit' name='submit' value='提交'></div>",
    'message1' => "<div><input type='reset' name='submit' value='重置'></div>",
    'message2' => "<div><input type='submit' name='submit' value='返回'></div>"
);
echo json_encode($data);
?>