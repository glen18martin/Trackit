


<?php
set_time_limit(0);

$stops = array(
    array(19.080942, 72.846655, "Vakola Police Station"),
    array(19.075109, 72.846604, "Maratha Col."),
    array(19.067519, 72.846540, "Cardinal G."),
    array(19.065107, 72.846516, "Kherwadi"),
    array(19.062541, 72.846471, "Govt Col 10")
);


$stopno = 0;
$lat = $stops[$stopno][0];
$lng = $stops[$stopno][1];

while($stopno < 4) {
    if($lat < $stops[$stopno + 1][0]) $lat += 0.00001;
    else $lat -= 0.00001;

    if($lng < $stops[$stopno + 1][1]) $lng += 0.00001;
    else $lng -= 0.00001;

    if(sprintf('%0.4f', $lat) == sprintf('%0.4f', $stops[$stopno + 1][0])  && sprintf('%0.4f', $lng) == sprintf('%0.4f', $stops[$stopno + 1][1])) {
        $stopno++;
    }

    file_put_contents("bus.pos", "$lat,$lng");
    //sleep(1);
    usleep(100000);
    echo "$lat,$lng<br/>";
    ob_flush();
    flush();
}


?>