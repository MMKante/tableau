<?php
	header("Access-Control-Allow-Origin: *");

	if (isset($_GET['request'])) {
		$nb_axes = 5;
		$nb_objectifs = 3;
		$nb_acteurs = 8;
		$nb_indicateurs = 4;

		$axes = [];
		for ($i = 1; $i <= $nb_axes; $i++) {
			$axes[] = ['id' => $i, 'text' => "Axe stratégique $i"];
		}
		$objectifs = [];
		$id = 0;
		for ($i = 1; $i <= $nb_axes; $i++) {
			for ($j = 1; $j <= $nb_objectifs; $j++) {
				$id++;
				$objectifs[] = ['id' => $id, 'text' => "Objectif stratégique $id", 'axe' => $i];
			}
		}
		$acteurs = [];
		for ($i = 1; $i <= $nb_acteurs; $i++) {
			$acteurs[] = ['id' => $i, 'text' => "Acteur $i"];
		}
		$indicateurs = [];
		$id = 0;
		for ($i = 1; $i <= $nb_axes; $i++) {
			for ($j = 1; $j <= ($nb_objectifs * $nb_axes); $j++) {
				for ($k = 1; $k <= $nb_indicateurs; $k++) {
					for ($l = 1; $l <= $nb_acteurs; $l++) {
						$id++;
						$indicateurs[] = ['id' => $id, 'text' => "Indicateur $id", 'objectif' => $j, 'acteur' => $l];
					}
				}
			}
		}

		$response = [];

		switch ($_GET['request']) {
			case 'axes':
				$response = $axes;
				break;
			case 'objectifs':
				foreach ($objectifs as $objectif) {
					if ($objectif['axe'] == $_GET['axe']) {
						$response[] = $objectif;
					}
				}
				break;
			case 'acteurs':
				$response = $acteurs;
				break;
			case 'indicateurs':
				if (!empty($_GET['objectif']) || !empty($_GET['acteur'])) {
					foreach ($indicateurs as $indicateur) {
						if ((empty($_GET['objectif']) || $indicateur['objectif'] == $_GET['objectif']) && (empty($_GET['acteur']) || $indicateur['acteur'] == $_GET['acteur'])) {
							$response[] = $indicateur;
						}
					}
				} else {
					$response = [];
				}
				break;
			default:
				$response = ['message' => 'ERROR : DEFAULT'];
				break;
		}
	} else {
		$response = ['message' => 'ERROR : REQUEST NOT SEND'];
	}

	echo json_encode($response);