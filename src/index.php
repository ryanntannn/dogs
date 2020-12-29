<!DOCTYPE html>
<html>
    <head>
    </head>
    <body>
        <?php
            $pg_client = pg_connect('host=localhost dbname=dog user=tiong password=123');
            if($pg_client){
                $query = 'select dog_gender from dog_info';
                $result = pg_exec($pg_client, $query);
            }else{
                echo 'connection failed!';
            }
        ?>
    </body>
</html>