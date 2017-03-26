


<?php
header("Access-Control-Allow-Origin: *");
$busid = $_GET['busid'];
set_time_limit(0);

$stops = array(
    array(19.080942, 72.846655, "Vakola Police Station"),
    array(19.075109, 72.846604, "Maratha Col."),
    array(19.067519, 72.846540, "Cardinal G."),
    array(19.065107, 72.846516, "Kherwadi"),
    array(19.062541, 72.846471, "Govt Col 10")
);

/*
INSERT INTO `route` (`routeid`, `stopno`, `coords`, `name`) VALUES ('0', '0', '19.080942, 72.846655', 'Vakola Police Station');
INSERT INTO `route` (`routeid`, `stopno`, `coords`, `name`) VALUES ('0', '1', '19.075109, 72.846604', 'Maratha Col.');
INSERT INTO `route` (`routeid`, `stopno`, `coords`, `name`) VALUES ('0', '2', '19.067519, 72.846540', 'Cardinal G.');
INSERT INTO `route` (`routeid`, `stopno`, `coords`, `name`) VALUES ('0', '3', '19.065107, 72.846516', 'Kherwadi');
INSERT INTO `route` (`routeid`, `stopno`, `coords`, `name`) VALUES ('0', '4', '19.062541, 72.846471', 'Govt Col 10');
*/



file_put_contents("bus.route", json_encode($stops));


$stopno = 0;
$dir = 0;
$lat = $stops[$stopno][0];
$lng = $stops[$stopno][1];


while($stopno < 4) {
    if($lat < $stops[$stopno + 1][0]) $lat += 0.00001;
    else $lat -= 0.00001;

    if($lng < $stops[$stopno + 1][1]) $lng += 0.00001;
    else $lng -= 0.00001;

    if(sprintf('%0.4f', $lat) == sprintf('%0.4f', $stops[$stopno + 1][0])  && sprintf('%0.4f', $lng) == sprintf('%0.4f', $stops[$stopno + 1][1])) {
        echo "STOP!<br/>";
        sleep(10);
        
        $stopno++;
        if($stopno == 5) {
            $stops = array_reverse($stops);
            $stopno = -1;
            $dir == 0 ? 1 : 0;
        }
    }

    file_put_contents("bus$busid.pos", "$lat,$lng");

    if($dir == 1) $stopno = 4 - $stopno; //invert stops so it sends the real stop no

    file_get_contents("http://localhost/hack/testing_send.php?busid=$busid&ls=" . $stopno . "&coords=" . "$lat,$lng");
    //sleep(1);
    usleep(100000);
    echo "$lat,$lng<br/>";
    ob_flush();
    flush();
}


?>